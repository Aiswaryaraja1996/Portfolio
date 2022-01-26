import styles from "./Contact.module.css";
import EmailIcon from "@material-ui/icons/Email";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  return (
    <div style={{ backgroundColor: "black", width: "100%",top:"100px"}} id="contact">
      <div className={styles.contact}>
        <div className={styles.contactDetails}>
          <p>CONTACT ME</p>   

                   <div>
            <LocationOnIcon style={{ color: "white" }}></LocationOnIcon>
            <p>Kerala, India</p>
          </div>   

          <div>
            <EmailIcon style={{ color: "white" }}></EmailIcon>
            <p>ammu.rajaponnan@gmail.com</p>
          </div>

          {/* <div
            style={{ color: "white", display: "flex", flexDirection: "column" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>Any message or suggestions </div>
              <div>
                <QuestionAnswerOutlinedIcon style={{color:"#6E0DD0"}}/>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>Mail Me !!</div>
            
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>Thanks in Advance </div>{" "}
              <div>
                <SentimentSatisfiedAltIcon  style={{color:"#6E0DD0"}}/>
              </div>
            </div>
          </div> */}
        </div>
        <form
          className={styles.formContainer}
          action="mailto:ammu.rajaponnan@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <label>Name</label>
          <input type="text" name="name" required></input>
          <label>Email</label>
          <input type="email" name="email" required></input>
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write something.."
            required
          ></textarea>
          <button type="submit" value="SEND">
            SEND <LocalPostOfficeOutlinedIcon></LocalPostOfficeOutlinedIcon>
          </button>
        </form>
      </div>
    </div>
  );
}
