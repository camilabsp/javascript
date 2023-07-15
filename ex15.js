// Escreva um programa que leia um preço e um valor percentual. Informe o preço acrescido do percentual e o  preço com o desconto percentual. Por exemplo, se for lido um preço de 100.00 e um valor percentual de 5.00 o programa deve mostrar que o preço com aumento é 105.00 e o preço com desconto é 95.00. OBS: Mostre sempre duas casas decimais.

function valorPercentual(preco,percentual){
    const acrescimo = preco + (preco * percentual);
    const desconto = preco - (preco * percentual);
    return `Preço com acréscimo: ${acrescimo}\nPreço com desconto: ${desconto}`;
}

console.log(valorPercentual(100,5));