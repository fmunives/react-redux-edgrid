import React from "react";
import { NavLink } from "react-router-dom";
import CourseCart from "../atoms/CourseCart";

const Menu = () => (
  <header className="main-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center">
        <a href="https://edteam.com">
          <img
            className="main-logo"
            src="https://ed.team/static/images/logo-premium.svg"
            alt="Logo de EDTeam"
          />
        </a>
      </div>
      <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
        <nav className="main-menu" id="main-menu">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="activo">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/cursos" activeClassName="activo">
                Cursos
              </NavLink>
            </li>
            <li>
              <NavLink to="/formulario" activeClassName="activo">
                Formulario
              </NavLink>
            </li>
            <li>
              <NavLink to="/usuarios" activeClassName="activo">
                Usuarios
              </NavLink>
            </li>
            <CourseCart />
          </ul>
        </nav>
        <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
      </div>
    </div>
  </header>
);

export default Menu;
