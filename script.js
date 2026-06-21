// Variables globales
let currentTab = "conceptos";

// Funciones de Modal de Evaluación
function startAssessment() {
  document.getElementById("assessmentModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeAssessment() {
  document.getElementById("assessmentModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

function submitAssessment() {
  const selected = document.querySelector('input[name="resilience"]:checked');

  if (!selected) {
    alert("Por favor selecciona un nivel");
    return;
  }

  const level = selected.value;
  const levelNames = {
    1: "Inicial",
    2: "Repetible",
    3: "Definido",
    4: "Gestionado",
    5: "Optimizado",
  };

  const recommendations = {
    1: "Tu organización está en fases iniciales. Comienza documentando procesos básicos y estableciendo políticas de seguridad.",
    2: "Has establecido algunos procesos. Enfócate en estandarizar y documentar toda tu arquitectura de seguridad.",
    3: "Buen progreso. Implementa métricas y automatización para medir efectividad.",
    4: "Excelente madurez. Considera implementar ML/AI para detección avanzada.",
    5: "Eres un líder en ciberseguridad. Mantén la cultura de mejora continua e innovación.",
  };

  const message = `Tu nivel actual: ${levelNames[level]}\n\n${recommendations[level]}`;
  alert(message);

  // Guardar resultado en localStorage
  localStorage.setItem("resilience_level", level);
  localStorage.setItem("assessment_date", new Date().toISOString());

  closeAssessment();
}

// Cerrar modal al hacer click fuera
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("assessmentModal");

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeAssessment();
    }
  });

  // Cargar nivel previo si existe
  const savedLevel = localStorage.getItem("resilience_level");
  if (savedLevel) {
    console.log("Nivel de resiliencia guardado:", savedLevel);
  }

  // Inicializar animaciones de scroll
  initScrollAnimations();
  initAbbreviationTooltips();

  // Agregar listener para eventos de teclado
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAssessment();
    }
  });
});

// Animaciones al hacer scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observar tarjetas
  document.querySelectorAll(".card-hover").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
}

// Tooltips de siglas sin desbordamiento horizontal
function initAbbreviationTooltips() {
  const abbreviations = document.querySelectorAll("abbr[title]");

  if (!abbreviations.length) {
    return;
  }

  const tooltip = document.createElement("div");
  tooltip.id = "abbr-tooltip";
  tooltip.className = "abbr-tooltip";
  tooltip.setAttribute("role", "tooltip");
  document.body.appendChild(tooltip);

  let activeAbbr = null;
  const viewportPadding = 12;

  function positionTooltip(abbr) {
    const abbrRect = abbr.getBoundingClientRect();

    tooltip.style.left = "0px";
    tooltip.style.top = "0px";

    const tooltipRect = tooltip.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const preferredLeft =
      abbrRect.left + abbrRect.width / 2 - tooltipRect.width / 2;
    const left = Math.min(
      Math.max(preferredLeft, viewportPadding),
      viewportWidth - tooltipRect.width - viewportPadding,
    );
    const hasSpaceAbove = abbrRect.top >= tooltipRect.height + 14;
    const hasSpaceBelow =
      viewportHeight - abbrRect.bottom >= tooltipRect.height + 14;
    const placement = hasSpaceAbove || !hasSpaceBelow ? "top" : "bottom";
    const top =
      placement === "top"
        ? Math.max(viewportPadding, abbrRect.top - tooltipRect.height - 10)
        : Math.min(
            viewportHeight - tooltipRect.height - viewportPadding,
            abbrRect.bottom + 10,
          );
    const arrowLeft = abbrRect.left + abbrRect.width / 2 - left;

    tooltip.dataset.placement = placement;
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.style.setProperty(
      "--arrow-left",
      `${Math.min(Math.max(arrowLeft, 12), tooltipRect.width - 12)}px`,
    );
  }

  function showTooltip(abbr) {
    const text = abbr.dataset.tooltip;

    if (!text) {
      return;
    }

    activeAbbr = abbr;
    tooltip.textContent = text;
    tooltip.classList.add("is-visible");
    positionTooltip(abbr);
  }

  function hideTooltip() {
    activeAbbr = null;
    tooltip.classList.remove("is-visible");
  }

  abbreviations.forEach((abbr) => {
    const tooltipText = abbr.getAttribute("title");

    if (!tooltipText) {
      return;
    }

    abbr.dataset.tooltip = tooltipText;
    abbr.setAttribute("aria-describedby", tooltip.id);
    abbr.setAttribute("aria-label", `${abbr.textContent.trim()}: ${tooltipText}`);
    abbr.setAttribute("tabindex", "0");
    abbr.removeAttribute("title");

    abbr.addEventListener("mouseenter", () => showTooltip(abbr));
    abbr.addEventListener("focus", () => showTooltip(abbr));
    abbr.addEventListener("mouseleave", hideTooltip);
    abbr.addEventListener("blur", hideTooltip);
    abbr.addEventListener("touchstart", () => {
      if (activeAbbr === abbr) {
        hideTooltip();
        return;
      }

      showTooltip(abbr);
    });
  });

  window.addEventListener(
    "scroll",
    () => {
      if (activeAbbr) {
        positionTooltip(activeAbbr);
      }
    },
    { passive: true },
  );
  window.addEventListener("resize", () => {
    if (activeAbbr) {
      positionTooltip(activeAbbr);
    }
  });
}

// Función para menu interactivo
function toggleMenu() {
  const menu = document.querySelector("nav .hidden");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

// Contadores animados
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Sistema de navegación suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Tema oscuro/claro (opcional)
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  localStorage.setItem("theme", newTheme);

  if (newTheme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}

// Estadísticas interactivas
class ResilienceTracker {
  constructor() {
    this.metrics = {
      incidents: 0,
      mttr: 0,
      detection_rate: 0,
      compliance: 0,
    };
    this.loadMetrics();
  }

  loadMetrics() {
    const saved = localStorage.getItem("metrics");
    if (saved) {
      this.metrics = JSON.parse(saved);
    }
  }

  saveMetrics() {
    localStorage.setItem("metrics", JSON.stringify(this.metrics));
  }

  updateMetric(key, value) {
    this.metrics[key] = value;
    this.saveMetrics();
  }

  getReport() {
    return `
            Incidentes: ${this.metrics.incidents}
            MTTR: ${this.metrics.mttr}h
            Tasa de Detección: ${this.metrics.detection_rate}%
            Cumplimiento: ${this.metrics.compliance}%
        `;
  }
}

// Crear instancia del tracker
const tracker = new ResilienceTracker();

// Función para generar reporte
function generateReport() {
  const level = localStorage.getItem("resilience_level") || "No evaluado";
  const date = localStorage.getItem("assessment_date") || "N/A";

  console.log("=== REPORTE DE RESILIENCIA ===");
  console.log("Nivel:", level);
  console.log("Fecha de Evaluación:", date);
  console.log("Métricas:", tracker.getReport());
}

// Exportar datos (para GitHub Pages)
function exportData() {
  const data = {
    level: localStorage.getItem("resilience_level"),
    assessment_date: localStorage.getItem("assessment_date"),
    metrics: tracker.metrics,
  };

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `resilience-assessment-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Mostrar notificaciones
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `fixed top-4 right-4 px-6 py-4 rounded-lg text-white z-50 ${
    type === "success"
      ? "bg-green-500"
      : type === "error"
        ? "bg-red-500"
        : "bg-blue-500"
  }`;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transition = "opacity 0.3s ease";
    notification.style.opacity = "0";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Validación de formularios
function validateForm(form) {
  const inputs = form.querySelectorAll("input, select, textarea");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("border-red-500");
      isValid = false;
    } else {
      input.classList.remove("border-red-500");
    }
  });

  return isValid;
}

// Sistema de tabs (si se implementa)
function switchTab(tabName) {
  // Ocultar todos los tabs
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Mostrar tab seleccionado
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.classList.add("active");
  }

  currentTab = tabName;
}

// Print function para reporte
function printReport() {
  window.print();
}

// Cargar configuración de tema guardada
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  }
});
