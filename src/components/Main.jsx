import NavBar from "./NavBar";
import TechStack from "./TechStack";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import About from "./About";
import Experience from "./Experience";

export default function Main() {
  return (
    <div
      width="100%"
      style={{
        overflowX: "hidden",
        backgroundImage: "url(./bg.svg)",
        backgroundSize: "cover",
      }}
    >
      <NavBar />

      <About />
      <Experience />
      <TechStack />
      <Project />

      <Contact />
      <Footer />
    </div>
  );
}
