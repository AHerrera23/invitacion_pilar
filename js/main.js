console.log('its online');
// funcion de contador
const fechaFinal = new Date('2024-11-05T20:00:00');

    const now = new Date();
    const tiempoRestante = fechaFinal - now;

    const dias = Math.floor(tiempoRestante / (1000 *60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60 )) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000 );

    const diasQueFaltan = document.getElementById('dias');
    const horasQueFaltan = document.getElementById('horas');
    const minutosQueFaltan = document.getElementById('minutos');
    const segundosQueFaltan = document.getElementById('segundos');
    
    const contador = document.getElementById('contador');
    const cuentaTerminada = document.getElementById('cuentaTerminada');

    diasQueFaltan.innerHTML=dias
    horasQueFaltan.innerHTML=horas
    minutosQueFaltan.innerHTML=minutos
    segundosQueFaltan.innerHTML=segundos
    console.log('faltan ' +dias+' dias'+ ' , ' +horas+' horas'+ ' y '+minutos+' minutos');

    if(dias == 0 ){
        console.log("llego a cero");
        contador.style.display="none"
        cuentaTerminada.style.display="flex"
    }