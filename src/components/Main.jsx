import NavBar from "./NavBar";

import TechStack from "./TechStack";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";

export default function Main() {
  return (
    <div width="100%" style={{overflowX: 'hidden'}}>
      
      <NavBar />
      <About/>
      {/* <About/> */}
      <TechStack />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
