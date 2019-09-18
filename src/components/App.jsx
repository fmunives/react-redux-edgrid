import React from "react";
import "../styles/styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./organisms/Menu";
import Banner from "./organisms/Banner";
import Courses from "./pages/Courses";
import Users from "./pages/Users";
import Form from "./pages/Form";
import Course from "./pages/Course";
import { Provider } from "react-redux";
import store from "../redux/store";
import { getToList, getToListUsers } from "../redux/actionCreator";

store.dispatch(getToList());
store.dispatch(getToListUsers());

const App = () => (
  <Provider store={store}>
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact component={Banner} />
        <Route path="/cursos/:id" component={Course} />
        <Route path="/cursos" component={Courses} />
        <Route path="/formulario" component={Form} />
        <Route path="/usuarios" component={Users} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
