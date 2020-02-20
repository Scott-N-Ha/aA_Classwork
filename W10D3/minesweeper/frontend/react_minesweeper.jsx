import React from "react";
import ReactDom from "react-dom";
import Game from "../components/game.jsx";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDom.render(<Game />, root);
});