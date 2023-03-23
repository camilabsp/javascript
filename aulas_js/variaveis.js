//variáveis JS
/*
No JavaScript sa-se 3 palavras para declarar variaveis:
- var
- let
- const = constante (não muda)
*/

//declaração de variáveis 
var a,b,c;
var nome,sobrenome,nomeCompleto;

//atribição de valores
a = 10;
b = 5;
c = a + b;
nome = 'Camila';
sobrenome = 'Lima';
nomeCompleto = nome + ' ' + sobrenome;

//saída

document.getElementById('texto').innerHTML = nomeCompleto;
alert(c);