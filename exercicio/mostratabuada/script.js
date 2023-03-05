function tabuada(){
   let num = document.querySelector("input#txtnumero")
   let tab = document.querySelector("select#seltab")
   
   if(num.value.length == 0){ 
    window.alert("Digite um número")
   }else{
    let numcon = Number(num.value)
    c = 1
    tab.innerHTML=' '
    while(c<=10){
        let item = document.createElement('option')
        item.text =`${numcon}X${c}=${numcon*c}      `
        tab.appendChild(item)
        c++
    }
   }
}