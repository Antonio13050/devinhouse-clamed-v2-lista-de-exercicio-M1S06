import React from "react";

const Exercicio3 = () => {
    return (
        <>
            <div className="container">
                <div className="title py-2">
                    <h3>Exercício 3 - Classe Livros</h3>
                </div>
                <ul className="list-disc">
                    <li className="mx-5">
                        Crie uma classe chamada Livro com as propriedades titulo
                        (string), autor (string) e anoPublicacao (number).
                    </li>
                    <li className="mx-5">
                        Implemente um método na classe chamado obterInformacoes,
                        que retorna uma string formatada com as informações do
                        livro.
                    </li>
                    <li className="mx-5">
                        Crie três objetos da classe Livro, cada um representando
                        um livro diferente.
                    </li>
                    <li className="mx-5">
                        Exiba no console as informações de cada livro,
                        utilizando o método obterInformacoes.
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Exercicio3;
