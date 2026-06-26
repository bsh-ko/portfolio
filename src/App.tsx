import "./App.css";
import Layout from "./components/Layout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
