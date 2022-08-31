const deposito = document.getElementById("deposito")
const total = document.getElementById("total")
const retirar = document.getElementById("retirar")


function depositor(){
    const depositar = Number(document.getElementById('depositar').value)
    const retiro= Number(document.getElementById('retiro').value)
    let total = depositar - retiro
    document.getElementById('total').innerHTML = ` Tu saldo es: ${total}`
    console.log(total)
}


deposito.addEventListener('click', function(evento){
    evento.preventDefault()
    const depositar = Number(document.getElementById('depositar').value)
    console.log(depositar)
    depositor(depositar,retirar)   
})

retirar.addEventListener('click', function(evento){
    evento.preventDefault()
    const retiro= Number(document.getElementById('retiro').value)
    console.log(retiro)
   
    
})




//depositor(depositar,retiro)
