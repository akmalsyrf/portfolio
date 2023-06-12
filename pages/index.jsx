import styles from "../styles/Home.module.css";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Tools from "../components/Tools";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <About />
      <Resume />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
