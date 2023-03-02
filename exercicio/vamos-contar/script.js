function contar(){
    let inicio = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    
   
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Informe um número para começar a contagem!!")
    }

}