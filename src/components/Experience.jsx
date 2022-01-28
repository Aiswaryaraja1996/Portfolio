import styles from "./Project.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Project() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      id="experience"
      style={{ paddingTop: "150px", textAlign: "center" }}
      data-aos="fade-up"
    >
      <p className={styles.head}>WORK EXPERIENCE</p>
      <p style={{ color: "darkblue" }} className={styles.title}>
        System Engineer | Tata Consultancy Services, Bangalore | 20 Sept 2018 -
        17 Dec 2021
      </p>

      <fieldset
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          padding: "20px",

          borderRadius: "1rem",
        }}
      >
        <legend>ROLES AND RESPONSIBILITIES</legend>
        <ul style={{ textAlign: "Left", fontSize: "18px", lineHeight: "2" }}>
          <li>
            Developer in an agile team of a US-based wealth management firm.
          </li>
          <li>
            Development, testing, and support of all the requirements and
            managing all aspects of SDLC.
          </li>
          <li>Creates HLD/LLD documentation and user stories.</li>
          <li>
            Trains and orients new members and involves in sprint planning and
            velocity estimations.
          </li>
        </ul>
      </fieldset>
    </div>
  );
}
