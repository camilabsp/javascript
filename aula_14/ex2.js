function soma(n1,n2){
    return n1 + n2
}
console.log(soma(7,3))

//ou usando valores predefinidos

function soma (n1=0,n2=0){
    return n1 + n2
}
console.log(5,8)
console.log(soma(8)) // se um dos valores não forem digitados, usa-se o valor predefinido