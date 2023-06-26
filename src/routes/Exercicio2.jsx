import React from "react";
import { useState } from "react";

const Exercicio2 = () => {
    return (
        <>
            <div className="container">
                <div className="title py-2">
                    <h3>Exercício 2 - Funções de array</h3>
                </div>
                <ul className="list-disc">
                    <li className="mx-5">
                        Crie um array com uma lista de objetos, cada um
                        representando um aluno. Cada aluno deve possuir as
                        propriedades nome (string), nota1 (number) e nota2
                        (number).
                    </li>
                    <li className="mx-5">
                        Utilize uma função de array, como map, filter ou reduce,
                        para calcular a média das notas de cada aluno.
                    </li>
                    <li className="mx-5">
                        Crie um novo array contendo objetos com as propriedades
                        nome e media, onde media é a média das notas.
                    </li>
                    <li className="mx-5">
                        Exiba o array resultante no console, ordenado em ordem
                        decrescente de média.
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Exercicio2;
