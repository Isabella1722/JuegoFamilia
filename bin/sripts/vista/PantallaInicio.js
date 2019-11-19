


let btnIngresar = document.querySelector("#botonIngresar");
let ping
let cont = 5;


function preload() {
    ping = loadSound("./../../sounds/sonido.mp3")
}

function setup() {
 /*ping.loop();*/
}

/*
let contadorHilo = setInterval(function(){


    if(cont==0){
        document.location.href="./bin/views/PantallaRegistro.html"
    }
    cont-=1;
},1000);*/




btnIngresar.addEventListener("click", function () {
    ping.play();

    let retrasador = setTimeout(function () {
        document.location.href = "./bin/views/instruccion1.html"
    }, 500)





})

