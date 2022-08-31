
const formulario = document.getElementById("formulario")




const user = 'Ricardo'
const password = 'Java123'

function sin(tipo){
    let sinDatos = document.getElementById(`sin${tipo}`)
    sinDatos.classList.remove('hide')
    sinDatos.classList.add('error')
    setTimeout(function(){
        sinDatos.classList.remove('error')
        sinDatos.classList.add('hide')
      },10000)
    }

function login(u,p){
    
    if (u === '' || p === ''){
        sin('Datos')
        
    }
    else if (u == user && p == password) {
        window.location="./cuenta.html"; 
        
    }
    else if (u != user){
        sin('Usuario')

    }
    else if (p != password){
        sin('Password')

    }
} 

function retirar(){
	
    var resultado = (numero1 - numero2);
    
    resultado.innerHTML=  `"El resultado es : ${resultado}`
    console.log(resultado)

}
formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    let user = document.getElementById('usuario').value
    let password = document.getElementById('password').value
    login(user,password)
    
 })

 
 