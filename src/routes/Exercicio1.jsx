import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { somaArray } from "../FuncoesDosExercicios/somaArray";
import { multiplicaArray } from "../FuncoesDosExercicios/multiplicaArray";
import { calculaMedia } from "../FuncoesDosExercicios/calculaMedia";

const Exercicio1 = () => {
    const [numeros, setNumeros] = useState([]);
    const [resultado, setResultado] = useState(0);

    const somar = (e) => {
        e.preventDefault();

        if (numeros == "") {
            alert("Insira alguns números");
            return;
        }

        let numerosSeparados = numeros
            .split(",")
            .map((numero) => Number(numero));
        setResultado(somaArray(numerosSeparados));
    };

    const multiplicar = (e) => {
        e.preventDefault();

        if (numeros == "") {
            alert("Insira alguns números");
            return;
        }

        let numerosSeparados = numeros
            .split(",")
            .map((numero) => Number(numero));
        setResultado(multiplicaArray(numerosSeparados));
    };

    const media = (e) => {
        e.preventDefault();

        if (numeros == "") {
            alert("Insira alguns números");
            return;
        }

        let numerosSeparados = numeros
            .split(",")
            .map((numero) => Number(numero));
        setResultado(calculaMedia(numerosSeparados));
    };

    return (
        <>
            <div className="container">
                <div className="descricao">
                    <div className="title py-2">
                        <h3>Exercício 1 - Import Export </h3>
                    </div>
                    <ul className="list-disc">
                        <li className="mx-5">
                            Crie três módulos separados em arquivos distintos:
                            somaArray.js, multiplicaArray.js e calculaMedia.js.
                        </li>
                        <li className="mx-5">
                            No módulo somaArray.js, exporte uma função chamada
                            somaArray, que recebe um array de números como
                            parâmetro e retorna a soma de todos os elementos.
                        </li>
                        <li className="mx-5">
                            No módulo multiplicaArray.js, exporte uma função
                            chamada multiplicaArray, que recebe um array de
                            números como parâmetro e retorna a multiplicação de
                            todos os elementos.
                        </li>
                        <li className="mx-5">
                            No módulo calculaMedia.js, exporte uma função
                            chamada calculaMedia, que recebe um array de números
                            como parâmetro e retorna a média aritmética desses
                            números.
                        </li>
                        <li className="mx-5">
                            No módulo principal, importe as três funções e
                            solicite ao usuário que insira um array de números.
                        </li>
                        <li className="mx-5">
                            Utilize as funções importadas para calcular e exibir
                            no console a soma, a multiplicação e a média dos
                            elementos do array fornecido pelo usuário.
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="resolucao">
                    <h4 className="">Resolução</h4>
                    <Form.Label htmlFor="inputPassword5">
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
                        onClick={somar}
                        variant="primary"
                        type="button"
                        className="my-2 me-2"
                    >
                        Somar
                    </Button>
                    <Button
                        onClick={multiplicar}
                        variant="primary"
                        type="button"
                        className="my-2 me-2"
                    >
                        Multiplicar
                    </Button>
                    <Button
                        onClick={media}
                        variant="primary"
                        type="button"
                        className="my-2 me-2"
                    >
                        Media
                    </Button>
                    <h4>
                        {isNaN(resultado)
                            ? "Insira somente números"
                            : "Resultado: " + resultado}
                    </h4>
                </div>
            </div>
        </>
    );
};

export default Exercicio1;
