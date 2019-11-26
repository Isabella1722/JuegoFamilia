//let gifImagen = document.querySelector(".GifPremio")
let imagenDelPremio = document.querySelector(".ImagenDelPremio")
let textoPremio = document.querySelector(".textoPremio")
let contenedorPremio = document.querySelector(".contenedorPremio")
let btnVerPremio = document.querySelector("#botonCompletado")

let premioAdivinanza = localStorage.getItem("premioAdivinanza")
let randomizador = parseInt(Math.random() * 2)

//console.log(randomizador)

/*let retrasador = setTimeout(function () {

    gifImagen.classList.add("bounceOutDown")

}, 2000)*/

//let retrasadorDos = setTimeout(function () {

    contenedorPremio.style.display = "flex"

    contenedorPremio.classList.add("zoomIn")

//}, 2500)

switch (premioAdivinanza) {
    case 'aguila':
        if (randomizador == 0) {
            imagenDelPremio.src = "./../../data/img/libro1.png"
            localStorage.setItem('premioLibro', '1')

        } else if (randomizador == 1) {
            imagenDelPremio.src = "./../../data/img/libro2.png"
            localStorage.setItem('premioLibro', '2')

        }
        textoPremio.textContent = "Cuento"

        break;
}
