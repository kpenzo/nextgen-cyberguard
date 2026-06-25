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
    leadThanks: "Tu informe estará disponible cuando la integración del formulario esté conectada.",
    reviewThanks: "Gracias. Tu solicitud de revisión ha quedado registrada para esta prueba MVP."
  }
};

const pageLanguage = document.documentElement.lang?.startsWith("es") ? "es" : "en";
const copy = translations[pageLanguage];
const questions = copy.questions;
const options = copy.options;

const checklistSection = document.querySelector("#checklist");
const checklistHeading = document.querySelector("#checklist .section-heading");
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
    resultSteps.innerHTML = content.steps.map((step) => `<li>${step}</li>`).join("");
  }
  riskForm.hidden = true;
  checklistHeading?.setAttribute("hidden", "");
  checklistSection?.classList.add("is-result-mode");
  result.hidden = false;

  if (leadSection) {
    leadSection.hidden = false;
  }

  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function restartQuiz() {
  answers.fill(null);
  currentQuestion = 0;
  latestScore = null;
  latestRiskLevel = null;
  result.hidden = true;
  riskForm.hidden = false;
  checklistHeading?.removeAttribute("hidden");
  checklistSection?.classList.remove("is-result-mode");

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
    !resultSteps
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
