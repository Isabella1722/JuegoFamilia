
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


let correoInput = document.querySelector('#emailLogin')
let passInput = document.querySelector('#passwordLogin')
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
    let correo = correoInput.value
    correo = correo.toLowerCase()
    let pass = passInput.value


    let ref = firebase.database().ref("usuarios/");
    ref.on('value', function (snapshot) {

        //snapshotVal() recoge todos los elementos del firebase
        let completeData = snapshot.val();

        //Object.Keys() transforma todos los elemntos en un arreglo
        let arregloDeDatos = Object.keys(completeData)

        for (let i = 0; i < arregloDeDatos.length; i++) {

            let id = arregloDeDatos[i]
            let correoDB = completeData[id].correo;
            let passDB = completeData[id].pass;


            if (correo == correoDB) {
                if (pass == passDB) {
                    ping.play();
                    let retrasador = setTimeout(function () {
                        document.location.href = "./bin/views/instruccion1.html"
                    }, 500)

                } else {
                    alert('Contrasena incorrecta')

                }

            }

        }

    }, function (err) {
        console.log(err)
    });

})

