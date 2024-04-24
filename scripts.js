// scripts.js

function abrirVentana() {
    // Abre una nueva ventana con el contenido de otro archivo HTML
    const ventana = window.open('steam.html', '_blank', 'width=600,height=400');
    // Aplica la clase "ventana-windows" al documento de la nueva ventana
    ventana.document.body.classList.add('ventana-windows');
}
// Obtener el elemento donde se mostrará la hora y la fecha
const horaElemento = document.getElementById('hora');
const fechaElemento = document.getElementById('fecha');

// Función para obtener la hora y la fecha actual
function obtenerHoraYFecha() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const dia = ahora.getDate().toString().padStart(2, '0');
    const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
    const año = ahora.getFullYear();

    const hora = `${horas}:${minutos}`;
    const fecha = `${dia}/${mes}/${año}`;

    return { hora, fecha };
}

// Función para actualizar la hora y la fecha cada segundo
function actualizarHoraYFecha() {
    const { hora, fecha } = obtenerHoraYFecha();
    horaElemento.textContent = hora;
    fechaElemento.textContent = fecha;
}

// Actualizar la hora y la fecha inicialmente
actualizarHoraYFecha();

// Actualizar la hora y la fecha cada segundo
setInterval(actualizarHoraYFecha, 1000);

