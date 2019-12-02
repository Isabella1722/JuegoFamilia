//let gifImagen = document.querySelector(".GifPremio")
let imagenDelPremio = document.querySelector(".ImagenDelPremio")
let textoPremio = document.querySelector(".textoPremio")
let contenedorPremio = document.querySelector(".contenedorPremio")
let btnSiguiente = document.querySelector("#botonCompletado")
let cuerpo = document.querySelector(".Cuerpo")

let derecha = document.querySelector("#derecha")
let izquierda = document.querySelector("#izquierda")

let premioAdivinanza = localStorage.getItem("premioAdivinanza")
let randomizador = parseInt(Math.random() * 2)

let boton;

let premiosound;

var logged = localStorage.getItem('logged')

if (logged == 'false') {
    document.location.href = "./../../index.html"
}

function preload() {
    premiosound = loadSound("./../../sounds/premio00.mp3");
    boton = loadSound("./../../sounds/boton.mp3");
}

function setup() {
    premiosound.play();
}

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
        textoPremio.fontFamily = "'Nunito', sans-serif"
        
        break;

    case 'gueopardo':
        
        derecha.src = "./../../data/img/iconoDerecho2.png"
        izquierda.src = "./../../data/img/iconoIzquierdo2.png"
        cuerpo.style.background = "#F3E3D1"
        if (randomizador == 0) {
            imagenDelPremio.src = "./../../data/img/rompe1.png"
            localStorage.setItem('premioRompe', '1')
            imagenDelPremio.style.width = "300px"

        } else if (randomizador == 1) {
            imagenDelPremio.src = "./../../data/img/rompe2.png"
            localStorage.setItem('premioRompe', '2')
            imagenDelPremio.style.width = "300px"

        }
        textoPremio.textContent = "Rompecabezas"
        textoPremio.style.color = "#BA563C"
        textoPremio.fontFamily = "'Nunito', sans-serif"
        btnSiguiente.style.background = "#BA563C"

        break;

    case 'rana':

        derecha.src = "./../../data/img/iconoDerecho2.png"
        izquierda.src = "./../../data/img/iconoIzquierdo2.png"
        cuerpo.style.background = "#F8C65F"
        if (randomizador == 0) {
            imagenDelPremio.src = "./../../data/img/mascara1.png"
            localStorage.setItem('premioMasca', '1')

        } else if (randomizador == 1) {
            imagenDelPremio.src = "./../../data/img/mascara2.png"
            localStorage.setItem('premioMasca', '2')

        }
        textoPremio.textContent = "Máscara"
        textoPremio.style.color = "#AC3317"
        textoPremio.fontFamily = "'Nunito', sans-serif"
        btnSiguiente.style.backgroundColor = "#AC3317"

        break;

    case 'armadillo':
        imagenDelPremio.style.width = "200px"
        derecha.src = "./../../data/img/iconoderechaMorado.png"
        izquierda.src = "./../../data/img/iconoizquierdaMorado.png"
        cuerpo.style.background = "#F3E3D1"
        if (randomizador == 0) {
            imagenDelPremio.src = "./../../data/img/dibujo1.jpg"
            localStorage.setItem('premioDibuji', '1')

        } else if (randomizador == 1) {
            imagenDelPremio.src = "./../../data/img/dibujo2.jpg"
            localStorage.setItem('premioDibuji', '2')

        }
        textoPremio.textContent = "Dibujo"
        textoPremio.style.color = "#594D94"
        textoPremio.fontFamily = "'Nunito', sans-serif"
        btnSiguiente.style.backgroundColor = "#594D94"

        break;
}

btnSiguiente.addEventListener("click", function () {

    //localStorage.setItem('adivinanza', 'aguila')
    boton.play()
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
                document.location.href = "./../../bin/views/Mochila.html";

                break;
        }

    }, 500)
})

btnSiguiente.addEventListener("mouseover", function () {
    switch (premioAdivinanza) {
        case 'aguila':
            btnSiguiente.style.backgroundColor = "rgb(255, 231, 184)"
            btnSiguiente.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnSiguiente.style.boxShadow = "0px 0px 0px 7px rgb(255, 231, 184)"
            break;

        case 'gueopardo':
            btnSiguiente.style.backgroundColor = "#E09D8B"
            btnSiguiente.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnSiguiente.style.boxShadow = "0px 0px 0px 7px #E09D8B"
            break;

        case 'rana':
            btnSiguiente.style.backgroundColor = "#DD907E"
            btnSiguiente.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnSiguiente.style.boxShadow = "0px 0px 0px 7px #DD907E"
            break;

        case 'armadillo':
            btnSiguiente.style.backgroundColor = "#A297D7"
            btnSiguiente.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnSiguiente.style.boxShadow = "0px 0px 0px 7px #A297D7"
            break;
    }

})

btnSiguiente.addEventListener("mouseout", function () {
    switch (premioAdivinanza) {
        case 'aguila':
            btnSiguiente.style.backgroundColor = "#F8C65F"
            btnSiguiente.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnSiguiente.style.boxShadow = "none"
            break;

        case 'gueopardo':
            btnSiguiente.style.backgroundColor = "#BA563C"
            btnSiguiente.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnSiguiente.style.boxShadow = "none"
            break;

        case 'rana':
            btnSiguiente.style.backgroundColor = "#AC3317"
            btnSiguiente.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnSiguiente.style.boxShadow = "none"
            break;

        case 'armadillo':
            btnSiguiente.style.backgroundColor = "#594D94"
            btnSiguiente.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnSiguiente.style.boxShadow = "none"
            break;
    }
})