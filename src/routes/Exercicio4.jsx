import React from "react";

const Exercicio4 = () => {
    return (
        <>
            <div className="container">
                <div className="title py-2">
                    <h3>Exercício 4 - Classe Herança</h3>
                </div>
                <ul className="list-disc">
                    <li className="mx-5">
                        Crie uma classe chamada Veiculo com as propriedades
                        marca (string) e ano (number).
                    </li>
                    <li className="mx-5">
                        Crie uma classe chamada Carro que herde da classe
                        Veiculo. Adicione à classe Carro a propriedade adicional
                        portas (number).
                    </li>
                    <li className="mx-5">
                        Crie um método na classe Veiculo chamado obterDetalhes,
                        que retorna uma string com as informações do veículo
                        (marca e ano).
                    </li>
                    <li className="mx-5">
                        Crie um método na classe Carro chamado obterDetalhes,
                        que sobrescreve o método na classe Veiculo e retorna uma
                        string com as informações do carro (marca, ano e número
                        de portas).
                    </li>
                    <li className="mx-5">
                        Crie um objeto da classe Carro e exiba no console as
                        informações detalhadas do carro utilizando o método
                        obterDetalhes.
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Exercicio4;
