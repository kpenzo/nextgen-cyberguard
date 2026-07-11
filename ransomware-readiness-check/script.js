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
      summary: "Summary",
      answers: "Your answers",
      gaps: "Detected gaps",
      noGaps: "No major gaps were detected from this basic check.",
      nextSteps: "Recommended next steps",
      disclaimer: "This is a basic readiness check, not a full security audit.",
      filename: "nextgen-cyberguard-ransomware-readiness-report.html",
      answerLabel: "Answer",
      gapAnswerPrefix: "Answered",
      maintenanceSteps: [
        "Schedule a restore test for important files at least twice a year.",
        "Keep MFA enabled on email, finance, admin, and cloud accounts.",
        "Review the recovery plan whenever staff, software, or providers change."
      ],
      rules: [
        { ids: [0, 1, 2], gap: "Backups or restore testing need attention.", step: "Confirm backup coverage, keep backup copies separated, and test restoring important files." },
        { ids: [3, 4], gap: "Account access controls may be weak.", step: "Enable MFA for email, finance, admin, and cloud accounts, and reduce shared or reused passwords." },
        { ids: [5], gap: "Phishing and suspicious email readiness may need improvement.", step: "Create simple staff awareness guidance and a clear way to report suspicious emails or attachments." },
        { ids: [6], gap: "Device protection is uncertain or missing.", step: "Confirm antivirus or endpoint protection is active on business devices and being monitored." },
        { ids: [7], gap: "A written recovery plan may be missing.", step: "Create a first-hour response checklist that explains who to contact and what to do first." },
        { ids: [8], gap: "Operating downtime tolerance is unclear.", step: "Decide how long the business can operate without files, bookings, invoices, email, or key systems." },
        { ids: [9], gap: "Cybersecurity or IT ownership is unclear.", step: "Assign a responsible IT or cybersecurity contact for readiness reviews and incident coordination." }
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
      summary: "Resumen",
      answers: "Tus respuestas",
      gaps: "Brechas detectadas",
      noGaps: "No se detectaron brechas importantes en este chequeo básico.",
      nextSteps: "Próximos pasos recomendados",
      disclaimer: "This is a basic readiness check, not a full security audit.",
      filename: "nextgen-cyberguard-informe-preparacion-ransomware.html",
      answerLabel: "Respuesta",
      gapAnswerPrefix: "Respuesta",
      maintenanceSteps: [
        "Programa una prueba de restauración de archivos importantes al menos dos veces al año.",
        "Mantén MFA activo en correo electrónico, finanzas, administración y cuentas cloud.",
        "Revisa el plan de recuperación cuando cambien empleados, software o proveedores."
      ],
      rules: [
        { ids: [0, 1, 2], gap: "Las copias de seguridad o las pruebas de restauración necesitan atención.", step: "Confirma la cobertura de copias de seguridad, mantén copias separadas y prueba restaurar archivos importantes." },
        { ids: [3, 4], gap: "Los controles de acceso pueden ser débiles.", step: "Activa MFA en correo electrónico, finanzas, administración y cuentas cloud, y reduce contraseñas compartidas o reutilizadas." },
        { ids: [5], gap: "La preparación frente a phishing y correos sospechosos puede mejorar.", step: "Crea una guía sencilla para el equipo y una forma clara de reportar correos o adjuntos sospechosos." },
        { ids: [6], gap: "La protección de dispositivos es incierta o falta.", step: "Confirma que antivirus o protección endpoint está activa en los dispositivos del negocio y se revisa." },
        { ids: [7], gap: "Puede faltar un plan de recuperación por escrito.", step: "Crea una checklist para la primera hora que explique a quién contactar y qué hacer primero." },
        { ids: [8], gap: "No está claro cuánto tiempo podría operar el negocio sin sistemas.", step: "Define cuánto tiempo puede operar el negocio sin archivos, reservas, facturas, correo electrónico o sistemas clave." },
        { ids: [9], gap: "La responsabilidad de IT o ciberseguridad no está clara.", step: "Asigna una persona o contacto responsable de revisar la preparación y coordinar incidentes." }
      ]
    },
    leadThanks: "Tu informe estará disponible cuando la integración del formulario esté conectada.",
    reviewThanks: "Gracias. Tu solicitud de revisión ha quedado registrada para esta prueba MVP."
  }
};

const pageLanguage = document.documentElement.lang?.startsWith("es") ? "es" : "en";
const copy = translations[pageLanguage];
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

function getWeakAnswerIndexes() {
  return answers
    .map((answer, index) => (answer && answer.score > 0 ? index : null))
    .filter((index) => index !== null);
}

function getDetectedGaps() {
  const weakIndexes = getWeakAnswerIndexes();
  const gaps = [];

  copy.report.rules.forEach((rule) => {
    const matchedIndexes = rule.ids.filter((index) => weakIndexes.includes(index));

    if (matchedIndexes.length > 0) {
      gaps.push({
        text: rule.gap,
        questions: matchedIndexes.map((index) => ({
          question: questions[index].text,
          answer: answers[index].label
        }))
      });
    }
  });

  return gaps;
}

function getRecommendedSteps() {
  const weakIndexes = getWeakAnswerIndexes();

  if (weakIndexes.length === 0) {
    return copy.report.maintenanceSteps;
  }

  const steps = [];
  copy.report.rules.forEach((rule) => {
    if (rule.ids.some((index) => weakIndexes.includes(index))) {
      steps.push(rule.step);
    }
  });

  if (latestRiskLevel === "low") {
    copy.report.maintenanceSteps.forEach((step) => {
      if (steps.length < 4 && !steps.includes(step)) {
        steps.push(step);
      }
    });
  }

  return steps.slice(0, latestRiskLevel === "high" ? 5 : 4);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
  const answerRows = questions.map((question, index) => {
    const answer = answers[index];
    return `<tr><td>${index + 1}. ${escapeHtml(question.text)}</td><td>${escapeHtml(answer?.label || "-")}</td></tr>`;
  }).join("");
  const gaps = getDetectedGaps();
  const gapItems = gaps.length
    ? gaps.map((gap) => `<li><strong>${escapeHtml(gap.text)}</strong><ul>${gap.questions.map((item) => `<li>${escapeHtml(item.question)} — ${escapeHtml(report.gapAnswerPrefix)}: ${escapeHtml(item.answer)}</li>`).join("")}</ul></li>`).join("")
    : `<li>${escapeHtml(report.noGaps)}</li>`;
  const stepItems = getRecommendedSteps().map((step) => `<li>${escapeHtml(step)}</li>`).join("");

  return `<!doctype html>
<html lang="${pageLanguage}">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(report.title)} | ${escapeHtml(report.brand)}</title>
  <style>
    body{margin:0;background:#f4fbfa;color:#071431;font-family:Inter,Arial,sans-serif;line-height:1.55}main{max-width:920px;margin:0 auto;padding:42px 22px}.card{background:#fff;border:1px solid #d8ece9;border-radius:18px;box-shadow:0 20px 60px rgba(10,58,68,.12);padding:34px}.brand{color:#00877f;font-weight:900;letter-spacing:.12em;text-transform:uppercase;font-size:12px}h1{font-size:42px;line-height:1.05;margin:10px 0 12px}.meta{display:flex;gap:12px;flex-wrap:wrap;margin:22px 0}.pill{background:#e8f8f5;color:#00766f;border:1px solid #c8ebe6;border-radius:999px;padding:8px 12px;font-weight:800}.section{margin-top:28px}h2{font-size:22px;margin:0 0 12px}ul{padding-left:22px}li{margin:7px 0}table{width:100%;border-collapse:collapse;background:#fbfefe;border-radius:12px;overflow:hidden}td{border-bottom:1px solid #e2efed;padding:10px 12px;vertical-align:top}td:last-child{font-weight:800;color:#00766f;width:180px}.disclaimer{margin-top:28px;padding:14px 16px;border-radius:12px;background:#eef7f5;color:#354d5d;font-weight:700}@media print{body{background:#fff}.card{box-shadow:none}}
  </style>
</head>
<body>
  <main>
    <section class="card">
      <p class="brand">${escapeHtml(report.brand)}</p>
      <h1>${escapeHtml(report.title)}</h1>
      <p>${escapeHtml(report.generatedOn)} ${escapeHtml(generatedDate)}</p>
      <div class="meta"><span class="pill">${escapeHtml(report.riskLevel)}: ${escapeHtml(content.label)}</span><span class="pill">${escapeHtml(report.score)}: ${latestScore}/20</span></div>
      <div class="section"><h2>${escapeHtml(report.summary)}</h2><p>${escapeHtml(content.message)}</p></div>
      <div class="section"><h2>${escapeHtml(report.nextSteps)}</h2><ul>${stepItems}</ul></div>
      <div class="section"><h2>${escapeHtml(report.gaps)}</h2><ul>${gapItems}</ul></div>
      <div class="section"><h2>${escapeHtml(report.answers)}</h2><table>${answerRows}</table></div>
      <p class="disclaimer">${escapeHtml(report.disclaimer)}</p>
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

function showResult() {
  latestScore = getTotalScore();
  latestRiskLevel = getRiskLevel(latestScore);
  const content = copy.results[latestRiskLevel];

  resultLabel.textContent = content.label;
  if (resultScore) {
    resultScore.textContent = `${latestScore}/20`;
  }
  resultTitle.textContent = content.title;
  resultMessage.textContent = content.message;
  if (resultSteps) {
    resultSteps.innerHTML = getRecommendedSteps().map((step) => `<li>${escapeHtml(step)}</li>`).join("");
  }
  quizView.hidden = true;
  riskForm.hidden = true;
  checklistSection?.classList.add("is-result-mode");
  checklistFlow?.classList.add("is-result-mode");
  result.hidden = false;

  if (leadSection) {
    leadSection.hidden = true;
  }

  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function restartQuiz() {
  answers.fill(null);
  currentQuestion = 0;
  latestScore = null;
  latestRiskLevel = null;
  result.hidden = true;
  quizView.hidden = false;
  riskForm.hidden = false;
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
    !nextButton ||
    !result ||
    !resultLabel ||
    !resultTitle ||
    !resultMessage ||
    !resultScore ||
    !resultSteps ||
    !downloadResultReportButton
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
  downloadResultReportButton.addEventListener("click", downloadResultReport);
  renderQuestion();
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
