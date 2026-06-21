# 🎯 Instrucciones de Actualización y Extensión

## ¿Cómo Actualizar Contenidos?

### Opción 1: Editar HTML Directamente

1. Abre `index.html` en tu editor
2. Busca la sección a actualizar
3. Modifica el contenido
4. Guarda y sube a GitHub

```bash
git add index.html
git commit -m "Actualizar contenidos"
git push
```

### Opción 2: Agregar Nuevo Concepto

Para agregar un 6º concepto, busca la sección **"Conceptos Fundamentales"** y agrega:

```html
<div class="card-hover bg-white p-8 rounded-xl shadow-md">
  <div class="flex items-center mb-4">
    <i class="fas fa-icon-nuevo text-3xl text-nuevo-600 mr-4"></i>
    <h3 class="text-xl font-bold">Nuevo Concepto</h3>
  </div>
  <p class="text-gray-600">Descripción aquí...</p>
</div>
```

### Opción 3: Agregar Nueva Sección

1. Agrega ID a tu sección: `id="nueva-seccion"`
2. Agrega link en navbar: `<a href="#nueva-seccion">`
3. Crea la sección con estructura coherente
4. Actualiza el footer con links

---

## Cambiar Estilos de Color

### Cambiar Color Principal

En `styles.css`, modifica:

```css
:root {
  --primary-color: #667eea; /* Cambiar AQUÍ */
  --primary-dark: #764ba2; /* Y AQUÍ */
  /* ... */
}
```

### Cambiar Paleta de Pilares

Busca en `index.html`:

```html
<div class="border-l-4 border-purple-600">
  <!-- Pilar 1 -->
  <div class="border-l-4 border-blue-600">
    <!-- Pilar 2 -->
    <div class="border-l-4 border-green-600">
      <!-- Pilar 3 -->
      <div class="border-l-4 border-orange-600">
        <!-- Pilar 4 -->
        <div class="border-l-4 border-red-600"><!-- Pilar 5 --></div>
      </div>
    </div>
  </div>
</div>
```

---

## Agregar Nuevos Iconos

Font Awesome incluye miles de iconos. Ejemplos:

```html
<!-- Buscador en: https://fontawesome.com/icons -->
<i class="fas fa-shield-alt"></i>
<!-- Escudo -->
<i class="fas fa-lock"></i>
<!-- Candado -->
<i class="fas fa-server"></i>
<!-- Servidor -->
<i class="fas fa-network-wired"></i>
<!-- Red -->
<i class="fas fa-chart-line"></i>
<!-- Gráfico -->
<i class="fas fa-robot"></i>
<!-- Robot (IA) -->
```

---

## Personalizar Modal de Evaluación

Edita `script.js` en la función `submitAssessment()`:

```javascript
function submitAssessment() {
    const selected = document.querySelector('input[name="resilience"]:checked');

    if (!selected) {
        alert('Por favor selecciona un nivel');
        return;
    }

    const level = selected.value;
    const levelNames = {
        1: 'Inicial',           // ← Cambiar nombres
        2: 'Repetible',
        // ...
    };

    const recommendations = {
        1: 'Tu recomendación aquí...',  // ← Personalizar
        // ...
    };
```

---

## Agregar Nuevas Funcionalidades

### Guardar Evaluaciones

```javascript
// En script.js
class EvaluationHistory {
  constructor() {
    this.history = JSON.parse(localStorage.getItem("evaluations")) || [];
  }

  addEvaluation(level, date) {
    this.history.push({ level, date });
    localStorage.setItem("evaluations", JSON.stringify(this.history));
  }

  getHistory() {
    return this.history;
  }
}

const evalHistory = new EvaluationHistory();
```

### Exportar Reporte PDF

Agrega esta librería en `index.html`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
```

Luego en `script.js`:

```javascript
function exportPDF() {
  const element = document.getElementById("contenido");
  const opt = {
    margin: 10,
    filename: "reporte-resiliencia.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
  };
  html2pdf().set(opt).from(element).save();
}
```

### Integrar Analytics

En `index.html`, antes del `</head>`:

```html
<!-- Google Analytics -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_MEASUREMENT_ID");
</script>
```

---

## Temas Personalizados

Crea múltiples temas en `styles.css`:

```css
/* Tema azul */
:root.theme-blue {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
}

/* Tema verde */
:root.theme-green {
  --primary-color: #059669;
  --primary-dark: #047857;
}

/* Tema rojo */
:root.theme-red {
  --primary-color: #dc2626;
  --primary-dark: #b91c1c;
}
```

Selector en JavaScript:

```javascript
function setTheme(themeName) {
  document.documentElement.className = `theme-${themeName}`;
  localStorage.setItem("selectedTheme", themeName);
}

// Cargar tema guardado
const savedTheme = localStorage.getItem("selectedTheme") || "default";
document.documentElement.className = `theme-${savedTheme}`;
```

---

## Agregar Animaciones Personalizadas

En `styles.css`:

```css
@keyframes slideInLeft {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 0.5s ease infinite;
}
```

Aplicar en HTML:

```html
<div class="animate-bounce">Contenido animado</div>
```

---

## Responsive Breakpoints (Tailwind)

```html
<!-- Mobile first -->
<div class="text-sm md:text-base lg:text-lg xl:text-xl">
  <!-- Pequeño en mobile, más grande en pantallas grandes -->
</div>

<!-- Ocultación condicional -->
<div class="hidden lg:block">Solo visible en desktop</div>
<div class="block lg:hidden">Solo visible en mobile</div>
```

---

## Testing Local

Antes de subir cambios:

1. **En Chrome/Firefox:**

   ```
   Presiona F12 → Abre Console
   Busca errores en rojo
   ```

2. **Responsive:**

   ```
   F12 → Presiona Ctrl+Shift+M
   Prueba en mobile
   ```

3. **Accesibilidad:**
   ```
   Usa Tab para navegar
   Prueba teclado en todo
   ```

---

## Checklist de Actualización

- [ ] Realicé cambios en archivos locales
- [ ] Revisé cambios en navegador (F12)
- [ ] No hay errores en consola
- [ ] Responsive se ve bien
- [ ] Modal sigue funcionando
- [ ] Hice commit con mensaje descriptivo
- [ ] Hice push a GitHub
- [ ] Esperé 2-3 minutos
- [ ] Verifiqué en sitio publicado

---

## Controlar Versiones

### Crear rama de desarrollo

```bash
# Crear rama
git checkout -b development

# Hacer cambios
git add .
git commit -m "Feature: Nuevo componente"

# Crear Pull Request en GitHub
# Después de review, merge a main
```

### Historial de cambios

```bash
# Ver commits
git log --oneline

# Ver diferencias
git diff HEAD~1

# Revertir cambio
git revert <commit-hash>
```

---

## Documentación de Cambios

Mantén actualizado el archivo CHANGELOG.md:

```markdown
# Changelog

## [1.1.0] - 2026-07-01

### Agregado

- Nueva sección de recursos
- Dark mode completo
- Exportación PDF

### Mejorado

- Velocidad de carga
- Animaciones suaves

### Arreglado

- Bug en evaluación
- Responsive en tablets
```

---

## Git Best Practices

```bash
# Mensajes de commit significativos
git commit -m "feat: Agregar modal de evaluación"
git commit -m "fix: Corregir error en scroll"
git commit -m "docs: Actualizar README"
git commit -m "style: Mejorar colores"

# Push solo después de commit
git push origin main

# No hacer git push --force a main
# Usar para desarrollo solamente
```

---

## Preguntas Frecuentes

**P: ¿Cómo agrego más preguntas al cuestionario?**
R: Edita el modal en `index.html` y las opciones en `script.js`

**P: ¿Puedo cambiar el logo/imagen?**
R: Sí, reemplaza los iconos en el navbar

**P: ¿Cómo integro una base de datos?**
R: Considera Firebase o Supabase (requiere backend)

**P: ¿Cómo añado múltiples idiomas?**
R: Crea archivos separados (index-en.html, index-es.html)

**P: ¿Puedo monetizar el sitio?**
R: Sí, con Google Adsense o Affiliate links

---

## Recursos para Continuar

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)
- [JavaScript.info](https://javascript.info)
- [GitHub Pages Help](https://docs.github.com/en/pages)

---

**Última actualización**: 2026-06-19  
**Versión**: 1.0.0
