const array1 = ['./img/eu.jpg', './img/eu2.jpg', './img/joao1.jpg', './img/joao2.jpg', './img/joao3.jpg']
let count = 0
const galeriaContainer = document.querySelector('.galeria-container')
const imgOriginal = document.getElementById('minha_foto')
const imgGalery = document.getElementById('img2')
const botaoNext = document.getElementById('btn-1-next')
const botaoAnterior = document.getElementById('btn-1-Anterior')
const galeria = document.getElementById('galeria')
const numeration = document.querySelector('.numeros')

function aparecerGaleria() {
    galeria.classList.toggle('displayNone')
    imgOriginal.setAttribute('src', array1[count])

}

function Proximo() {
    count = count + 1
    if (count >= array1.length) {
        count = 0
        
    }
    numeration.innerHTML = count+1 + '/5'
    imgGalery.setAttribute('src', array1[count])
    if (imgGalery.hasAttribute('anterior') || imgGalery.hasAttribute('anterior2')) {
        imgGalery.removeAttribute('anterior')
        imgGalery.removeAttribute('anterior2')
''
    }
    if (! imgGalery.hasAttribute('proximo')) {
        imgGalery.toggleAttribute('proximo')
    }
    imgGalery.toggleAttribute('proximo2')
   

    
}
function Anterior(){
    count = count - 1
    if (count <= array1.length && count < 0) {
        count = array1.length - 1
        
    }
    numeration.innerHTML = count + 1 + '/5'
    imgGalery.setAttribute('src', array1[count])

    if (imgGalery.hasAttribute('proximo') || imgGalery.hasAttribute('proximo2')) {
        imgGalery.removeAttribute('proximo')
        imgGalery.removeAttribute('proximo2')
        
    }
    if (!imgGalery.hasAttribute('anterior')) {
        imgGalery.toggleAttribute('anterior')
    }
    imgGalery.toggleAttribute('anterior2')

    
}




imgGalery.onclick = aparecerGaleria
galeriaContainer.onclick = aparecerGaleria
imgOriginal.onclick = aparecerGaleria
botaoNext.onclick = Proximo
botaoAnterior.onclick = Anterior