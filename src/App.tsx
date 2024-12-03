import "./App.css";

import Hero from "./Hero.tsx";
import NavBar from "./NavBar.tsx";
import Skills from "./Skills.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Achievements from "./Achievements.tsx";
import Footer from "./Footer.tsx";

function App() {

  // As you can see I'm not very good at typescript but I'm trying my best

  return (
    <>
      <NavBar />
      <div id="padder" className="flex overflow-y-scroll flex-col items-center w-screen h-screen snap-y snap-proximity">
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
