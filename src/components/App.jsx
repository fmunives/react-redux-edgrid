import React from "react";
import "../styles/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./organisms/Menu";
import Banner from "./organisms/Banner";
import Courses from "./pages/Courses";
import Users from "./pages/Users";
import Form from "./pages/Form";

const App = () => (
  <Router>
    <Menu />
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/cursos" component={Courses} />
      <Route path="/formulario" component={Form} />
      <Route path="/usuarios" component={Users} />
    </Switch>
  </Router>
);

export default App;
