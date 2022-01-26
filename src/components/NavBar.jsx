import styles from "./NavBar.module.css";
import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Icon from "./ProfileIcon";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Link from "@material-ui/core/Link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function NavBar() {
  const onDownload = () => {
    console.log("clicked");
    const link = document.createElement("a");
    link.download = `pw1_046_Aiswarya_R.pdf`;
    link.href = "./pw1_046_Aiswarya_R.pdf";
    link.click();
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    AOS.init();
  });

  const handleOffset = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);
    return () => window.removeEventListener("scroll", handleOffset);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          zIndex: 10,
          width: "100%",
          backdropFilter: `${offset > 300 ? "blur(5px)" : "blur(0px)"}`,
          background: `${
            offset > 300 ? "rgba(255, 255, 255, 0.2)" : "transparent"
          }`,
        }}
      >
        <div className={styles.name}>
          <img src="./titleIcon.png" alt="title" width="8%" />
        </div>
        <div className={styles.tab}>
          <a
            href="#about"
            style={{ color: `${offset > 300 ? "black" : "white"}` }}
          >
            <p>ABOUT</p>
          </a>
          <a
            href="#experience"
            style={{ color: `${offset > 300 ? "black" : "white"}` }}
          >
            <p>EXPERIENCE</p>
          </a>
          <a
            href="#skills"
            style={{ color: `${offset > 300 ? "black" : "white"}` }}
          >
            <p>SKILLS</p>
          </a>
          <a
            href="#project"
            style={{ color: `${offset > 300 ? "black" : "white"}` }}
          >
            <p>PROJECTS</p>
          </a>
          <a
            href="#contact"
            style={{ color: `${offset > 300 ? "black" : "white"}` }}
          >
            <p>CONTACT</p>
          </a>
        </div>
      </div>
      <div className={styles.parent}>
        <div
          style={{ width: "100%", display: "flex" }}
          className={styles.mainContainer}
        >
          <div
            className={styles.white}
            style={{
              transform: `translateX(-${offset * 2.5}px)`,
              opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
            }}
          >
            {/* <div className={styles.name}>
           <img src="./titleIcon.jpg" alt="title" width="12%" />
         </div> */}
          </div>
          <div
            className={styles.black}
            style={{
              transform: `translateX(${offset * 2.5}px)`,
              opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
            }}
          >
            {/* <div className={styles.tab}>
           <a href="#about">
             <p>ABOUT</p>
           </a>
           <a href="#experience">
             <p>EXPERIENCE</p>
           </a>
           <a href="#skills">
             <p>SKILLS</p>
           </a>
           <a href="#project">
             <p>PROJECTS</p>
           </a>
           <a href="#contact">
             <p>CONTACT</p>
           </a>
         </div> */}

            <div className={styles.wrap}>
              <div className={styles.content}>
                <p>Hi, I am Aiswarya</p>
                <p> A Front-end Developer, an Artist </p>
                <p>and a color fanatic.</p>
                <div className={styles.iconWrap}>
                  <Tooltip title="Instagram">
                    <IconButton>
                      <Link
                        underline="none"
                        href="https://www.instagram.com/our_art_space/"
                        target="_blank"
                      >
                        <InstagramIcon
                          style={{ fontSize: 36, color: "#6E0DD0" }}
                        />
                      </Link>
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="LinkedIn">
                    <IconButton>
                      <Link
                        underline="none"
                        href="https://www.linkedin.com/in/aiswarya-rajaponnan/"
                        target="_blank"
                      >
                        <LinkedInIcon
                          style={{
                            fontSize: 40,
                            color: "#6E0DD0",
                            cursor: "pointer",
                          }}
                        />
                      </Link>
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="GitHub">
                    <IconButton>
                      <Link
                        underline="none"
                        href="https://github.com/Aiswaryaraja1996"
                        target="_blank"
                      >
                        <GitHubIcon
                          style={{
                            fontSize: 36,
                            color: "#6E0DD0",
                            cursor: "pointer",
                          }}
                        />
                      </Link>
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Download Resume">
                    <IconButton>
                      <Button
                        onClick={onDownload}
                        variant="contained"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right,#bc4e9c, #f80759)",
                          color: "white",
                          height: "40px",
                        }}
                        endIcon={<FileDownloadOutlinedIcon color="white" />}
                      >
                        Resume
                      </Button>
                    </IconButton>
                  </Tooltip>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="./profile1.png"
                  alt="profile"
                  width="80%"
                  className={styles.profilePic}
                />
              </div>
            </div>
          </div>
        </div>
        <Icon />
      </div>
    </div>
  );
}
