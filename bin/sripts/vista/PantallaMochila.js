let premio1 = document.querySelector(".MostrarPremio1")
let premio2 = document.querySelector(".MostrarPremio2")
let premio3 = document.querySelector(".MostrarPremio3")
let premio4 = document.querySelector(".MostrarPremio4")

let premioAlmacenado1 = localStorage.getItem('premioLibro')

let descargar1 = document.querySelector(".descargar1")

switch (premioAlmacenado1) {
    case '1':
        premio1.src = "./../../data/img/emojixd.jpg"
        descargar1.href = "./../../data/img/emojixd.jpg"
        descargar1.download = "Download.png"
        break;

    case '2':
        premio1.src = "./../../data/img/moroncore.png"
        descargar1.href = "./../../data/img/moroncore.png"
        descargar1.download = "wheatley.png"
        break;
}