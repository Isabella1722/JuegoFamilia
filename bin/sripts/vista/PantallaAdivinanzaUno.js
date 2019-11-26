let btnCompletado = document.querySelector("#botonCompletado")
let sonidoF;

function preload() {
    sonidoF = loadSound("./../../sounds/Adivinanza.mp3");
}

function setup() {
  
    sonidoF.loop();
    /*sonidoF.loop();*/

  
}
btnCompletado.addEventListener("click", function () {

    localStorage.setItem('adivinanza', 'aguila')

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/AdivinanzaResuelta.html";

    }, 500)
})