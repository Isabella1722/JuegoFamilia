let imagen = document.querySelector(".ImagenAdivinanza")
let titulo = document.querySelector(".NombreFigura")
let cultura = document.querySelector(".NombreCultura")
let btnContinuar = document.querySelector("#botonContinuar")

var adivinanza = localStorage.getItem('adivinanza')



switch (adivinanza) {

    case 'guepardo':

        imagen.src = "./../../data//img/jaguar.png"
        titulo.textContent = "guepardo este guepatdo es muy bonto"
        cultura.textContent = "Cuultura algo"
        break;
}

btnContinuar.addEventListener("click", function () {

    localStorage.setItem('premioAdivinanza', adivinanza + "")

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/Premio.html";
    }, 500)
})
