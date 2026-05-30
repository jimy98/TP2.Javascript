const meriendas = ["Mate con facturas", "Alfajor de maicena", "Tostado de jamón y queso", "Chocolatada con galletitas", "Café con medialunas"];

const contenedorLista = document.getElementById("lista-meriendas");
const btnContar = document.getElementById("btn-contar");
const resultadoConteo = document.getElementById("resultado-conteo");

meriendas.forEach(merienda => {
    const item = document.createElement("p");
    item.textContent = `- ${merienda}`;
    item.style.margin = "5px 0"; 
    contenedorLista.appendChild(item);
});

btnContar.addEventListener("click", () => {
    resultadoConteo.textContent = `Actualmente tenemos ${meriendas.length} opciones de meriendas disponibles.`;
});