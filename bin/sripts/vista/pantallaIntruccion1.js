let btnAtras = document.querySelector(".atras");
let main = document.querySelector(".contenidoInstrucciones")
let btnSiguiente = document.querySelector(".siguiente");


let boton;
let sonidoF;

var logged = localStorage.getItem('logged')

if(logged=='false'){
    document.location.href = "./../../index.html"
}


function preload() {
    boton = loadSound("./../../sounds/boton.mp3");
    sonidoF = loadSound("./../../sounds/inicioCorte.mp3");
}

function setup() {
  
    sonidoF.loop();
    /*sonidoF.loop();*/

  
}




btnAtras.addEventListener("click", function () {
    boton.play();
    main.classList.remove("bounceInLeft")
    main.classList.add("bounceOutLeft");
   
    let retraso = setTimeout(function () {
        
        
        document.location.href = "./../../index.html";
        

    }, 1000)
    
})


btnSiguiente.addEventListener("click", function () {
       
    boton.play(); 
    let retraso = setTimeout(function () {
        
        
     
    document.location.href ="./../../bin/views/instruccion2.html";
        

    }, 1000)
    



})