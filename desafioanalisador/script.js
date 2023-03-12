let num = document.querySelector('input#txtvalor')
let lista = document.querySelector('select#flista')
let valores = []
 function isNumero(n){
    if(n>=1 && n<=100){
    return true
    }else{
    return false
    }
 }
 function inLista(n,l){
    if(l.indexOf(Number(n) != -1)){
        return true
    }else{
        return false
    }
 }

 function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        window.alert("tudo Ok!")
    }else{
        window.alert("Valor Inválido! ou já encontrado na lista!")
    }
 }