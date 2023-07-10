//Escreva uma função que leia o valor de um raio, calcule e mostre na tela o comprimento da circunferência, a área do círculo, a área da esfera e o volume da esfera para o valor do raio lido. Mostre os valores com 6 casas decimais.
const pi = 3.14

function circunferencia (raio) {
    const comprimento = 2 * pi * raio
    const area = pi * (raio ** 2)
    const volume = 4/3 * pi * (raio ** 3)

    return `Comprimento: ${comprimento.toFixed(6)}\nÁrea: ${area.toFixed(6)}\nVolume: ${volume.toFixed(6)}`
}

console.log(circunferencia(2.5));
