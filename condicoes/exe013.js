var horas= new Date()
hr= horas.getHours()
if(hr>=6 && hr<12){
    console.log('Bom dia!')
}else if(hr>=12 && hr<18){
    console.log('Boa tarde!')
}else if(hr>=18 && hr<=23){
    console.log('Boa noite!')
}else{
    console.log('Boa Madrugada!')
}