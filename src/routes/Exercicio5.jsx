import React from "react";

const Exercicio5 = () => {
    return (
        <>
            <div className="container">
                <div className="title py-2">
                    <h3>Exercício 5 - Filtros</h3>
                </div>
                <ul className="list-disc">
                    <li className="mx-5">
                        Crie dois módulos em arquivos distintos: filtrarPares.js
                        e somaImpares.js.
                    </li>
                    <li className="mx-5">
                        No módulo filtrarPares.js, exporte uma função chamada
                        filtrarPares, que recebe um array de números como
                        parâmetro e retorna um novo array contendo apenas os
                        números pares.
                    </li>
                    <li className="mx-5">
                        No módulo somaImpares.js, exporte uma função chamada
                        somaImpares, que recebe um array de números como
                        parâmetro e retorna a soma de todos os números ímpares.
                    </li>
                    <li className="mx-5">
                        No módulo principal, importe as duas funções e solicite
                        ao usuário que insira um array de números.
                    </li>
                    <li className="mx-5">
                        Utilize a função filtrarPares para obter um novo array
                        contendo apenas os números pares do array fornecido pelo
                        usuário.
                    </li>
                    <li className="mx-5">
                        Em seguida, utilize a função somaImpares para calcular e
                        exibir no console a soma dos números ímpares do array
                        fornecido pelo usuário.
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Exercicio5;
