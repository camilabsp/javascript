//Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3 * PI * R**3).

const pi  = 3.14

function calculaVolume(raio) {
    let volume = 4/3 * pi * (raio ** 3)
    return volume
}

console.log(calculaVolume(2.5))