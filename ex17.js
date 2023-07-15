//  Escreva um programa que leia um nome pelo teclado e informe quantos caracteres o nome possui.

function contaletra(nome){
    var caracteres = nome.length;
    return `A palavra ${nome} tem ${caracteres} caracteres.`
}

console.log(contaletra('Camila'));
console.log(contaletra('ParaLelepípedo'));
