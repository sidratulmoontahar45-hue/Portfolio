import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Navbar/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
};
export default Home;