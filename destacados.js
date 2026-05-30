const tarjetas = document.querySelectorAll(".tarjeta");
const contadorTexto = document.getElementById("contador-seleccion");

let seleccionadas = 0;

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", function() {
     
        this.classList.toggle("seleccionada");
        

        seleccionadas = document.querySelectorAll(".tarjeta.seleccionada").length;
        
        contadorTexto.textContent = seleccionadas;
    });
});