import { CATEGORIAS } from './config/categorias.js';
import { estado } from './store/state.js';
import { anunciarEmisionTurno } from './services/voice.js';
import { iniciarReloj } from './components/clock.js';
import { mostrarTicket, ocultarTicket } from './components/ticket.js';

/* ================= REFERENCIAS AL DOM ================= */
const dom = {
  relojHora: document.getElementById('reloj-hora'),
  relojFecha: document.getElementById('reloj-fecha'),
  dispensadorGrid: document.getElementById('dispensador-grid'),
  ticket: {
    overlay: document.getElementById('ticket-overlay'),
    categoria: document.getElementById('ticket-categoria'),
    numero: document.getElementById('ticket-numero'),
    hora: document.getElementById('ticket-hora'),
  }
};

/* ================= CONSTRUCCIÓN DEL DISPENSADOR ================= */
function construirDispensador() {
  CATEGORIAS.forEach((categoria) => {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'btn-categoria' + (categoria.prioritaria ? ' btn-categoria--prioritaria' : '');
    boton.dataset.categoriaId = categoria.id;
    boton.setAttribute('aria-label', `Generar turno de ${categoria.nombre}`);

    boton.innerHTML = `
      <span class="btn-categoria__prefijo">${categoria.id}</span>
      <span class="btn-categoria__nombre">${categoria.nombre}</span>
    `;

    boton.addEventListener('click', () => generarTurno(categoria.id));
    dom.dispensadorGrid.appendChild(boton);
  });
}

/* ================= GENERACIÓN DE TURNO ================= */
function generarTurno(categoriaId) {
  const categoria = CATEGORIAS.find((c) => c.id === categoriaId);
  if (!categoria) return;

  const nuevoNumero = estado.incrementar(categoriaId);
  const correlativo = String(nuevoNumero).padStart(3, '0');
  const clave = `${categoria.id}-${correlativo}`;

  const turno = {
    clave,
    categoriaNombre: categoria.nombre,
    timestamp: Date.now(),
  };

  mostrarTicket(dom.ticket, turno);
  anunciarEmisionTurno(turno);
}

/* ================= INICIALIZACIÓN ================= */
document.addEventListener('DOMContentLoaded', () => {
  iniciarReloj(dom.relojHora, dom.relojFecha);
  construirDispensador();

  // Cerrar ticket al hacer clic en el overlay
  dom.ticket.overlay.addEventListener('click', () => ocultarTicket(dom.ticket));
});