import CopyrightIcon from "@material-ui/icons/Copyright";

export default function Footer() {
  return (
    <div style={{color:"white",borderTop:"1px solid hsla(0, 0%, 100%, 0.1)",backgroundColor:"black"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <p style={{display:"flex"}}>
          Designed and Coded By Aiswarya Raja <CopyrightIcon style={{margin:"0px 3px"}} /> 2021
        </p>
      </div>
    </div>
  );
}
