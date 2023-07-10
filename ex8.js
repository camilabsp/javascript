//Escreva uma função de leia o preço de um produto e mostre na tela o valor com 10% de desconto arredondado para duas casas decimais.

function precoDesconto (preco) {
    const valorDesconto = preco - (preco * 0.10)
    return valorDesconto.toFixed(2)
}

console.log(precoDesconto(125.27));
console.log(precoDesconto(234));