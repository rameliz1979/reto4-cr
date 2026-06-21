# 📚 Recursos y Referencias - Reto 4

## Documentos del Proyecto

### Archivos Principales

- **index.html** - Página web principal con toda la estructura
- **script.js** - Lógica interactiva y funcionalidades
- **styles.css** - Estilos personalizados adicionales
- **contenidos.json** - Datos estructurados en JSON

### Archivos de Documentación

- **README.md** - Documentación completa del proyecto
- **DEPLOY.md** - Guía paso a paso para despliegue en GitHub Pages
- **RECURSOS.md** - Este archivo
- **.gitignore** - Archivos a ignorar en Git

---

## Herramientas y Tecnologías Utilizadas

### Frontend

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos
- **Tailwind CSS**: Framework de utilidades (CDN)
- **JavaScript (ES6+)**: Lógica interactiva
- **Font Awesome**: Iconografía

### Deployment

- **GitHub Pages**: Hosting estático
- **Git**: Control de versiones

---

## Frameworks y Librerías

### CSS

```html
<!-- Tailwind CSS CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Font Awesome -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>
```

### Características de Tailwind Utilizadas

- `gradient-bg` - Fondo degradado personalizado
- `card-hover` - Efecto hover en tarjetas
- Responsive grid con `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Sistema de utilidades para margin, padding, text, etc.

---

## Estructura de Datos

### JSON (contenidos.json)

```json
{
  "conceptos": [...],      // 6 conceptos fundamentales
  "pilares": [...],        // 5 pilares de la resiliencia
  "nivelMaturez": [...],   // 5 niveles de madurez
  "capas": [...]           // 4 capas de arquitectura
}
```

### LocalStorage

```javascript
localStorage.getItem("resilience_level"); // Nivel evaluado
localStorage.getItem("assessment_date"); // Fecha de evaluación
localStorage.getItem("metrics"); // Métricas personalizadas
localStorage.getItem("theme"); // Tema claro/oscuro
```

---

## Componentes Reutilizables

### Botones

```html
<button class="btn btn-primary">Primario</button>
<button class="btn btn-secondary">Secundario</button>
<button class="btn btn-outline">Outline</button>
```

### Tooltips de Siglas

```html
<!-- Sintaxis para crear tooltips -->
<abbr title="Multi-Factor Authentication">MFA</abbr>
<abbr title="Security Information and Event Management">SIEM</abbr>
<abbr title="Intrusion Detection System">IDS</abbr>

<!-- Estilos CSS incluidos -->
abbr { cursor: help; text-decoration: underline dotted #667eea; position:
relative; font-weight: 600; color: #667eea; } abbr:hover::after { content:
attr(title); position: absolute; background: #2d3748; color: white; /* más
estilos... */ }
```

### Tarjetas

```html
<div class="card">
  <div class="card-header">Encabezado</div>
  <div class="card-body">Contenido</div>
  <div class="card-footer">Pie</div>
</div>
```

### Badges

```html
<span class="badge badge-primary">Primario</span>
<span class="badge badge-success">Éxito</span>
<span class="badge badge-warning">Advertencia</span>
<span class="badge badge-danger">Peligro</span>
```

### Alertas

```html
<div class="alert alert-info">Información</div>
<div class="alert alert-success">Éxito</div>
<div class="alert alert-warning">Advertencia</div>
<div class="alert alert-danger">Error</div>
```

---

## Funciones JavaScript Principales

### Modal Management

```javascript
startAssessment(); // Abrir modal de evaluación
closeAssessment(); // Cerrar modal
submitAssessment(); // Enviar evaluación
```

### Tracker de Resiliencia

```javascript
const tracker = new ResilienceTracker();
tracker.loadMetrics();
tracker.saveMetrics();
tracker.updateMetric(key, value);
tracker.getReport();
```

### Utilidades

```javascript
showNotification(message, type);
validateForm(form);
toggleTheme();
generateReport();
exportData();
printReport();
animateCounter(element, target, duration);
```

---

## Colores del Proyecto

### Paleta Principal

```css
--primary-color: #667eea /* Púrpura */ --primary-dark: #764ba2
  /* Púrpura oscuro */ --secondary-color: #f093fb /* Rosa */
  --success-color: #48bb78 /* Verde */ --warning-color: #f6ad55 /* Naranja */
  --danger-color: #f56565 /* Rojo */;
```

### Colores de Pilares

1. Prevención: Purple (#667eea)
2. Detección: Blue (#3182ce)
3. Respuesta: Green (#38a169)
4. Recuperación: Orange (#ed8936)
5. Aprendizaje: Red (#e53e3e)

---

## Mejoras Futuras

### Fase 2

- [ ] Sistema de login de usuarios
- [ ] Dashboard personal con histórico
- [ ] Descarga de reportes PDF
- [ ] Gráficas interactivas de madurez
- [ ] Cuestionario más extenso

### Fase 3

- [ ] Integración con base de datos (Firebase)
- [ ] API backend para análisis
- [ ] Mapeo de cumplimiento normativo
- [ ] Benchmarking contra industria
- [ ] Generación automática de planes de mejora

### Fase 4

- [ ] Machine Learning para predicciones
- [ ] Chatbot de soporte
- [ ] Integración con herramientas SIEM
- [ ] Mobile app nativa
- [ ] Soporte multiidioma

---

## Referencias y Estándares

### Marcos de Referencia

- **NIST Cybersecurity Framework** - https://www.nist.gov/cyberframework
- **ISO/IEC 27001** - Gestión de seguridad de la información
- **ISO/IEC 27035** - Gestión de incidentes de seguridad
- **COBIT 2019** - Gobierno de TI
- **CIS Controls** - Controles críticos de seguridad

### Modelos de Madurez

- **CMMI** - Capability Maturity Model Integration
- **ITIL** - Information Technology Infrastructure Library

### Organizaciones Relevantes

- **SANS Institute** - Training y certificaciones
- **EC-Council** - Ethical Hacking
- **CompTIA** - Security+, Network+
- **Gartner** - Research y análisis

---

## Guías de Estilo

### Nombrado de Clases CSS

```css
/* Usar kebab-case */
.card-header
.btn-primary
.alert-success

/* Modificadores */
.btn--disabled
.card--elevated
```

### Nomenclatura JavaScript

```javascript
// Funciones: camelCase
startAssessment();
submitAssessment();

// Clases: PascalCase
class ResilienceTracker {}

// Constantes: UPPER_SNAKE_CASE
const PRIMARY_COLOR = "#667eea";
```

### HTML Semántico

```html
<header>
  <!-- Encabezado principal -->
  <nav>
    <!-- Navegación -->
    <section>
      <!-- Secciones temáticas -->
      <article>
        <!-- Contenido de artículo -->
        <aside>
          <!-- Contenido lateral -->
          <footer><!-- Pie de página --></footer>
        </aside>
      </article>
    </section>
  </nav>
</header>
```

---

## Prácticas Recomendadas

### Performance

- ✅ Lazy loading de imágenes
- ✅ CSS/JS minificados en producción
- ✅ Caché del navegador habilitado
- ✅ Compresión GZIP

### Accesibilidad (A11y)

- ✅ Contraste de colores WCAG AA
- ✅ Etiquetas `<label>` para inputs
- ✅ Atributos `aria-*` cuando sea necesario
- ✅ Navegación por teclado

### SEO

- ✅ Meta tags en HTML
- ✅ Heading tags estructurados
- ✅ Alt text en imágenes
- ✅ URLs descriptivas

---

## Troubleshooting

### Problema: Estilos no aplican

**Solución**: Verifica que Tailwind CDN esté cargado

```html
<!-- En HEAD -->
<script src="https://cdn.tailwindcss.com"></script>
```

### Problema: JavaScript no funciona

**Solución**: Revisa la consola (F12) para errores

```javascript
// Verifica que se cargue script.js
console.log("script.js loaded");
```

### Problema: Modal no se abre

**Solución**: Verifica que el ID sea correcto

```javascript
// Debe coincidir con:
document.getElementById("assessmentModal");
```

---

## Checklist para Despliegue

- [ ] Todos los archivos HTML, CSS, JS están en la raíz
- [ ] index.html es la página de inicio
- [ ] Tailwind CDN está en el HEAD
- [ ] Font Awesome está disponible
- [ ] localStorage funciona en el navegador
- [ ] Responsive design se ve bien en móvil
- [ ] No hay errores en consola (F12)
- [ ] Links internos funcionan
- [ ] Modal se abre y cierra correctamente
- [ ] Evaluación guarda datos

---

## Licencia y Créditos

### Tecnologías Utilizadas

- **Tailwind CSS** - MIT License
- **Font Awesome** - Free License
- **HTML5/CSS3/JS** - W3C Standards

### Proyecto

- **Institución**: UNAD
- **Reto**: 4 - Diseño de Arquitectura para la Ciber-Resiliencia
- **Año**: 2026

---

## Contacto y Soporte

Para preguntas o soporte:

1. Consulta la documentación del Reto 4
2. Revisa la guía de aprendizaje
3. Contacta a tu tutor asignado
4. Participa en los foros de UNAD

---

**Última actualización**: 2026-06-19  
**Versión**: 1.0.0  
**Estado**: Producción
