function contar(){
    let inicio = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#resultado')
   
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Informe um número para começar a contagem!!")
    }else{
        res.innerHTML = 'resultado:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        let cont = i
        if(i<f){
            //contagem crescente
            while(cont<=f){
            res.innerHTML+=` ${cont}\u{1F449}`
            cont=cont+p
            }
         }else{
            //contagem regressiva
            while(cont>=f){
                res.innerHTML+=` ${cont}\u{1F449}`
                cont=cont-p
            }
         }
    }

}