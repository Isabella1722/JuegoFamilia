let gifImagen = document.querySelector(".GifPremio")
let imagenDelPremio = document.querySelector(".ImagenDelPremio")
let premioAdivinanza = localStorage.getItem("premioAdivinanza")
let randomizador = parseInt(Math.random() * 2)

console.log(randomizador)

let retrasador = setTimeout(function () {

    gifImagen.classList.add("bounceOutDown")

}, 2000)

switch (premioAdivinanza) {
    case 'guepardo':
        if (randomizador == 0) {

        } else if (randomizador == 1) {

        }

        break;
}