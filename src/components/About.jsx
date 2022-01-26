import styles from "./About.module.css";

const About = () => {
  return (
    <div id="about" className={styles.about} >
      <div className={styles.mainContainer}>
        <div
          className={styles.aboutme}
          style={{
            color: "black",
            borderRadius: "1rem 0 0 1rem",
          }}
        >
          <p>A little about me !</p>
        </div>
        <div className={styles.para}>
          <p>
            Hola! I am Aiswarya, a color fanatic, and an art lover. I enjoy
            doing paintings and crafts and being creative in everything I do.
            After completing electrical engineering, I stepped into the world of
            Information Technology. My passion for web development started with
            the thought of combining art and programming.
          </p>
          <p>
            I love visualizing and curating wonderful experiences with code,
            colors, and designs. Today I have completed a couple of projects and
            have got good hands-on with various front-end technologies. Besides,
            my professional experience helped me to become more adaptable and a
            good team player.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
