export function somaImpares(lista) {
    return lista
        .filter((item) => item % 2 !== 0)
        .reduce((total, item) => total + item);
}
