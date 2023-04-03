let totalTiempoEspera = 0;
let numTurnos = 0;
let continuar = true;
let tiempoEspera = 0;

do {
  tiempoEspera = (prompt("Ingrese el tiempo de espera para este turno en minutos:"));

  let nuevoTurno = prompt("¿Desea ingresar otro turno? (sí/no)").toLowerCase();
  if (nuevoTurno !== "si") {
    continuar = false
  }
  totalTiempoEspera += tiempoEspera;
  numTurnos++;
} while (continuar);

const promedioTiempoEspera = totalTiempoEspera / numTurnos;
alert("Se registraron " + numTurnos + " turnos. El tiempo de espera promedio fue de " + promedioTiempoEspera + " minutos.");


