// Você é dono de uma loja que vende roupas. Sua política é de dar desconto para quem compra à vista, vender pelo preço de etiqueta para quem paga em 5 vezes e cobrar jutos de quem comprar em 10 vezes. Escreva um programa que leia o valor de uma compra e imprima três valores, todos com até duas casas decimais:
// Valor para pagamento à vista, com desconto de 9%.
// Valor da prestação para pagamento em 5 vezes, sem desconto nem juros.
// Valor da prestação para pagamento em 10 vezes, com 17% de juros.

function formaDePagamento(valor){
    var aVista = valor - (valor * 0.09);
    var cincoX = valor / 5;
    var dezX = (valor + (valor * 0.17)) / 10;

    return `Pagamento à vista ${aVista}\nPagamento em 5 vezes: ${cincoX}\nPagamento em 10 vezes: ${dezX}`
}

console.log(formaDePagamento(1200));