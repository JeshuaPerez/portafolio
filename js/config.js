/* ==========================================================
   CONFIGURACIÓN PERSONAL
   Edita SOLO este archivo para cambiar tu contenido.
   Los textos bilingües usan la forma { es: "...", en: "..." }.
   ========================================================== */
window.PORTFOLIO_CONFIG = {

  profile: {
    name: "Jeshua Odsman Pérez López",
    title: { es: "Jeshua Pérez · Portafolio", en: "Jeshua Pérez · Portfolio" },
    role: { es: "Técnico en Desarrollo de Software", en: "Software Development Technician" },
    roles: {
      es: ["Técnico en Desarrollo de Software", "Perito Contador", "Estudiante de tecnología", "Entusiasta de la IA"],
      en: ["Software Development Technician", "Accounting Technician", "Tech student", "AI enthusiast"]
    },
    location: { es: "Santa Catarina Pinula, Guatemala", en: "Santa Catarina Pinula, Guatemala" },
    timezone: "America/Guatemala",
    email: "perezjeshua0999@gmail.com",
    github: "https://github.com/JeshuaPerez",
    linkedin: "https://www.linkedin.com/in/jeshua-perez-ods2007",
    cv: "assets/CV_Jeshua_Perez.pdf",
    photo: "assets/img/perfil.webp",
    photoHero: "assets/img/perfil-profesional.webp"
  },

  bio: {
    es: [
      "Soy un desarrollador entusiasta, retador conmigo mismo y enfocado en crear interfaces claras y sistemas que funcionan. Me gusta convertir mis ideas en proyectos reales, desde el diseño hasta el despliegue, investigando tecnologías nuevas y avanzando paso a paso.",
      "Aprendo construyendo: cada proyecto es una oportunidad para mejorar mi código, mi diseño y la forma en que comunico lo que hago, apoyándome en la inteligencia artificial como mi principal aliada de aprendizaje y diseño.",
      "Fuera del código me gustan los retos: entreno cuerpo y mente con disciplina, y disfruto deportes de adrenalina como el motocross, el enduro, el downhill y el fútbol. Soy creyente, le doy mucho valor a los pequeños momentos junto a mi familia y disfruto perderme en la naturaleza (senderos, montañas, bosques y ríos) tanto como compartir tiempo con mis amigos."
    ],
    en: [
      "I'm an enthusiastic developer who challenges himself to build clear interfaces and systems that work. I enjoy turning my ideas into real projects, from design to deployment, researching new technologies and moving forward step by step.",
      "I learn by building: every project is a chance to improve my code, my design and the way I communicate what I do, leaning on artificial intelligence as my main ally for learning and design.",
      "Outside of code I love a challenge: I train my body and mind with discipline, and I enjoy adrenaline sports like motocross, enduro, downhill and soccer. I'm a person of faith, I treasure small moments with my family, and I love getting lost in nature (trails, mountains, forests and rivers) as much as spending time with my friends."
    ]
  },

  lifestyle: [
    { photo: "assets/img/dh.webp", caption: { es: "Downhill", en: "Downhill" } },
    { photo: "assets/img/enduro.webp", caption: { es: "Enduro", en: "Enduro" } },
    { photo: "assets/img/montana.webp", caption: { es: "Montaña y senderismo", en: "Mountains & hiking" } }
  ],

  stats: [
    { value: 17, label: { es: "Cursos completados", en: "Courses completed" } },
    { value: 9, label: { es: "Proyectos en GitHub", en: "GitHub projects" } },
    { value: 9, label: { es: "Tecnologías", en: "Technologies" } }
  ],

  storyDay: [
    {
      time: "07:00",
      title: { es: "Despertar y café", en: "Wake up and coffee" },
      text: { es: "Reviso mensajes y defino las tres prioridades del día.", en: "Check messages and define the day's three priorities." }
    },
    {
      time: "09:00",
      title: { es: "Bloque de código", en: "Deep work block" },
      text: { es: "Sin distracciones: programo, pruebo y resuelvo lo más difícil primero.", en: "No distractions: I code, test and tackle the hardest problem first." }
    },
    {
      time: "13:00",
      title: { es: "Almuerzo", en: "Lunch" },
      text: { es: "Pausa real, lejos de la pantalla.", en: "A real break, away from the screen." }
    },
    {
      time: "15:00",
      title: { es: "Aprender y experimentar", en: "Learn and experiment" },
      text: { es: "Tutoriales, pruebas de concepto y revisión de código.", en: "Tutorials, proofs of concept and code review." }
    },
    {
      time: "18:00",
      title: { es: "Gimnasio", en: "Gym" },
      text: { es: "Entreno para mantener la energía y la cabeza despejada.", en: "I train to keep my energy up and my mind clear." }
    },
    {
      time: "21:00",
      title: { es: "Lectura y cierre", en: "Reading and wrap-up" },
      text: { es: "Anoto lo aprendido y preparo el siguiente día.", en: "I note what I learned and prepare for tomorrow." }
    }
  ],

  environment: {
    info: [
      { key: "OS", value: "Windows + Linux" },
      { key: "Editor", value: "VS Code" },
      { key: "Versionado", value: "Git + GitHub" },
      { key: "Contenedores", value: "Docker" },
      { key: "Notas", value: "Notion" },
      { key: "IA", value: "Claude · Gemini · ChatGPT" }
    ],
    tools: [
      {
        name: "VS Code",
        category: { es: "Editor", en: "Editor" },
        note: { es: "Mi editor principal para frontend, backend y scripts.", en: "My main editor for frontend, backend and scripts." }
      },
      {
        name: "Git & GitHub",
        category: { es: "Control de versiones", en: "Version control" },
        note: { es: "Repositorios, control de versiones y mi portafolio de proyectos.", en: "Repositories, version control and my project portfolio." }
      },
      {
        name: "Docker",
        category: { es: "Entorno", en: "Environment" },
        note: { es: "Contenedores para bases de datos y servicios locales.", en: "Containers for databases and local services." }
      },
      {
        name: "Notion",
        category: { es: "Organización", en: "Organization" },
        note: { es: "Tableros Scrum, notas y seguimiento de proyectos.", en: "Scrum boards, notes and project tracking." }
      },
      {
        name: "Claude · Gemini · ChatGPT",
        category: { es: "Asistentes de IA", en: "AI assistants" },
        note: { es: "Apoyo para aprender, depurar y acelerar el desarrollo.", en: "Support for learning, debugging and speeding up development." }
      }
    ]
  },

  projects: [
    {
      slug: "foodierank",
      title: "FoodieRank",
      description: {
        es: "Plataforma para calificar y rankear restaurantes: reseñas con estrellas, likes/dislikes y un ranking calculado automáticamente. API REST con autenticación JWT y panel para administrar categorías.",
        en: "Platform to rate and rank restaurants: star reviews, likes/dislikes and an automatically calculated ranking. REST API with JWT auth and an admin panel for categories."
      },
      stack: ["Node.js", "Express", "MongoDB", "JWT", "JavaScript"],
      demo: "https://jeshuaperez.github.io/FoodieRank-frontend/",
      repo: "https://github.com/JeshuaPerez/FoodieRank-backend"
    },
    {
      slug: "downhill-bikes",
      title: "Downhill Bikes",
      description: {
        es: "Sitio temático sobre downhill: landing con atletas, registro de usuarios y contenido multimedia. Proyecto de práctica de HTML y CSS, en honor a uno de mis deportes favoritos.",
        en: "Downhill-themed site: a landing page with athletes, user registration and media content. An HTML/CSS practice project, in honor of one of my favorite sports."
      },
      stack: ["HTML", "CSS"],
      repo: "https://github.com/JeshuaPerez/Proyecto_HTML_tema_Libre"
    },
    {
      slug: "conciertos-conectados",
      title: "Conciertos Conectados",
      description: {
        es: "Plataforma para gestionar y vender entradas a conciertos y eventos en vivo en Guatemala, con panel de administración y datos persistidos en el navegador.",
        en: "Platform to manage and sell tickets for concerts and live events in Guatemala, with an admin panel and browser-based data storage."
      },
      stack: ["JavaScript", "HTML", "CSS"],
      repo: "https://github.com/JeshuaPerez/Proyecto_Conciertos_P-rez_Jeshua"
    },
    {
      slug: "gestion-inmuebles",
      title: "Gestión de inmuebles",
      description: {
        es: "Listado y edición de propiedades inmobiliarias: alta, edición y eliminación de inmuebles desde el navegador.",
        en: "Listing and editing of real estate properties: create, edit and delete listings from the browser."
      },
      stack: ["JavaScript", "HTML", "CSS"],
      repo: "https://github.com/JeshuaPerez/proyecto_review"
    }
  ],

  services: [
    {
      title: { es: "Sitios web y landing pages", en: "Websites and landing pages" },
      desc: { es: "Sitios rápidos, adaptables a celular y fáciles de mantener, publicados y listos para compartir.", en: "Fast, mobile-friendly and easy-to-maintain sites, published and ready to share." },
      items: {
        es: ["Landing pages", "Sitios adaptables a celular", "Publicación y despliegue"],
        en: ["Landing pages", "Mobile-friendly sites", "Publishing and deployment"]
      }
    },
    {
      title: { es: "Aplicaciones web con APIs", en: "Web apps with APIs" },
      desc: { es: "Aplicaciones con backend propio e integración de APIs, como mi proyecto FoodieRank.", en: "Apps with their own backend and API integration, like my FoodieRank project." },
      items: {
        es: ["API REST con Node.js y Express", "Autenticación con JWT", "Bases de datos MongoDB"],
        en: ["REST API with Node.js and Express", "JWT authentication", "MongoDB databases"]
      }
    },
    {
      title: { es: "Diseño de interfaces", en: "Interface design" },
      desc: { es: "Pantallas claras y consistentes, pensadas alrededor del usuario.", en: "Clear, consistent screens designed around the user." },
      items: {
        es: ["Prototipos", "Sistema de componentes", "Pruebas de usabilidad"],
        en: ["Prototypes", "Component system", "Usability tests"]
      }
    }
  ]
};
