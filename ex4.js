// Escreva uma função que leia dois números e mostre na tela a soma e a multiplicação deles.

function somaMultiplica (x, y) {
    const soma = x + y
    const produto = x * y
    return `A soma é ${soma} e o produto é ${produto}.`
}

console.log(somaMultiplica(2,5));
console.log(somaMultiplica(-3,5));