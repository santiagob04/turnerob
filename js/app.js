// Obtener la referencia al elemento de la lista en el DOM
const listaTurnos = document.getElementById("lista-turnos");

let turnosDisponibles = []

// Obtener los turnos disponibles del archivo JSON y agregarlos a la lista en el DOM
fetch('./turno.json')
    .then(response => response.json())
    .then(turnos => {
        turnosDisponibles = turnos.turnos;
       
        // Guardar los turnos disponibles en el almacenamiento local
        localStorage.setItem('turnosDisponibles', JSON.stringify(turnosDisponibles));

        // Actualizar la lista de turnos disponibles en el DOM
        actualizarListaTurnosDisponibles();
    })
    .catch(error => {
        console.log(error)
    });

   

// Obtener la referencia al formulario en el DOM
const formularioSolicitud = document.getElementById("formulario-solicitud");

// Detectar el evento de envío del formulario
formularioSolicitud.addEventListener("submit", (evento) => {
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
    const turnosDisponibles = JSON.parse(localStorage.getItem('turnosDisponibles'));
    const nuevosTurnosDisponibles = turnosDisponibles.filter(t => t.id !== turno.id);
    localStorage.setItem('turnosDisponibles', JSON.stringify(nuevosTurnosDisponibles));

    // Mostrar un mensaje con los datos del turno solicitado
    swal.fire("Turno solicitado con éxito");

    // Crear un elemento de lista y agregarle los datos del turno
    const li = document.createElement("li");
    li.innerHTML = `Nombre: ${nombre}\nApellido: ${apellido}\nFecha: ${fecha}\nHora: ${hora}\nEspecialidad: ${especialidad}`;

    // Agregar el elemento de lista a la lista en el DOM
    const proximosTurnos = document.getElementById("proximos-turnos");
    proximosTurnos.appendChild(li);

    // Actualizar la lista de turnos disponibles en el DOM
    actualizarListaTurnosDisponibles();
});

const turnosDados = [];

// Iterar sobre el array de turnos disponibles y agregar cada uno a la lista
function actualizarListaTurnosDisponibles() {
    // Vaciar la lista actual
    listaTurnos.innerHTML = "";

    const turnosDisponibles = JSON.parse(localStorage.getItem('turnosDisponibles'));

    turnosDisponibles.forEach(turno => {
        // Crear un elemento de lista y agregarle los datos del turno
        const li = document.createElement("li");
        li.innerHTML = `${turno.especialidad} - ${turno.fecha} - ${turno.hora}`;

        // Agregar el elemento de lista a la lista en el DOM
        listaTurnos.appendChild(li);
    });
}
