let turnosDisponibles = [
    { id: 1, especialidad: "Pediatría", fecha: "2023-04-05", hora: "10:00" },
    { id: 2, especialidad: "Cirugia", fecha: "2023-04-05", hora: "10:00" },
    { id: 3, especialidad: "Clinica medica", fecha: "2023-04-05", hora: "10:00" },
];

localStorage.setItem('turnosDisponibles',JSON.stringify(turnosDisponibles))

const turnosDados = [

]

// Obtener la referencia al elemento de la lista en el DOM
const listaTurnos = document.getElementById("lista-turnos");

// Iterar sobre el array de turnos disponibles y agregar cada uno a la lista
const listaLocalStorage = JSON.parse(localStorage.getItem('turnosDisponibles'))
listaLocalStorage.forEach(turno => {
    // Crear un elemento de lista y agregarle los datos del turno
    const li = document.createElement("li");
    li.innerHTML = `Especialidad: ${turno.especialidad} - Fecha: ${turno.fecha} - Hora: ${turno.hora}`;

    // Agregar el elemento de lista a la lista en el DOM
    listaTurnos.appendChild(li);
});

// Obtener la referencia al formulario en el DOM
const formularioSolicitud = document.getElementById("formulario-solicitud");

// Detectar el evento de envío del formulario
formularioSolicitud.addEventListener("submit", (evento) => {
    // Prevenir el comportamiento por defecto del formulario (enviar la información y recargar la página)
    evento.preventDefault();

    // Obtener los valores de los inputs del formulario
    const nombre = formularioSolicitud.elements["nombre"].value;
    const apellido = formularioSolicitud.elements["apellido"].value;
    const especialidad = formularioSolicitud.elements["especialidad"].value;
    const fecha = formularioSolicitud.elements["fecha"].value;
    const hora = formularioSolicitud.elements["hora"].value;
    const dni = formularioSolicitud.elements["dni"].value;


    // Crear un objeto con los datos de la solicitud de turno
    const turno = {
        id: turnosDados.length + 1,
        especialidad,
        fecha,
        hora,
        dni,
        nombre,
        apellido
    };

    // Agregar el turno a los turnos dados y eliminarlo de los turnos disponibles
    turnosDados.push(turno);
    console.log(turnosDados)
    turnosDisponibles = turnosDisponibles.filter(t => t.id !== turno.id);
    localStorage.setItem('turnosDisponibles',JSON.stringify(turnosDisponibles))

    // Mostrar un mensaje con los datos del turno solicitado
    // const mensaje = `Turno solicitado con éxito!\nInformación del turno:\nNombre: ${turno.nombre}\nApellido: ${turno.apellido}\nFecha: ${turno.fecha}\nHora: ${turno.hora}\nEspecialidad: ${turno.especialidad}`;
    // alert(mensaje);
alert("Turno solicitado con éxito")
    const proximosTurnos = document.getElementById("proximos-turnos");

// Iterar sobre el array de turnos disponibles y agregar cada uno a la lista
turnosDados.forEach(turno => {
    // Crear un elemento de lista y agregarle los datos del turno
    const li = document.createElement("li");
    li.innerHTML =`Nombre: ${turno.nombre}\nApellido: ${turno.apellido}\nFecha: ${turno.fecha}\nHora: ${turno.hora}\nEspecialidad: ${turno.especialidad}`;

    // Agregar el elemento de lista a la lista en el DOM
    proximosTurnos.appendChild(li);
});


    // Actualizar la lista de turnos disponibles en el DOM
    actualizarListaTurnosDisponibles();
});

function actualizarListaTurnosDisponibles() {
    // Obtener la referencia al elemento de la lista en el DOM
    const listaTurnos = document.getElementById("lista-turnos");

    // Vaciar la lista actual
    listaTurnos.innerHTML = "";

    // Iterar sobre el array de turnos disponibles y agregar cada uno a la lista
    turnosDisponibles.forEach(turno => {
        // Crear un elemento de lista
        const li = document.createElement("li");
        // Agregar la información del turno al elemento de lista
        const textoTurno = document.createTextNode(`Especialidad: ${turno.especialidad}, Fecha: ${turno.fecha}, Hora: ${turno.hora}`);
        li.appendChild(textoTurno);

        // Agregar el botón de solicitud de turno al elemento de lista
        // const botonSolicitud = document.createElement("button");
        // botonSolicitud.innerHTML = "Solicitar turno";
        // botonSolicitud.addEventListener("click", () => solicitarTurno(turno));
        // li.appendChild(botonSolicitud);

        // Agregar el elemento de lista a la lista
        listaTurnos.appendChild(li);
    });
}

// function solicitarTurno(turno) {
//     // Crear un objeto con los datos de la solicitud de turno
//     const solicitud = {
//         nombre: prompt("Ingrese su nombre:"),
//         apellido: prompt("Ingrese su apellido:")
//     };

//     // Agregar los datos de la solicitud al turno
//     turno.nombre = solicitud.nombre;
//     turno.apellido = solicitud.apellido;

//     // Agregar el turno a los turnos dados y eliminarlo de los turnos disponibles
//     turnosDados.push(turno);
//     turnosDisponibles = turnosDisponibles.filter(t => t.id !== turno.id);

//     // Actualizar la lista de turnos disponibles en el DOM
//     actualizarListaTurnosDisponibles();
// }

// Actualizar la lista de turnos disponibles en el DOM al cargar la página
actualizarListaTurnosDisponibles();
