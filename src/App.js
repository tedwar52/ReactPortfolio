import React from "react";
import { HashRouter } from "react-router-dom";
import { HashRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper/index";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";

function App() {
  return (
    <HashRouter basename="/reactportfolio">
      <Router>
      <div>
        <NavBar />
        <Header />
        <Wrapper>
          <Route exact path ="/" component={About} />
          <Route path ="/aboutme" component={About} />
          <Route path ="/projects" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
      </Router>
    </HashRouter>
  )
}

export default App;
