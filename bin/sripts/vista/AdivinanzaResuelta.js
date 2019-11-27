let imagen = document.querySelector(".ImagenAdivinanza")
let titulo = document.querySelector(".NombreFigura")
let cultura = document.querySelector(".NombreCultura")
let btnContinuar = document.querySelector("#botonContinuar")
let cuerpo = document.querySelector(".Cuerpo")
let nombre = document.querySelector(".NombreFigura")
let descripcion = document.querySelector(".NombreCultura")

var adivinanza = localStorage.getItem('adivinanza')


var logged = localStorage.getItem('logged')

if(logged=='false'){
    document.location.href = "./../../index.html"
}


switch (adivinanza) {

    case 'aguila':
        imagen.src = "./../../data/img/aguila.png"
        titulo.textContent = "Águila"
        cultura.textContent = "Alfiler de oro de la cultura Ilama que alude a un águila arpía (Hapia harpyja) con las plumas de la cabeza y el penacho desplegado. Se aferra a un mono acurrucado con rasgos de apariencia humana."
        break;

    case 'gueopardo':
        cuerpo.style.backgroundImage = "url(./../../data/img/fondoadivinanza2.png)"
        nombre.style.color = "black"
        descripcion.style.color = "black"
        imagen.src = "./../../data//img/jaguar.png"
        titulo.textContent = "Guepardo"
        btnContinuar.style.backgroundColor = "#BA563C"
        cultura.textContent = "Chapa de oro martillada en un molde, en relieve y ensamblada con clavos."
        break;

    case 'rana':
        cuerpo.style.backgroundImage = "url(./../../data/img/fondoadivinanza3.png)"
        nombre.style.color = "black"
        descripcion.style.color = "black"
        imagen.src = "./../../data//img/rana.png"
        titulo.textContent = "Rana"
        btnContinuar.style.backgroundColor = "#AC3317"
        cultura.textContent = "Esta es una alcarraza en forma de anfibio de la región Calima perteneciente al período de Yotoco entre los años 200 a. C. y 1300 d. C."
        break;

    case 'armadillo':
        cuerpo.style.backgroundImage = "url(./../../data/img/fondoadivinanza4.png)"
        nombre.style.color = "black"
        descripcion.style.color = "black"
        imagen.src = "./../../data//img/armadillo.png"
        titulo.textContent = "Armadillo"
        btnContinuar.style.backgroundColor = "#594D94"
        cultura.textContent = "Figura zoomorfa en alcarraza. Cultura Yotoco."
        break;
}

btnContinuar.addEventListener("click", function () {

    localStorage.setItem('premioAdivinanza', adivinanza + "")

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/Premio.html";
    }, 500)
})
