const seguro = {
    quantidadeDePagina: document.getElementById('ranger'),
    elementosHtml: {
        Design: document.getElementById('design'),
        numeroDaQtdePagina: document.getElementById('rangeValue'),
        select: document.getElementById('prazoSelect'),
        selectTS: document.getElementById('TS'),
        Dia1: document.getElementById('Dia1'),
        Dias2: document.getElementById('Dias2'),
        Dias3: document.getElementById('Dias3'),
        semana1: document.getElementById('semana1'),
        semanas2: document.getElementById('semanas2'),



    },
    incluirDesgin: 0,
    PaginaValor: 150,
    prazos: {
        Dia1: false,
        Dias2: false,
        Dias3: false,
        semana1: false,
        semanas2: false,

    },
    tiposSites: {
        landingPages: false,
        PaginaVendas: false,
        lojasVirtuais: false,
        Blog: false,
        Portifolio: false,
        outros: false,

    },
    
    Checagem(){
        let calcular1 = this.incluirDesgin + this.PaginaValor
        let calcular2 = this.incluirDesgin + this.PaginaValor
        let calcular3
        let numeroPaginas = parseInt(this.quantidadeDePagina.value)
        const valueHtml = this.elementosHtml.numeroDaQtdePagina
//=========================prazos checagem==========================================
        if (this.prazos.Dia1 == true) {
            this.quantidadeDePagina.setAttribute('max','4')
            if (numeroPaginas > 4) {
                numeroPaginas = 4
                this.PaginaValor = numeroPaginas * 150
                valueHtml.innerHTML = numeroPaginas
                calcular2 = (this.incluirDesgin + this.PaginaValor) + 400
                return this.valorFinal(calcular2) 

                
            }
            if(numeroPaginas >= 1 && numeroPaginas <= 2) {
                calcular2 = calcular1 + 150
            }
            if (numeroPaginas >= 3 && numeroPaginas <= 4) {
                calcular2 = calcular1 + 400
            }
            
        }
        if (this.prazos.Dias2 == true) {
            this.quantidadeDePagina.setAttribute('max', '4')
            if (numeroPaginas > 4) {
                numeroPaginas = 4
                this.PaginaValor = numeroPaginas * 150
                valueHtml.innerHTML = numeroPaginas
                calcular2 = (this.incluirDesgin + this.PaginaValor) + 100
                return this.valorFinal(calcular2)


            }
            if (numeroPaginas >= 1 && numeroPaginas <= 2) {
                calcular2 = calcular1 + 50
            }
            if (numeroPaginas >= 3 && numeroPaginas <= 4) {
                calcular2 = calcular1 + 100
            }

        }
        if (this.prazos.Dias3 == true) {
            this.quantidadeDePagina.setAttribute('max', '6')
            if (numeroPaginas > 6) {
                numeroPaginas = 6
                this.PaginaValor = numeroPaginas * 150
                valueHtml.innerHTML = numeroPaginas
                calcular2 = (this.incluirDesgin + this.PaginaValor) + 70
                return this.valorFinal(calcular2)


            }
            if (numeroPaginas >= 1 && numeroPaginas <= 2) {
                calcular2 = calcular1 + 0
            }
            if (numeroPaginas >= 3 && numeroPaginas <= 4) {
                calcular2 = calcular1 + 50
            }
            else {
                calcular2 = calcular1 + 70
            }

        }
        if (this.prazos.semana1 == true) {
        
        }
        if (this.prazos.semanas2 == true) {
            
        }
        valueHtml.innerHTML = numeroPaginas
//========================tipos de site checagem=====================================
        if (this.tiposSites.landingPages == true) {
            valueHtml.innerHTML = numeroPaginas
            if (this.elementosHtml.Dia1 == false && this.elementosHtml.Dias2 != true) {
                this.elementosHtml.Dia1.setAttribute('selected', 'selected')
            }
            this.elementosHtml.Dias3.setAttribute('disabled','disabled')
            this.elementosHtml.semana1.setAttribute('disabled','disabled')
            this.elementosHtml.semanas2.setAttribute('disabled','disabled')
            this.quantidadeDePagina.setAttribute('max', '1')
            if (numeroPaginas > 1) {
                numeroPaginas = 1
            }
            if (this.prazos.Dia1 == false) {
                this.prazos.Dia1 = true
                console.log(this.prazos.Dia1)
                this.PaginaValor = numeroPaginas * 150
                return this.Checagem()


            }
            calcular3 = calcular2 + 400
            return this.valorFinal(calcular3)

            
        }
     
        return this.valorFinal(calcular2)
        

    },
    valorFinal(valor = 150) {
        const valorHtml = document.getElementById('valorDoOrçamento')
        valorHtml.innerHTML = valor
    }
    
    
}















function DesginChecked() {
    seguro.elementosHtml.Design.classList.toggle('checked')
    incluirDesgin()
    
}
function incluirDesgin() {
        if (seguro.elementosHtml.Design.classList.contains('checked')) { 
            seguro.incluirDesgin = seguro.quantidadeDePagina.value * 150
            seguro.Checagem()
        }
        else {
            seguro.incluirDesgin = 0
            seguro.Checagem()
        }

    
}

function QtdDePaginas() {
    seguro.PaginaValor = seguro.quantidadeDePagina.value * 150
    incluirDesgin()

                    
   
    
}

function selecionarPrazo() {
    switch (seguro.elementosHtml.select.options[seguro.elementosHtml.select.selectedIndex].value) {
        case '1':
            seguro.prazos.Dia1 = true
            seguro.prazos.Dias2 = false
            seguro.prazos.Dias3 = false
            seguro.prazos.semana1 = false
            seguro.prazos.semanas2 = false
            
            break;
        case '2':
            seguro.prazos.Dia1 = false
            seguro.prazos.Dias2 = true
            seguro.prazos.Dias3 = false
            seguro.prazos.semana1 = false
            seguro.prazos.semanas2 = false

            break;
        case '3':
            seguro.prazos.Dia1 = false
            seguro.prazos.Dias2 = false
            seguro.prazos.Dias3 = true
            seguro.prazos.semana1 = false
            seguro.prazos.semanas2 = false

            break;
        case '4':
            seguro.prazos.Dia1 = false
            seguro.prazos.Dias2 = false
            seguro.prazos.Dias3 = false
            seguro.prazos.semana1 = true
            seguro.prazos.semanas2 = false

            break;
        case '5':
            seguro.prazos.Dia1 = false
            seguro.prazos.Dias2 = false
            seguro.prazos.Dias3 = false
            seguro.prazos.semana1 = false
            seguro.prazos.semanas2 = true

            break;
    
        default:;
   
    }
    seguro.Checagem()   
}

function selecionarSite() {
    switch (seguro.elementosHtml.selectTS.options[seguro.elementosHtml.selectTS.selectedIndex].value) {
        case '1':
            seguro.tiposSites.landingPages = true
            seguro.tiposSites.PaginaVendas = false
            seguro.tiposSites.lojasVirtuais = false
            seguro.tiposSites.Blog = false
            seguro.tiposSites.Portifolio = false
            seguro.tiposSites.outros = false

            break;
        case '2':
            seguro.tiposSites.landingPages = false
            seguro.tiposSites.PaginaVendas = true
            seguro.tiposSites.lojasVirtuais = false
            seguro.tiposSites.Blog = false
            seguro.tiposSites.Portifolio = false
            seguro.tiposSites.outros = false

            break;
        case '3':
            seguro.tiposSites.landingPages = false
            seguro.tiposSites.PaginaVendas = false
            seguro.tiposSites.lojasVirtuais = true
            seguro.tiposSites.Blog = false
            seguro.tiposSites.Portifolio = false
            seguro.tiposSites.outros = false

            break;
        case '4':
            seguro.tiposSites.landingPages = false
            seguro.tiposSites.PaginaVendas = false
            seguro.tiposSites.lojasVirtuais = false
            seguro.tiposSites.Blog = true
            seguro.tiposSites.Portifolio = false
            seguro.tiposSites.outros = false

            break;
        case '5':
            seguro.tiposSites.landingPages = false
            seguro.tiposSites.PaginaVendas = false
            seguro.tiposSites.lojasVirtuais = false
            seguro.tiposSites.Blog = false
            seguro.tiposSites.Portifolio = true
            seguro.tiposSites.outros = false

            break;
        case '6':
            seguro.tiposSites.landingPages = false
            seguro.tiposSites.PaginaVendas = false
            seguro.tiposSites.lojasVirtuais = false
            seguro.tiposSites.Blog = false
            seguro.tiposSites.Portifolio = false
            seguro.tiposSites.outros = true

            break;

        default:;

            

    }
    seguro.Checagem()

}

    


seguro.quantidadeDePagina.onchange = QtdDePaginas
seguro.elementosHtml.Design.onclick = DesginChecked
seguro.elementosHtml.select.onchange = selecionarPrazo
seguro.elementosHtml.selectTS.onchange = selecionarSite
addEventListener('load', seguro.valorFinal())
