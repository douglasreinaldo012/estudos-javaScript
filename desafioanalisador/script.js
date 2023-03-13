let num = document.querySelector('input#txtvalor')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
 function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
    return true
    }else{
    return false
    }
 }
 function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
 }

 function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text=`Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        window.alert("Valor Inválido! ou já encontrado na lista!")
    }
    num.value=''
    num.focus()

 }
 function finalizar(){
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        if(valores[pos]>maior)
            maior = valores[pos]
        if(valores[pos]<menor)
            menor=valores[pos]
        soma+=valores[pos]
        media=soma/valores.length
    }
    res.innerHTML=''
    res.innerHTML += `<p>Ao todo temos ${tot} número's cadastrados</p>` 
    res.innerHTML+=`<p>Maior numero foi :${maior}</p>`
    res.innerHTML+=`<p>Menor numero foi :${menor}</p>`
    res.innerHTML+=`<p>valores somados:${soma}</p>`
    res.innerHTML+=`<p>media dos valores :${media}</p>`
 }