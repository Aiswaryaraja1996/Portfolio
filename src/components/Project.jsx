import ProjectCard from "./ProjectCard";
import styles from "./Project.module.css";

const data = [
  {
    name: "RedBus Clone",
    techStack: ["HTML5", "CSS3", "JavaScript", "BootStrap"],
    desc: "RedBus is World's largest online bus ticketing platform offers bus travels, AC Volvo bus, carpooling & bus hire at best rates.It provides ticket booking facility through its website, iOS and Android mobile apps.",
    collab: true,
    year: "Nov 2021",
    team: 3,
    days: 10,
    img: "./redbus.png",
    git:"https://github.com/Aiswaryaraja1996/RedBus-Project",
    web:"https://aiswaryaraja1996.github.io/RedBus-Project/"
  },
  {
    name: "Sudoku Game",
    techStack: ["HTML5", "CSS3", "JavaScript", "BootStrap"],
    desc: "In classic sudoku, the objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 subgrids that compose the grid contain all of the digits from 1 to 9.",
    collab: false,
    year: "Nov 2021",
    team: 3,
    days: 1,
    img: "./sudoku.png",  
    
    git:"https://github.com/Aiswaryaraja1996/Sudoku-Game",
    web:"https://aiswaryaraja1996.github.io/Sudoku-Game/"
  },
  {
    name: "HotJar Clone",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    desc: "Hotjar is a powerful tool that reveals the online behavior and voice of your users by combining both Analysis and Feedback tools.",
    collab: true,
    year: "Sep 2021",
    team: 3,
    days: 10,
    img: "./hotjar.png",
    git:"https://github.com/Aiswaryaraja1996/Hotjar",
    web:"https://aiswaryaraja1996.github.io/Hotjar/"
  },
  {
    name: "Flipkart Clone",
    techStack: ["React","Redux","Routes","Material UI"],
    desc: "Flipkart is a leading destination for online shopping in India.E-commerce marketplace offering over 30 million products cross 70+ categories.",
    collab: true,
    year: "Dec 2021",
    team: 2,
    days: 5,
    img: "./flipkart.png",
    git:"https://github.com/Aiswaryaraja1996/Flipkart-Project",
    web:"https://clone-flipkart.netlify.app/"
  },
];

export default function Project() {
  return (
    <div id="project" className={styles.project}>
      <p className={styles.head} >PROJECTS</p>
      {data.map((item) => (
        <ProjectCard item={item} />
      ))}
    </div>
  );
}
