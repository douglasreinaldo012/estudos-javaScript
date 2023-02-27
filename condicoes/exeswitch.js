var agora= new Date()
var diaSem=agora.getDay()
var dia='a definir'

switch(diaSem){
    case 0:
        dia = 'Domingo'
        break
    case 1:
        dia = 'segunda-feira'
        break
    case 2:
        dia = 'terça-feira'
        break
    case 3:
        dia = 'quarta-feira'
        break
    case 4:
        dia = 'quinta-feira'
        break
    case 5:
        dia = 'sextoooo'
        break
    case 6:
        dia = 'sabado'
        break
    default:
        console.log('erro!')
        break
}
console.log(dia)
