//marca string, ano number,

class Veiculo {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
    obterDetalhes() {
        return `Marca: ${this.marca}, Ano: ${this.ano}`;
    }
}

class Carro extends Veiculo {
    constructor(marca, ano, portas) {
        super(marca, ano);
        this.portas = portas;
    }
    obterDetalhes() {
        return `Marca: ${this.marca}, Ano: ${this.ano}, Portas: ${this.portas}`;
    }
}

let veiculo = new Veiculo("Ford", 2020);
console.log(veiculo.obterDetalhes());

let carro = new Carro("Ford", 2020, 4);
console.log(carro.obterDetalhes());
