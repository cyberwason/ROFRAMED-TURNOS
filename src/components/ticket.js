let temporizadorTicket = null;

export function mostrarTicket(domTicket, turno) {
  domTicket.categoria.textContent = turno.categoriaNombre;
  domTicket.numero.textContent = turno.clave;
  domTicket.hora.textContent = new Date(turno.timestamp).toLocaleTimeString('es-ES');

  domTicket.overlay.classList.add('visible');
  domTicket.overlay.setAttribute('aria-hidden', 'false');

  clearTimeout(temporizadorTicket);
  temporizadorTicket = setTimeout(() => {
    ocultarTicket(domTicket);
  }, 3200);
}

export function ocultarTicket(domTicket) {
  domTicket.overlay.classList.remove('visible');
  domTicket.overlay.setAttribute('aria-hidden', 'true');
}