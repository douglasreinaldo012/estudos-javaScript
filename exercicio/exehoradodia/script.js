function carregar(){
var horaAgora = new Date()
var hora = horaAgora.getHours()
var msg = window.document.querySelector('div#frase')
var imagem = window.document.getElementById('foto')
msg.innerHTML=(`olá , são ${hora} horas`)
if(hora>=0 && hora<12){
    msg.innerHTML=(`Bom dia! ${hora} horas agora!`)
    imagem.scr = 'img/manha.png'
    document.body.style.background='#f9d68c'
    
}else if(hora>=12 && hora<18){
    msg.innerHTML=(`Bom tarde! ${hora} horas agora!`)
    imagem.src = 'img/tarde.png'
    document.body.style.background='#f0aa62'
}else{
    msg.innerHTML=(`Boa noite! ${hora} horas agora!`)
    imagem.src = 'img/noite.png'
    document.body.style.background='#554534'
}
}