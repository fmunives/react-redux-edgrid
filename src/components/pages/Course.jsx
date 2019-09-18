import React, { useState } from "react";

const Course = () => {
  const [state, setState] = useState({
    cursoActual: {
      id: 1,
      title: "SAP 2000 Básico / Intermedio",
      image: "https://fmunives.github.io/GrupoVG/img/portfolio/cursos/sap.jpg",
      image_level:
        "https://cdn0.iconfinder.com/data/icons/rewards-and-badges-1/64/level-reward-medal-badge-256.png",
      level: "Intermedio",
      price: 250
    }
  });

  return (
    <div className="ed-grid">
      <h3 className="l-cols-2">Curso de: {state.cursoActual.title} </h3>
      <img src={state.cursoActual.image} alt={state.cursoActual.title} />
      <p>Level: {state.cursoActual.level} </p>
    </div>
  );
};

export default Course;
