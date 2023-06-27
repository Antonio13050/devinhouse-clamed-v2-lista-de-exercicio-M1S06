import React from "react";
import Livro from "../Classes/Livro";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Exercicio3 = () => {
    return (
        <>
            <div className="container">
                <div className="descricao">
                    <div className="title py-2">
                        <h3>Exercício 3 - Classe Livros</h3>
                    </div>
                    <ul className="list-disc">
                        <li className="mx-5">
                            Crie uma classe chamada Livro com as propriedades
                            titulo (string), autor (string) e anoPublicacao
                            (number).
                        </li>
                        <li className="mx-5">
                            Implemente um método na classe chamado
                            obterInformacoes, que retorna uma string formatada
                            com as informações do livro.
                        </li>
                        <li className="mx-5">
                            Crie três objetos da classe Livro, cada um
                            representando um livro diferente.
                        </li>
                        <li className="mx-5">
                            Exiba no console as informações de cada livro,
                            utilizando o método obterInformacoes.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="resolucao">
                <Container>
                    <Row>
                        <Livro
                            titulo="O Senhor dos Aneis"
                            autor="J.R.R. Tolkien"
                            anopublicacao={1954}
                        />
                        <Livro
                            titulo="Harry Potter e a Pedra Filosofal"
                            autor="J.K. Rowling"
                            anopublicacao={1997}
                        />
                        <Livro
                            titulo="Harry Potter e o Prisioneiro de Azkaban"
                            autor="J.K. Rowling"
                            anopublicacao={1998}
                        />
                        <Livro
                            titulo="Harry Potter e a Ordem da Fênix"
                            autor="J.K. Rowling"
                            anopublicacao={1999}
                        />
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Exercicio3;
