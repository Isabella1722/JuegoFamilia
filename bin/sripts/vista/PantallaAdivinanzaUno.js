let btnCompletado = document.querySelector("#botonCompletado")

btnCompletado.addEventListener("click", function () {

    localStorage.setItem('adivinanza', 'guepardo')

    let retraso = setTimeout(function () {
        document.location.href = "./../../bin/views/AdivinanzaResuelta.html";

    }, 500)
})