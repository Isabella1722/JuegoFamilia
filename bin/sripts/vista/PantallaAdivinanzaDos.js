let btnCompletado = document.querySelector("#botonCompletado")
let sonidoF;
let boton;

var logged = localStorage.getItem('logged')

if(logged=='false'){
    document.location.href = "./../../index.html"
}
function preload() {
    sonidoF = loadSound("./../../sounds/Adivinanza.mp3");
    boton = loadSound("./../../sounds/boton.mp3");
}

function setup() {
  
    sonidoF.loop();
    /*sonidoF.loop();*/

  
}
btnCompletado.addEventListener("click", function () {
    boton.play();
    localStorage.setItem('adivinanza', 'gueopardo')

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/AdivinanzaResuelta.html";

    }, 500)
})