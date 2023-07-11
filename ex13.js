// Faça um programa que leia a altura e o sexo (codificado da seguinte forma: 1:feminino 2:masculino) de uma pessoa. Depois faça uma função chamada peso ideal que receba a altura e o sexo via parâmetro e que calcule e retorne seu peso ideal, utilizando as seguintes fórmulas:   - para homens : (72.7 * h) – 58
//                                        - para mulheres : (62.1 * h) – 44.7

function pesoIdeal (altura, sexo) {
    if (sexo === 1) {
        const pesoMulher = (62.1 * altura) - 44.7
        return `Seu peso ideal é ${pesoMulher.toFixed(1)} Kg.`;
    }
    if (sexo === 2) {
        const pesoHomem = (72.7 * altura) -58
        return `Seu peso ideal é ${pesoHomem.toFixed(1)} Kg.`;
    } else {
        return 'Informe sexo válido!'
    }
}

console.log(pesoIdeal(1.58,1))
console.log(pesoIdeal(1.75,2))
console.log(pesoIdeal(1.58,3))