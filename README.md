# Portafolio personal

Portafolio estático en HTML, CSS y JavaScript puro. Sin dependencias ni compilación.

## Características

- Modo oscuro y claro (detecta el tema del sistema y recuerda tu elección).
- Español e inglés (detecta el idioma del navegador; también acepta `?lang=en`).
- "Story day": línea de tiempo de tu día que resalta la actividad según el scroll.
- Entorno de desarrollo: tarjeta tipo neofetch, herramientas y una terminal interactiva.
- Terminal con comandos: `help`, `whoami`, `ls`, `cat <proyecto>`, `cat stack.txt`, `contact`, `date`, `theme`, `lang`, `clear`.
- Animaciones de revelado, contador animado, máquina de escribir y cursor luminoso.
- Respeta `prefers-reduced-motion` y es navegable con teclado.

## Estructura

```
portafolio/
├── index.html          Estructura de la página
├── css/styles.css      Estilos y tokens de color (tema oscuro/claro)
├── js/config.js        TU CONTENIDO: datos personales, proyectos, servicios
├── js/i18n.js          Textos de la interfaz en ES y EN
├── js/main.js          Comportamiento (tema, idioma, animaciones, terminal)
└── assets/
    ├── img/perfil.svg  Foto de perfil (reemplazar por tu foto)
    └── cv.pdf          Tu CV (agregar tu archivo)
```

## Cómo verlo localmente

Abre `index.html` en el navegador, o levanta un servidor simple:

```bash
cd portafolio
python3 -m http.server 8000
# luego visita http://localhost:8000
```

## Cómo personalizarlo

1. Abre `js/config.js` y reemplaza los datos de ejemplo: nombre, correo, GitHub, LinkedIn, estadísticas, rutina, herramientas, proyectos y servicios.
2. Reemplaza `assets/img/perfil.svg` por tu foto (puedes cambiar la ruta en `profile.photo`). Usa una imagen cuadrada.
3. Agrega tu CV como `assets/cv.pdf`.
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

## Siguientes pasos sugeridos

- Agregar una página de proyecto individual para cada trabajo.
- Conectar el formulario de contacto a un servicio como Formspree.
- Medir visitas con una herramienta como Plausible o Google Analytics.
- Crear una versión con URL propia por idioma (`/es/` y `/en/`) para mejorar el SEO.
