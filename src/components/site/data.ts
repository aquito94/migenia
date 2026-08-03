import {
  BrainCircuit,
  Workflow,
  Code2,
  BarChart3,
  Network,
  type LucideIcon,
} from "lucide-react";

export type Capability = {
  slug: string;
  icon: LucideIcon;
  title: string;
  claim: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "ia-aplicada",
    icon: BrainCircuit,
    title: "Inteligencia Artificial aplicada",
    claim: "IA con caso de negocio, no con demos",
    description:
      "Identificamos dónde la inteligencia artificial produce valor económico real y la implementamos sobre tus procesos, tus datos y tus reglas de negocio.",
    outcomes: [
      "Decisiones más rápidas y consistentes",
      "Atención y ventas asistidas a escala",
      "Menor dependencia de tareas manuales críticas",
    ],
    deliverables: [
      "Priorización de casos de uso por retorno",
      "Modelos y agentes integrados a sistemas productivos",
      "Métricas de desempeño y gobierno del modelo",
    ],
  },
  {
    slug: "automatizacion",
    icon: Workflow,
    title: "Automatización de procesos",
    claim: "Procesos que se ejecutan solos, con trazabilidad",
    description:
      "Rediseñamos y automatizamos flujos operativos y comerciales de punta a punta, eliminando reprocesos, errores y tiempos muertos entre áreas.",
    outcomes: [
      "Reducción del costo por transacción",
      "Ciclos operativos más cortos",
      "Capacidad de crecer sin ampliar estructura",
    ],
    deliverables: [
      "Mapa de procesos y puntos de fuga",
      "Orquestación de flujos entre sistemas y equipos",
      "Alertas, controles y tableros de excepción",
    ],
  },
  {
    slug: "software",
    icon: Code2,
    title: "Desarrollo de software",
    claim: "Software a la medida de tu operación",
    description:
      "Construimos plataformas, portales y aplicaciones internas cuando el mercado no ofrece la respuesta correcta, con arquitectura mantenible y documentada.",
    outcomes: [
      "Diferenciación operativa propia",
      "Menos hojas de cálculo y sistemas paralelos",
      "Propiedad total de la solución",
    ],
    deliverables: [
      "Arquitectura y diseño técnico",
      "Desarrollo iterativo con QA y despliegue controlado",
      "Transferencia, documentación y soporte",
    ],
  },
  {
    slug: "business-intelligence",
    icon: BarChart3,
    title: "Business Intelligence y analítica",
    claim: "Un solo número, la misma verdad",
    description:
      "Consolidamos la información dispersa en modelos de datos confiables y tableros ejecutivos que responden preguntas de negocio, no preguntas técnicas.",
    outcomes: [
      "Comités de gerencia con datos únicos",
      "Detección temprana de desvíos",
      "Indicadores conectados a decisiones",
    ],
    deliverables: [
      "Modelo de datos y definiciones de KPI",
      "Tableros por rol: dirección, comercial, operaciones, finanzas",
      "Automatización de reportería recurrente",
    ],
  },
  {
    slug: "integracion",
    icon: Network,
    title: "Integración de sistemas",
    claim: "Tus sistemas, conversando por fin",
    description:
      "Conectamos ERP, CRM, e-commerce, canales de atención y herramientas internas en una capa de integración estable, segura y monitoreada.",
    outcomes: [
      "Información consistente entre áreas",
      "Fin de la doble digitación",
      "Menor riesgo operativo y de auditoría",
    ],
    deliverables: [
      "Diagnóstico de arquitectura actual",
      "APIs, middleware y sincronizaciones",
      "Monitoreo, logs y planes de contingencia",
    ],
  },
];

export const industries = [
  {
    name: "Retail y distribución",
    challenge: "Miles de transacciones diarias, márgenes ajustados y demanda volátil.",
    work: [
      "Pronóstico de demanda y reposición asistida",
      "Automatización de pedidos y postventa",
      "Tableros de margen por canal y SKU",
    ],
  },
  {
    name: "Servicios financieros",
    challenge: "Alta exigencia regulatoria y procesos intensivos en validación.",
    work: [
      "Automatización de onboarding y verificación documental",
      "Modelos de scoring y detección de anomalías",
      "Reportería regulatoria trazable",
    ],
  },
  {
    name: "Manufactura y logística",
    challenge: "Coordinación entre planta, inventarios, transporte y comercial.",
    work: [
      "Integración ERP–operaciones–transporte",
      "Planificación y control de producción",
      "Indicadores de OTIF, mermas y productividad",
    ],
  },
  {
    name: "Salud",
    challenge: "Agenda, cobertura y experiencia del paciente bajo presión de costos.",
    work: [
      "Gestión inteligente de agendamiento y no-shows",
      "Automatización administrativa y de facturación",
      "Analítica de ocupación y demanda",
    ],
  },
  {
    name: "Servicios profesionales",
    challenge: "Rentabilidad por proyecto y capacidad del equipo difíciles de ver.",
    work: [
      "Automatización de propuestas y facturación",
      "Control de horas, avance y rentabilidad",
      "Bases de conocimiento asistidas por IA",
    ],
  },
  {
    name: "Sector público y educación",
    challenge: "Volumen de trámites y necesidad de transparencia.",
    work: [
      "Digitalización y automatización de trámites",
      "Atención ciudadana asistida",
      "Tableros de gestión y rendición de cuentas",
    ],
  },
];

export const method = [
  {
    step: "01",
    title: "Diagnóstico ejecutivo",
    description:
      "Trabajamos con la dirección para entender objetivos, restricciones y economía del negocio. Medimos la operación antes de proponer tecnología.",
    detail: ["Entrevistas con áreas clave", "Mapa de procesos y datos", "Casos priorizados por retorno"],
  },
  {
    step: "02",
    title: "Arquitectura y plan",
    description:
      "Diseñamos la solución y el camino de implementación por fases, con alcance, riesgos, inversión e indicadores de éxito definidos.",
    detail: ["Arquitectura objetivo", "Roadmap por fases", "Business case e indicadores"],
  },
  {
    step: "03",
    title: "Implementación",
    description:
      "Construimos e integramos con entregas iterativas. Cada fase deja algo funcionando en producción y medible por el negocio.",
    detail: ["Desarrollo e integración", "Pruebas con usuarios reales", "Gestión del cambio"],
  },
  {
    step: "04",
    title: "Operación y evolución",
    description:
      "Acompañamos la operación, monitoreamos resultados y evolucionamos la solución conforme el negocio cambia.",
    detail: ["Monitoreo y soporte", "Revisión de indicadores", "Nuevas fases de valor"],
  },
];
