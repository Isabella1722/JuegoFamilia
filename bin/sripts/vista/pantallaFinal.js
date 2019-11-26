let btnSalir = document.querySelector(".salir")
let sonidoF;
let boton;

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
   
    let retraso = setTimeout(function () {
        document.location.href = "./../../index.html";

    }, 500)
})