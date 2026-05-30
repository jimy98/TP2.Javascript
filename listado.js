const juegos = [
    { nombre: "EA FC 26", tipo: "Competitivo" },
    { nombre: "The Witcher 3", tipo: "Historia" },
    { nombre: "Fortnite", tipo: "Competitivo" },
    { nombre: "Dead by Daylight", tipo: "Competitivo" },
    { nombre: "Cyberpunk 2077", tipo: "Historia" },
    { nombre: "Red Dead Redemption 2", tipo: "Historia" }
];

const galeria = document.getElementById("galeria-juegos");
const btnTodos = document.getElementById("btn-todos");
const btnCompetitivos = document.getElementById("btn-competitivos");

function mostrarJuegos(arreglo) {
    galeria.innerHTML = ""; 
    arreglo.forEach(juego => {
        const div = document.createElement("div");
        div.className = "tarjeta";
        div.innerHTML = `<h3>${juego.nombre}</h3><p>Categoría: ${juego.tipo}</p>`;
        galeria.appendChild(div);
    });
}

mostrarJuegos(juegos);

btnTodos.addEventListener("click", () => {
    mostrarJuegos(juegos);
});

btnCompetitivos.addEventListener("click", () => {
    const filtrados = juegos.filter(juego => juego.tipo === "Competitivo");
    mostrarJuegos(filtrados);
});