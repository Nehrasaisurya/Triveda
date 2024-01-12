import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Feedback from "./Components/Feedback";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Feedback />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
