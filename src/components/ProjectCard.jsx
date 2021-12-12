import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import styles from "./ProjectCard.module.css";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

const ProjectCard = ({ item }) => {
  return (
    <div style={{transition: "all .3s ease"}}>
      <h2 style={{ color: "white" }}>PROJECTS</h2>
      <div className={styles.cardCont}
      
      >
        <div className={styles.projectDtls}>
          <p>{item.name}</p>
          <p>{item.desc}</p>

          <div className={styles.icon}>
            <Tooltip title="Visit Website">
              <IconButton>
                <LanguageIcon
                  style={{ fontSize: 40, color: "#6E0DD0" }}
                ></LanguageIcon>
              </IconButton>
            </Tooltip>

            <Tooltip title="Check GitHub Repo">
              <IconButton>
                <GitHubIcon
                  style={{ fontSize: 40, color: "#6E0DD0" }}
                ></GitHubIcon>
              </IconButton>
            </Tooltip>
          </div>

          <div className={styles.iconWrap}>
            {item.techStack.map((i) => (
              <button className={styles.btn}>{i}</button>
            ))}
          </div>

          <p className={styles.year}>{item.year}</p>
        </div>
        <div className={styles.imgBox}>
          <img style={{ width: "100%" }} src={item.img} alt={item.name} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
