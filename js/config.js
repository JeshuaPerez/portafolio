/* ==========================================================
   CONFIGURACIÓN PERSONAL
   Edita SOLO este archivo para cambiar tu contenido.
   Los textos bilingües usan la forma { es: "...", en: "..." }.
   ========================================================== */
window.PORTFOLIO_CONFIG = {

  profile: {
    name: "Jeshua Odsman Pérez López",
    brand: "Jeshua Pérez",
    title: { es: "Jeshua Pérez · Desarrollador Backend", en: "Jeshua Pérez · Backend Developer" },
    role: { es: "Desarrollador Backend", en: "Backend Developer" },
    roles: {
      es: ["APIs REST con Node.js y Express", "Bases de datos SQL y NoSQL", "Autenticación y seguridad con JWT", "Técnico en Desarrollo de Software"],
      en: ["REST APIs with Node.js and Express", "SQL and NoSQL databases", "Auth and security with JWT", "Software Development Technician"]
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

  /* Tres datos cortos que se muestran debajo de los botones del inicio. */
  heroFacts: {
    es: ["Node.js · Express · MongoDB", "Técnico en Desarrollo de Software", "Guatemala · Remoto o híbrido"],
    en: ["Node.js · Express · MongoDB", "Software Development Technician", "Guatemala · Remote or hybrid"]
  },

  /* ---------- SOBRE MÍ: trayectoria y diferenciadores ---------- */
  bio: {
    es: [
      "Soy Técnico en Desarrollo de Software y me enfoco en la parte que no se ve: el servidor, la base de datos y la API que sostienen una aplicación. Mi proyecto más completo es FoodieRank, hecho en equipo con metodología Scrum: una API REST con Node.js, Express y MongoDB, con autenticación JWT y un ranking que se calcula del lado del servidor.",
      "Antes de programar estudié Perito Contador, y eso cambió la forma en que escribo backend: estoy acostumbrado a cuadrar cifras, respetar reglas de negocio y desconfiar de un dato que no coincide. Cuando modelo una base de datos o valido una petición, pienso primero en la integridad de la información."
    ],
    en: [
      "I am a Software Development Technician focused on the part you do not see: the server, the database and the API that hold an application together. My most complete project is FoodieRank, built as a team with Scrum: a REST API with Node.js, Express and MongoDB, with JWT authentication and a ranking calculated server-side.",
      "Before programming I trained as an Accounting Technician, and that shaped how I write backend code: I am used to balancing figures, respecting business rules and distrusting a number that does not add up. When I model a database or validate a request, I think about data integrity first."
    ]
  },

  /* Lo que te diferencia de otro candidato junior. Sé concreto. */
  differentiators: {
    es: [
      { title: "Formación contable aplicada al código", text: "Entiendo reglas de negocio, cálculos y validaciones antes de escribirlas: una ventaja real en sistemas de facturación, inventarios o cualquier dato que deba cuadrar." },
      { title: "Proyectos terminados y publicados", text: "No dejo trabajos a medias. Cada proyecto está en GitHub, documentado y desplegado cuando aplica, para que se pueda revisar el código y no solo una captura." },
      { title: "Aprendizaje rápido y constante", text: "17 cursos completados y tecnologías nuevas en cada proyecto. Uso la IA como herramienta de estudio y depuración, no como atajo." },
      { title: "Disciplina traída del deporte", text: "Entreno y compito en deportes de resistencia. La misma constancia la aplico a terminar lo que empiezo y a sostener un ritmo de trabajo." }
    ],
    en: [
      { title: "Accounting background applied to code", text: "I understand business rules, calculations and validations before writing them: a real advantage in billing, inventory or any system where numbers must add up." },
      { title: "Finished, published projects", text: "I do not leave work half done. Every project is on GitHub, documented and deployed where it applies, so anyone can review the code and not just a screenshot." },
      { title: "Fast, constant learning", text: "17 courses completed and new technologies in every project. I use AI as a study and debugging tool, not as a shortcut." },
      { title: "Discipline brought from sport", text: "I train and compete in endurance sports. I apply that same consistency to finishing what I start and keeping a steady work rhythm." }
    ]
  },

  stats: [
    { value: 17, label: { es: "Cursos completados", en: "Courses completed" } },
    { value: 9, label: { es: "Proyectos en GitHub", en: "GitHub projects" } },
    { value: 4, label: { es: "Proyectos destacados", en: "Featured projects" } }
  ],

  /* ---------- PROYECTOS DESTACADOS ----------
     cover: ruta de una captura (ej. "assets/img/projects/foodierank.webp").
     Si la dejas vacía, la tarjeta dibuja una portada con el nombre del proyecto. */
  projects: [
    {
      slug: "foodierank",
      title: "FoodieRank",
      kind: { es: "Backend · API REST · En equipo", en: "Backend · REST API · Team project" },
      cover: "",
      description: {
        es: "Plataforma para calificar y rankear restaurantes: reseñas con estrellas, likes/dislikes y un ranking calculado automáticamente. API REST con autenticación JWT y panel para administrar categorías.",
        en: "Platform to rate and rank restaurants: star reviews, likes/dislikes and an automatically calculated ranking. REST API with JWT auth and an admin panel for categories."
      },
      highlight: {
        es: "Proyecto en equipo de dos personas con metodología Scrum. Mi trabajo se concentró en la API: modelado de datos, rutas protegidas por rol y el cálculo del ranking en el servidor.",
        en: "A two-person team project run with Scrum. My work focused on the API: data modeling, role-protected routes and server-side ranking calculation."
      },
      stack: ["Node.js", "Express", "MongoDB", "JWT", "JavaScript"],
      demo: "https://jeshuaperez.github.io/FoodieRank-frontend/",
      repo: "https://github.com/JeshuaPerez/FoodieRank-backend"
    },
    {
      slug: "conciertos-conectados",
      title: "Conciertos Conectados",
      kind: { es: "Aplicación web · Lógica de negocio", en: "Web app · Business logic" },
      cover: "",
      description: {
        es: "Plataforma para gestionar y vender entradas a conciertos y eventos en vivo en Guatemala, con panel de administración y datos persistidos en el navegador.",
        en: "Platform to manage and sell tickets for concerts and live events in Guatemala, with an admin panel and browser-based data storage."
      },
      highlight: {
        es: "Construido con Web Components nativos: carrito, checkout y un panel de administración con estadísticas de ventas.",
        en: "Built with native Web Components: cart, checkout and an admin panel with sales statistics."
      },
      stack: ["JavaScript", "Web Components", "HTML", "CSS"],
      repo: "https://github.com/JeshuaPerez/conciertos-conectados"
    },
    {
      slug: "stream-music-app",
      title: "MusicStream",
      kind: { es: "Frontend · 7 pantallas", en: "Frontend · 7 screens" },
      cover: "",
      description: {
        es: "Interfaz completa de una plataforma de streaming y venta de música: portada, detalle de álbum, reproductor, carrito, pago y perfil. Siete pantallas maquetadas a mano, sin frameworks.",
        en: "Full interface for a music streaming and store platform: home, album detail, player, cart, checkout and profile. Seven screens hand-coded, with no frameworks."
      },
      highlight: {
        es: "HTML5 semántico de principio a fin y CSS separado en bases, estructura y componentes reutilizables.",
        en: "Semantic HTML5 throughout and CSS split into base, layout and reusable components."
      },
      stack: ["HTML5", "CSS3", "Diseño responsive"],
      repo: "https://github.com/JeshuaPerez/stream-music-app"
    },
    {
      slug: "downhill-bikes",
      title: "Downhill Bikes",
      kind: { es: "Frontend · Maquetación", en: "Frontend · Markup" },
      cover: "",
      description: {
        es: "Sitio temático sobre downhill: landing con atletas, registro de usuarios y contenido multimedia. Proyecto de práctica de HTML y CSS, en honor a uno de mis deportes favoritos.",
        en: "Downhill-themed site: a landing page with athletes, user registration and media content. An HTML/CSS practice project, in honor of one of my favorite sports."
      },
      highlight: {
        es: "Maquetación responsive desde cero, sin frameworks ni plantillas.",
        en: "Responsive markup from scratch, with no frameworks or templates."
      },
      stack: ["HTML", "CSS"],
      repo: "https://github.com/JeshuaPerez/downhill-bikes"
    }
  ],

  /* ---------- HABILIDADES Y STACK ----------
     Borra lo que no manejes: es mejor una lista corta y honesta.
     El grupo con main: true recibe el doble de ancho en escritorio. */
  skills: {
    groups: [
      {
        title: { es: "Backend y APIs", en: "Backend & APIs" },
        note: { es: "Mi foco principal y donde quiero seguir creciendo.", en: "My main focus and where I want to keep growing." },
        main: true,
        items: ["Node.js", "Express", "API REST", "Autenticación JWT", "Arquitectura MVC", "Validación y manejo de errores", "Rutas protegidas por rol"]
      },
      {
        title: { es: "Bases de datos", en: "Databases" },
        note: { es: "Modelado, consultas y relaciones entre colecciones o tablas.", en: "Modeling, queries and relationships between collections or tables." },
        items: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "SQL", "Modelado de datos"]
      },
      {
        title: { es: "Lenguajes", en: "Languages" },
        note: { es: "JavaScript es mi lenguaje del día a día.", en: "JavaScript is my day-to-day language." },
        items: ["JavaScript", "Python", "Java", "C#", "SQL"]
      },
      {
        title: { es: "Frontend", en: "Frontend" },
        note: { es: "Lo suficiente para construir y consumir mis propias APIs.", en: "Enough to build and consume my own APIs." },
        items: ["HTML5", "CSS3", "JavaScript (DOM)", "Fetch API", "Diseño responsive", "Accesibilidad básica"]
      }
    ],
    /* Habilidades y prácticas que no son un lenguaje ni un framework. */
    practices: {
      es: ["Git y trabajo con ramas", "Metodología Scrum", "Documentación técnica", "Despliegue en GitHub Pages", "Inglés técnico de lectura", "IA como apoyo de estudio y depuración"],
      en: ["Git and branch workflows", "Scrum methodology", "Technical documentation", "Deployment on GitHub Pages", "Technical English reading", "AI as a study and debugging aid"]
    }
  },

  /* Tarjeta tipo neofetch del entorno de trabajo. */
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
        note: { es: "Mi editor principal para backend, frontend y scripts.", en: "My main editor for backend, frontend and scripts." }
      },
      {
        name: "Git & GitHub",
        category: { es: "Control de versiones", en: "Version control" },
        note: { es: "Repositorios, ramas y revisión de mi propio historial.", en: "Repositories, branches and reviewing my own history." }
      },
      {
        name: "Docker",
        category: { es: "Entorno", en: "Environment" },
        note: { es: "Contenedores para levantar bases de datos y servicios locales.", en: "Containers to spin up databases and local services." }
      },
      {
        name: "Postman",
        category: { es: "Pruebas de API", en: "API testing" },
        note: { es: "Pruebo cada endpoint antes de conectarlo al frontend.", en: "I test every endpoint before wiring it to the frontend." }
      },
      {
        name: "Notion",
        category: { es: "Organización", en: "Organization" },
        note: { es: "Tableros Scrum, notas y seguimiento de proyectos.", en: "Scrum boards, notes and project tracking." }
      },
      {
        name: "Claude · Gemini · ChatGPT",
        category: { es: "Asistentes de IA", en: "AI assistants" },
        note: { es: "Apoyo para estudiar, depurar y revisar mi código.", en: "Support to study, debug and review my code." }
      }
    ]
  },

  /* ---------- SERVICIOS: qué problema resuelve cada uno ---------- */
  services: [
    {
      title: { es: "APIs y backend a medida", en: "Custom APIs and backend" },
      pain: {
        es: "Tienes una aplicación o una idea, pero los datos no se guardan bien, no hay control de usuarios o todo vive en una hoja de cálculo.",
        en: "You have an app or an idea, but data is not stored properly, there is no user control, or everything lives in a spreadsheet."
      },
      desc: {
        es: "Construyo el servidor y la base de datos que sostienen tu producto, con endpoints documentados y usuarios con permisos separados.",
        en: "I build the server and database behind your product, with documented endpoints and users with separate permissions."
      },
      items: {
        es: ["API REST con Node.js y Express", "Autenticación y roles con JWT", "Base de datos modelada desde cero"],
        en: ["REST API with Node.js and Express", "Authentication and roles with JWT", "Database modeled from scratch"]
      }
    },
    {
      title: { es: "Aplicaciones web completas", en: "Complete web apps" },
      pain: {
        es: "Necesitas administrar algo real (pedidos, entradas, inventario, propiedades) y hoy se lleva a mano.",
        en: "You need to manage something real (orders, tickets, inventory, properties) and today it is done by hand."
      },
      desc: {
        es: "Entrego la aplicación de punta a punta: pantallas para el usuario, panel de administración y la lógica que valida cada operación.",
        en: "I deliver the app end to end: user-facing screens, an admin panel and the logic that validates every operation."
      },
      items: {
        es: ["Panel de administración", "Operaciones CRUD validadas", "Cálculos y reglas de negocio"],
        en: ["Admin panel", "Validated CRUD operations", "Calculations and business rules"]
      }
    },
    {
      title: { es: "Sitios web y landing pages", en: "Websites and landing pages" },
      pain: {
        es: "No apareces en internet, o tu sitio carga lento y se ve mal desde el celular, que es por donde entra casi todo el mundo.",
        en: "You are not online, or your site loads slowly and looks broken on mobile, which is how almost everyone arrives."
      },
      desc: {
        es: "Sitios ligeros, adaptables a celular y fáciles de actualizar, publicados y listos para compartir en una propuesta o una tarjeta.",
        en: "Lightweight, mobile-friendly and easy-to-update sites, published and ready to share in a proposal or a business card."
      },
      items: {
        es: ["Landing pages y sitios informativos", "Adaptable a celular y tablet", "Publicación y despliegue"],
        en: ["Landing pages and informational sites", "Mobile and tablet friendly", "Publishing and deployment"]
      }
    },
    {
      title: { es: "Mantenimiento e integraciones", en: "Maintenance and integrations" },
      pain: {
        es: "Heredaste un proyecto a medio terminar, sin documentación, y nadie se atreve a tocarlo por miedo a romperlo.",
        en: "You inherited a half-finished project with no documentation, and nobody dares touch it for fear of breaking it."
      },
      desc: {
        es: "Reviso el código, lo ordeno, lo documento y conecto los servicios externos que haga falta para dejarlo funcionando y entendible.",
        en: "I review the code, clean it up, document it and connect whatever external services are needed to leave it working and understandable."
      },
      items: {
        es: ["Corrección de errores y limpieza", "Integración de APIs externas", "Documentación y despliegue"],
        en: ["Bug fixing and cleanup", "Third-party API integration", "Documentation and deployment"]
      }
    }
  ],

  /* ---------- FUERA DEL CÓDIGO (contenido complementario) ---------- */
  personal: {
    es: "Fuera del teclado busco los mismos retos: constancia, técnica y aguantar cuando cuesta. Entreno cuerpo y mente, disfruto deportes de adrenalina como el motocross, el enduro, el downhill y el fútbol, soy creyente y le doy mucho valor a los pequeños momentos con mi familia y mis amigos.",
    en: "Away from the keyboard I look for the same challenges: consistency, technique and holding on when it gets hard. I train body and mind, I enjoy adrenaline sports like motocross, enduro, downhill and soccer, I am a person of faith, and I treasure the small moments with my family and friends."
  },

  lifestyle: [
    { photo: "assets/img/dh.webp", caption: { es: "Downhill", en: "Downhill" } },
    { photo: "assets/img/enduro.webp", caption: { es: "Enduro", en: "Enduro" } },
    { photo: "assets/img/montana.webp", caption: { es: "Montaña y senderismo", en: "Mountains & hiking" } }
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
      text: { es: "Cursos, pruebas de concepto y revisión de código.", en: "Courses, proofs of concept and code review." }
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
  ]
};
