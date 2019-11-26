//let gifImagen = document.querySelector(".GifPremio")
let imagenDelPremio = document.querySelector(".ImagenDelPremio")
let textoPremio = document.querySelector(".textoPremio")
let contenedorPremio = document.querySelector(".contenedorPremio")
let btnVerPremio = document.querySelector("#botonCompletado")
let cuerpo = document.querySelector(".Cuerpo")

let derecha = document.querySelector("#derecha")
let izquierda = document.querySelector("#izquierda")

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
        textoPremio.fontFamily = "'Nunito', sans-serif"
        break;

    case 'gueopardo':
        cuerpo.style.background = "#F3E3D1"
        imagenDelPremio.src = "./../../data/img/rompe.gif"
        //localStorage.setItem('premioLibro', '2')

        //}
        textoPremio.textContent = "¡Ganaste un rompecabezas!"
        textoPremio.fontFamily = "'Nunito', sans-serif"
        textoPremio.style.color = "black"
        derecha.src = "./../../data/img/iconoDerecho2.png"
        izquierda.src = "./../../data/img/iconoIzquierdo2.png"
        btnVerPremio.style.backgroundColor = "#BA563C"
        break;

    case 'rana':
        cuerpo.style.background = "#F8C65F"
        imagenDelPremio.src = "./../../data/img/mascara.jpg"
        textoPremio.fontFamily = "'Nunito', sans-serif"
        //localStorage.setItem('premioLibro', '2')

        //}
        textoPremio.textContent = "¡Ganaste una máscara!"
        textoPremio.style.color = "black"
        derecha.src = "./../../data/img/iconoDerecho2.png"
        izquierda.src = "./../../data/img/iconoIzquierdo2.png"
        btnVerPremio.style.backgroundColor = "#AC3317"
        break;

    case 'armadillo':
        cuerpo.style.background = "#F3E3D1"
        imagenDelPremio.src = "./../../data/img/gifP.gif"
        //localStorage.setItem('premioLibro', '2')

        //}
        textoPremio.textContent = "¡Ganaste un dibujo!"
        textoPremio.fontFamily = "'Nunito', sans-serif"
        textoPremio.style.color = "black"
        derecha.src = "./../../data/img/iconoDerecho2.png"
        izquierda.src = "./../../data/img/iconoIzquierdo2.png"
        btnVerPremio.style.backgroundColor = "#594D94"
        break;

}

btnVerPremio.addEventListener("click", function () {

    //localStorage.setItem('adivinanza', 'aguila')

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/VerPremio.html";

    }, 500)
})

