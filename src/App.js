import React from "react";
import "./style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Pnf from "./components/Pnf";
import Menu from "./components/Menu";

export default function App() {
  return (
    <Router>
      <Menu />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Pnf} />
      </Switch>
    </Router>
  );
}
