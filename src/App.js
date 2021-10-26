import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";

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
          <Redirect to="/" />
        </Switch>
      </header>
    </div>
  );
}

export default App;
