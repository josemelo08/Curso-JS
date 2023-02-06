function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    //var res = document.getElementById('res')
    var res = document.querySelector('div#resultado')
    
    //se o valor do ano for nulo ou o valor do ano for maior que o ano atual
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('[error1] Dados incorretos.')
    } else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = '' //começa vazia
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked){ //se o genero marcado for o [0](masculino)
            genero = "masculino"
            if (idade >=0 && idade <12){
                img.setAttribute('src', 'foto_bebe_m.jpg')
            } else if(idade<16){
                //adolescente
                img.setAttribute('src', 'foto_adolescente_m.jpg')
            } 
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto_jovem_m.jpg')
            } else if(idade < 40){
                //adulto
                img.setAttribute('src', 'foto_adulto_m.jpg')
            } else if(idade<60){
                //50's
                img.setAttribute('src', 'foto_50s_m.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'foto_idoso_m.jpg')
            }

        } else if(fSex[1].checked){
            genero = "feminino"
            if (idade >=0 && idade <12){
                //criança
                img.setAttribute('src', 'foto_bebe_f.jpg')

            } else if(idade < 16){
                //adolescente
                img.setAttribute('src', 'foto_adolescente_f.jpg')
            } 
            else if(idade < 21){
                //jovem 
                img.setAttribute('src', 'foto_jovem_f.jpg')
            } else if(idade < 40){
                //adulto
                img.setAttribute('src', 'foto_adulto_f.jpg')
            }else if(idade<60){
                //50's
                img.setAttribute('src', 'foto_50s_f.jpg')
            } 
            else{
                //idoso
                img.setAttribute('src', 'foto_idoso_f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Pessoa do gênero ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }

}