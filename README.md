# 🛡️ Reto 4 - Arquitectura de Ciber-Resiliencia Organizacional

Página web interactiva educativa que presenta los conceptos, pilares y estrategias de diseño de arquitectura para la ciber-resiliencia organizacional.

## 📋 Contenidos

### HTML (`index.html`)

- **Navbar Responsivo**: Navegación fija con enlaces a todas las secciones
- **Hero Section**: Portada atractiva con call-to-action
- **Estadísticas**: Métricas clave sobre ciber-resiliencia (5 pilares, cobertura 360°, monitoreo 24/7)
- **Conceptos Fundamentales**: 6 tarjetas educativas con:
  - Ciberseguridad
  - Resiliencia
  - Arquitectura
  - Continuidad
  - Recuperación
  - Mejora Continua
- **Los 5 Pilares**: Desarrollo detallado de:
  1. **Prevención**: Firewalls, VPN, MFA, Encriptación
  2. **Detección**: SIEM/SOC, IDS/IPS, EDR
  3. **Respuesta**: Plan de Crisis, Equipo CSIRT, Comunicación
  4. **Recuperación**: Backup/Restore, DR Plan, RTO/RPO
  5. **Aprendizaje**: Post-Mortem, Métricas, Capacitación
- **Estrategias de Implementación**:
  - Modelo por Capas (Perimetral, Acceso, Aplicación, Datos)
  - Modelo Organizacional (Liderazgo, Gobernanza, Operaciones, Técnica, Comunicación)
- **Matriz de Madurez**: Tabla de 5 niveles (Inicial → Optimizado)
- **Modal de Evaluación**: Herramienta interactiva para autoevaluación
- **Footer**: Enlaces y créditos

### CSS (`styles.css` + Tailwind)

- **Variables CSS**: Colores consistentes y personalizables
- **Sistema de Componentes**:
  - Botones (Primary, Secondary, Outline)
  - Tarjetas mejoradas con hover effects
  - Badges de categorías
  - Alertas (Info, Success, Warning, Danger)
  - Tablas responsivas
  - Formularios accesibles
- **Tooltips Interactivos**: Todas las siglas muestran su significado completo al pasar el mouse
  - **SIEM**, **SOC**, **IDS**, **IPS**, **EDR** (Seguridad y Detección)
  - **MFA**, **VPN**, **CISO** (Autenticación y Acceso)
  - **CSIRT**, **RTO**, **RPO**, **DR** (Respuesta y Recuperación)
  - **DLP** (Protección de Datos)
  - 15+ siglas con definiciones completas
- **Animaciones Suaves**:
  - Pulse, Slide-in (directions), Fade-in
  - Scroll animations
  - Hover effects (lift, scale, opacity)
- **Modo Oscuro**: Soporte automático para preferencias del sistema
- **Responsive Design**: Mobile-first approach
- **Tailwind CSS**: Framework de utilidades para estilos rápidos

### JavaScript (`script.js`)

- **Modal Management**:
  - `startAssessment()`: Abrir evaluación
  - `closeAssessment()`: Cerrar modal
  - `submitAssessment()`: Procesar respuesta y guardar
- **LocalStorage Integration**:
  - Guardar nivel de resiliencia
  - Guardar fecha de evaluación
  - Guardar métricas personalizadas
- **ResilienceTracker**: Clase para gestionar métricas
  - `loadMetrics()`: Cargar datos guardados
  - `saveMetrics()`: Persistir datos
  - `getReport()`: Generar reporte
- **Animaciones**: Intersection Observer para scroll animations
- **Navegación Suave**: Smooth scroll a secciones
- **Temas**: Toggle entre modo claro/oscuro
- **Utilidades**:
  - `showNotification()`: Notificaciones toast
  - `validateForm()`: Validación de formularios
  - `generateReport()`: Reporte en consola
  - `exportData()`: Descargar JSON con datos
  - `printReport()`: Imprimir página

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear un repositorio en GitHub

```bash
# Clonar o crear nuevo repo
git init
git add .
git commit -m "Initial commit: Reto 4 - Ciber-Resiliencia"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

### Paso 2: Habilitar GitHub Pages

1. Ve a **Settings** de tu repositorio
2. Scroll down a **Pages**
3. Selecciona **Deploy from a branch**
4. Elige **main** como rama y **/root** como carpeta
5. Haz clic en **Save**

### Paso 3: Acceder a tu sitio

Tu sitio estará disponible en:

```
https://tu-usuario.github.io/tu-repo/
```

## 📁 Estructura de Archivos

```
Reto4CR/
├── index.html          # Página principal
├── script.js           # Lógica interactiva
├── styles.css          # Estilos personalizados
├── README.md           # Este archivo
└── assets/             # (opcional) Imágenes, fonts
```

## 🎨 Características

✅ **Responsivo**: Funciona en desktop, tablet y móvil  
✅ **Interactivo**: Modal de evaluación con feedback personalizado  
✅ **Tooltips Inteligentes**: Pasa el mouse sobre cualquier sigla para ver su significado completo  
✅ **Accesible**: Semántica HTML correcta, contraste adecuado  
✅ **Rápido**: Carga instantánea, sin dependencias externas innecesarias  
✅ **Educativo**: Contenido estructurado y fácil de entender  
✅ **Moderno**: Diseño limpio con Tailwind CSS  
✅ **Persistente**: Guarda datos del usuario en localStorage

## 📊 Matriz de Madurez

| Nivel          | Descripción                            | Características                       |
| -------------- | -------------------------------------- | ------------------------------------- |
| 1 - Inicial    | Procesos ad-hoc sin estructura         | Sin documentación, reactivo           |
| 2 - Repetible  | Procesos definidos e implementados     | Estándares básicos, algunos controles |
| 3 - Definido   | Procesos documentados y mejorados      | Políticas formales, medición          |
| 4 - Gestionado | Procesos cuantitativamente gestionados | Métricas, automatización              |
| 5 - Optimizado | Mejora continua e innovación           | Ciclos de aprendizaje, IA/ML          |

## 🔧 Personalización

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
  --primary-color: #667eea; /* Cambiar color principal */
  --primary-dark: #764ba2;
  --secondary-color: #f093fb;
  --success-color: #48bb78;
  /* ... más variables */
}
```

### Agregar Contenido

1. Abre `index.html`
2. Localiza la sección a editar
3. Modifica el contenido HTML
4. Guarda y sube a GitHub

### Extender Funcionalidad

En `script.js`, agrega nuevas funciones:

```javascript
function miNuevaFuncion() {
  // Tu código aquí
}
```

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Mobile browsers

## 🎓 Objetivos de Aprendizaje

Los estudiantes entenderán:

1. **Conceptos Clave**: Qué es ciberseguridad, resiliencia y continuidad
2. **Los 5 Pilares**: Prevención, Detección, Respuesta, Recuperación, Aprendizaje
3. **Estrategias**: Modelos por capas y organizacionales
4. **Madurez**: Niveles de madurez en ciber-resiliencia
5. **Prácticas**: Herramientas y técnicas reales

## 🔐 Notas de Seguridad

Esta es una **página educativa estática**. No maneja:

- Datos sensibles
- Autenticación real
- Bases de datos
- Transacciones

Los datos se guardan localmente en el navegador del usuario.

## 📝 Licencia

Este proyecto es para fines educativos como parte del Reto 4 de UNAD.

## 👨‍💼 Autor

Desarrollado para UNAD - Reto 4: Diseño de Arquitectura para la Ciber-Resiliencia Organizacional

---

**¿Preguntas?** Revisa la documentación del Reto 4 o consulta con tu tutor.
