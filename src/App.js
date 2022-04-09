import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Components/Navbar/Navbar.js";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Contact from "./Components/Contact/Contact.js";
import CC from "./Components/CollectionCamp/cc.js"
import NAB from "./Components/NAB/NAB";
import CG from "./Components/CG/CG.js";
import SSG from "./Components/SSG/SSG.js";
import Project from "./Components/Project/Project.js";
import Team from "./Components/Team/Team.js";
import Footer from "./Components/footer/Footer.js";
import Gallery from "./Components/Gallery/Gallery.js";
import Activities from "./Components/Activities/Activities.js";
import Developers from "./Components/developers/developers.js";



function App() {

  useEffect(() => {

  }, []);

  return (
    <>
    <div className="App">
    
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/collectioncamp" component={CC} />v
          <Route exact path="/nab" component={NAB} />
          <Route exact path="/cg" component={CG} />
          <Route exact path="/ssg" component={SSG} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/developers" component={Developers} />
          <Redirect to="/" />
        </Switch>
        
        <Footer />
     
    </div>
    
    </>
  );
}

export default App;
