import ProjectCard from "./ProjectCard";
import styles from "./Project.module.css";

const data = [
  {
    name: "RedBus Clone",
    techStack: ["HTML5", "CSS3", "JavaScript", "BootStrap"],
    desc: "RedBus is World's largest online bus ticketing platform offers bus travels, AC Volvo bus, carpooling & bus hire at best rates.It provides ticket booking facility through its website, iOS and Android mobile apps.",
    collab: true,
    year: 2021,
    team: 3,
    days: 10,
    img: "./sudoku.png",
  },
  {
    name: "Sudoku Game",
    techStack: ["HTML5", "CSS3", "JavaScript", "BootStrap"],
    desc: "Sudoku is a logic-based, combinatorial number-placement puzzle. In classic sudoku, the objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 subgrids that compose the grid contain all of the digits from 1 to 9.",
    collab: false,
    year: 2021,
    team: 3,
    days: 1,
    img: "./redbus.png",
  },
  {
    name: "HotJar Clone",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    desc: "Hotjar is a powerful tool that reveals the online behavior and voice of your users. By combining both Analysis and Feedback tools, Hotjar gives you the 'big picture' of how to improve your site's user experience and performance/conversion rates.",
    collab: true,
    year: 2021,
    team: 3,
    days: 10,
    img: "./hotjar.png",
  },
];

export default function Project() {
  return (
    <div>
      <p className={styles.head} id="project">Projects</p>
      {data.map((item) => (
        <ProjectCard item={item} />
      ))}
    </div>
  );
}
