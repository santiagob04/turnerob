//Array para simular el proceso
let turnosDisponibles = [
    { id: 1, especialidad: "Pediatría", fecha: "2023-04-05", hora: "10:00" },
    { id: 2, especialidad: "Cirugia", fecha: "2023-04-05", hora: "10:00" },
    { id: 3, especialidad: "Clinica medica", fecha: "2023-04-05", hora: "10:00" },
];

let turnosDados = [];

// Entradas de paciente
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
// let especialidad = prompt("Ingrese la especialidad médica que necesita:");
let turnoSeleccionado = parseInt(prompt(`Seleccione una opcion numerica dentro de estos turnos disponibles: \n1: especialidad: "Pediatría" ,fecha: "2023-04-05", hora: "10:00"
\n2: especialidad: "Cirugia", fecha: "2023-04-05", hora: "10:30" 
\n3: especialidad: "Clinica medica", fecha: "2023-04-05", hora: "11:00"`));


function solicitarTurno(nombre, apellido, turnoSeleccionado) {
    let turnoEncontrado = buscarTurno(turnoSeleccionado)

    const turno = {
        ...turnoEncontrado,
        nombre,
        apellido
    }

    alert(`Turno registrado con exito!\nInformacion de su turno:\nNombre: ${turno.nombre}\nApellido: ${turno.apellido}\nFecha: ${turno.fecha}\nHora: ${turno.hora}\nEspecialidad: ${turno.especialidad}`)

}

function buscarTurno(id) {
    return turnosDisponibles.find(turno => turno.id === id);
}


solicitarTurno(nombre, apellido, turnoSeleccionado)

// let turnoSeleccionado = null;

// //Funciones
// function buscarTurnosPorEspecialidad(especialidad) {
//     return turnosDisponibles.filter(turno => turno.especialidad === especialidad);
// }
// function buscarTurnosPorFecha(fecha) {
//     return turnosDisponibles.filter(turno => turno.fecha === fecha);
// }
// function buscarTurnosPorHora(hora) {
//     return turnosDisponibles.filter(turno => turno.hora === hora);
// }
// function seleccionarTurno(id) {
//     turnoSeleccionado = turnosDisponibles.find(turno => turno.id === id);
//     if (turnoSeleccionado) {
//         // Eliminamos el turno seleccionado del array de turnos disponibles
//         turnosDisponibles = turnosDisponibles.filter(turno => turno.id !== id);
//         return true;
//     } else {
//         return false;
//     }
// }
// function cancelarTurno() {
//     if (turnoSeleccionado) {
//         // Agregamos el turno seleccionado de vuelta al array de turnos disponibles
//         turnosDisponibles.push(turnoSeleccionado);
//         turnoSeleccionado = null;
//         return true;
//     } else {
//         return false;
//     }
// }
