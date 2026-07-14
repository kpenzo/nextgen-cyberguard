const translations = {
  en: {
    progressText: "Question {current} of {total}",
    categories: {
      backups: "Backups",
      access: "Access",
      awareness: "Staff awareness",
      recovery: "Recovery plan"
    },
    questions: [
      { text: "Do you currently back up your important business files?", category: "backups" },
      { text: "Are your backups stored separately from your main computers or network?", category: "backups" },
      { text: "Have you tested restoring files from a backup in the last 6 months?", category: "backups" },
      { text: "Do all staff members use strong, unique passwords?", category: "access" },
      { text: "Do you use multi-factor authentication for email and important accounts?", category: "access" },
      { text: "Do employees know how to recognize suspicious emails or attachments?", category: "awareness" },
      { text: "Do you have antivirus or endpoint protection installed on business devices?", category: "awareness" },
      { text: "Do you have a written recovery plan if your systems are locked?", category: "recovery" },
      { text: "Do you know how long your business could operate without access to files or systems?", category: "recovery" },
      { text: "Do you have someone responsible for cybersecurity or IT support?", category: "recovery" }
    ],
    options: [
      { label: "Yes", score: 0 },
      { label: "No", score: 2 },
      { label: "Not sure", score: 1 }
    ],
    buttons: {
      next: "Next",
      back: "Back",
      result: "See My Result",
      restart: "Start over"
    },
    results: {
      low: {
        label: "Low risk",
        title: "Low ransomware readiness risk",
        message:
          "Your business appears to have some important protections in place. The next step is to make sure your recovery process is tested and documented.",
        steps: [
          "Test a restore from your most important backup.",
          "Document who is responsible if systems are locked.",
          "Review access controls and MFA on key accounts."
        ]
      },
      medium: {
        label: "Medium risk",
        title: "Medium ransomware readiness risk",
        message:
          "Your business may have several ransomware readiness gaps. The most important next step is to review backups, account access, and recovery procedures.",
        steps: [
          "Confirm backups are separated and can be restored.",
          "Turn on MFA for email, finance, and cloud accounts.",
          "Create a simple first-hour response checklist."
        ]
      },
      high: {
        label: "High risk",
        title: "High ransomware readiness risk",
        message:
          "Your business may be vulnerable to serious disruption if ransomware blocks access to files or systems. A basic readiness review would be strongly recommended.",
        steps: [
          "Prioritize a backup and recovery review.",
          "Secure important accounts with strong passwords and MFA.",
          "Define who to contact and what to do first during an incident."
        ]
      }
    },
    report: {
      generatedOn: "Generated on",
      brand: "NextGen CyberGuard",
      title: "Ransomware Readiness Report",
      score: "Readiness score",
      riskLevel: "Risk level",
      executiveSummary: "Executive summary",
      topPriorities: "Top 3 priorities",
      readinessSnapshot: "Readiness snapshot",
      scoreMeaning: "What the score means",
      gaps: "Key gaps found",
      noGaps: "No major gaps were detected from this basic check.",
      gapLabel: "Gap",
      whyLabel: "Why it matters",
      firstStepLabel: "First practical step",
      actionPlan: "Simple action plan",
      today: "Next 24 hours",
      thisWeek: "This week",
      thisMonth: "Next 30 days",
      positives: "What already looks good",
      noPositives: "No strong areas were confirmed yet. Start with the priorities above and retake the check after improvements are in place.",
      recommendedNextStep: "Recommended next step",
      cta: "Book a free 15-minute readiness review to go through these findings and decide what to fix first.",
      disclaimerLabel: "Disclaimer",
      disclaimer: "This is a basic readiness check, not a full security audit.",
      filename: "nextgen-cyberguard-ransomware-readiness-report.html",
      riskSummaries: {
        low: [
          "Your score suggests your business has several important ransomware readiness basics in place.",
          "The next step is to keep those protections tested, documented, and assigned to someone responsible."
        ],
        medium: [
          "Your score suggests your business has useful protections, but also a few gaps that could slow recovery.",
          "Focus first on the priorities below so an incident would be less disruptive and easier to manage."
        ],
        high: [
          "Your score suggests ransomware could cause serious disruption if key files or systems were blocked.",
          "Start with the practical priorities below. The goal is not perfection; it is to make recovery clearer and faster."
        ]
      },
      scoreMeanings: {
        low: "This usually means basic protections are in place, but recovery should still be tested and kept current.",
        medium: "This usually means some protections exist, but several readiness gaps need attention.",
        high: "This usually means the business could face avoidable downtime without a few basic fixes."
      },
      maintenanceSteps: [
        "Schedule a restore test for important files at least twice a year.",
        "Review MFA and account ownership for email, finance, admin, and cloud accounts.",
        "Refresh the first-hour response checklist whenever staff, software, or providers change."
      ],
      maintenanceActionPlan: {
        today: ["Save this report and confirm who owns ransomware readiness follow-up."],
        week: ["Schedule a backup restore test and review MFA on key accounts."],
        month: ["Document the recovery process and repeat this check after any major business or IT change."]
      },
      rules: [
        {
          key: "backup",
          category: "Backup & recovery",
          ids: [0, 1, 2],
          priority: 1,
          detected: "Backup coverage, separation, or restore testing is missing or uncertain.",
          why: "Backups only reduce ransomware disruption if the right files are included, copies are separated from affected systems, and restore has been tested before an incident.",
          next: "Confirm what is backed up, keep at least one copy separated from the main network, and test restoring important files.",
          priorityText: "Confirm backup coverage and run a restore test.",
          today: "List the files, bookings, invoices, email, and cloud folders the business must recover first.",
          week: "Confirm those items are backed up and that at least one backup copy is separated from normal computers or network access.",
          month: "Run and document a restore test for several real files so recovery time is known before an incident.",
          positive: "Backups and recovery basics appear stronger because backup coverage, separation, or restore testing was answered Yes."
        },
        {
          key: "access",
          category: "Account access",
          ids: [3, 4],
          priority: 2,
          detected: "Password practices or MFA protection may be weak.",
          why: "Ransomware incidents often begin with a compromised email, admin, finance, or cloud account. MFA and unique passwords make unauthorized access harder.",
          next: "Enable MFA for email, finance, admin, and cloud accounts, and reduce shared or reused passwords.",
          priorityText: "Strengthen important accounts with MFA and unique passwords.",
          today: "Identify the accounts that control email, files, billing, banking, admin tools, and cloud storage.",
          week: "Enable MFA on the most important accounts and remove shared passwords where possible.",
          month: "Review old users, account ownership, password habits, and access to admin or finance tools.",
          positive: "Account access has some good signs because strong passwords or MFA were answered Yes."
        },
        {
          key: "email",
          category: "Email & phishing",
          ids: [5],
          priority: 3,
          detected: "Staff phishing and suspicious email readiness may be weak.",
          why: "Small businesses are often targeted through fake invoices, urgent payment requests, attachments, and links. Staff need a simple way to pause and report concerns.",
          next: "Create simple staff guidance for suspicious emails and define who reviews reported messages.",
          priorityText: "Create a simple suspicious email reporting process.",
          today: "Tell staff not to open suspicious links, attachments, or payment requests until they are checked.",
          week: "Create a one-page suspicious email guide and decide who staff should forward concerns to.",
          month: "Run a short phishing awareness refresher using examples relevant to the business.",
          positive: "Staff awareness appears stronger because suspicious email recognition was answered Yes."
        },
        {
          key: "devices",
          category: "Business continuity",
          ids: [6],
          priority: 5,
          detected: "Device protection is missing or uncertain.",
          why: "Endpoint protection does not guarantee safety, but it can help detect or block common threats before they spread across business devices.",
          next: "Confirm antivirus or endpoint protection is active, updated, and installed on business devices.",
          priorityText: "Confirm business devices have active protection.",
          today: "Check whether laptops and desktops used for business have active antivirus or endpoint protection.",
          week: "Confirm updates, alerts, and ownership for device protection are being reviewed.",
          month: "Create a simple device list so new or replacement devices do not get missed.",
          positive: "Device protection appears stronger because antivirus or endpoint protection was answered Yes."
        },
        {
          key: "response",
          category: "Incident response",
          ids: [7],
          priority: 4,
          detected: "A written first-hour recovery plan may be missing.",
          why: "The first hour of a ransomware incident can be confusing. A short plan helps staff know who to call, what to disconnect, and what not to touch.",
          next: "Create a first-hour response checklist with contacts, decision owners, and immediate do/don't steps.",
          priorityText: "Create a first-hour ransomware response checklist.",
          today: "Write down who should be contacted first if files or systems are locked.",
          week: "Create a short first-hour checklist covering isolation, communication, backups, vendors, and customer-facing systems.",
          month: "Walk through the checklist with the team and update it after lessons learned.",
          positive: "Response planning appears stronger because a written recovery plan was answered Yes."
        },
        {
          key: "continuity",
          category: "Business continuity",
          ids: [8],
          priority: 6,
          detected: "The business downtime limit is unclear.",
          why: "Knowing how long the business can operate without files, bookings, invoices, email, or systems helps set realistic recovery priorities.",
          next: "Decide which systems must be restored first and how long the business can operate without them.",
          priorityText: "Define the business downtime limit and recovery order.",
          today: "Name the systems that would stop work fastest if unavailable.",
          week: "Estimate how long the business can operate without files, bookings, invoices, email, or key systems.",
          month: "Use that recovery order to guide backup testing and response planning.",
          positive: "Continuity planning appears stronger because downtime tolerance was answered Yes."
        },
        {
          key: "ownership",
          category: "Ownership & responsibility",
          ids: [9],
          priority: 7,
          detected: "Cybersecurity or IT ownership is unclear.",
          why: "Readiness work is easy to miss when no one owns it. A named contact helps keep backups, access, staff awareness, and response planning moving.",
          next: "Assign a responsible person or IT contact for ransomware readiness and incident coordination.",
          priorityText: "Assign a responsible cybersecurity or IT contact.",
          today: "Choose who owns follow-up for this checklist and who can contact IT support if something goes wrong.",
          week: "Confirm backup, account, device, and response responsibilities with that person or provider.",
          month: "Schedule a recurring readiness review so gaps do not quietly return.",
          positive: "Ownership appears clearer because an IT or cybersecurity responsible person was answered Yes."
        }
      ]
    },
    leadThanks: "Your report will be available once the form integration is connected.",
    reviewThanks: "Thanks. Your review request has been noted for this MVP test."
  },
  es: {
    progressText: "Pregunta {current} de {total}",
    categories: {
      backups: "Copias de seguridad",
      access: "Accesos",
      awareness: "Concienciación del equipo",
      recovery: "Plan de recuperación"
    },
    questions: [
      { text: "¿Haces copias de seguridad de los archivos importantes de tu negocio?", category: "backups" },
      { text: "¿Tus copias de seguridad están separadas de los ordenadores o red principal?", category: "backups" },
      { text: "¿Has probado a restaurar archivos desde una copia de seguridad en los últimos 6 meses?", category: "backups" },
      { text: "¿Todos los miembros del equipo usan contraseñas fuertes y únicas?", category: "access" },
      { text: "¿Usas autenticación multifactor para el correo electrónico y las cuentas importantes?", category: "access" },
      { text: "¿Saben los empleados reconocer correos o adjuntos sospechosos?", category: "awareness" },
      { text: "¿Tienes antivirus o protección endpoint instalada en los dispositivos del negocio?", category: "awareness" },
      { text: "¿Tienes un plan de recuperación por escrito si tus sistemas quedan bloqueados?", category: "recovery" },
      { text: "¿Sabes cuánto tiempo podría operar tu negocio sin acceso a archivos o sistemas?", category: "recovery" },
      { text: "¿Hay alguien responsable de ciberseguridad o soporte IT?", category: "recovery" }
    ],
    options: [
      { label: "Sí", score: 0 },
      { label: "No", score: 2 },
      { label: "No estoy seguro/a", score: 1 }
    ],
    buttons: {
      next: "Siguiente",
      back: "Anterior",
      result: "Ver resultado",
      restart: "Empezar de nuevo"
    },
    results: {
      low: {
        label: "Riesgo bajo",
        title: "Riesgo bajo de preparación contra ransomware",
        message:
          "Tu negocio parece tener algunas protecciones importantes. El siguiente paso es asegurarte de que el proceso de recuperación esté probado y documentado.",
        steps: [
          "Prueba una restauración desde tu copia de seguridad más importante.",
          "Documenta quién es responsable si los sistemas quedan bloqueados.",
          "Revisa controles de acceso y MFA en cuentas clave."
        ]
      },
      medium: {
        label: "Riesgo medio",
        title: "Riesgo medio de preparación contra ransomware",
        message:
          "Tu negocio puede tener varias brechas de preparación frente a ransomware. El siguiente paso más importante es revisar copias de seguridad, accesos y procedimientos de recuperación.",
        steps: [
          "Confirma que las copias de seguridad están separadas y se pueden restaurar.",
          "Activa MFA en correo electrónico, finanzas y cuentas cloud.",
          "Crea una checklist sencilla para la primera hora de respuesta."
        ]
      },
      high: {
        label: "Riesgo alto",
        title: "Riesgo alto de preparación contra ransomware",
        message:
          "Tu negocio podría sufrir una interrupción importante si un ransomware bloquea archivos o sistemas. Se recomienda una revisión básica de preparación.",
        steps: [
          "Prioriza una revisión de copias de seguridad y recuperación.",
          "Protege cuentas importantes con contraseñas fuertes y MFA.",
          "Define a quién contactar y qué hacer primero durante un incidente."
        ]
      }
    },
    report: {
      generatedOn: "Generado el",
      brand: "NextGen CyberGuard",
      title: "Informe de preparación contra ransomware",
      score: "Puntuación de preparación",
      riskLevel: "Nivel de riesgo",
      executiveSummary: "Resumen ejecutivo",
      topPriorities: "3 prioridades principales",
      readinessSnapshot: "Resumen de preparación",
      scoreMeaning: "Qué significa la puntuación",
      gaps: "Brechas clave detectadas",
      noGaps: "No se detectaron brechas importantes en este chequeo básico.",
      gapLabel: "Brecha",
      whyLabel: "Por qué importa",
      firstStepLabel: "Primer paso práctico",
      actionPlan: "Plan de acción simple",
      today: "Próximas 24 horas",
      thisWeek: "Esta semana",
      thisMonth: "Próximos 30 días",
      positives: "Lo que ya parece estar bien",
      noPositives: "Todavía no se confirmaron áreas fuertes. Empieza por las prioridades anteriores y repite el chequeo después de mejorar.",
      recommendedNextStep: "Siguiente paso recomendado",
      cta: "Reserva una revisión gratuita de 15 minutos para repasar estos hallazgos y decidir qué corregir primero.",
      disclaimerLabel: "Aviso",
      disclaimer: "This is a basic readiness check, not a full security audit.",
      filename: "nextgen-cyberguard-informe-preparacion-ransomware.html",
      riskSummaries: {
        low: [
          "Tu puntuación sugiere que el negocio tiene varias bases importantes de preparación frente al ransomware.",
          "El siguiente paso es mantener esas protecciones probadas, documentadas y asignadas a una persona responsable."
        ],
        medium: [
          "Tu puntuación sugiere que el negocio tiene protecciones útiles, pero también algunas brechas que podrían retrasar la recuperación.",
          "Empieza por las prioridades siguientes para que un incidente sea menos disruptivo y más fácil de gestionar."
        ],
        high: [
          "Tu puntuación sugiere que un ransomware podría causar una interrupción importante si bloquea archivos o sistemas clave.",
          "Empieza por las prioridades prácticas siguientes. El objetivo no es la perfección, sino recuperar con más claridad y rapidez."
        ]
      },
      scoreMeanings: {
        low: "Normalmente significa que existen protecciones básicas, pero la recuperación debe probarse y mantenerse al día.",
        medium: "Normalmente significa que hay algunas protecciones, pero varias brechas de preparación necesitan atención.",
        high: "Normalmente significa que el negocio podría sufrir tiempo de parada evitable sin algunas mejoras básicas."
      },
      maintenanceSteps: [
        "Programa una prueba de restauración de archivos importantes al menos dos veces al año.",
        "Revisa MFA y propiedad de cuentas de correo electrónico, finanzas, administración y cloud.",
        "Actualiza la checklist de primera hora cuando cambien empleados, software o proveedores."
      ],
      maintenanceActionPlan: {
        today: ["Guarda este informe y confirma quién se encargará del seguimiento de preparación contra ransomware."],
        week: ["Programa una prueba de restauración y revisa MFA en cuentas clave."],
        month: ["Documenta el proceso de recuperación y repite este chequeo después de cambios importantes de negocio o IT."]
      },
      rules: [
        {
          key: "backup",
          category: "Copias de seguridad y recuperación",
          ids: [0, 1, 2],
          priority: 1,
          detected: "La cobertura, separación o prueba de restauración de copias de seguridad falta o no está clara.",
          why: "Las copias de seguridad solo reducen la interrupción si incluyen los archivos correctos, están separadas de sistemas afectados y la restauración se ha probado antes de un incidente.",
          next: "Confirma qué está incluido, mantén una copia separada de la red principal y prueba restaurar archivos importantes.",
          priorityText: "Confirmar cobertura de copias de seguridad y probar restauración.",
          today: "Haz una lista de archivos, reservas, facturas, correo electrónico y carpetas cloud que el negocio debe recuperar primero.",
          week: "Confirma que esos elementos tienen copia y que al menos una copia está separada de ordenadores o acceso normal de red.",
          month: "Ejecuta y documenta una prueba de restauración con archivos reales para conocer el tiempo de recuperación.",
          positive: "Las bases de copias y recuperación parecen más fuertes porque alguna respuesta sobre cobertura, separación o restauración fue Sí."
        },
        {
          key: "access",
          category: "Acceso a cuentas",
          ids: [3, 4],
          priority: 2,
          detected: "Las prácticas de contraseñas o MFA pueden ser débiles.",
          why: "Muchos incidentes empiezan con una cuenta de correo, administración, finanzas o cloud comprometida. MFA y contraseñas únicas reducen el acceso no autorizado.",
          next: "Activa MFA en correo electrónico, finanzas, administración y cuentas cloud, y reduce contraseñas compartidas o reutilizadas.",
          priorityText: "Proteger cuentas importantes con MFA y contraseñas únicas.",
          today: "Identifica cuentas que controlan correo electrónico, archivos, facturación, banca, herramientas admin y almacenamiento cloud.",
          week: "Activa MFA en las cuentas más importantes y elimina contraseñas compartidas cuando sea posible.",
          month: "Revisa usuarios antiguos, propiedad de cuentas, hábitos de contraseñas y accesos de administración o finanzas.",
          positive: "El acceso a cuentas muestra señales positivas porque contraseñas fuertes o MFA tuvieron respuesta Sí."
        },
        {
          key: "email",
          category: "Correo electrónico y phishing",
          ids: [5],
          priority: 3,
          detected: "La preparación del equipo frente a phishing y correos sospechosos puede mejorar.",
          why: "Los pequeños negocios reciben facturas falsas, solicitudes urgentes de pago, adjuntos y enlaces. El equipo necesita una forma simple de parar y reportar dudas.",
          next: "Crea una guía simple para correos sospechosos y define quién revisa los mensajes reportados.",
          priorityText: "Crear un proceso simple para reportar correos sospechosos.",
          today: "Indica al equipo que no abra enlaces, adjuntos o solicitudes de pago sospechosas hasta revisarlas.",
          week: "Crea una guía de una página y decide a quién reenviar correos sospechosos.",
          month: "Haz un breve repaso de concienciación con ejemplos relevantes para el negocio.",
          positive: "La concienciación del equipo parece más fuerte porque reconocer correos sospechosos fue respondido Sí."
        },
        {
          key: "devices",
          category: "Continuidad del negocio",
          ids: [6],
          priority: 5,
          detected: "La protección de dispositivos falta o no está clara.",
          why: "La protección endpoint no garantiza seguridad, pero puede ayudar a detectar o bloquear amenazas comunes antes de que se propaguen por dispositivos del negocio.",
          next: "Confirma que antivirus o protección endpoint está activa, actualizada e instalada en dispositivos del negocio.",
          priorityText: "Confirmar protección activa en dispositivos del negocio.",
          today: "Comprueba si portátiles y ordenadores usados para trabajar tienen antivirus o protección endpoint activa.",
          week: "Confirma que actualizaciones, alertas y propiedad de esa protección se revisan.",
          month: "Crea una lista simple de dispositivos para no olvidar equipos nuevos o reemplazados.",
          positive: "La protección de dispositivos parece más fuerte porque antivirus o endpoint fue respondido Sí."
        },
        {
          key: "response",
          category: "Respuesta ante incidentes",
          ids: [7],
          priority: 4,
          detected: "Puede faltar un plan escrito para la primera hora.",
          why: "La primera hora de un incidente puede ser confusa. Un plan corto ayuda al equipo a saber a quién llamar, qué desconectar y qué no tocar.",
          next: "Crea una checklist de primera hora con contactos, responsables de decisión y pasos inmediatos.",
          priorityText: "Crear una checklist de primera hora ante ransomware.",
          today: "Escribe a quién contactar primero si archivos o sistemas quedan bloqueados.",
          week: "Crea una checklist breve sobre aislamiento, comunicación, copias, proveedores y sistemas visibles para clientes.",
          month: "Repasa la checklist con el equipo y actualízala con aprendizajes.",
          positive: "La respuesta ante incidentes parece más fuerte porque el plan de recuperación escrito fue respondido Sí."
        },
        {
          key: "continuity",
          category: "Continuidad del negocio",
          ids: [8],
          priority: 6,
          detected: "No está claro el límite de tiempo de interrupción del negocio.",
          why: "Saber cuánto tiempo puede operar el negocio sin archivos, reservas, facturas, correo electrónico o sistemas ayuda a definir prioridades de recuperación realistas.",
          next: "Decide qué sistemas deben restaurarse primero y cuánto tiempo puede operar el negocio sin ellos.",
          priorityText: "Definir límite de interrupción y orden de recuperación.",
          today: "Nombra los sistemas que pararían el trabajo más rápido si no estuvieran disponibles.",
          week: "Estima cuánto tiempo puede operar el negocio sin archivos, reservas, facturas, correo electrónico o sistemas clave.",
          month: "Usa ese orden de recuperación para guiar pruebas de copias y planificación de respuesta.",
          positive: "La continuidad parece más clara porque el tiempo de operación sin sistemas fue respondido Sí."
        },
        {
          key: "ownership",
          category: "Responsabilidad y seguimiento",
          ids: [9],
          priority: 7,
          detected: "La responsabilidad de IT o ciberseguridad no está clara.",
          why: "La preparación se olvida fácilmente cuando nadie es responsable. Un contacto definido ayuda a mantener copias, accesos, concienciación y respuesta en marcha.",
          next: "Asigna una persona o contacto IT responsable de preparación contra ransomware y coordinación de incidentes.",
          priorityText: "Asignar una persona responsable de IT o ciberseguridad.",
          today: "Elige quién hará seguimiento de este checklist y quién contactará soporte IT si algo va mal.",
          week: "Confirma responsabilidades sobre copias, cuentas, dispositivos y respuesta con esa persona o proveedor.",
          month: "Agenda una revisión recurrente para que las brechas no vuelvan silenciosamente.",
          positive: "La responsabilidad parece más clara porque tener una persona responsable de IT o ciberseguridad fue respondido Sí."
        }
      ]
    },
    leadThanks: "Tu informe estará disponible cuando la integración del formulario esté conectada.",
    reviewThanks: "Gracias. Tu solicitud de revisión ha quedado registrada para esta prueba MVP."
  }
};

const pageLanguage = document.documentElement.lang?.startsWith("es") ? "es" : "en";
const copy = translations[pageLanguage];
const storedResultKey = "nextgenCyberGuardChecklistResult";
const isResultPage = document.body?.dataset.page === "result";
const questions = copy.questions;
const options = copy.options;

const checklistSection = document.querySelector("#checklist");
const checklistFlow = document.querySelector("#checklist-flow");
const quizView = document.querySelector("#quiz-view");
const riskForm = document.querySelector("#risk-form");
const questionText = document.querySelector("#question-text");
const quizCount = document.querySelector("#quiz-count");
const quizCategory = document.querySelector("#quiz-category");
const quizOptions = document.querySelector("#quiz-options");
const progressFill = document.querySelector("#progress-fill");
const backButton = document.querySelector("#quiz-back");
const nextButton = document.querySelector("#quiz-next");
const restartButton = document.querySelector("#quiz-restart");
const result = document.querySelector("#result");
const resultLabel = document.querySelector("#result-label");
const resultTitle = document.querySelector("#result-title");
const resultMessage = document.querySelector("#result-message");
const resultScore = document.querySelector("#result-score");
const resultSteps = document.querySelector("#result-steps");
const resultPriorities = document.querySelector("#result-priorities");
const resultGaps = document.querySelector("#result-gaps");
const missingResult = document.querySelector("#missing-result");
const downloadResultReportButton = document.querySelector("#download-result-report");
const leadSection = document.querySelector("#lead-section");
const reportForms = document.querySelectorAll("[data-report-form]");
const reviewForms = document.querySelectorAll("[data-review-form]");

let currentQuestion = 0;
const answers = Array(questions.length).fill(null);
let latestScore = null;
let latestRiskLevel = null;

function getRiskLevel(score) {
  if (score <= 5) {
    return "low";
  }

  if (score <= 12) {
    return "medium";
  }

  return "high";
}

function getTotalScore() {
  return answers.reduce((total, answer) => total + (answer?.score ?? 0), 0);
}

function setHiddenField(form, name, value) {
  if (form.elements[name]) {
    form.elements[name].value = value;
  }
}

function getFormNote(form) {
  return form.querySelector(".form-note");
}

function storeSubmission(key, submission) {
  const existingSubmissions = JSON.parse(localStorage.getItem(key) || "[]");
  existingSubmissions.push(submission);
  localStorage.setItem(key, JSON.stringify(existingSubmissions));
}

function prepareFormMetadata(form) {
  setHiddenField(form, "language", pageLanguage);
  setHiddenField(form, "risk_level", latestRiskLevel || "not_completed");
  setHiddenField(form, "risk_score", latestScore === null ? "" : String(latestScore));
}

function handlePlaceholderSubmit(event, form, message) {
  prepareFormMetadata(form);

  if (form.action.includes("FORM_ID_HERE")) {
    event.preventDefault();
    const note = getFormNote(form);

    if (note) {
      note.textContent = message;
    }
  }
}

function getReportSubmission(form) {
  return {
    firstName: form.elements.first_name?.value.trim() || "",
    email: form.elements.email?.value.trim() || "",
    industry: form.elements.industry?.value || "",
    companySize: form.elements.company_size?.value || "",
    language: pageLanguage,
    riskLevel: form.elements.risk_level?.value || latestRiskLevel || "not_completed",
    score: latestScore,
    serviceInterest: form.elements.service_interest?.value || "ransomware_readiness_report",
    submittedAt: new Date().toISOString()
  };
}

function getResultRoute() {
  return pageLanguage === "es" ? "./resultado/" : "./result/";
}

function getChecklistRoute() {
  return pageLanguage === "es" ? "../#checklist" : "../#checklist";
}

function saveChecklistResult() {
  const payload = {
    language: pageLanguage,
    createdAt: new Date().toISOString(),
    answers: answers.map((answer) => ({
      label: answer?.label || "",
      score: answer?.score ?? null
    }))
  };

  sessionStorage.setItem(storedResultKey, JSON.stringify(payload));
}

function loadChecklistResult() {
  try {
    const stored = JSON.parse(sessionStorage.getItem(storedResultKey) || "null");

    if (!stored || !Array.isArray(stored.answers) || stored.answers.length !== questions.length) {
      return false;
    }

    stored.answers.forEach((answer, index) => {
      const option = options.find((item) => item.score === answer.score) || options.find((item) => item.label === answer.label);
      answers[index] = option ? { label: option.label, score: option.score } : null;
    });

    if (!answers.every(Boolean)) {
      return false;
    }

    latestScore = getTotalScore();
    latestRiskLevel = getRiskLevel(latestScore);
    return true;
  } catch (error) {
    return false;
  }
}

function clearChecklistResult() {
  sessionStorage.removeItem(storedResultKey);
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  quizCount.textContent = copy.progressText
    .replace("{current}", String(currentQuestion + 1))
    .replace("{total}", String(questions.length));
  quizCategory.textContent = copy.categories[question.category];
  questionText.textContent = question.text;
  progressFill.style.width = `${progress}%`;
  nextButton.disabled = !selectedAnswer;
  nextButton.textContent =
    currentQuestion === questions.length - 1 ? copy.buttons.result : copy.buttons.next;
  backButton.textContent = copy.buttons.back;
  backButton.disabled = currentQuestion === 0;

  if (restartButton) {
    restartButton.textContent = copy.buttons.restart;
  }

  quizOptions.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.textContent = option.label;
    button.dataset.score = String(option.score);

    if (selectedAnswer?.label === option.label) {
      button.classList.add("is-selected");
      button.setAttribute("aria-pressed", "true");
    } else {
      button.setAttribute("aria-pressed", "false");
    }

    button.addEventListener("click", () => {
      answers[currentQuestion] = option;
      renderQuestion();
    });

    quizOptions.appendChild(button);
  });
}

function getAnswerScore(index) {
  return answers[index]?.score ?? 0;
}

function getWeakAnswerIndexes() {
  return answers
    .map((answer, index) => (answer && answer.score > 0 ? index : null))
    .filter((index) => index !== null);
}

function getRuleStrength(rule) {
  const scores = rule.ids.map(getAnswerScore);
  return Math.max(...scores);
}

function getDetectedGaps() {
  return copy.report.rules
    .map((rule) => {
      const relatedAnswers = rule.ids
        .filter((index) => getAnswerScore(index) > 0)
        .map((index) => ({
          question: questions[index].text,
          answer: answers[index].label,
          score: answers[index].score
        }));

      if (relatedAnswers.length === 0) {
        return null;
      }

      return {
        ...rule,
        strength: Math.max(...relatedAnswers.map((item) => item.score)),
        questions: relatedAnswers
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.strength - a.strength || a.priority - b.priority);
}

function getPositiveFindings() {
  return copy.report.rules
    .filter((rule) => rule.ids.some((index) => getAnswerScore(index) === 0))
    .sort((a, b) => a.priority - b.priority)
    .map((rule) => rule.positive)
    .slice(0, 5);
}

function uniqueList(items) {
  return [...new Set(items.filter(Boolean))];
}

function getTopPriorities() {
  const gaps = getDetectedGaps();

  if (gaps.length === 0) {
    return copy.report.maintenanceSteps.slice(0, 3);
  }

  return uniqueList(gaps.map((gap) => gap.priorityText)).slice(0, 3);
}

function getRecommendedSteps() {
  const gaps = getDetectedGaps();

  if (gaps.length === 0) {
    return copy.report.maintenanceSteps;
  }

  const steps = uniqueList(gaps.map((gap) => gap.next));

  if (latestRiskLevel === "low") {
    copy.report.maintenanceSteps.forEach((step) => {
      if (steps.length < 4) {
        steps.push(step);
      }
    });
  }

  return uniqueList(steps).slice(0, latestRiskLevel === "high" ? 5 : 4);
}

function getActionPlan() {
  const gaps = getDetectedGaps();

  if (gaps.length === 0) {
    return copy.report.maintenanceActionPlan;
  }

  return {
    today: uniqueList(gaps.map((gap) => gap.today)).slice(0, 3),
    week: uniqueList(gaps.map((gap) => gap.week)).slice(0, 3),
    month: uniqueList(gaps.map((gap) => gap.month)).slice(0, 3)
  };
}

function groupGapsByCategory(gaps) {
  return gaps.reduce((groups, gap) => {
    groups[gap.category] = groups[gap.category] || [];
    groups[gap.category].push(gap);
    return groups;
  }, {});
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function buildReportHtml() {
  if (latestScore === null || !latestRiskLevel) {
    latestScore = getTotalScore();
    latestRiskLevel = getRiskLevel(latestScore);
  }

  const content = copy.results[latestRiskLevel];
  const report = copy.report;
  const generatedDate = new Date().toLocaleDateString(pageLanguage === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const gaps = getDetectedGaps().slice(0, 5);
  const priorities = getTopPriorities().slice(0, 3);
  const actionPlan = getActionPlan();
  const positives = getPositiveFindings().slice(0, 4);
  const summaryParagraphs = Array.isArray(report.riskSummaries[latestRiskLevel])
    ? report.riskSummaries[latestRiskLevel]
    : [report.riskSummaries[latestRiskLevel] || content.message];
  const scoreMeaning = report.scoreMeanings?.[latestRiskLevel] || content.message;
  const gapHtml = gaps.length
    ? gaps.map((gap) => `
        <article class="gap-card">
          <h3>${escapeHtml(gap.detected)}</h3>
          <dl>
            <div><dt>${escapeHtml(report.gapLabel)}</dt><dd>${escapeHtml(gap.category)}</dd></div>
            <div><dt>${escapeHtml(report.whyLabel)}</dt><dd>${escapeHtml(gap.why)}</dd></div>
            <div><dt>${escapeHtml(report.firstStepLabel)}</dt><dd>${escapeHtml(gap.next)}</dd></div>
          </dl>
        </article>`).join("")
    : `<p class="soft-box">${escapeHtml(report.noGaps)}</p>`;
  const positivesHtml = positives.length
    ? `<section class="section">
        <h2>${escapeHtml(report.positives)}</h2>
        <div class="positive">${renderList(positives)}</div>
      </section>`
    : "";

  return `<!doctype html>
<html lang="${pageLanguage}">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(report.title)} | ${escapeHtml(report.brand)}</title>
  <style>
    body{margin:0;background:#f4fbfa;color:#071431;font-family:Inter,Arial,sans-serif;line-height:1.55}main{max-width:920px;margin:0 auto;padding:42px 22px}.card{background:#fff;border:1px solid #d8ece9;border-radius:18px;box-shadow:0 20px 60px rgba(10,58,68,.12);padding:34px}.brand{color:#00877f;font-weight:900;letter-spacing:.12em;text-transform:uppercase;font-size:12px}h1{font-size:42px;line-height:1.05;margin:10px 0 12px}h2{font-size:23px;margin:0 0 14px}h3{font-size:17px;margin:0 0 12px}.muted{color:#56697a}.disclaimer{margin:18px 0 0;padding:12px 14px;border-radius:12px;background:#eef7f5;color:#354d5d;font-size:14px}.section{margin-top:28px;padding-top:24px;border-top:1px solid #e2efed}.snapshot{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px}.snapshot-box,.action-box,.gap-card,.soft-box{border:1px solid #dcecea;border-radius:14px;background:#fbfefe;padding:16px}.snapshot-box span{display:block;color:#607482;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.06em}.snapshot-box strong{display:block;margin-top:5px;color:#00766f;font-size:20px}.summary p{margin:0 0 10px}.priority-list{counter-reset:item;display:grid;gap:12px;padding:0;list-style:none}.priority-list li{counter-increment:item;margin:0;padding:14px 16px 14px 48px;border:1px solid #d7ebe8;border-radius:12px;background:#f7fcfb;position:relative;font-weight:750}.priority-list li:before{content:counter(item);position:absolute;left:14px;top:13px;width:24px;height:24px;border-radius:50%;display:grid;place-items:center;background:#00877f;color:#fff;font-size:12px}.gap-list{display:grid;gap:12px}.gap-card dl{margin:0;display:grid;gap:10px}.gap-card div{display:grid;gap:3px}.gap-card dt{color:#00766f;font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.06em}.gap-card dd{margin:0;color:#23394a}.action-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.action-box h3{color:#00766f}.action-box ul,.positive ul{margin:0;padding-left:20px}.action-box li,.positive li{margin:6px 0}.positive{background:#f0faf7;border:1px solid #cdece5;border-radius:14px;padding:16px}.cta{margin-top:24px;padding:16px 18px;border-radius:12px;background:#e8f8f5;color:#005d58;font-weight:750}@media(max-width:760px){.snapshot,.action-grid{grid-template-columns:1fr}h1{font-size:34px}.card{padding:24px}}@media print{body{background:#fff}.card{box-shadow:none}}
  </style>
</head>
<body>
  <main>
    <section class="card">
      <p class="brand">${escapeHtml(report.brand)}</p>
      <h1>${escapeHtml(report.title)}</h1>
      <p class="muted">${escapeHtml(report.generatedOn)} ${escapeHtml(generatedDate)}</p>
      <p class="disclaimer">${escapeHtml(report.disclaimer)}</p>

      <section class="section">
        <h2>${escapeHtml(report.readinessSnapshot)}</h2>
        <div class="snapshot">
          <div class="snapshot-box"><span>${escapeHtml(report.riskLevel)}</span><strong>${escapeHtml(content.label)}</strong></div>
          <div class="snapshot-box"><span>${escapeHtml(report.score)}</span><strong>${latestScore}/20</strong></div>
          <div class="snapshot-box"><span>${escapeHtml(report.scoreMeaning)}</span><p>${escapeHtml(scoreMeaning)}</p></div>
        </div>
      </section>

      <section class="section summary">
        <h2>${escapeHtml(report.executiveSummary)}</h2>
        ${summaryParagraphs.slice(0, 3).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </section>

      <section class="section">
        <h2>${escapeHtml(report.topPriorities)}</h2>
        <ol class="priority-list">${priorities.map((priority) => `<li>${escapeHtml(priority)}</li>`).join("")}</ol>
      </section>

      <section class="section">
        <h2>${escapeHtml(report.gaps)}</h2>
        <div class="gap-list">${gapHtml}</div>
      </section>

      <section class="section">
        <h2>${escapeHtml(report.actionPlan)}</h2>
        <div class="action-grid">
          <div class="action-box"><h3>${escapeHtml(report.today)}</h3>${renderList(actionPlan.today.slice(0, 3))}</div>
          <div class="action-box"><h3>${escapeHtml(report.thisWeek)}</h3>${renderList(actionPlan.week.slice(0, 3))}</div>
          <div class="action-box"><h3>${escapeHtml(report.thisMonth)}</h3>${renderList(actionPlan.month.slice(0, 3))}</div>
        </div>
      </section>

      ${positivesHtml}

      <p class="cta"><strong>${escapeHtml(report.recommendedNextStep)}:</strong> ${escapeHtml(report.cta)}</p>
    </section>
  </main>
</body>
</html>`;
}

function downloadResultReport() {
  if (!answers.every(Boolean)) {
    return;
  }

  const blob = new Blob([buildReportHtml()], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = copy.report.filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderResultScreen() {
  if (latestScore === null || !latestRiskLevel) {
    latestScore = getTotalScore();
    latestRiskLevel = getRiskLevel(latestScore);
  }

  const content = copy.results[latestRiskLevel];
  resultLabel.textContent = content.label;

  if (resultScore) {
    resultScore.textContent = `${latestScore}/20`;
  }

  resultTitle.textContent = content.title;
  const summaryCopy = copy.report.riskSummaries[latestRiskLevel];
  resultMessage.textContent = Array.isArray(summaryCopy) ? summaryCopy[0] : summaryCopy || content.message;

  if (resultPriorities) {
    resultPriorities.innerHTML = getTopPriorities().map((priority) => `<li>${escapeHtml(priority)}</li>`).join("");
  }

  if (resultGaps) {
    const gaps = getDetectedGaps();
    resultGaps.innerHTML = gaps.length
      ? gaps.slice(0, 5).map((gap) => `<li><strong>${escapeHtml(gap.category)}:</strong> ${escapeHtml(gap.detected)}</li>`).join("")
      : `<li>${escapeHtml(copy.report.noGaps)}</li>`;
  }

  if (resultSteps) {
    resultSteps.innerHTML = getRecommendedSteps().map((step) => `<li>${escapeHtml(step)}</li>`).join("");
  }

  result.hidden = false;
  missingResult?.setAttribute("hidden", "");
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showResult() {
  latestScore = getTotalScore();
  latestRiskLevel = getRiskLevel(latestScore);
  saveChecklistResult();
  window.location.href = getResultRoute();
}

function restartQuiz() {
  clearChecklistResult();

  if (isResultPage) {
    window.location.href = getChecklistRoute();
    return;
  }

  answers.fill(null);
  currentQuestion = 0;
  latestScore = null;
  latestRiskLevel = null;

  if (result) {
    result.hidden = true;
  }

  if (quizView) {
    quizView.hidden = false;
  }

  if (riskForm) {
    riskForm.hidden = false;
  }

  checklistSection?.classList.remove("is-result-mode");
  checklistFlow?.classList.remove("is-result-mode");

  if (leadSection && leadSection.dataset.alwaysVisible !== "true") {
    leadSection.hidden = true;
  }

  document.querySelectorAll(".form-note").forEach((note) => {
    note.textContent = "";
  });

  renderQuestion();
  riskForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initQuiz() {
  if (
    !checklistSection ||
    !checklistFlow ||
    !quizView ||
    !riskForm ||
    !questionText ||
    !quizCount ||
    !quizCategory ||
    !quizOptions ||
    !progressFill ||
    !backButton ||
    !nextButton
  ) {
    return;
  }

  riskForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  nextButton.addEventListener("click", () => {
    if (!answers[currentQuestion]) {
      return;
    }

    if (currentQuestion === questions.length - 1) {
      showResult();
      return;
    }

    currentQuestion += 1;
    renderQuestion();
  });

  backButton.addEventListener("click", () => {
    if (currentQuestion === 0) {
      return;
    }

    currentQuestion -= 1;
    renderQuestion();
  });

  restartButton?.addEventListener("click", restartQuiz);
  downloadResultReportButton?.addEventListener("click", downloadResultReport);
  renderQuestion();
}

function initResultPage() {
  if (!isResultPage) {
    return;
  }

  if (!result || !resultLabel || !resultTitle || !resultMessage || !resultScore || !resultSteps || !downloadResultReportButton) {
    return;
  }

  if (!loadChecklistResult()) {
    result.hidden = true;
    missingResult.hidden = false;
    return;
  }

  renderResultScreen();
  restartButton?.addEventListener("click", restartQuiz);
  downloadResultReportButton.addEventListener("click", downloadResultReport);
}

reportForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    prepareFormMetadata(form);
    storeSubmission("ransomwareReadinessLeads", getReportSubmission(form));

    // Formspree integration placeholder:
    // The form posts to https://formspree.io/f/FORM_ID_HERE.
    // Replace FORM_ID_HERE in the HTML action attribute with the real Formspree form ID.
    // Once replaced, the browser will submit first name, email, industry or company size, language, risk_score, risk_level, and service_interest.
    handlePlaceholderSubmit(event, form, copy.leadThanks);
  });
});

reviewForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    prepareFormMetadata(form);
    storeSubmission("ransomwareReadinessReviewRequests", {
      email: form.elements.email?.value.trim() || "",
      language: pageLanguage,
      riskLevel: form.elements.risk_level?.value || latestRiskLevel || "not_completed",
      score: latestScore,
      serviceInterest: form.elements.service_interest?.value || "free_readiness_review",
      submittedAt: new Date().toISOString()
    });

    handlePlaceholderSubmit(event, form, copy.reviewThanks);
  });
});

initQuiz();
initResultPage();
