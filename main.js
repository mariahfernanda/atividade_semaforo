'use strict'

const semaforo = document.getElementById ('semaforo')
const vermelho = document.getElementById ('vermelho')
const amarelo = document.getElementById ('amarelo')
const verde = document.getElementById ('verde')
const automatico = document.getElementById ('automatico')
let idAutomatico = null;

const deixarVermelho =()=>{
    if(!deixarAutomatico())
    semaforo.src = './img/vermelho.png'
}

const deixarAmarelo =() =>{
    if(!deixarAutomatico())
    semaforo.src = './img/amarelo.png'
}

const deixarVerde =() =>{
    if(!deixarAutomatico())
    semaforo.src = './img/verde.png'
}


function deixarAutomatico() {
    if (idAutomatico == null) {
        idAutomatico = setInterval( 500)

        automatico.textContent = 'Parar'
    } else {
        clearInterval(idAutomatico)
        idAutomatico = null
        automatico.textContent = 'voltar'
        
    }
}

vermelho.addEventListener('click', deixarVermelho)
amarelo.addEventListener('click', deixarAmarelo)
verde.addEventListener('click', deixarVerde)
automatico.addEventListener('click', deixarAutomatico)