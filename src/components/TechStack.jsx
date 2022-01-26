import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./TechStack.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export default function TechStack() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      id="skills"
      className={styles.skills}
      data-aos="fade-up"
   
    >
      <p className={styles.head}>TOOLS AND SKILLS</p>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className={styles.itemCont}
      >
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img src="/react.png" alt="react"></img>
            <p>React</p>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img src="/javascript.png" alt="javascript"></img>
            <p>JavaScript</p>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img src="/typescript.png" alt="typescript"></img>
            <p>TypeScript</p>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img src="/html5.png" alt="html5"></img>
            <p>HTML5</p>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img src="/css3.png" alt="css3"></img>
            <p>CSS3</p>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img src="/redux.png" alt="redux"></img>
            <p>Redux</p>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img src="/bootstrap.png" alt="bootstrap"></img>
            <p>Bootstrap</p>
          </Item>
        </Grid>

        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img src="/git.png" alt="git"></img>
            <p>Git</p>
          </Item>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img src="/postman.png" alt="postman"></img>
            <p>Postman</p>
          </Item>
        </Grid>

        <Grid item xs={5} sm={2}>
          <Item elevation={1} variant="outlined">
            <img src="/figma.png" alt="react"></img>
            <p>Figma</p>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
