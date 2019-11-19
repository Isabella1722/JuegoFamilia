

let btnRegistrar = document.querySelector("#botonRegistrar");
let palabra = document.querySelector("#textoCheck")
let contenedorModal = document.querySelector(".modalContenedor")
let modal = document.querySelector(".modal")

let cont = 5;

/*
let contadorHilo = setInterval(function(){


    if(cont==0){
        document.location.href="./bin/views/PantallaRegistro.html"
    }
    cont-=1;
},1000);*/
palabra.addEventListener("click", function () {
    modal.classList.add("open")
    contenedorModal.classList.add("open")

})

document.addEventListener("click", function (event) {
   if(event.target==contenedorModal){
    modal.classList.remove("open")
    contenedorModal.classList.remove("open")
   }


})



btnRegistrar.addEventListener("click", function () {

    document.location.href = "./../../bin/views/instruccion1.html"





})
