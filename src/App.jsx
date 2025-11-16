import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Capabilities from "./components/Capabilities.jsx";
import Highlights from "./components/Highlights.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="capabilities">
          <Capabilities />
        </section>

        <section id="highlights">
          <Highlights />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
