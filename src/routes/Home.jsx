import React from "react";
import Lista from "../components/Lista/Lista";

const Home = () => {
    return (
        <div className="container">
            <div className="title py-2">
                <h3>Lista de Exercícios - Semana 6 </h3>
            </div>
            <Lista />
        </div>
    );
};

export default Home;
