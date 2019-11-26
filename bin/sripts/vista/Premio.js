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
        //if (randomizador == 0) {
        //imagenDelPremio.src = "./../../data/img/source.gif"
        // localStorage.setItem('premioLibro', '1')

        //} else if (randomizador == 1) {
        imagenDelPremio.src = "./../../data/img/source.gif"
        //localStorage.setItem('premioLibro', '2')

        //}
        textoPremio.textContent = "¡Ganaste un cuento!"
        break;

    case 'gueopardo':
        imagenDelPremio.src = "./../../data/img/rompe.gif"
        //localStorage.setItem('premioLibro', '2')

        //}
        textoPremio.textContent = "¡Ganaste un rompecabezas!"
        break;

    case 'rana':
        imagenDelPremio.src = "./../../data/img/mascara.jpg"
        //localStorage.setItem('premioLibro', '2')

        //}
        textoPremio.textContent = "¡Ganaste una máscara!"
        break;

    case 'armadillo':
        imagenDelPremio.src = "./../../data/img/gifP.gif"
        //localStorage.setItem('premioLibro', '2')

        //}
        textoPremio.textContent = "¡Ganaste un dibujo!"
        break;

}

btnVerPremio.addEventListener("click", function () {

    //localStorage.setItem('adivinanza', 'aguila')

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/VerPremio.html";

    }, 500)
})

