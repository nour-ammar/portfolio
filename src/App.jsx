import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Works from "./components/Works/Works.jsx";
import Education from "./components/Education/Education.jsx"

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/education" component={Education} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
