const deposito = document.getElementById("deposito")
const retirar = document.getElementById("retirar")
//const saldo =document.getElementById('saldo1').value

function modificarValue(dato){
    const saldo =document.getElementById('saldo').value=dato
}

modificarValue(10)

function menosDinero(){
    let saldo12 = Number(document.getElementById('saldo').value)
    const retiro = Number(document.getElementById('retiro').value)
    const resta = saldo12-retiro 
    modificarValue(resta)
    console.log('valor de saldo12', saldo)
    document.getElementById('saldo1').innerHTML = ` Tu saldo es: ${resta}`
    console.log('variable de saldo final ',typeof saldo)
    
}

function depositor(){
    let saldo12 = Number(document.getElementById('saldo').value)
    const depositar = Number(document.getElementById('depositar').value)
    const saldo = depositar+saldo12
    modificarValue(saldo)
    document.getElementById('saldo1').innerHTML = ` Tu saldo es: ${saldo}`
    return saldo
}


deposito.addEventListener('click', function(evento){
    evento.preventDefault()
    depositor()
    console.log('El valor de depositor es: ',saldo)
})

retirar.addEventListener('click', function(evento){
    evento.preventDefault()
    menosDinero()
})






