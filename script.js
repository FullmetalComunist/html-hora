function carregar(){
    var msg = document.getElementById('msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12){
        //BOM DIA
        document.body.style.background = '#c0ae9f'
        img.src = "fotomanha.png"
    } else if (hora >=12 && hora < 18){
        //BOA TARDE
        document.body.style.background = '#b16d51'
        img.src = "fototarde.png"
    } else {
        //BOA NOITE
        document.body.style.background = '#1f0f4e'
        img.src = "fotonoite.png"
    }
}