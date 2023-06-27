import React from "react";
import { Link } from "react-router-dom";

import Accordion from "react-bootstrap/Accordion";
import "./Lista.css";
import { BrowserRouter as Router } from "react-router-dom";

const Lista = () => {
    return (
        <div className="container">
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <Link to="/exercicio1" className="acordion-link fs-4">
                            Exercício 1 - Import Export
                        </Link>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li className="">
                                Crie três módulos separados em arquivos
                                distintos: somaArray.js, multiplicaArray.js e
                                calculaMedia.js.
                            </li>
                            <li className="">
                                No módulo somaArray.js, exporte uma função
                                chamada somaArray, que recebe um array de
                                números como parâmetro e retorna a soma de todos
                                os elementos.
                            </li>
                            <li className="">
                                No módulo multiplicaArray.js, exporte uma função
                                chamada multiplicaArray, que recebe um array de
                                números como parâmetro e retorna a multiplicação
                                de todos os elementos.
                            </li>
                            <li className="">
                                No módulo calculaMedia.js, exporte uma função
                                chamada calculaMedia, que recebe um array de
                                números como parâmetro e retorna a média
                                aritmética desses números.
                            </li>
                            <li className="">
                                No módulo principal, importe as três funções e
                                solicite ao usuário que insira um array de
                                números.
                            </li>
                            <li className="">
                                Utilize as funções importadas para calcular e
                                exibir no console a soma, a multiplicação e a
                                média dos elementos do array fornecido pelo
                                usuário.
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <Link to="/exercicio2" className="acordion-link fs-4">
                            Exercício 2 - Funções de array
                        </Link>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li className="">
                                Crie um array com uma lista de objetos, cada um
                                representando um aluno. Cada aluno deve possuir
                                as propriedades nome (string), nota1 (number) e
                                nota2 (number).
                            </li>
                            <li className="">
                                Utilize uma função de array, como map, filter ou
                                reduce, para calcular a média das notas de cada
                                aluno.
                            </li>
                            <li className="">
                                Crie um novo array contendo objetos com as
                                propriedades nome e media, onde media é a média
                                das notas.
                            </li>
                            <li className="">
                                Exiba o array resultante no console, ordenado em
                                ordem decrescente de média.
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <Link to="/exercicio3" className="acordion-link fs-4">
                            Exercício 3 - Classe Livros
                        </Link>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li className="">
                                Crie uma classe chamada Livro com as
                                propriedades titulo (string), autor (string) e
                                anoPublicacao (number).
                            </li>
                            <li className="">
                                Implemente um método na classe chamado
                                obterInformacoes, que retorna uma string
                                formatada com as informações do livro.
                            </li>
                            <li className="">
                                Crie três objetos da classe Livro, cada um
                                representando um livro diferente.
                            </li>
                            <li className="">
                                Exiba no console as informações de cada livro,
                                utilizando o método obterInformacoes.
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <Link to="/exercicio4" className="acordion-link fs-4">
                            Exercício 4 - Classe Herança
                        </Link>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li className="">
                                Crie uma classe chamada Veiculo com as
                                propriedades marca (string) e ano (number).
                            </li>
                            <li className="">
                                Crie uma classe chamada Carro que herde da
                                classe Veiculo. Adicione à classe Carro a
                                propriedade adicional portas (number).
                            </li>
                            <li className="">
                                Crie um método na classe Veiculo chamado
                                obterDetalhes, que retorna uma string com as
                                informações do veículo (marca e ano).
                            </li>
                            <li className="">
                                Crie um método na classe Carro chamado
                                obterDetalhes, que sobrescreve o método na
                                classe Veiculo e retorna uma string com as
                                informações do carro (marca, ano e número de
                                portas).
                            </li>
                            <li className="">
                                Crie um objeto da classe Carro e exiba no
                                console as informações detalhadas do carro
                                utilizando o método obterDetalhes.
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <Link to="/exercicio5" className="acordion-link fs-4">
                            Exercício 5 - Filtros
                        </Link>
                    </Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li className="">
                                Crie dois módulos em arquivos distintos:
                                filtrarPares.js e somaImpares.js.
                            </li>
                            <li className="">
                                No módulo filtrarPares.js, exporte uma função
                                chamada filtrarPares, que recebe um array de
                                números como parâmetro e retorna um novo array
                                contendo apenas os números pares.
                            </li>
                            <li className="">
                                No módulo somaImpares.js, exporte uma função
                                chamada somaImpares, que recebe um array de
                                números como parâmetro e retorna a soma de todos
                                os números ímpares.
                            </li>
                            <li className="">
                                No módulo principal, importe as duas funções e
                                solicite ao usuário que insira um array de
                                números.
                            </li>
                            <li className="">
                                Utilize a função filtrarPares para obter um novo
                                array contendo apenas os números pares do array
                                fornecido pelo usuário.
                            </li>
                            <li className="">
                                Em seguida, utilize a função somaImpares para
                                calcular e exibir no console a soma dos números
                                ímpares do array fornecido pelo usuário.
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Lista;
