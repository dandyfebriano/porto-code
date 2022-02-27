import Topbar from "./components/topbar/Topbar";
import Intro from "./components/introduction/Intro";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import "./App.css"
import Menu from "./menu/Menu";
import { useState } from "react";

function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Experience/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
