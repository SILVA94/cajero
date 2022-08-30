
const deposito = document.getElementById("deposito")
const total = document.getElementById("total")
const retirar = document.getElementById("retirar")





deposito.addEventListener('click', function(evento){
    
    const depositar = Number(document.getElementById('depositar').value)
    console.log(depositar)   
})

retirar.addEventListener('click', function(evento){
    evento.preventDefault()
    const retiro= Number(document.getElementById('retiro').value)
    console.log(retiro)
})



