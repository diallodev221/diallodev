import "./App.css";
import BacktoTop from "./components/BacktoTop";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Hero from "./pages/Hero";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import  Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Preloader />
      <BacktoTop />
      <Navbar />
      <main className="site-content" id="content">
        <Hero />
        <Services />
        <Projects />
        <Experiences />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
