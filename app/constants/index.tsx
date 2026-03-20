export const NAV_LINKS = [
  {
    name: "#sobre-mi",
    link: "#sobre-mi",
    title: "Sobre mi",
  },
  {
    name: "#tecnologias",
    link: "#tecnologias",
    title: "Tecnologias",
  },
  {
    name: "#proyectos",
    link: "#proyectos",
    title: "Proyectos",
  },
  {
    name: "#contacto",
    link: "#contacto",
    title: "Contacto",
  },
];

// export const TAB_DATA = [
//     {title: "Skills", id: "Skills", content: (
//         <ul className='flex flex-col items-center list-disc pl-2'>
//         <li>javascript</li>
//         <li>react</li>
//         <li>nodejs</li>
//         </ul>
//     )},
// {title: "Education", id: "Education", content: (
//         <ul className='list-disc pl-2'>
//         <li>Master of Computer Science</li>
//         <li>Bachelor of Engineering</li>
//         </ul>
//     )},
//     {title: "Certifications", id: "Certifications", content: (
//         <ul className='list-disc pl-2'>
//         <li>Google Analytics Certified</li>
//         <li>Google Tag Manager Certified</li>
//         </ul>
//     )},
// ]

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Ecommerce Website Healthy MarketApp",
    description:
      "Tienda online de alimentos saludables con SPA completa, API propia para gestión de productos y categorías, y sistema de compras integrado con pasarela de pagos de Mercadopago.",
    image: "/healthy.avif",
    tags: ["Todos", "Web"],
    stack:
      "React, Redux Toolkit, TailwindCSS, Node.js, MongoDB, Mongoose, Mercadopago",
    highlights: ["Pasarela de pagos", "API propia", "E-commerce completo"],
    githubUrl: "https://github.com/EdgarFav/Healthy-Market-App",
    previewUrl: "https://healthy-market-app-production.vercel.app/",
  },
  {
    id: 2,
    title: "Sales Manager Dashboard",
    description:
      "Plataforma integral de análisis y gestión de ventas con visualización de datos en tiempo real, gráficos interactivos y backend escalable desplegado en AWS con contenedores Docker.\n\nUsuario para acceder a la plataforma:\nEmail: admin@smartforecast.com\nPassword: admin123\n\nArchivo de pruebas en la raíz del proyecto",
    image: "/dashboard.png",
    tags: ["Todos", "Web"],
    stack:
      "React 19, Tailwind CSS, Nest.js, TypeScript, Docker, AWS",
    highlights: ["Base de Datos en AWS (RDS)", "Gráficos interactivos", "Datos en tiempo real"],
    githubUrl: "https://github.com/EdgarFav/dashboard-aws",
    previewUrl: "https://dashboard-aws-eight.vercel.app/",
  },
  {
    id: 3,
    title: "PI Foods",
    description:
      "Aplicación SPA de recetas saludables que consume la API de Spoonacular y cuenta con base de datos propia para almacenar recetas creadas por los usuarios.",
    image: "/foods.avif",
    tags: ["Todos", "Web"],
    stack: "React, Redux, CSS, Node.js, PostgreSQL",
    highlights: ["API externa integrada", "CRUD completo", "Filtros avanzados"],
    githubUrl: "https://github.com/EdgarFav/PI-Foods",
    previewUrl: "https://pi-foods-chi.vercel.app/",
  },
  {
    id: 4,
    title: "Star Wars API Microservices",
    description:
      "Arquitectura de microservicios basada en el universo de Star Wars, containerizada con Docker Compose, desplegada en Google Cloud Platform y documentada con Swagger.",
    image: "/microservices.avif",
    tags: ["Todos", "Web"],
    stack:
      "Node.js, MongoDB, Mongoose, Docker, Docker Compose, GCP, Swagger",
    highlights: ["Microservicios", "Deploy en GCP", "Documentación Swagger"],
    githubUrl: "https://github.com/EdgarFav/star_wars_api_microservices",
    previewUrl: "http://104.154.230.18:8000/characters/api-docs",
  },
  {
    id: 5,
    title: "Red Social de Videos — Aora",
    description:
      "App móvil de red social para compartir videos, con autenticación de usuarios y almacenamiento en la nube mediante Appwrite como Backend as a Service.",
    image: "/aora.png",
    tags: ["Todos", "Movil"],
    stack: "React Native, Expo, NativeWind, Appwrite",
    highlights: ["App móvil nativa", "BaaS con Appwrite", "Autenticación"],
    githubUrl: "https://github.com/EdgarFav/react-native-app",
    previewUrl:
      "https://res.cloudinary.com/nahucodes/video/upload/v1743471569/Grabaci%C3%B3n_de_pantalla_2025-03-31_193656_zfmico.mp4",
  },
  {
    id: 6,
    title: "Dices App",
    description:
      "App móvil multiplataforma que emula el juego de cara o sello, un dado clásico y la icónica bola mágica 8 que responde a tus preguntas de formas inesperadas.",
    image: "/dices.png",
    tags: ["Todos", "Movil"],
    stack: "Ionic, Capacitor.js, React, SASS, TypeScript, MUI Material",
    highlights: ["Multiplataforma", "3 juegos en 1", "Animaciones interactivas"],
    githubUrl: "https://github.com/EdgarFav/Dices",
    previewUrl:
      "https://res.cloudinary.com/nahucodes/video/upload/v1744917058/Grabaci%C3%B3n_de_pantalla_2025-04-17_130138_b8hmtw.mp4",
  },
  {
    id: 7,
    title: "Fullness — Plataforma de Fisioterapia",
    description:
      "Plataforma web fullstack para conectar usuarios con fisioterapeutas profesionales, con sistema de chat en tiempo real y gestión de perfiles para freelancers del sector salud.",
    image: "/fullness.png",
    tags: ["Todos", "Web"],
    stack:
      "Next.js, TailwindCSS, Node.js, MongoDB, Express.js, Socket.io, TypeScript, Redux Toolkit, Zod, Nodemailer",
    highlights: ["Chat en tiempo real", "Fullstack"],
    githubUrl: "",
    previewUrl: "https://fisiomfulness.vercel.app/",
  },
  {
    id: 8,
    title: "Amigo Sorpresa",
    description:
      "Plataforma web para organizar intercambios de regalos con sorteos aleatorios, sistema de privacidad individual, acceso por código de 6 dígitos y sugerencias de regalos con imágenes.",
    image: "/amigo-sorpresa.png",
    tags: ["Todos", "Web"],
    stack:
      "Next.js 14, TypeScript, Supabase, Web Sockets, Tailwind CSS, React Hook Form, Zod",
    highlights: ["Realtime con Supabase", "Sorteos aleatorios", "Sistema de privacidad"],
    githubUrl: "https://github.com/EdgarFav/amigo-sorpresa",
    previewUrl: "https://amigo-sorpresa.vercel.app/",
  },
  {
    id: 9,
    title: "Cotizador J&T Express",
    description:
      "Herramienta web no oficial para cotizar envíos de paquetes con J&T Express. Ingresa dimensiones, peso y regiones de origen/destino para obtener costos de envío con cobertura nacional en México.",
    image: "/cotizador.png",
    tags: ["Todos", "Web"],
    stack: "React.js 19, TypeScript, Tailwind CSS, Vercel Analytics",
    highlights: ["Cobertura nacional MX", "Cálculo en tiempo real", "Analytics integrado"],
    githubUrl: "",
    previewUrl: "https://jyt-cotizador.vercel.app/",
  },
  
];

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 70,
    height: 70,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 70,
    height: 70,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 70,
    height: 70,
  },
  {
    name: "Tailwind",
    Image: "/tailwind.png",
    width: 70,
    height: 70,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 70,
    height: 70,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 70,
    height: 70,
  },
  {
    name: "Next.js",
    Image: "/next.png",
    width: 70,
    height: 70,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 70,
    height: 70,
  },
  {
    name: "Node.js",
    Image: "/node-js.png",
    width: 70,
    height: 70,
  },
  {
    name: "Mongo",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    name: "Postgre",
    Image: "/postgres.svg",
    width: 70,
    height: 70,
  },
  {
    name: "Docker",
    Image: "/docker.svg",
    width: 70,
    height: 70,
  },
  // {
  //     name: "java",
  //     Image: "/java.svg",
  //     width: 60,
  //     height: 60,
  // },
  // {
  //     name: "spring",
  //     Image: "/spring.svg",
  //     width: 70,
  //     height: 70,
  // },
  {
    name: "Git",
    Image: "/git.svg",
    width: 70,
    height: 70,
  },
  {
    name: "Firebase",
    Image: "/firebase.svg",
    width: 70,
    height: 70,
  },
  {
    name: "Flutter",
    Image: "/flutter.svg",
    width: 60,
    height: 60,
  },
  {
    name: "Dart",
    Image: "/dart.svg",
    width: 70,
    height: 70,
  },
  {
    name: "React Native",
    Image: "/react.png",
    width: 70,
    height: 70,
  },
  {
    name: "Expo",
    Image: "/expo.svg",
    width: 70,
    height: 70,
  },
  {
    name: "Express.js",
    Image: "/expressjs_dark.svg",
    width: 70,
    height: 70,
  },
];
