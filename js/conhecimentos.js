const linguagens = document.querySelectorAll('.linguagens')
const linha = document.querySelector('.linguagem-row')
const btnNextL = document.querySelector('.linguagem-row-container .btn-next')
const btnAnteriorL = document.querySelector('.linguagem-row-container .btn-anterior')
let countL = 0
linguagens.forEach( tipo => {
    let classes = tipo.classList

    tipo.addEventListener('mouseover', () => {

        if (classes.contains('html')) {
                tipo.style.textShadow = "0px 0px 5px #e34f26"
                
        }
        if (classes.contains('css')) {
                tipo.lastElementChild.style.textShadow = '0px 0px 5px #18a3ac'
                

        }
        if (classes.contains('js')) {
                tipo.lastElementChild.style.textShadow = '0px 0px 5px #f7df1e'

        }
        if (classes.contains('mongoDB')) {
                tipo.lastElementChild.style.textShadow = '0px 0px 5px #589636'

        }
        if (classes.contains('vuejs')) {
                tipo.lastElementChild.style.textShadow = '0px 0px 5px #42b883, 0px 0px 7px #35495e'

        }
        if (classes.contains('nodeJs')) {
                tipo.lastElementChild.style.textShadow = '0px 0px 5px #6cc24a'

        }

    })
    tipo.addEventListener('mouseout', () => {
        if (classes.contains('html')) {
            tipo.style.textShadow = "0px 0px 0px #e34f26"

        }
        if (classes.contains('css')) {
            tipo.lastElementChild.style.textShadow = '0px 0px 0px #18a3ac'


        }
        if (classes.contains('js')) {
            tipo.lastElementChild.style.textShadow = '0px 0px 0px #f7df1e'

        }
        if (classes.contains('mongoDB')) {
            tipo.lastElementChild.style.textShadow = '0px 0px 0px #589636'

        }
        if (classes.contains('vuejs')) {
            tipo.lastElementChild.style.textShadow = '0px 0px 0px #42b883, 0px 0px 7px #35495e'

        }
        if (classes.contains('nodeJs')) {
            tipo.lastElementChild.style.textShadow = '0px 0px 0px #6cc24a'

        }

    })
    
});

function rolarF() {
    switch (countL) {
        case 0:
            linha.style.transform = 'translateX(-0.4%)'
            break;
        case 1:
            linha.style.transform = 'translateX(-47.4%)'
            break;
        default:
            linha.style.transform = 'translateX(0)'
    }
    
}

function ProximoL() {
    countL = countL + 1
    if (countL > 1) {
        countL = 0   
    }
    rolarF()
    
}
function AnteriorL() {
    countL = countL - 1
    if (countL < 0) {
        countL = 1
    }
    rolarF()

    
}

btnNextL.onclick = ProximoL
btnAnteriorL.onclick = AnteriorL
