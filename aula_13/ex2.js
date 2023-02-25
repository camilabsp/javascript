let valores = [8,1,7,4,2,9]

console.log(valores[0]) //mostra o 1° elemento do vetor 
console.log(valores[1]) 
console.log(valores[2]) 
console.log(valores[3]) 
console.log(valores[4]) 
console.log(valores[5]) 

//usando repetição:

for(let pos=0;pos<valores.length;pos++){
    console.log(`O elemento da posição ${pos} é: ${valores[pos]}`)
}

//simplificando:

for (let pos in valores){
    console.log(`O elemento da posição ${pos} é: ${valores[pos]}`)
}