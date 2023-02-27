function verificar(){
    var ano = new Date()
    var ano_atual = ano.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano_atual){
        window.alert("ERRO!,verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano_atual-Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade<2){
                genero ='bebê'
                img.setAttribute('src','img/bebeme.png')
                 res.innerHTML =`Detectamos um ${genero} de ${idade} ano`
            }else if(idade<18){
                genero = 'rapaz'
                img.setAttribute('src','img/meninoe.png')
                 res.innerHTML =`Detectamos um ${genero} de ${idade} anos`
            }else if(idade<60){
                
                img.setAttribute('src','img/homeme.png')
                 res.innerHTML =`Detectamos ${genero} de ${idade} anos`
            }else{
                genero='senhor'
                img.setAttribute('src','img/velhoe.png')
                 res.innerHTML =`Detectamos um ${genero} de ${idade} anos`
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
             if(idade>=0 && idade<2){
                genero='bebe'
                img.setAttribute('src','img/bebefe.png')
                 res.innerHTML =`Detectamos uma ${genero} de ${idade} ano`
            }else if(idade<18){
                genero = 'moça'
                img.setAttribute('src','img/meninae.png')
                 res.innerHTML =`Detectamos uma ${genero} de ${idade} anos`
            }else if(idade<60){
                img.setAttribute('src','img/mulhere.png')
                 res.innerHTML =`Detectamos uma ${genero} de ${idade} anos`
            }else{
                genero = 'senhora'
                img.setAttribute('src','img/velhae.png')
                 res.innerHTML =`Detectamos uma ${genero} de ${idade} anos`
            }
        }
       res.style.textAlign='center'
        res.appendChild(img)
    }
}