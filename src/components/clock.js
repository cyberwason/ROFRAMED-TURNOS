export function iniciarReloj(relojHora, relojFecha) {
  function actualizar() {
    const ahora = new Date();

    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    relojHora.textContent = `${horas}:${minutos}:${segundos}`;

    const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    relojFecha.textContent = ahora.toLocaleDateString('es-ES', opcionesFecha);
  }

  actualizar();
  setInterval(actualizar, 1000);
}