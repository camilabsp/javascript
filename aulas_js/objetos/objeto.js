//são variaveis com muitos valores dentro; objetos têm métodos.

const carro = {marca:'ford',
    modelo:'ka',
    ano:2015,
    placa:'ABC-1234',
    buzina: function(){alert('Biiiiiiiii')},
    completo: function(){
        return alert('A marca é ' + this.marca + ' e o modelo é ' + this.modelo)
    }

}

carro.buzina();
carro.completo();



