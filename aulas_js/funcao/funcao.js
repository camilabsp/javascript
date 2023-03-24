//Função SOMA
function soma(valor1,valor2){
    return valor1 + valor2;
}

document.getElementById('txt').innerHTML = soma(10,24)


//Função Real/Dolar
function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}

var real = 7.89
var cotacaoDolar = 5.08

var total = realParaDolar(real,cotacaoDolar)

alert('O valor em real é R$: ' + real + ' e o valor em dólar U$ é: ' + total)

//usando botão clicar

function alertaHello(){
    alert('Olá pessoal!');
}

//ou podemos invocar a funão diretamente no código

alertaHello();

//Funcão Celsius

function paraCelsius(valorFahrenheit){
    return (5/9)*(valorFahrenheit - 32);
}

var x = paraCelsius(77);

alert('A temperatura é de ' + x + ' graus Celsius.')
