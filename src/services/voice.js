const SOPORTA_VOZ = 'speechSynthesis' in window;

export function anunciarEmisionTurno(turno) {
  if (!SOPORTA_VOZ) return;

  const numeroDeletreado = turno.clave
    .replace('-', ' ')
    .split('')
    .join(' ');

  const texto = `Turno ${turno.categoriaNombre}, ${numeroDeletreado}, generado. Por favor conserve su ticket`;

  window.speechSynthesis.cancel();

  const anuncio = new SpeechSynthesisUtterance(texto);
  anuncio.lang = 'es-ES';
  anuncio.rate = 0.95;
  anuncio.pitch = 1;

  window.speechSynthesis.speak(anuncio);
}