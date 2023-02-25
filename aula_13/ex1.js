let num = [5,8,2,9,3]

num [3] = 0 //acrescenta o 0 na posição 3
num.push(7) //acrescenta o 7 no vetor
num.length //tamanho do vetor


console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor ordenado é ${num.sort()}`) //num.sort() ordena os elementos.
console.log(`O valor 8 está na posição ${num.indexOf(8)}`) //mostra a posição o número no vetor.
console.log(num.indexOf(4)) //quando o valor não é encontrado, ele mostra -1.

