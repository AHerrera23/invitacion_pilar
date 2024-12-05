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

// boton para agendar fecha
let botonFecha = document.getElementById('btnFecha');
// boton para abrir mapa
let botonMapa= document.getElementById('btnMapa');
// boton para confirmar asistencia
let botonConfirmar = document.getElementById('botonDeConfirmacion');
// boton que genera link de pago
let botonCBU = document.getElementById('btnCBU');
let seccionDePago = document.getElementById('seccionDePago');
let cbu = document.getElementById('cbuOculto');

botonCBU.addEventListener('click', () => {
    seccionDePago.style.display="none";
    cbu.style.display="flex";
});
botonConfirmar.addEventListener('click', ()=>{
    console.log('boton de confirmar fue presionado');
    const telefono = 5491150522026;
    const mensaje = "Estare encantado de asistir al cumpleaños de pilar y acompañarla en esta noche tan especial!"
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    // generacion dinamica del mensaje
    window.open(url, '_blank');
})
botonMapa.addEventListener('click', ()=>{
    const urlMapa='https://maps.app.goo.gl/2u4MkXqA8VpEpnxGA';
    window.open(urlMapa, "_blanck")
})
botonFecha.addEventListener('click', ()=>{
    const title = encodeURIComponent("Cumpleaños de 15 pilar")
    const fechaDeInicio = "20250222T00000Z"
    const fechaDeCierre = "20250222T21000Z"
    const detalle = encodeURIComponent("evento generado dinamicamente de prueba")
    const location = encodeURIComponent("Cno. Gral. Belgrano 4745")
    // generacion de url del calendario
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fechaDeInicio}/${fechaDeCierre}&details=${detalle}&location=${location}&sf=true&output=xml`;
    window.open(url, "_blank");
})