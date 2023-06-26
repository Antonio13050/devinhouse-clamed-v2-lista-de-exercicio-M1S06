export function calculaMedia(lista) {
    const soma = lista.reduce((total, item) => total + item, 0);
    return soma / lista.length;
}
