let contador = document.querySelector(".cuentaRegresiva")
let segundos = 5;
contador.textContent = segundos;
segundos -= 1;





let hiloPorSegundo = setInterval(function () {

    contador.textContent = segundos;
    if (segundos > 0) segundos -= 1;


    if (segundos == 0) {

        contador.classList.add("animated")
        contador.classList.add("heartBeat")
        contador.style.fontSize = "70px"
        contador.style.backgroundColor = "#FFFFFF"
        contador.style.color = "rgb(202, 118, 103)"

        contador.textContent = "¡VAMOS!"
        let timeout = setTimeout(function () {
            document.location.href = "./pantallaAdivinanza.html"
        }, 2000)
    }

}, 1000)
