import React from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

const Exercicio2 = () => {
    const [aluno, setAluno] = useState({
        nome: "",
        nota1: 0,
        nota2: 0,
    });
    const [lista, setLista] = useState([]);

    const [listaMedia, setListaMedia] = useState([]);

    const [listaOrdenada, setListaOrdenada] = useState([]);

    const onsubmit = (e) => {
        e.preventDefault();

        if (isNaN(aluno.nota2) || isNaN(aluno.nota1)) {
            alert("Insira uma nota valida");
            return;
        }

        let dados = {
            nome: aluno.nome,
            nota1: Number(aluno.nota1),
            nota2: Number(aluno.nota2),
        };

        let media = (dados.nota1 + dados.nota2) / 2;

        let dadosComMedia = {
            nome: aluno.nome,
            nota1: Number(aluno.nota1),
            nota2: Number(aluno.nota2),
            media: media,
        };

        setLista([...lista, dados]);

        setListaMedia([...listaMedia, dadosComMedia]);

        setListaOrdenada([...listaMedia, dadosComMedia]);
    };

    return (
        <>
            <div className="container">
                <div className="descricao">
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
                            Utilize uma função de array, como map, filter ou
                            reduce, para calcular a média das notas de cada
                            aluno.
                        </li>
                        <li className="mx-5">
                            Crie um novo array contendo objetos com as
                            propriedades nome e media, onde media é a média das
                            notas.
                        </li>
                        <li className="mx-5">
                            Exiba o array resultante no console, ordenado em
                            ordem decrescente de média.
                        </li>
                    </ul>
                </div>
                <div className="resolucao">
                    <h4 className="">Resolução</h4>
                    <div className="cadastro">
                        <h5>Cadastro de alunos</h5>
                        <div className="formulario">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="nome">
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite o nome do aluno"
                                        onChange={(e) =>
                                            setAluno({
                                                ...aluno,
                                                nome: e.target.value,
                                            })
                                        }
                                        value={aluno.nome}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="nota1">
                                    <Form.Label>Nota 1</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite a nota 1"
                                        onChange={(e) =>
                                            setAluno({
                                                ...aluno,
                                                nota1: e.target.value,
                                            })
                                        }
                                        value={aluno.nota1}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="nota2">
                                    <Form.Label>Nota 2</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Digite a nota 2"
                                        onChange={(e) =>
                                            setAluno({
                                                ...aluno,
                                                nota2: e.target.value,
                                            })
                                        }
                                        value={aluno.nota2}
                                    />
                                </Form.Group>
                            </Row>
                            <Button
                                variant="primary"
                                type="button"
                                onClick={onsubmit}
                            >
                                Cadastrar
                            </Button>
                        </div>
                    </div>
                    <div className="lista-de-alunos">
                        <h5 className="py-2">Lista de alunos</h5>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Nota 1</th>
                                    <th>Nota 2</th>
                                    <th>Média</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaMedia.map((aluno, index) => (
                                    <tr key={index}>
                                        <td>{aluno.nome}</td>
                                        <td>{aluno.nota1}</td>
                                        <td>{aluno.nota2}</td>
                                        <td>{aluno.media}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <div className="lista-de-alunos">
                        <h5 className="py-2">
                            Lista de alunos ordenada por média
                        </h5>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Nota 1</th>
                                    <th>Nota 2</th>
                                    <th>Média</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaOrdenada
                                    .sort((a, b) => b.media - a.media)
                                    .map((aluno, index) => (
                                        <tr key={index}>
                                            <td>{aluno.nome}</td>
                                            <td>{aluno.nota1}</td>
                                            <td>{aluno.nota2}</td>
                                            <td>{aluno.media}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Exercicio2;
