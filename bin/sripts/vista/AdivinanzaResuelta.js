let imagen = document.querySelector(".ImagenAdivinanza")
let titulo = document.querySelector(".NombreFigura")
let cultura = document.querySelector(".NombreCultura")
let btnContinuar = document.querySelector("#botonContinuar")
let cuerpo = document.querySelector(".Cuerpo")
let nombre = document.querySelector(".NombreFigura")
let descripcion = document.querySelector(".NombreCultura")
let mouseOver = document.querySelector(":hover")
let acertar;
let boton;

var adivinanza = localStorage.getItem('adivinanza')


var logged = localStorage.getItem('logged')

if (logged == 'false') {
    document.location.href = "./../../index.html"
}

function preload() {
    boton = loadSound("./../../sounds/boton.mp3");
    acertar = loadSound("./../../sounds/Acertaradivinanza.mp3");
    
}
function setup() {
    acertar.play();
    /*sonidoF.loop();*/
}


switch (adivinanza) {

    case 'aguila':
        imagen.src = "./../../data/img/aguila.png"
        titulo.textContent = "Águila"
        cultura.textContent = "Alfiler de oro de la cultura Ilama que alude a un águila arpía (Hapia harpyja) con las plumas de la cabeza y el penacho desplegado. Se aferra a un mono acurrucado con rasgos de apariencia humana. Se usaba para revolver y extraer ingredientes dentro de recipientes de oro en rituales funerarios."
        break;

    case 'gueopardo':
        cuerpo.style.backgroundImage = "url(./../../data/img/fondoadivinanza2.png)"
        nombre.style.color = "#BA563C"
        descripcion.style.color = "#BA563C"
        imagen.src = "./../../data/img/jaguar.png"
        titulo.textContent = "Jaguar"
        btnContinuar.style.backgroundColor = "#BA563C"
        cultura.textContent = "Chapa de oro martillada en un molde, en relieve y ensamblada con clavos, perteneció al periodo Yotoco en el año 200 a.C. Era utilizado para guardar dentro de él polvo de cal para rituales."
        //btnContinuar.classList.mouseOver.style.background = "#E09D8B"
        break;

    case 'rana':
        cuerpo.style.backgroundImage = "url(./../../data/img/fondoadivinanza3.png)"
        nombre.style.color = "#AC3317"
        descripcion.style.color = "#AC3317"
        imagen.src = "./../../data/img/rana.png"
        titulo.textContent = "Rana"
        btnContinuar.style.backgroundColor = "#AC3317"
        //mouseOver.style.background = "#DD907E"
        cultura.textContent = "Alcarraza en forma de anfibio de la región Calima perteneciente al período de Yotoco entre los años 200 a. C. y 1300 d. C. Se usaba para almacenar agua."
        break;

    case 'armadillo':
        cuerpo.style.backgroundImage = "url(./../../data/img/fondoadivinanza4.png)"
        nombre.style.color = "#594D94"
        descripcion.style.color = "#594D94"
        imagen.src = "./../../data//img/armadillo.png"
        titulo.textContent = "Armadillo"
        btnContinuar.style.backgroundColor = "#594D94"
        //mouseOver.style.background = "#A297D7"
        cultura.textContent = "Alcarraza en forma de armadillo de la región Calima, pertenece al periodo ilama y tiene grabado en su exterior símbolos característicos de la cultura."
        break;
}

btnContinuar.addEventListener("mouseover", function () {
    switch (adivinanza) {
        case 'aguila':
            btnContinuar.style.backgroundColor = "rgb(255, 231, 184)"
            btnContinuar.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnContinuar.style.boxShadow = "0px 0px 0px 7px rgb(255, 231, 184)"
            break;

        case 'gueopardo':
            btnContinuar.style.backgroundColor = "#E09D8B"
            btnContinuar.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnContinuar.style.boxShadow = "0px 0px 0px 7px #E09D8B"
            break;

        case 'rana':
            btnContinuar.style.backgroundColor = "#DD907E"
            btnContinuar.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnContinuar.style.boxShadow = "0px 0px 0px 7px #DD907E"
            break;

        case 'armadillo':
            btnContinuar.style.backgroundColor = "#A297D7"
            btnContinuar.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnContinuar.style.boxShadow = "0px 0px 0px 7px #A297D7"
            break;
    }

})

btnContinuar.addEventListener("mouseout", function () {
    switch (adivinanza) {
        case 'aguila':
            btnContinuar.style.backgroundColor = "#F8C65F"
            btnContinuar.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnContinuar.style.boxShadow = "none"
            break;

        case 'gueopardo':
            btnContinuar.style.backgroundColor = "#BA563C"
            btnContinuar.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnContinuar.style.boxShadow = "none"
            break;

        case 'rana':
            btnContinuar.style.backgroundColor = "#AC3317"
            btnContinuar.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnContinuar.style.boxShadow = "none"
            break;

        case 'armadillo':
            btnContinuar.style.backgroundColor = "#594D94"
            btnContinuar.style.transition = "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
            btnContinuar.style.boxShadow = "none"
            break;
    }
})

btnContinuar.addEventListener("click", function () {

    localStorage.setItem('premioAdivinanza', adivinanza + "")
    boton.play();

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/Premio.html";
    }, 500)
})
