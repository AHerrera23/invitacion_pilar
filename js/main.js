console.log('its online');

// Función de contador
function actualizarContador() {
    const fechaFinal = new Date('2024-11-09T17:01:00');
    const now = new Date();
    const tiempoRestante = fechaFinal - now;

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    const diasQueFaltan = document.getElementById('dia');
    const horasQueFaltan = document.getElementById('horas');
    const minutosQueFaltan = document.getElementById('minutos');
    const segundosQueFaltan = document.getElementById('segundos');
    const diasFaltantes = document.getElementById('diasFaltantes');
    const diasFaltantes2 = document.getElementById('diasFaltantes2');

    const contador = document.getElementById('contador');
    const cuentaTerminada = document.getElementById('cuentaTerminada');

    // Actualiza los elementos HTML
    diasQueFaltan.innerHTML = dias;
    horasQueFaltan.innerHTML = horas;
    minutosQueFaltan.innerHTML = minutos;
    segundosQueFaltan.innerHTML = segundos;

    console.log('faltan ' + dias + ' días' + ', ' + horas + ' horas' + ' y ' + minutos + ' minutos');

    // Verifica si el tiempo ha llegado a cero
    if (dias == 0) {
        console.log("llegó a cero");
        contador.style.display = "none";
        cuentaTerminada.style.display = "flex";

        // Detener el intervalo
        clearInterval(intervalo);
    }
}

// Llamar a la función de contador inmediatamente
actualizarContador();

// Configurar el intervalo para actualizar el contador cada segundo
const intervalo = setInterval(actualizarContador, 1000);
