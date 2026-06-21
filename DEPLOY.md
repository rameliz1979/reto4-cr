# 📖 Guía Completa de Despliegue en GitHub Pages

## Requisitos Previos

- Cuenta en [GitHub](https://github.com)
- Git instalado en tu computadora
- Navegador web actualizado

## Paso 1: Preparar los Archivos Locales

Asegúrate de tener todos estos archivos en tu carpeta `Reto4CR`:

```
✓ index.html
✓ script.js
✓ styles.css
✓ README.md
✓ .gitignore
```

## Paso 2: Inicializar Git Localmente

Abre PowerShell o CMD en tu carpeta `Reto4CR`:

```bash
# Navegar a la carpeta del proyecto
cd "C:\Users\LENOVO\Documents\ProyectosUnad\Reto4CR"

# Inicializar git
git init

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Inicial: Reto 4 - Arquitectura de Ciber-Resiliencia"
```

## Paso 3: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com)
2. Haz login en tu cuenta
3. Haz clic en el **+** (arriba a la derecha)
4. Selecciona **New repository**
5. **Nombre del repo**: `reto4-ciberresiliencia` (o el que prefieras)
6. **Descripción**: "Arquitectura de Ciber-Resiliencia Organizacional"
7. Selecciona **Public**
8. **NO** marques "Initialize this repository with..."
9. Haz clic en **Create repository**

## Paso 4: Conectar Git Local con GitHub

En tu PowerShell/CMD, ejecuta:

```bash
# Cambiar rama a main (requerido por GitHub Pages)
git branch -M main

# Agregar el remoto
git remote add origin https://github.com/TU_USUARIO/reto4-ciberresiliencia.git

# Subir código
git push -u origin main
```

⚠️ **Nota**: Reemplaza `TU_USUARIO` con tu nombre de usuario en GitHub.

## Paso 5: Habilitar GitHub Pages

1. En tu repositorio GitHub, ve a **Settings**
2. En el menú izquierdo, haz clic en **Pages**
3. Bajo **Build and deployment**:
   - **Source**: Selecciona "Deploy from a branch"
   - **Branch**: Selecciona `main`
   - **Folder**: Selecciona `/ (root)`
4. Haz clic en **Save**

GitHub mostrará un mensaje: "Your site is live at `https://tu-usuario.github.io/reto4-ciberresiliencia/`"

## Paso 6: Acceder a tu Sitio

Espera **2-3 minutos** y luego abre:

```
https://tu-usuario.github.io/reto4-ciberresiliencia/
```

¡Listo! Tu página web está en vivo.

## Actualizar Contenido

Si deseas hacer cambios después:

```bash
# 1. Realiza cambios en los archivos (HTML, CSS, JS)

# 2. Agregar cambios
git add .

# 3. Hacer commit
git commit -m "Descripción de los cambios"

# 4. Subir a GitHub
git push
```

Los cambios se reflejarán en **2-5 minutos**.

## Estructura de URL

```
https://github.com/tu-usuario/reto4-ciberresiliencia/  ← Repo en GitHub
https://tu-usuario.github.io/reto4-ciberresiliencia/    ← Sitio publicado
```

## Solución de Problemas

### El sitio no está disponible después de 5 minutos

1. Verifica que **Pages** esté habilitado en Settings
2. Confirma que la rama sea **main**
3. Revisa que el folder sea **/ (root)**
4. Espera un poco más (a veces toma hasta 10 minutos)

### Los cambios no se reflejan

```bash
# Fuerza una actualización de caché
git pull origin main
git push -f origin main
```

### Error: "fatal: 'origin' does not appear to be a 'git' repository"

Ejecuta:

```bash
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/reto4-ciberresiliencia.git
git push -u origin main
```

### No veo estilos en el sitio publicado

1. Verifica que `index.html` tenga la ruta correcta a Tailwind CDN
2. Comprueba que `styles.css` sea linkado correctamente
3. Revisa la consola del navegador (F12) para errores de CORS

## Dominio Personalizado (Opcional)

Si deseas usar un dominio propio:

1. Ve a **Settings → Pages**
2. Bajo **Custom domain**, ingresa tu dominio (ej: `mi-sitio.com`)
3. Agrega registros DNS en tu proveedor de dominios

[Documentación de GitHub Pages sobre dominios](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Estadísticas de Visitas

GitHub Pages no incluye analytics. Para rastrear visitas, puedes agregar:

- [Google Analytics](https://analytics.google.com/)
- [Vercel Analytics](https://vercel.com/analytics)
- [Plausible Analytics](https://plausible.io/)

## Seguridad

✅ Los archivos son públicos (es una página estática)  
✅ No hay información sensible expuesta  
✅ HTTPS automático (GitHub Pages lo proporciona)  
✅ Los datos se guardan en el localStorage del navegador del usuario

## Recursos Adicionales

- [Documentación oficial de GitHub Pages](https://docs.github.com/en/pages)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Tutorial de Git](https://git-scm.com/doc)

---

**¡Éxito con tu despliegue! 🚀**

Si tienes problemas, consulta la documentación oficial o pide ayuda a tu tutor.
