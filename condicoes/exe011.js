var vel = 70
var multaInicial = 130.00
console.log(`A velocidade do seu carro foi ${vel}km/h`)
if(vel>60){
    console.log(`Você ultrapassou a velocidade(60km/h) permitida! MULTADO!`)
    if(vel>60 && vel<70){
        console.log(`valor da multa:R$${multaInicial}`)
    }else{
        multaInicial=multaInicial+60.6
        console.log(`valor da multa:R$${multaInicial}`)
    }
}
console.log(`dirija sempre usando o cinto de segurança!`)