let btnVamos = document.querySelector("#botonVamos");

let cont = 5;

let boton;
let sonidoF;


function preload() {
    boton = loadSound("./../../sounds/boton.mp3");
    sonidoF = loadSound("./../../sounds/inicioCorte.mp3");
}

function setup() {
  
    sonidoF.loop();
    /*sonidoF.loop();*/

  
}

btnVamos.addEventListener("click", function(){
    boton.play();
    //document.location.href="./bin/views/PantallaDesbloqueo1.html"
   
    
    let retraso = setTimeout(function () {
        
        
        document.location.href="./../views/pantallaDesbloqueo1.html"
        

    }, 1000)

})

let btnAtras = document.querySelector(".atras");
let main = document.querySelector(".contenidoInstrucciones");


btnAtras.addEventListener("click", function () {
    boton.play();
    main.classList.remove("bounceInLeft");
    main.classList.add("bounceOutLeft");

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/instruccion2.html";
        

    }, 1000)


})
