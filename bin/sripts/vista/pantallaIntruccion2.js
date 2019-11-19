let btnAtras = document.querySelector(".atras");
let main = document.querySelector(".contenidoInstrucciones");
let btnSiguiente = document.querySelector(".siguiente");

btnAtras.addEventListener("click", function () {

    main.classList.remove("bounceInLeft");
    main.classList.add("bounceOutLeft");

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/instruccion1.html";
        

    }, 1000)


})

btnSiguiente.addEventListener("click", function () {

    document.location.href ="./../../bin/views/instruccion3.html";


})