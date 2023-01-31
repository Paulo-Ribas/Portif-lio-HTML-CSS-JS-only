const escolha = document.querySelector('.sobre-mim-descrition')
const experiencia = document.querySelector('.como-foi-aprender')
const zoomExperiencia = document.querySelector('.conteudo-3_0')
const zoomEscolha = document.querySelector('.conteudo-2_0')
const zoom = document.querySelector('#sobre-mim-descrition-oculto')

function Escolha() {
    zoomEscolha.classList.toggle('displayNone')
    if ( ! zoomExperiencia.classList.contains('displayNone')) {
        zoomExperiencia.classList.toggle('displayNone')
        
    }
    Aparecer()
    
    
}
function Experiencia() {
    zoomExperiencia.classList.toggle('displayNone')
    if (! zoomEscolha.classList.contains('displayNone')) {
        zoomEscolha.classList.toggle('displayNone')

    }
    Aparecer()

   
    
}
function Aparecer() {
    zoom.classList.toggle('displayNone')
    
}

escolha.onclick =  Escolha
experiencia.onclick = Experiencia
zoom.onclick = Aparecer