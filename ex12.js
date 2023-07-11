//Escreva um programa para ler as notas das duas avaliações de um aluno no semestre. Faça um procedimento que receba as duas notas por parâmetro e calcule e escreva a média semestral e a mensagem “PARABÉNS! Você foi aprovado!” somente se o aluno foi aprovado (considere 6.0 a média mínima para aprovação).

function mediaSemestral (nota1,nota2) {
    const media = (nota1 + nota2)/2
    if (media >= 6) {
        return 'PARABÉNS! Você foi aprovado!';
    } else {
        return 'Você não foi aprovado.';
    }
}

console.log(mediaSemestral(5.5,7.2));
console.log(mediaSemestral(4.2,3.9));