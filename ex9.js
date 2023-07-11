// Faça uma função que recebe um número inteiro por parâmetro e retorna verdadeiro se ele for par e falso se for ímpar

function parImpar (n) {
    if (n % 2 === 0) {
        return true;
    } else{
        return false;
    }
}

console.log(parImpar(6));
console.log(parImpar(11));