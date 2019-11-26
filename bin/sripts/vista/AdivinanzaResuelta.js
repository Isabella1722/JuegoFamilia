let imagen = document.querySelector(".ImagenAdivinanza")
let titulo = document.querySelector(".NombreFigura")
let cultura = document.querySelector(".NombreCultura")
let btnContinuar = document.querySelector("#botonContinuar")

var adivinanza = localStorage.getItem('adivinanza')



switch (adivinanza) {

    case 'aguila':

        imagen.src = "./../../data//img/aguila.png"
        titulo.textContent = "Águila"
        cultura.textContent = "Alfiler de oro de la cultura Ilama que alude a un águila arpía (Hapia harpyja) con las plumas de la cabeza y el penacho desplegado. Se aferra a un mono acurrucado con rasgos de apariencia humana."
        break;
}

btnContinuar.addEventListener("click", function () {

    localStorage.setItem('premioAdivinanza', adivinanza + "")

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/Premio.html";
    }, 500)
})
