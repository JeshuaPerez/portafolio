/* ==========================================================
   CONFIGURACIÓN PERSONAL
   Edita SOLO este archivo para cambiar tu contenido.
   Los textos bilingües usan la forma { es: "...", en: "..." }.
   ========================================================== */
window.PORTFOLIO_CONFIG = {

  profile: {
    name: "Tu Nombre",
    title: { es: "Tu Nombre · Portafolio", en: "Your Name · Portfolio" },
    role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
    roles: {
      es: ["Desarrollador frontend", "Creador de interfaces", "Estudiante de software", "Resolutor de problemas"],
      en: ["Frontend developer", "Interface builder", "Software student", "Problem solver"]
    },
    location: { es: "Guatemala", en: "Guatemala" },
    timezone: "America/Guatemala",
    email: "tu.correo@ejemplo.com",
    github: "https://github.com/tu-usuario",
    linkedin: "https://www.linkedin.com/in/tu-usuario",
    cv: "assets/cv.pdf",
    photo: "assets/img/perfil.svg"
  },

  bio: {
    es: [
      "Soy desarrollador enfocado en crear interfaces claras y sistemas que funcionan. Me gusta convertir ideas en productos reales, desde el diseño hasta el despliegue.",
      "Aprendo construyendo: cada proyecto es una oportunidad para mejorar mi código, mi diseño y la forma en que comunico lo que hago."
    ],
    en: [
      "I'm a developer focused on building clear interfaces and systems that work. I enjoy turning ideas into real products, from design to deployment.",
      "I learn by building: every project is a chance to improve my code, my design and the way I communicate what I do."
    ]
  },

  stats: [
    { value: 3, label: { es: "Años programando", en: "Years coding" } },
    { value: 12, label: { es: "Proyectos", en: "Projects" } },
    { value: 8, label: { es: "Tecnologías", en: "Technologies" } }
  ],

  storyDay: [
    {
      time: "07:00", icon: "☕",
      title: { es: "Despertar y café", en: "Wake up and coffee" },
      text: { es: "Reviso mensajes y defino las tres prioridades del día.", en: "Check messages and define the day's three priorities." }
    },
    {
      time: "09:00", icon: "💻",
      title: { es: "Bloque de código", en: "Deep work block" },
      text: { es: "Sin distracciones: programo, pruebo y resuelvo lo más difícil primero.", en: "No distractions: I code, test and tackle the hardest problem first." }
    },
    {
      time: "13:00", icon: "🍲",
      title: { es: "Almuerzo", en: "Lunch" },
      text: { es: "Pausa real, lejos de la pantalla.", en: "A real break, away from the screen." }
    },
    {
      time: "15:00", icon: "🧩",
      title: { es: "Aprender y experimentar", en: "Learn and experiment" },
      text: { es: "Tutoriales, pruebas de concepto y revisión de código.", en: "Tutorials, proofs of concept and code review." }
    },
    {
      time: "18:00", icon: "🏋️",
      title: { es: "Gimnasio", en: "Gym" },
      text: { es: "Entreno para mantener la energía y la cabeza despejada.", en: "I train to keep my energy up and my mind clear." }
    },
    {
      time: "21:00", icon: "📚",
      title: { es: "Lectura y cierre", en: "Reading and wrap-up" },
      text: { es: "Anoto lo aprendido y preparo el siguiente día.", en: "I note what I learned and prepare for tomorrow." }
    }
  ],

  environment: {
    info: [
      { key: "OS", value: "Ubuntu 24.04 LTS" },
      { key: "Shell", value: "zsh + oh-my-zsh" },
      { key: "Editor", value: "VS Code" },
      { key: "Font", value: "JetBrains Mono" },
      { key: "Theme", value: { es: "Tokyo Night (oscuro)", en: "Tokyo Night (dark)" } },
      { key: "Node", value: "v22 LTS" },
      { key: "Setup", value: { es: "Laptop + monitor externo", en: "Laptop + external monitor" } }
    ],
    tools: [
      {
        name: "VS Code",
        category: { es: "Editor", en: "Editor" },
        note: { es: "Extensiones de Prettier, ESLint y GitLens.", en: "Prettier, ESLint and GitLens extensions." }
      },
      {
        name: "Git & GitHub",
        category: { es: "Control de versiones", en: "Version control" },
        note: { es: "Ramas cortas, commits descriptivos y revisiones.", en: "Short branches, clear commits and reviews." }
      },
      {
        name: "Node.js",
        category: { es: "Runtime", en: "Runtime" },
        note: { es: "Scripts, APIs con Express y herramientas de build.", en: "Scripts, Express APIs and build tools." }
      },
      {
        name: "Figma",
        category: { es: "Diseño", en: "Design" },
        note: { es: "Prototipos, sistemas de componentes y handoff.", en: "Prototypes, component systems and handoff." }
      }
    ]
  },

  projects: [
    {
      slug: "tienda-en-linea",
      title: "Tienda en línea",
      description: {
        es: "Catálogo con carrito, pagos de prueba y panel de administración.",
        en: "Online store with a cart, test payments and an admin panel."
      },
      stack: ["JavaScript", "Node.js", "Express", "MongoDB"],
      demo: "#",
      repo: "https://github.com/tu-usuario/tienda-en-linea"
    },
    {
      slug: "gestor-de-tareas",
      title: "Gestor de tareas",
      description: {
        es: "App con arrastrar y soltar, filtros y datos guardados en el navegador.",
        en: "Drag-and-drop task app with filters and browser storage."
      },
      stack: ["JavaScript", "HTML", "CSS"],
      demo: "#",
      repo: "https://github.com/tu-usuario/gestor-de-tareas"
    },
    {
      slug: "dashboard-clima",
      title: "Dashboard del clima",
      description: {
        es: "Consume una API pública y muestra gráficas interactivas por ciudad.",
        en: "Consumes a public API and shows interactive charts by city."
      },
      stack: ["TypeScript", "React", "Chart.js"],
      demo: "#",
      repo: "https://github.com/tu-usuario/dashboard-clima"
    }
  ],

  services: [
    {
      icon: "🎨",
      title: { es: "Diseño de interfaces", en: "Interface design" },
      desc: { es: "Pantallas claras y consistentes, pensadas alrededor del usuario.", en: "Clear, consistent screens designed around the user." },
      items: {
        es: ["Prototipos", "Sistema de componentes", "Pruebas de usabilidad"],
        en: ["Prototypes", "Component system", "Usability tests"]
      }
    },
    {
      icon: "⚙️",
      title: { es: "Desarrollo web", en: "Web development" },
      desc: { es: "Sitios y aplicaciones rápidas, accesibles y fáciles de mantener.", en: "Fast, accessible and maintainable sites and apps." },
      items: {
        es: ["Landing pages", "Aplicaciones web", "Integración con APIs"],
        en: ["Landing pages", "Web applications", "API integrations"]
      }
    },
    {
      icon: "🚀",
      title: { es: "Acompañamiento técnico", en: "Technical support" },
      desc: { es: "Ayuda para llevar tu idea de la pizarra a producción.", en: "Help taking your idea from whiteboard to production." },
      items: {
        es: ["Revisión de código", "Despliegue", "Mentoría"],
        en: ["Code review", "Deployment", "Mentoring"]
      }
    }
  ]
};
