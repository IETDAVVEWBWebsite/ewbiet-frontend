import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Contact from "./Components/Contact/Contact.js";
import HKBS from "./Components/HKBS/HKBS";
import NAB from "./Components/NAB/NAB";
import CG from "./Components/CG/CG.js";
import SSG from "./Components/SSG/SSG.js";

function App() {

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/hkbs" component={HKBS} />
          <Route exact path="/nab" component={NAB} />
          <Route exact path="/cg" component={CG} />
          <Route exact path="/ssg" component={SSG} />
          <Redirect to="/" />
        </Switch>
      </header>
    </div>
  );
}

export default App;
