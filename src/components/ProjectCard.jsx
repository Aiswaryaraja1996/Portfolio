import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import styles from "./ProjectCard.module.css";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Link from "@material-ui/core/Link";

const ProjectCard = ({ item }) => {
  return (
    <div style={{ transition: "all .3s ease" }}>
     
      <div className={styles.cardCont}>
        <div className={styles.projectDtls}>
          <p>{item.name}</p>
          <p>{item.year}</p>
          <p>{item.desc}</p>

          <div className={styles.icon}>
            <Tooltip title="Visit Website">
              <IconButton>
                <Link href={item.web} target="_blank" underline="none">
                  {" "}
                  <LanguageIcon
                    style={{ fontSize: 40, color: "black" }}
                  ></LanguageIcon>
                </Link>
              </IconButton>
            </Tooltip>

            <Tooltip title="Check GitHub Repo">
              <IconButton>
                <Link href={item.git} target="_blank" underline="none">
                  <GitHubIcon
                    style={{ fontSize: 38, color: "black" }}
                  ></GitHubIcon>
                </Link>
              </IconButton>
            </Tooltip>
          </div>

          <div className={styles.iconWrap}>
            {item.techStack.map((i) => (
              <button className={styles.btn}>{i}</button>
            ))}
          </div>

         
        </div>
        <div className={styles.imgBox}>
          <img style={{ width: "100%" }} src={item.img} alt={item.name} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
