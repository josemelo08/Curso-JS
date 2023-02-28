function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var resultado = document.getElementById('resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossível contar.'

    } else{
        resultado.innerHTML = 'Contando: '
        var i = Number(inicio.value)//converte o valor de inicio para Number
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <=0){
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f){ //crescente
            for(var c = i; c <= f; c+= p){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else{ //decrescente
            for(var c = i; c > f-1; c -= p){
                resultado.innerHTML += ` ${c} \u{1f449}`
            }
            
        }
        resultado.innerHTML += `\u{1F3C1}`
    }   
}

