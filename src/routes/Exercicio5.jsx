import React from "react";
import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { filtrarPares } from "../ModulosExerc5/filtrarPares";
import { somaImpares } from "../ModulosExerc5/somaImpares";

const Exercicio5 = () => {
    const [numeros, setNumeros] = useState([]);
    const [pares, setPares] = useState([]);
    const [soma, setSoma] = useState(0);

    const enviar = (e) => {
        e.preventDefault();

        if (numeros == "") {
            alert("Insira alguns números");
            return;
        }

        let numerosSeparados = numeros
            .split(",")
            .map((numero) => Number(numero));

        setPares(filtrarPares(numerosSeparados).join(", "));

        setSoma(somaImpares(numerosSeparados));
    };

    return (
        <>
            <div className="container">
                <div className="descricao">
                    <div className="title py-2">
                        <h3>Exercício 5 - Filtros</h3>
                    </div>
                    <ul className="list-disc">
                        <li className="mx-5">
                            Crie dois módulos em arquivos distintos:
                            filtrarPares.js e somaImpares.js.
                        </li>
                        <li className="mx-5">
                            No módulo filtrarPares.js, exporte uma função
                            chamada filtrarPares, que recebe um array de números
                            como parâmetro e retorna um novo array contendo
                            apenas os números pares.
                        </li>
                        <li className="mx-5">
                            No módulo somaImpares.js, exporte uma função chamada
                            somaImpares, que recebe um array de números como
                            parâmetro e retorna a soma de todos os números
                            ímpares.
                        </li>
                        <li className="mx-5">
                            No módulo principal, importe as duas funções e
                            solicite ao usuário que insira um array de números.
                        </li>
                        <li className="mx-5">
                            Utilize a função filtrarPares para obter um novo
                            array contendo apenas os números pares do array
                            fornecido pelo usuário.
                        </li>
                        <li className="mx-5">
                            Em seguida, utilize a função somaImpares para
                            calcular e exibir no console a soma dos números
                            ímpares do array fornecido pelo usuário.
                        </li>
                    </ul>
                </div>
                <div className="resolucao">
                    <h4 className="">Resolução</h4>
                    <Form.Label htmlFor="numeros">
                        Digite a lista de números separados por virgula
                    </Form.Label>
                    <Form.Control
                        type="text"
                        id="numeros"
                        placeholder="Ex.: 1, 2, 3..."
                        value={numeros}
                        onChange={(e) => {
                            setNumeros(e.target.value);
                        }}
                    />
                    <Button
                        onClick={enviar}
                        variant="primary"
                        type="button"
                        className="my-2 me-2"
                    >
                        Enviar
                    </Button>
                    <h5>Pares: {pares}</h5>
                    <h5>Soma dos impares: {soma}</h5>
                </div>
            </div>
        </>
    );
};

export default Exercicio5;
