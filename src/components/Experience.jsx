import styles from "./Project.module.css";

export default function Project() {
  return (
    <div style={{ paddingBottom: "56px", textAlign: "center" }}>
      <p className={styles.head} id="experience">
        WORK EXPERIENCE
      </p>
      <p style={{ fontSize: "24px" }}>
        SYSTEM ENGINEER | TATA CONSULTANCY SERVICES, BANGALORE | 20 Sept 2018 -
        17 Dec 2021
      </p>

      <fieldset
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
         
          width: "60%",
          margin: "20px auto",

          padding: "20px 0",

          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "5px",
          
        }}
      >
        <legend style={{ fontSize: "20px" }}>ROLES AND RESPONSIBILITIES</legend>
        <ul style={{textAlign: "Left",fontSize:"18px",lineHeight: "2"}}>
          <li>
            Developer in an agile team of a US-based wealth management firm.
          </li>
          <li>
            Development, testing, and support of all the requirements
            and managing all aspects of SDLC.
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
