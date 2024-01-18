import ProjectOhmyfood from "../assets/Ohmyfood.png";
import projectSophieBluel from "../assets/SophieBluel.png";
import projectArgentBank from "../assets/ArgentBank.png";

const projects = {
  1: {
    title:" Ohmyfood : HTML & CSS & Responsive ",
    image: ProjectOhmyfood,
    description: (
      <>
        <p>
        Développer un site “mobile first” qui répertorie les menus de restaurants 
gastronomiques 
Mission : intégrer un site avec du code HTML , CSS et media queries 
        </p>
      </>
    ),
    github: "https://github.com/HOUBOUS/Projet4-ohmyfood.git",
    demo: "https://houbous.github.io/Projet4-ohmyfood/",
  },
  2: {
    title: "Sophie Bluel: HTML & CSS & JS",
    image: projectSophieBluel,
    description: (
      <>
        <p>
         Créer une page web dynamique d'un Portfolio d' Architecte avec JavaScript
        </p>
      </>
    ),
    github: "https://github.com/HOUBOUS/Projet_N-6_Portfolio_Architecte",
    demo: "https://houbous.github.io/Projet_N-6_Portfolio_Architecte/",
  },
  3: {
    title: "Argent Bank : React JS & Redux",
    image: projectArgentBank,
    description: (
      <>
        <p>
        Site d’Argent Bank, souhaite s'imposer dans le secteur bancaire. 
Son objectif consiste à développer le tableau de bord des utilisateurs
en utilisant React et Redux
        </p>
      </>
    ),
    github: "https://github.com/HOUBOUS/ArgentBank-website",
    demo: "",
  },
};

export default projects;
