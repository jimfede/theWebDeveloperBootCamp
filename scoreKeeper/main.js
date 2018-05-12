var btnP1 = document.querySelector("#p1");
var btnP2 = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var btnReset = document.getElementById("res");
var txtPuntajeGanador = document.querySelector("input");
var puntajeGanadorDisplay = document.getElementById("puntajeGanadorDisplay");
var puntosP1 = 0;
var puntosP2 = 0;
var juegoTerminado = false;
var puntajeGanador = 0;

txtPuntajeGanador.addEventListener("change", function () {
    puntajeGanadorDisplay.textContent = this.value;
    puntajeGanador = Number(this.value);
    reset();
});

btnReset.addEventListener("click", function () {
    reset();
});

btnP1.addEventListener("click", function () {
    if (!juegoTerminado) {
        puntosP1++;
        if (puntosP1 === puntajeGanador) {
            p1Display.classList.add("winner");
            juegoTerminado = true;
        }
    }
    p1Display.textContent = puntosP1
});

btnP2.addEventListener("click", function () {
    if (!juegoTerminado) {
        puntosP2++;
        if (puntosP2 === puntajeGanador) {
            p2Display.classList.add("winner");
            juegoTerminado = true;
        }
    }
    p2Display.textContent = puntosP2;
});

function reset() {
    puntosP1 = 0;
    puntosP2 = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    juegoTerminado = false;
}