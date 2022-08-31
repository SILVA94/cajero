const deposito = document.getElementById("deposito")
const total = document.getElementById("total")
const retirar = document.getElementById("retirar")
 
const depositar = Number(document.getElementById('depositar').value)


const saldo12 = Number(document.getElementById('saldo').value)


function depositor(){
    //const depositar = Number(document.getElementById('depositar').value)
    //const retiro= Number(document.getElementById('retiro').value)
    const saldo = depositar+saldo12
    document.getElementById('saldo1').innerHTML = ` Tu saldo es: ${saldo}`
    
    //document.getElementById('total').innerHTML = ` Tu saldo es: ${total}`
    
    console.log('lll', saldo)
}

function menosDinero(){
    const retiro = Number(document.getElementById('retiro').value)
    //const saldo = Number(document.getElementById('saldo').value)
    
    const resta = retiro-saldo12 
    console.log('resultado resta', resta)
    console.log('valor de saldo12', saldo12)
    document.getElementById('saldo1').innerHTML = ` Tu saldo es: ${resta}`
    console.log('variable de saldo final ', saldo12)
}

deposito.addEventListener('click', function(evento){
    evento.preventDefault()
    //const depositar = Number(document.getElementById('depositar').value)
    const deposito = Number(document.getElementById('deposito').value)
    console.log(depositar)
    //depositor(depositar,saldo1)  
    depositor(depositar,saldo12)
})

retirar.addEventListener('click', function(evento){
    evento.preventDefault()
    //const retiro= Number(document.getElementById('retiro').value)
    //const saldo = Number(document.getElementById('saldo').value)
    //menosDinero(retiro,saldo12)
    menosDinero()
    
})

