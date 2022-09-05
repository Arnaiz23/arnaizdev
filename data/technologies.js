import * as icons from "../components/Icons/Technologies"

export const technologies = [
  {
    name: "HTML",
    svg: icons.HtmlIcon,
    description:
      "Es el primer lenguaje que aprendi. La primera vez que lo toque fue en segundo de Grado Medio. Gracias a conocer HTML, CSS y JS decidi ir por la rama de la programación web",
    projects: [
      {
        name: "Prueba",
        url: "",
      },
    ],
    courses: [
      {
        name: "Curso de HTML5 desde CERO (Completo)",
        description: "Curso desde 0 de HTML creado por SoyDalto",
        url: "https://www.youtube.com/watch?v=kN1XP-Bef7w&list=PLE8uP447fYpgOwKgbypiCGSz7veY2MLGb",
        image: "",
      },
    ],
    stack: "frontend",
  },
  {
    name: "CSS",
    icon: "faCss3",
    description: "Al igual que HTML, es el primer lenguaje que aprendi",
    projects: [
      {
        name: "",
        url: "",
      },
    ],
    courses: [
      {
        name: "Curso de CSS desde CERO (Completo)",
        description: "Curso desde 0 de CSS creado por SoyDalto",
        url: "https://www.youtube.com/watch?v=OWKXEJN67FE&list=PLE8uP447fYpgOwKgbypiCGSz7veY2MLGb&index=2",
        image: "",
      },
    ],
    stack: "frontend",
  },
  {
    name: "JavaScript",
    icon: "faJs",
    description:
      "Primer lenguaje de lógica que aprendi. Actualmente es el lenguaje que más utilizo y más me gusta.",
    projects: [
      {
        name: "",
        url: "",
      },
    ],
    courses: [
      {
        name: "Curso de JAVASCRIPT desde CERO (Completo) - Nivel JUNIOR",
        description: "Curso de JavaScript desde 0 creado por SoyDalto",
        url: "https://www.youtube.com/watch?v=z95mZVUcJ-E&list=PLE8uP447fYpgOwKgbypiCGSz7veY2MLGb&index=3",
        image: "",
      },
      {
        name: "Curso de JAVASCRIPT desde CERO (Completo) - Nivel MID LEVEL",
        description: "Curso de JavaScript desde 0 creado por SoyDalto",
        url: "https://www.youtube.com/watch?v=xOinGb2MZSk&list=PLE8uP447fYpgOwKgbypiCGSz7veY2MLGb&index=4",
        image: "",
      },
      {
        name: "Curso de JAVASCRIPT desde CERO (Completo) - Nivel Master",
        description: "Curso de JavaScript desde 0 creado por SoyDalto",
        url: "https://www.youtube.com/watch?v=EbMi1Qj4rVE&list=PLE8uP447fYpgOwKgbypiCGSz7veY2MLGb&index=5",
        image: "",
      },
    ],
    stack: "frontend",
  },
  {
    name: "React",
    icon: "faReact",
    description:
      "Segundo 'Framework' de JavaScript aprendido. Actualmente es el que más uso para realizar mis frontends.",
    projects: [
      {
        name: "",
        url: "",
      },
    ],
    courses: [
      {
        name: "Master en Frameworks JavaScript: Aprende Angular, React, Vue",
        description: "En este curso aprendí por primera vez React con clases",
        url: "https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/",
        image: "",
      },
      {
        name: "Curso REACT JS - Aprende desde CERO",
        description: "Primer curso / video con el que aprendo React funcional",
        url: "https://www.youtube.com/watch?v=T_j60n1zgu0&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC",
        image: "/images/midu.jpg",
      },
      {
        name: "Aprendiendo JavaScript y React desde cero - Bootcamp FullStack Gratuito",
        description: "Bootcamp FullStack realizado por el programador Midudev",
        url: "https://www.youtube.com/watch?v=YLvT1ELnaX4&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=2",
        image: "",
      },
    ],
    stack: "frontend",
  },
  {
    name: "NextJS",
    svg: icons.nextjs,
    description:
      "Framework que utiliza React. Con este framework he creado dicho Portfolio.",
    projects: [
      {
        name: "ArnaizDev",
        url: "http://github.com/Arnaiz23/arnaizdev",
      },
      {
        name: "Devter",
        url: "http://github.com/Arnaiz23/devter",
      },
    ],
    courses: [
      {
        name: "Aprendiendo NextJS, el framework de React con Server Side Rendering",
        description: "Curso desde 0 de NextJs creado por Midudev",
        url: "https://www.youtube.com/watch?v=2jxc8DMzt0I&list=PLV8x_i1fqBw1VR86y4C72xMGJ8ifjBwJ6",
        image: "",
      },
    ],
    stack: "frontend",
  },
  {
    name: "Git",
    icon: "faGit-alt",
    description:
      "Control de versiones necesario para poder trabajar facilmente con los proyectos",
    projects: [],
    courses: [
      {
        name: "Aprende GIT ahora! curso completo GRATIS desde cero",
        description: "Curso para aprender GIT de HolaMundo",
        url: "https://www.youtube.com/watch?v=VdGzPZ31ts8",
        image: "",
      },
      {
        name: "Git y Github | Curso Práctico de Git y Github Desde Cero",
        description: "Curso para aprender Git y Github de Fazt",
        url: "https://www.youtube.com/watch?v=HiXLkL42tMU",
        image: "",
      },
    ],
    stack: "other",
  },
  {
    name: "Docker",
    icon: "faDocker",
    description:
      "Software basado en contenedores para poder crear proyectos más facilmente. Lo he usado varias veces para utilizar los proyectos a nivel más realista. Tambien lo uso bastante para hacer pruebas para las terminales y algun contenedor suelto.",
    projects: [
      {
        name: "",
        url: "",
      },
    ],
    courses: [
      {
        name: "Aprendiendo Docker | Capítulo 1: Bases, conceptos y cliente de Docker",
        description: "Curso sobre iniciacion en Docker por ManzDev",
        url: "https://www.youtube.com/watch?v=mEYHQgZ7iZU",
        image: "",
      },
      {
        name: "Aprende Docker ahora| curso completo gratis desde cero!",
        description: "Curso para aprender docker de HolaMundo",
        url: "https://www.youtube.com/watch?v=4Dko5W96WHg&t=2033s",
        image: "",
      },
      {
        name: "Docker & Nodejs. Aplicación de NodeJS en Docker Container",
        description:
          "Curso para aprender a utilizar una aplicación desarrollada con nodejs en Docker",
        url: "https://www.youtube.com/watch?v=iLlmm0L-VpQ&t=1332s",
        image: "",
      },
    ],
    stack: "other",
  },
]