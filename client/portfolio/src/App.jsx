import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/about";
import Services from "./components/services/Services";
function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Services/>
    </>
  );
}

export default App;
