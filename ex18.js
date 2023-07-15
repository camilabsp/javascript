// Escreva um programa que leia o tempo de duração de um evento em uma fábrica expresso em segundos. Calcule e exiba esse tempo em horas, minutos e segundos (HH:MM:SS).

function tempoEmsegundos (tempo){
    var horas = Math.floor(tempo/3600);
    var minutos = Math.floor((tempo % 3600)/60);
    var segundos = (tempo % 3600) % 60;

    return `${horas}H:${minutos}M:${segundos}S`
}

console.log(tempoEmsegundos(3665));
console.log(tempoEmsegundos(7200));