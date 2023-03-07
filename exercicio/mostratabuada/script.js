function multiplica(){
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
        item.value=`tab${c}`
        tab.appendChild(item)
        c++
    }
   }
}
function somar(){
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
         item.text =`${numcon}+${c}=${numcon+c}      `
         item.value=`tab${c}`
         tab.appendChild(item)
         c++
     }
    }
 }
 function subtrair(){
    let num = document.querySelector("input#txtnumero")
    let tab = document.querySelector("select#seltab")
    
    if(num.value.length == 0){ 
     window.alert("Digite um número")
    }else{
     let numcon = Number(num.value)
     c = 1
     let aux = numcon+1
     tab.innerHTML=' '
     while(c<=10){
         let item = document.createElement('option')
         item.text =`${aux}-${numcon}=${aux-numcon}      `
         item.value=`tab${c}`
         tab.appendChild(item)
         c++
         aux++
     }
    }
 }
 function dividir(){
    let num = document.querySelector("input#txtnumero")
    let tab = document.querySelector("select#seltab")
    
    if(num.value.length == 0){ 
     window.alert("Digite um número")
    }else{
     let numcon = Number(num.value)
     let aux = numcon
     c = 1
     tab.innerHTML=' '
     while(c<=10){
         let item = document.createElement('option')
         item.text =`${aux}/${numcon}=${aux/numcon}`
         item.value=`tab${c}`
         tab.appendChild(item)
         c++
         aux = aux + numcon
     }
    }
 }