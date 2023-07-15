// Escreva um programa que leia uma determinada quantidade de minutos e informe essa quantidade convertida de minutos para horas e minutos. Por exemplo, 220 minutos é equivalente 3 horas e 40 minutos. OBS: Mostre o resultado na forma H:M

function minutosEmHoras (tempo) {
    const horas  = Math.floor(tempo/60);
    const minutos = tempo % 60;
    return `${tempo} minutos equivale a ${horas}H:${minutos}M`;
}

console.log(minutosEmHoras(220));