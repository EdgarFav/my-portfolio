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
      "Desarrollo de una SPA (Single Page Application) de una tienda de alimentos saludables, con una API propia para obtener los datos de los productos y categorías de los mismos, así como también compras dentro del sitio con pasarela de pagos de mercadopago.",
    image: "/healthy.avif",
    tags: ["Todos", "Web"],
    stack:
      "React, Redux toolkit, TailwindCSS, Node.js, MongoDB, Mongoose, pasarela de Mercadopago.",
    githubUrl: "https://github.com/EdgarFav/Healthy-Market-App",
    previewUrl: "https://healthy-market-app-production.vercel.app/",
  },
  {
    id: 2,
    title: "PI Foods",
    description:
      "Desarrollo de una SPA (Single Page Application) de recetas de comidas saludables la cual consume datos de una API (“Spoonacular”) y utiliza una base de datos propia para almacenar las recetas cargadas en la página.",
    image: "/foods.avif",
    tags: ["Todos", "Web"],
    stack: "React, Redux, CSS, Node.js, postgreSQL,",
    githubUrl: "https://github.com/EdgarFav/PI-Foods",
    previewUrl: "https://pi-foods-chi.vercel.app/",
  },
  {
    id: 3,
    title: "Star Wars API microservices",
    description:
      "Desarrollo de una API de microservicios basada en el mundo de Star Wars con Docker y Docker Compose, desplegada en la nube con GCP (Google Cloud Platform) y documentada con Swagger.",
    image: "/microservices.avif",
    tags: ["Todos", "Web"],
    stack:
      "Node.js, MongoDB, Mongoose, Docker, Docker Compose, GCP(Google Cloud Platform), Swagger",
    githubUrl: "https://github.com/EdgarFav/star_wars_api_microservices",
    previewUrl: "http://104.154.230.18:8000/characters/api-docs",
  },
  {
    id: 4,
    title: "Red Social de videos (Aora)",
    description:
      "Desarrollo de una App movil con React Native, Expo y para el estilizado con NativeWind que es lo mismo que TailwindCSS para React Native; Appwrite BaaS (Plataforma No Code similar a Firebase) como backend para el almacenamiento de videos y autenticación de usuarios.",
    image: "/aora.png",
    tags: ["Todos", "Movil"],
    stack: "React Native, Expo, TailwindCSS, Appwrite",
    githubUrl: "https://github.com/EdgarFav/react-native-app",
    previewUrl:
      "https://res.cloudinary.com/nahucodes/video/upload/v1743471569/Grabaci%C3%B3n_de_pantalla_2025-03-31_193656_zfmico.mp4",
  },
  {
    id: 5,
    title: "Dices app",
    description:
      "Desarrollo de una App movil con Ionic y Capacitor.js para emular el juego de cara o sello con una moneda, tambien emula un dado y por ultimo emula la famosa bola magica 8, la cual responde a tus preguntas de diferentes maneras.",
    image: "/dices.png",
    tags: ["Todos", "Movil"],
    stack: "Ionic, Capacitor.js, React, SASS, Typescript, Mui Material",
    githubUrl: "https://github.com/EdgarFav/Dices",
    previewUrl:
      "https://res.cloudinary.com/nahucodes/video/upload/v1744917058/Grabaci%C3%B3n_de_pantalla_2025-04-17_130138_b8hmtw.mp4",
  },
  {
    id: 6,
    title: "Fullness",
    description:
      "Desarrollo de una plataforma web Fullstackcon Next.js y TailwindCSS para gestionar la salud de los usuarios por medio de contactar fisioterapeutas y tambien para que los profesionales en este campo puedan unirse a la comunidad y trabajar como freelancers.",
    image: "/fullness.png",
    tags: ["Todos", "Web"],
    stack:
      "Next.js, TailwindCSS, Node.js, MongoDB, Mongoose, Express.js, socket.io, Typescript, Redux Toolkit, Zod, Nodemailer",
    githubUrl: "",
    previewUrl: "https://fisiomfulness.vercel.app/",
  },
  {
    id: 7,
    title: "Amigo Sorpresa",
    description:
      "Aplicación web para organizar sorteos de regalos entre amigos (intercambio de regalos navideños o amigo secreto). Permite crear grupos, realizar sorteos aleatorios, sistema de privacidad donde cada participante solo ve su propia asignación, acceso por código de 6 dígitos y sugerencias de regalos con imágenes.",
    image: "/amigo-sorpresa.png",
    tags: ["Todos", "Web"],
    stack:
      "Next.js 14, TypeScript, Supabase (PostgreSQL, Realtime, Storage), Web Sockets, Tailwind CSS, React Hook Form, Zod",
    githubUrl: "https://github.com/EdgarFav/amigo-sorpresa",
    previewUrl: "https://amigo-sorpresa.vercel.app/",
  },
  {
    id: 8,
    title: "Cotizador no oficial de J&T Express",
    description:
      "Aplicación web no oficial para cotizar envíos de paquetes a través de J&T Express. Permite a los usuarios ingresar detalles de las medidas y peso del paquete, así como región de origen y destino para cotizar costos de envíos con cobertura en toda la república Mexicana.",
    image: "/cotizador.png",
    tags: ["Todos", "Web"],
    stack:
      "React.js 19, TypeScript, Tailwind CSS, Vercel Analytics",
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
    name: "Tailwind Css",
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
    name: "Next js",
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
    name: "Node js",
    Image: "/node-js.png",
    width: 70,
    height: 70,
  },
  {
    name: "MongoDb",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    name: "PostgreSQL",
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
    name: "Express js",
    Image: "/expressjs_dark.svg",
    width: 70,
    height: 70,
  },
];
