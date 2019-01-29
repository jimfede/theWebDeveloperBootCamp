var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});

  resetBtn.addEventListener("click",function(){
    //generar nuevos colores
    colors = generateRandomColors(numSquares);
    //elegir un nuevo color randomico
    pickedColor = pickColor();
    //cambiar colorDisplay para que coincida con el color elegido
    colorDisplay.textContent = pickedColor;
    this.textContent = "Nuevos Colores";
    //cambiar los colores de los cuadrados
    for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
  });

  colorDisplay.textContent = pickedColor;

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
