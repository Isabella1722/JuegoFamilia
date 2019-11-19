let btnVamos = document.querySelector("#botonVamos");

let cont = 5;


btnVamos.addEventListener("click", function(){

    //document.location.href="./bin/views/PantallaDesbloqueo1.html"
    document.location.href="./../views/pantallaDesbloqueo1.html"

})

let btnAtras = document.querySelector(".atras");
let main = document.querySelector(".contenidoInstrucciones");


btnAtras.addEventListener("click", function () {

    main.classList.remove("bounceInLeft");
    main.classList.add("bounceOutLeft");

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/instruccion2.html";
        

    }, 1000)


})
