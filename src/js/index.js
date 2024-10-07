import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Home from "./component/home.jsx";

// Renderizamos la app en el div con id 'app'
ReactDOM.createRoot(document.getElementById('app')).render(<Home />);