import React, { useState } from "react";

// Componente del semáforo con accesibilidad
const TrafficLight = () => {
    const [color, setColor] = useState("red"); // Estado inicial del semáforo
    const [colors, setColors] = useState(["red", "yellow", "green"]); // Colores iniciales

    // Función para alternar entre los colores rojo, amarillo y verde
    const toggleColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };

    // Función para agregar el color púrpura
    const addPurpleColor = () => {
        if (!colors.includes("purple")) {
            setColors([...colors, "purple"]);
        }
    };

    return (
        <div>
            <h2>El color actual es {color}</h2> {/* Texto dinámico para el lector de pantalla */}
            
    <div className="traffic-light">
            {colors.map((c, index) => (
                <div
                    key={index}
                    className={`${c} light ${color === c ? "active" : ""}`}
                    onClick={() => setColor(c)}
                    aria-label={`Luz ${c}`} // Etiquetas ARIA para cada luz
                    role="button"
                    tabIndex={0} // Hacemos los divs interactivos para el lector de pantalla
                ></div>
            ))}
            <button onClick={toggleColor} className="btn btn-primary mt-3" aria-label="Alternar colores">
                Alternar colores
            </button>
            <button onClick={addPurpleColor} className="btn btn-secondary mt-3" aria-label="Agregar color púrpura">
                Agregar púrpura
            </button>
        </div>        
        </div>
     
    );
};

// Componente principal
const Home = () => {
    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Semáforo</h1>
            <TrafficLight /> {/* Agregamos el semáforo aquí */}
        </div>
    );
};

export default Home;
