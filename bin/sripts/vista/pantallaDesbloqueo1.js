let contador = document.querySelector(".cuentaRegresiva")
let segundos = 5;
contador.textContent = segundos;
segundos -= 1;

var logged = localStorage.getItem('logged')

if(logged=='false'){
    document.location.href = "./../../index.html"
}

let sonidoF;


function preload() {
    sonidoF = loadSound("./../../sounds/Espera.mp3");
}

function setup() {
  
    sonidoF.loop();
    /*sonidoF.loop();*/

  
}




let hiloPorSegundo = setInterval(function () {

    contador.textContent = segundos;
    if (segundos > -1) segundos -= 1;


    if (segundos == -1) {

        contador.classList.add("animated")
        contador.classList.add("heartBeat")
        contador.style.fontSize = "50px"
        contador.style.backgroundColor = "#FFFFFF"
        contador.style.color = "rgb(202, 118, 103)"

        contador.textContent = "¡Vamos!"
        let timeout = setTimeout(function () {
            document.location.href = "./Adivinanza1.html"
        }, 2000)
    }

}, 1000)
