// Escreva um programa/algoritmo que leia 5 (cinco) números inteiros e escreva na tela:
// o maior número lido;
// o menor número lido;
// a média aritmética dos números lidos.

function operacoes (n1,n2,n3,n4,n5){
    var maior = Math.max(n1,n2,n3,n4,n5);
    var menor = Math.min(n1,n2,n3,n4,n5);
    var media = (n1+n2+n3+n4+n5)/5;

    return `Maior: ${maior}\nMenor: ${menor}\nMédia: ${media.toFixed(1)}`
}

console.log(operacoes(12,13,15,67,22));
console.log(operacoes(81.32,0,-4.3,67,52));