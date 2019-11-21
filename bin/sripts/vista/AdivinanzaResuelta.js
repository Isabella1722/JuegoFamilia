let imagen = document.querySelector(".ImagenAdivinanza")
let titulo = document.querySelector(".NombreFigura")
let cultura = document.querySelector(".NombreCultura")

var adivinanza = localStorage.getItem('adivinanza')

switch (adivinanza) {

    case 'guepardo':

        imagen.src = "./../../data//img/jaguar.png"
        titulo.textContent = "guepardo este guepatdo es muy bonto"
        cultura.textContent = "Cuultura algo"
        break;


}