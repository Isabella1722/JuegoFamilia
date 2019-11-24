var logged = localStorage.getItem('logged')

/*if(logged=='true'){
    document.location.href = "./instruccion1.html"
}*/

let btnRegistrar = document.querySelector("#botonRegistrar");
let palabra = document.querySelector("#textoCheck")
let contenedorModal = document.querySelector(".modalContenedor")
let modal = document.querySelector(".modal")
let botonSalir = document.querySelector("#salirBoton")
let inputNombre = document.querySelector(".nombre")
let inputCorreo = document.querySelector(".correo")
let inputContrasena = document.querySelector(".contrasena")
let inputVerificar = document.querySelector(".verificar")
let chekmark = document.querySelector(".checkmark")
let aceptoTerminos = false

let cont = 5;

var firebaseConfig = {
    apiKey: "AIzaSyBohk7vWZEwnYrclr8UdsfZPDwArRigMqo",
    authDomain: "familiapi.firebaseapp.com",
    databaseURL: "https://familiapi.firebaseio.com",
    projectId: "familiapi",
    storageBucket: "familiapi.appspot.com",
    messagingSenderId: "943521700619",
    appId: "1:943521700619:web:a117acd032fe01862de00e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/*
let contadorHilo = setInterval(function(){


    if(cont==0){
        document.location.href="./bin/views/PantallaRegistro.html"
    }
    cont-=1;
},1000);*/


chekmark.addEventListener("click", function () {
    aceptoTerminos = !aceptoTerminos
})


palabra.addEventListener("click", function () {
    modal.classList.add("open")
    contenedorModal.classList.add("open")

})

document.addEventListener("click", function (event) {

    console.log(event.target)
    if (event.target == botonSalir) {
        modal.classList.remove("open")
        contenedorModal.classList.remove("open")
    }


})



btnRegistrar.addEventListener("click", function () {
    let nombre = inputNombre.value
    let contrasena = inputContrasena.value
    let correo = inputCorreo.value
    correo = correo.toLowerCase()
    let verificar = inputVerificar.value
    let existente = false


    //lee el firebase
    let ref = firebase.database().ref("usuarios/");
    ref.on('value', function (snapshot) {

      
        //snapshotVal() recoge todos los elementos del firebase
        let completeData = snapshot.val();

        //Object.Keys() transforma todos los elemntos en un arreglo
        let arregloDeDatos = Object.keys(completeData)

        for (let i = 0; i < arregloDeDatos.length; i++) {

            let id = arregloDeDatos[i]
            let correoDB = completeData[id].correo;
           
            if (correo == correoDB) {
                existente = true
            }
        }
        console.log(existente)

    }, function (err) {
        console.log(err)
    });





    if (contrasena == verificar && correo.includes('@') &&
        correo.includes('.com') && nombre.length > 0 && contrasena.length > 0 && aceptoTerminos && existente == false) {
        firebase.database().ref('usuarios/').push({
            nombre: nombre,
            pass: contrasena,
            correo: correo

        });


        localStorage.setItem('logged', 'true')

        let retraso = setTimeout(function () {
            document.location.href = "./../../bin/views/instruccion1.html"

        }, 1000)

    } else if (existente) {
        alert('El correo ya esta registrado')
    } else if (nombre.length == 0) {
        alert('Ingrese un nombre')
    } else if (contrasena.length == 0) {
        alert('Ingrese una contrasena')
    } else if (correo.includes('@') == false || correo.includes('.com') == false) {
        alert('Ingrese un correo valido')
    } else if (contrasena != verificar) {
        alert('Las contrasenas no coinciden')
    } else if (aceptoTerminos == false) {
        alert('Acepta las condiciones')
    }

})
