var estadoGrid = "izquierda";
var contenedor = document.getElementById("contenedor");
var lateral = document.getElementById("lateral");
var boton_secreto = document.getElementById("boton_secreto");
var boton_truco = document.getElementById("boton_truco");

function intercambiarLateral() {
  if ( estadoGrid == "izquierda" ) {
    estadoGrid = "derecha";
    contenedor.classList.add("derecha");
  } else {
    estadoGrid = "izquierda";
    contenedor.classList.remove("derecha");
  }
}

function botonTruco(){
  boton_secreto.classList.add ("ver")
}

function funcionSecreta(){
  alert("Busca en la consola")
  console.log("https://youtu.be/dQw4w9WgXcQ")
}