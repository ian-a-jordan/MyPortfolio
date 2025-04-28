import port1 from "../img/portImages/artcollector.png";
import port4 from "../img/portImages/foliocrafterThumbnail.png";
import port5 from "../img/portImages/strangerthingsheadshot.png";

const portfolios = [
  {
    id: 1,
    category: "FullStack",
    link1: "https://foliocrafter.netlify.app/",
    link2: "www.github.com",
    icon1: "Website",
    icon2: "Y",
    image: port4,
    title: "FolioCrafter",
    paragraph:
      "Portfolio crafting website, that utilizes ChatGPT - to analyze your github repo and help create you a resume (backend still under construction).",
  },
  {
    id: 2,
    category: "React Projects",
    link1: "https://strangerzthingz.netlify.app/",
    link2: "www.github.com",
    icon1: "Website",
    icon2: "Y",
    image: port5,
    title: "React Ecommerce Website",
    paragraph:
      "Web Application with JWT Authentication and CRUD request for selling and trading.",
  },
  {
    id: 5,
    category: "React Projects",
    link1: "https://sharp-bose-ae371b.netlify.app/",
    link2: "www.github.com",
    icon1: "Website",
    icon2: "Y",
    image: port1,
    title: "Art Collector",
    paragraph:
      "App that searches through the Harvard Art Museum database.",
  },
];

export default portfolios;
