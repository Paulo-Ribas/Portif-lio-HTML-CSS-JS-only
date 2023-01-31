addEventListener('scroll', () => {
    const headerMenu = document.querySelector('header .container').classList
    const header = document.querySelector('header').style
    if (scrollY >= 110 && headerMenu.contains('NoFixed')) {
        headerMenu.add('fixed')
        headerMenu.remove('NoFixed')
        header.height = "80px"

    }
    if (scrollY <= 230 && headerMenu.contains('fixed')) {
        headerMenu.remove('fixed')
        headerMenu.add('NoFixed')
        header.height = ""

    }
})

addEventListener('scroll', () => {
    const animation_1 = document.querySelector('section .fotos-container').classList
    const animation_2 = document.querySelector('section .sobre-mim-descrition').classList
    const animation_3 = document.querySelector('section .como-foi-aprender').classList

    if (scrollY >= 180 && !animation_1.contains('descer')) {
        animation_1.add('descer')


    }
    if (scrollY >= 350 && !animation_2.contains('subir') && !animation_3.contains('subir')) {
        animation_2.add('subir')
        animation_3.add('subir')

    }
    if (scrollY >= 180 && !animation_1.contains('animar_aparition')) {
        animation_1.add('opacity')

    }
    if (scrollY >= 350 && !animation_2.contains('animar_aparition') && !animation_3.contains('animar_aparition')) {
        animation_2.add('opacity')
        animation_3.add('opacity')

    }



})
