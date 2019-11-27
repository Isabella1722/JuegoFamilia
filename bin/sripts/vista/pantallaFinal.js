let btnSalir = document.querySelector(".salir")
let sonidoF;
let boton;
var logged = localStorage.getItem('logged')

if(logged=='false'){
    document.location.href = "./../../index.html"
}

var logged = localStorage.getItem('logged')

function preload() {
    sonidoF = loadSound("./../../sounds/Adivinanza.mp3");
    boton = loadSound("./../../sounds/boton.mp3");
}

function setup() {
  
    sonidoF.loop();
    /*sonidoF.loop();*/

  
}
btnSalir.addEventListener("click", function () {
    boton.play()
    localStorage.setItem('logged', 'false')
    let retraso = setTimeout(function () {
        document.location.href = "./../../index.html";

    }, 500)
})