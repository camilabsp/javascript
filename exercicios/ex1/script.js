function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() //pega hora do sistema
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = ('manha.jpg')
        document.body.style.background = 'lightpink'
    }else if (hora >=12 && hora <= 18){
        img.src = ('tarde.jpg')
        document.body.style.background = 'lightyellow'
    }else{
        img.src = ('noite.jpg')
        document.body.style.background = 'lightgray'

    }
   
    }

