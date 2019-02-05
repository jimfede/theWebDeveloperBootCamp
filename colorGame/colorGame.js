var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init (){
  //botones de modo, EventListener
  setupModeButtons();
  setupSquares();


  reset();

}

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    //se agrega click listener a los cuadrados
    squares[i].addEventListener("click", function () {
      //tomar color del cuadrado seleccionado
      var clickedColor = this.style.backgroundColor;
      //comparar el color elegido
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correcto!";
        resetBtn.textContent = "Jugar nuevamente?"
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor);
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Intente nuevamente";
      }
    });
  }
}

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Fácil" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function reset(){
  //generar nuevos colores
  colors = generateRandomColors(numSquares);
  //elegir un nuevo color randomico
  pickedColor = pickColor();
  //cambiar colorDisplay para que coincida con el color elegido
  colorDisplay.textContent = pickedColor;
  resetBtn.textContent = "Nuevos Colores";
  messageDisplay.textContent = "";
  //cambiar los colores de los cuadrados
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block"
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click",function(){
  reset();
});

function changeColors(color) {
  //loop por todos los colores
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //hacer un arreglo
  var arr = [];
  //repetir num veces
  for (var i = 0; i < num; i++) {
    //obtengo un color randomico y lo agrego al arreglo
    arr.push(randomColor());
  }
  //retornar el arreglo
  return arr;
}

function randomColor() {
  //elegir un "red" de 0 - 255
  var r = Math.floor(Math.random() * 256);
  //elegir un "green" de 0 - 255
  var g = Math.floor(Math.random() * 256);
  //elegir un "blue" de 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function displayColors(){
  for (var i = 0; i < squares.length; i++) {
    //se agregan colores iniciales
    squares[i].style.backgroundColor = colors[i];
    //se agrega click listener a los cuadrados
    squares[i].addEventListener("click", function () {
      //tomar color del cuadrado seleccionado
      var clickedColor = this.style.backgroundColor;
      //comparar el color elegido
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correcto!";
        h1.style.backgroundColor = pickedColor;
        changeColors(pickedColor);
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Intente nuevamente";
      }
    });
    
  }

}
