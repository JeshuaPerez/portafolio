# Portafolio personal

Portafolio estático en HTML, CSS y JavaScript puro. Sin dependencias ni compilación.

## Características

- Modo oscuro y claro (detecta el tema del sistema y recuerda tu elección).
- Español e inglés (detecta el idioma del navegador; también acepta `?lang=en`).
- Orden pensado para reclutadores: inicio, proyectos, sobre mí, stack, servicios, personal y contacto.
- Sección de habilidades agrupada por área, con el bloque de backend destacado.
- Portadas de proyecto: usa la captura de `cover` o dibuja una portada con el nombre del proyecto.
- Rutina compacta que resalta el bloque actual según la hora real en Guatemala.
- Entorno de desarrollo: tarjeta tipo neofetch y herramientas del día a día.
- Animaciones de revelado, contador animado, máquina de escribir y cursor luminoso.
- Respeta `prefers-reduced-motion` y es navegable con teclado.

## Estructura

```
portafolio/
├── index.html          Estructura de la página
├── css/styles.css      Estilos y tokens de color (tema oscuro/claro)
├── js/config.js        TU CONTENIDO: datos personales, proyectos, servicios
├── js/i18n.js          Textos de la interfaz en ES y EN
├── js/main.js          Comportamiento (tema, idioma, animaciones, rutina)
└── assets/
    ├── img/*.webp      Fotos optimizadas (perfil y galería) + og-image.jpg
    └── CV_Jeshua_Perez.pdf   Tu CV
```

## Cómo verlo localmente

Abre `index.html` en el navegador, o levanta un servidor simple:

```bash
cd portafolio
python3 -m http.server 8000
# luego visita http://localhost:8000
```

## Cómo personalizarlo

1. Abre `js/config.js` y reemplaza los datos: nombre, correo, GitHub, LinkedIn, estadísticas, diferenciadores, proyectos, habilidades, servicios y rutina.
2. Reemplaza `assets/img/perfil.webp` por tu foto (puedes cambiar la ruta en `profile.photo`). Usa una imagen cuadrada.
3. Actualiza tu CV en `assets/CV_Jeshua_Perez.pdf`.
4. Para cambiar la paleta, edita las variables de color en `css/styles.css` (bloques `[data-theme="dark"]` y `[data-theme="light"]`).

Los textos bilingües usan la forma `{ es: "...", en: "..." }`. Si agregas un texto nuevo, escribe siempre ambos idiomas.

## Publicarlo en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `portafolio`.
2. Sube estos archivos:
   ```bash
   git init
   git add .
   git commit -m "Primera versión del portafolio"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/portafolio.git
   git push -u origin main
   ```
3. En el repositorio ve a **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`.
4. En unos minutos tu sitio estará en `https://tu-usuario.github.io/portafolio/`.

El archivo `.nojekyll` evita que GitHub procese el sitio con Jekyll.

## Secciones y dónde se editan

| Sección | Clave en `js/config.js` |
| --- | --- |
| Inicio | `profile`, `heroFacts` |
| Proyectos destacados | `projects` (campo `cover` para la captura) |
| Sobre mí | `bio`, `stats`, `differentiators` |
| Habilidades y stack | `skills.groups`, `skills.practices`, `environment` |
| Servicios | `services` (cada uno con `pain`, `desc` e `items`) |
| Fuera del código | `personal`, `lifestyle`, `storyDay` |

## Siguientes pasos sugeridos

- Agregar una captura a cada proyecto en `projects[].cover` (1200×675 px, `.webp`).
- Agregar una página de proyecto individual para cada trabajo.
- Conectar el formulario de contacto a un servicio como Formspree.
- Medir visitas con una herramienta como Plausible o Google Analytics.
- Crear una versión con URL propia por idioma (`/es/` y `/en/`) para mejorar el SEO.
