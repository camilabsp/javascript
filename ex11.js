// Escreva um programa para ler uma temperatura em graus Fahrenheit. Faça uma função chamada celsius para calcular e retornar o valor correspondente em graus Celsius.

function celsiusFahrenheit (temperatura) {
    const tc = ((temperatura - 32)/9) * 5
    return `${temperatura} °F equivale a ${tc.toFixed(2)} °C`;
}

console.log(celsiusFahrenheit(25))
console.log(celsiusFahrenheit(100))
