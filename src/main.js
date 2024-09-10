// function cambiarNumero(){
//     var numeroElemento=document.getElementById("numero");
//     var numero=parseInt(numeroElemento.textContent);
//     numeroElemento.textContent=numero +1;

// }

const boton = document.getElementById("incrementar");
const numero = document.getElementById("numero-turno");
let contador = 0;

boton.onclick = function () {
  contador++;
  if (contador < 10) {
    numero.textContent = "0" + contador;
  } else {
    numero.textContent = contador;
  }
  if (contador > 99) {
    numero.textContent = "00";
    contador = 0;
  }
};

const botonDecrementar = document.getElementById("decrementarBtn");

botonDecrementar.onclick = function () {
  contador--;
  if (contador < 10) {
    numero.textContent = "0" + contador;
  } else {
    numero.textContent = contador;
  }
  if (contador < 0) {
    contador = 0;
    numero.textContent = "00";
  }
};
const botonResetear = document.getElementById("resetear");
botonResetear.onclick = function () {
  contador = 0;
  numero.textContent = "00";
};

const botonCambiarTurno = document.getElementById("cambiarTurno");
botonCambiarTurno.onclick = function () {
  const cambiarTurno = document.getElementById("turnoInput").value;
  contador = cambiarTurno;
  if (contador < 10) {
    numero.textContent = "0" + contador;
  } else {
    numero.textContent = contador;
  }
};
