let premio1 = document.querySelector(".MostrarPremio1")
let premio2 = document.querySelector(".MostrarPremio2")
let premio3 = document.querySelector(".MostrarPremio3")
let premio4 = document.querySelector(".MostrarPremio4")

let premioAlmacenado1 = localStorage.getItem('premioLibro')
let premioAlmacenado2 = localStorage.getItem('premioRompe')
let premioAlmacenado3 = localStorage.getItem('premioMasca')
let premioAlmacenado4 = localStorage.getItem('premioDibuji')

let descargar1 = document.querySelector(".descargar1")
let descargar2 = document.querySelector(".descargar2")
let descargar3 = document.querySelector(".descargar3")
let descargar4 = document.querySelector(".descargar4")

let btnBotonContinuar = document.querySelector("#botonContinuar")

var logged = localStorage.getItem('logged')

if(logged=='false'){
    document.location.href = "./../../index.html"
}

switch (premioAlmacenado1) {
    case '1':
        premio1.src = "./../../data/img/libro1.png"
        descargar1.href = "./../../data/img/libro1.png"
        descargar1.download = "libro1.png"
        break;

    case '2':
        premio1.src = "./../../data/img/libro2.png"
        descargar1.href = "./../../data/img/libro2.png"
        descargar1.download = "libro2.png"
        break;
}

switch (premioAlmacenado2) {
    case '1':
        premio2.src = "./../../data/img/rompe1.png"
        descargar2.href = "./../../data/img/rompe1.png"
        descargar2.download = "rompecabezas1.png"
        break;

    case '2':
        premio2.src = "./../../data/img/rompe2.png"
        descargar2.href = "./../../data/img/rompe2.png"
        descargar2.download = "rompecabezas2.png"
        break;
}

switch (premioAlmacenado3) {
    case '1':
        premio3.src = "./../../data/img/mascara1.png"
        descargar3.href = "./../../data/img/mascara1.png"
        descargar3.download = "mascara1.png"
        break;

    case '2':
        premio3.src = "./../../data/img/mascara2.png"
        descargar3.href = "./../../data/img/mascara2.png"
        descargar3.download = "mascara2.png"
        break;
}

switch (premioAlmacenado4) {
    case '1':
        premio4.src = "./../../data/img/dibujo1.jpg"
        descargar4.href = "./../../data/img/dibujo1.jpg"
        descargar4.download = "dibujo1.jpg"
        break;

    case '2':
        premio4.src = "./../../data/img/dibujo2.jpeg"
        descargar4.href = "./../../data/img/dibujo2.jpeg"
        descargar4.download = "dibujo2.jpeg"
        break;
}

btnBotonContinuar.addEventListener("click", function () {

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/Final.html";
    }, 500)
})