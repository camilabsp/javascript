//Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm). Faça um procedimento que receba como parâmetro o número de lados e a medida do lado deste polígono e calcule e imprima o seguinte: 
//Se o número de lados for igual a 3, escrever TRIÂNGULO e o valor do seu perímetro.
//Se o número de lados for igual a 4, escrever QUADRADO e o valor da sua área.
//Se o número de lados for igual a 5, escrever PENTÁGONO.
//Observação: Considere que o usuário só informará os valores 3, 4 ou 5.

function poligono (qtdLados,medida) {
    if (qtdLados === 3) {
        const perimetro = 3 * medida
        return `TRIÂNGULO - Perímetro: ${perimetro.toFixed(2)} cm`;
    }

    if (qtdLados === 4) {
        const area = (medida ** 2)
        return `QUADRADO - Área: ${area.toFixed(2)} cm²`;
    }

    if (qtdLados === 5) {
        return 'PENTÁGONO'

    } else {
        return 'Informe o número de lados corretamente.';
        
    }
}

console.log(poligono(3,2.5));
console.log(poligono(4,3.4));
console.log(poligono(5,1.5));
console.log(poligono(7,4.6));