//let gifImagen = document.querySelector(".GifPremio")
let imagenDelPremio = document.querySelector(".ImagenDelPremio")
let textoPremio = document.querySelector(".textoPremio")
let contenedorPremio = document.querySelector(".contenedorPremio")
let btnSiguiente = document.querySelector("#botonCompletado")

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

    case 'gueopardo':
        if (randomizador == 0) {
            imagenDelPremio.src = "./../../data/img/rompe1.png"
            localStorage.setItem('premioRommpe', '1')

        } else if (randomizador == 1) {
            imagenDelPremio.src = "./../../data/img/rompe2.png"
            localStorage.setItem('premioRompe', '2')

        }
        textoPremio.textContent = "Rompecabezas"

        break;

    case 'rana':
        if (randomizador == 0) {
            imagenDelPremio.src = "./../../data/img/mascara1.png"
            localStorage.setItem('premioMasca', '1')

        } else if (randomizador == 1) {
            imagenDelPremio.src = "./../../data/img/mascara2.png"
            localStorage.setItem('premioMasca', '2')

        }
        textoPremio.textContent = "Máscara"

        break;

    case 'armadillo':
        if (randomizador == 0) {
            imagenDelPremio.src = "./../../data/img/dibujo1.jpg"
            localStorage.setItem('premioDibuji', '1')

        } else if (randomizador == 1) {
            imagenDelPremio.src = "./../../data/img/dibujo2.jpeg"
            localStorage.setItem('premioDibuji', '2')

        }
        textoPremio.textContent = "Dibujo"

        break;
}

btnSiguiente.addEventListener("click", function () {

    //localStorage.setItem('adivinanza', 'aguila')

    let retraso = setTimeout(function () {
        switch (premioAdivinanza) {
            case 'aguila':
                document.location.href = "./../../bin/views/Adivinanza2.html";

                break;

            case 'gueopardo':
                document.location.href = "./../../bin/views/Adivinanza3.html";

                break;

            case 'rana':
                document.location.href = "./../../bin/views/Adivinanza4.html";

                break;

            case 'armadillo':

                break;
        }

    }, 500)
})
