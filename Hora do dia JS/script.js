function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data =  new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    hora = 3
    minutos = 0
 
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if (hora >=0 && hora <6){
        //boa madrugada
        img.src = "madrugada.jpg"
        document.body.style.background = "#141821"
    } else if (hora <12){
        //bom dia
        img.src = "manha.jpg"
        document.body.style.background = "#e2cd9f"
    } else if (hora < 18){
        //boa tarde
        img.src = "tarde.jpg"
        document.body.style.background = "#b9846f"
    } else{
        //boa noite
        img.src = "noite.jpg"
        document.body.style.background = "#3d444e"
    }

}


