let totalTiempoEspera = 0;
let numTurnos = 0;
let continuar = true;

do {
  let tiempoEspera = (prompt("Ingrese el tiempo de espera para este turno en minutos:"));

  totalTiempoEspera += tiempoEspera;
  numTurnos++;

  let nuevoTurno = prompt("¿Desea ingresar otro turno? (sí/no)").toLowerCase();
  if (nuevoTurno === "sí"){
  }
  else {
    continuar = false 
  }
} while (continuar);

const promedioTiempoEspera = totalTiempoEspera / numTurnos;

alert("Se registraron " + numTurnos + " turnos. El tiempo de espera promedio fue de " + promedioTiempoEspera + " minutos.");



