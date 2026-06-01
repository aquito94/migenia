import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { supabaseAdmin } from '@/integrations/supabase/client.server'

const SHEET_ID = '1srul4e1tBzhrTWsg0V9uT5OmNeNG8TLDccFQ71Zw5Oo'
const NOTIFY_EMAILS = ['aquito94@gmail.com', 'g.rios.sales@gmail.com']
const SHEET_RANGE = 'Leads!A:G'

const leadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().nullable(),
  company: z.string().trim().max(160).optional().nullable(),
  message: z.string().trim().max(2000).optional().nullable(),
  source: z.string().trim().max(80).optional().nullable(),
})

async function appendToSheet(values: string[]) {
  const lovableKey = process.env.LOVABLE_API_KEY
  const sheetsKey = process.env.GOOGLE_SHEETS_API_KEY
  if (!lovableKey || !sheetsKey) {
    console.error('Missing Google Sheets credentials')
    return { ok: false, error: 'missing_sheets_credentials' }
  }
  const url = `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${SHEET_ID}/values/${SHEET_RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${lovableKey}`,
      'X-Connection-Api-Key': sheetsKey,
    },
    body: JSON.stringify({ values: [values] }),
  })
  if (!res.ok) {
    const text = await res.text()
    console.error('Sheets append failed', res.status, text)
    return { ok: false, error: `sheets_${res.status}` }
  }
  return { ok: true }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
}

async function notifyEmails(lead: z.infer<typeof leadSchema>) {
  const lovableKey = process.env.LOVABLE_API_KEY
  const resendKey = process.env.RESEND_API_KEY
  if (!lovableKey || !resendKey) {
    console.error('Missing Resend credentials')
    return
  }
  const rows = [
    ['Nombre', lead.name],
    ['Email', lead.email],
    ['Teléfono', lead.phone ?? '-'],
    ['Empresa', lead.company ?? '-'],
    ['Origen', lead.source ?? '-'],
    ['Mensaje', lead.message ?? '-'],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600">${escapeHtml(k)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${escapeHtml(v)}</td></tr>`,
    )
    .join('')
  const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:600px;margin:auto;padding:24px"><h2 style="margin:0 0 16px">Nuevo lead - Agente Inteligente</h2><p style="color:#475569;margin:0 0 20px">Se recibió una nueva solicitud de evaluación gratuita.</p><table style="border-collapse:collapse;width:100%;font-size:14px">${rows}</table><p style="color:#94a3b8;font-size:12px;margin-top:24px">Recibido: ${new Date().toLocaleString('es-CL')}</p></div>`

  const res = await fetch('https://connector-gateway.lovable.dev/resend/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${lovableKey}`,
      'X-Connection-Api-Key': resendKey,
    },
    body: JSON.stringify({
      from: 'Leads <onboarding@resend.dev>',
      to: NOTIFY_EMAILS,
      reply_to: lead.email,
      subject: `Nuevo lead: ${lead.name}${lead.company ? ` (${lead.company})` : ''}`,
      html,
    }),
  })
  if (!res.ok) {
    const text = await res.text()
    console.error('Resend send failed', res.status, text)
  }
}

export const Route = createFileRoute('/api/public/lead-submit')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown
        try {
          body = await request.json()
        } catch {
          return new Response('Invalid JSON', { status: 400 })
        }
        const parsed = leadSchema.safeParse(body)
        if (!parsed.success) {
          return Response.json({ error: 'invalid_input', issues: parsed.error.issues }, { status: 400 })
        }
        const lead = parsed.data

        const { error: dbError } = await supabaseAdmin.from('leads').insert({
          name: lead.name,
          email: lead.email,
          phone: lead.phone || null,
          company: lead.company || null,
          message: lead.message || null,
          source: lead.source || null,
        })
        if (dbError) {
          console.error('DB insert failed', dbError)
          return Response.json({ error: 'db_error' }, { status: 500 })
        }

        const timestamp = new Date().toISOString()
        await appendToSheet([
          timestamp,
          lead.name,
          lead.email,
          lead.phone ?? '',
          lead.company ?? '',
          lead.message ?? '',
          lead.source ?? '',
        ])

        // Fire-and-forget email notifications (won't block response)
        notifyEmails(lead).catch((e) => console.error('notifyEmails error', e))

        return Response.json({ ok: true })
      },
    },
  },
})
