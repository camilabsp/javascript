// Escreva um programa que leia o raio de um círculo e faça duas funções: uma função chamada área que calcula e retorna a área do círculo e outra função chamada perímetro que calcula e retorna o perímetro do círculo.

pi = 3.14
function area (raio) {
    const area = pi * (raio ** 2)
    return `A área é ${area.toFixed(2)} m²`;
}

function perimetro (raio) {
    const perimetro = 2 * pi * raio
    return `O perímetro é ${perimetro.toFixed(2)} m`;

}

console.log(perimetro(3.5),area(3.5));
console.log(perimetro(5),area(5));