import { CATEGORIAS } from '../config/categorias.js';

const STORAGE_KEY = 'roframed_contadores';

function cargarContadores() {
  const guardado = localStorage.getItem(STORAGE_KEY);
  if (guardado) {
    try {
      return JSON.parse(guardado);
    } catch (e) {
      console.error('Error al recuperar contadores del localStorage:', e);
    }
  }

  const inicial = {};
  CATEGORIAS.forEach((cat) => {
    inicial[cat.id] = 0;
  });
  return inicial;
}

export const estado = {
  contadores: cargarContadores(),

  incrementar(categoriaId) {
    if (this.contadores[categoriaId] !== undefined) {
      this.contadores[categoriaId] += 1;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.contadores));
      return this.contadores[categoriaId];
    }
    return 0;
  }
};