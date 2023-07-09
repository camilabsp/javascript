// Escreva uma função que recebe as 3 notas de um aluno por parâmetro e uma letra. Se a letra for A o procedimento calcula a média aritmética das notas do aluno, se for P, a sua média ponderada (pesos: 5, 3 e 2). A função deve retornar a média calculada.

function media (nota1,nota2,nota3,letra) {
    if (letra === 'A' || letra === 'a') {
        const mediaAritmetica = (nota1 + nota2 + nota3)/3
        return mediaAritmetica.toFixed(2) 

    } if (letra === 'P' || letra === 'p') {
        const mediaPonderada = ((nota1 * 5) + (nota2 * 3) + (nota3 * 2)) / 3
        return mediaPonderada.toFixed(2)
    }
    
}

console.log(media(7.5,8.2,9.1,'a'))
console.log(media(7.5,8.2,9.1,'P'))