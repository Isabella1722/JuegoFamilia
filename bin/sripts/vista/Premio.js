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

let boton;

var logged = localStorage.getItem('logged')

if (logged == 'false') {
    document.location.href = "./../../index.html"
}

//console.log(randomizador)

/*let retrasador = setTimeout(function () {

    gifImagen.classList.add("bounceOutDown")

}, 2000)*/

//let retrasadorDos = setTimeout(function () {

contenedorPremio.style.display = "flex"

contenedorPremio.classList.add("zoomIn")

function preload() {
    boton = loadSound("./../../sounds/boton.mp3")
}


//}, 2500)

switch (premioAdivinanza) {
    case 'aguila':
        //if (randomizador == 0) {
        //imagenDelPremio.src = "./../../data/img/source.gif"
        // localStorage.setItem('premioLibro', '1')

        //} else if (randomizador == 1) {

        imagenDelPremio.src = "./../../data/img/dsas.gif"
        //localStorage.setItem('premioLibro', '2')

        //}
        textoPremio.textContent = "¡Ganaste un cuento!"
        textoPremio.fontFamily = "'Nunito', sans-serif"
        break;

    case 'gueopardo':
        cuerpo.style.background = "#F3E3D1"
        imagenDelPremio.src = "./../../data/img/gifrompe.gif"
        //localStorage.setItem('premioLibro', '2')

        //}
        textoPremio.textContent = "¡Ganaste un rompecabezas!"
        textoPremio.fontFamily = "'Nunito', sans-serif"
        textoPremio.style.color = "#BA563C"
        derecha.src = "./../../data/img/iconoDerecho2.png"
        izquierda.src = "./../../data/img/iconoIzquierdo2.png"
        btnVerPremio.style.backgroundColor = "#BA563C"
        break;

    case 'rana':
        cuerpo.style.background = "#F8C65F"
        imagenDelPremio.src = "./../../data/img/gifmascara.gif"
        textoPremio.fontFamily = "'Nunito', sans-serif"
        //localStorage.setItem('premioLibro', '2')

        //}
        textoPremio.textContent = "¡Ganaste una máscara!"
        textoPremio.style.color = "#AC3317"
        derecha.src = "./../../data/img/iconoDerecho2.png"
        izquierda.src = "./../../data/img/iconoIzquierdo2.png"
        btnVerPremio.style.backgroundColor = "#AC3317"
        break;

    case 'armadillo':
        cuerpo.style.background = "#F3E3D1"
        imagenDelPremio.src = "./../../data/img/GIF_2.gif"
        //localStorage.setItem('premioLibro', '2')

        //}

        textoPremio.textContent = "¡Ganaste un dibujo!"
        textoPremio.fontFamily = "'Nunito', sans-serif"
        textoPremio.style.color = "#594D94"
        derecha.src = "./../../data/img/iconoderechaMorado.png"
        izquierda.src = "./../../data/img/iconoizquierdaMorado.png"
        btnVerPremio.style.backgroundColor = "#594D94"
        break;

}

btnVerPremio.addEventListener("click", function () {
    //localStorage.setItem('adivinanza', 'aguila')

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/VerPremio.html";

    }, 500)
})

btnVerPremio.addEventListener("mouseover", function () {
    switch (premioAdivinanza) {
        case 'aguila':
            btnVerPremio.style.backgroundColor = "rgb(255, 231, 184)"
            btnVerPremio.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnVerPremio.style.boxShadow = "0px 0px 0px 7px rgb(255, 231, 184)"
            break;

        case 'gueopardo':
            btnVerPremio.style.backgroundColor = "#E09D8B"
            btnVerPremio.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnVerPremio.style.boxShadow = "0px 0px 0px 7px #E09D8B"
            break;

        case 'rana':
            btnVerPremio.style.backgroundColor = "#DD907E"
            btnVerPremio.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnVerPremio.style.boxShadow = "0px 0px 0px 7px #DD907E"
            break;

        case 'armadillo':
            btnVerPremio.style.backgroundColor = "#A297D7"
            btnVerPremio.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnVerPremio.style.boxShadow = "0px 0px 0px 7px #A297D7"
            break;
    }

})

btnVerPremio.addEventListener("mouseout", function () {
    switch (premioAdivinanza) {
        case 'aguila':
            btnVerPremio.style.backgroundColor = "#F8C65F"
            btnVerPremio.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnVerPremio.style.boxShadow = "none"
            break;

        case 'gueopardo':
            btnVerPremio.style.backgroundColor = "#BA563C"
            btnVerPremio.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnVerPremio.style.boxShadow = "none"
            break;

        case 'rana':
            btnVerPremio.style.backgroundColor = "#AC3317"
            btnVerPremio.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnVerPremio.style.boxShadow = "none"
            break;

        case 'armadillo':
            btnVerPremio.style.backgroundColor = "#594D94"
            btnVerPremio.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnVerPremio.style.boxShadow = "none"
            break;
    }
})
