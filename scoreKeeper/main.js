var btnP1 = document.querySelector("#p1");
var btnP2 = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");;
var p2Display = document.querySelector("#p2Display");;
var puntosP1 = 0;
var puntosP2 = 0;

btnP1.addEventListener("click", function () {
    puntosP1++;
    p1Display.textContent = puntosP1;
});

btnP2.addEventListener("click", function () {
    puntosP2++;
    p2Display.textContent = puntosP2;
});