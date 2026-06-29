import "./App.css";
import Layout from "./components/Layout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Archiving from "./sections/Archiving";
import Skills from "./sections/Skills";
import { ThemeProvider } from "./context/ThemeContext";
import Projects from "./sections/Projects";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Archiving />
        <Skills />
        <Projects />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
