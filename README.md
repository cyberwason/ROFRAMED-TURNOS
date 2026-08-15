# ROFRAMED-TURNOS
Sistema web dinámico y modular para la emisión de turnos de laboratorio clínico, desarrollado con JavaScript Vanilla (ES Modules) y síntesis de voz.

> **Un kiosco web ultra rápido, accesible y modular para laboratorios clínicos.**  
> Construido con **JavaScript Vanilla puro (ES Modules)**, diseño responsivo avanzado y **síntesis de voz interactiva** — ⚡ *Cero dependencias, 100% rendimiento.*

---

## 🚀 ¿Por qué destaca este proyecto?

Este no es solo un dispensador de turnos básico; es una solución web completa tipo **Single Page Application (SPA)** optimizada para entornos reales de atención médica. 

 Demuestra cómo construir aplicaciones modernas, mantenibles y profesionales en **Vanilla JS** sin sobrecargar el proyecto con frameworks pesados, logrando una velocidad de carga instantánea y máxima eficiencia.

### ✨ Highlights Técnicos:
* **🗣️ Asistente Auditivo Nativo:** Confirmación por síntesis de voz en tiempo real usando la **Web Speech API** (`window.speechSynthesis`).
* **📦 Arquitectura ES Modules:** Separación limpia de responsabilidades en capas (`config`, `store`, `components`, `services`).
* **💾 Persistencia de Datos:** Sistema de contadores correlativos por categoría respaldados en `localStorage`.
* **🎨 Diseño Premium & Accesible:** Interfaz moderna maquetada con CSS3 Variables, metodología BEM, soporte para lectura de pantalla y preferencias de movimiento reducido.

---

## 📂 Estructura del Proyecto

```text
ROFRAMED-TURNOS/
├── src/
│   ├── components/      # UI Dinámica (Reloj en vivo, animación de ticket)
│   ├── config/          # Reglas de negocio y categorías de atención
│   ├── services/        # Motor de voz e integraciones
│   ├── store/           # Almacén de estado global y persistencia
│   └── app.js           # Orquestador principal de la aplicación
├── index.html           # Maquetado semántico base HTML5
├── styles.css           # Design Tokens, utilidades y responsive layout
├── notas.txt            # Documentación técnica de desarrollo
├── README.md            # Documentación oficial
└── LICENSE              # Licencia MIT

---

🛠️ Cómo se Construyó

Gestión de Estado Centralizada (src/store/state.js): Controla el flujo de turnos por prioridad (Embarazadas, Preferencial, Asegurados, etc.) evitando choques de numeración.

Módulos Aislados (src/components/): Componentización nativa para renderizado en tiempo real de hora, fecha y tiquete simulado.

Cero Compilación (Zero-Build): Ejecución directa en el navegador aprovechando los estándares modernos del DOM.

---

🌐 Ver en Vivo / Despliegue

Gracias a su arquitectura estática modular, este proyecto se puede desplegar instantáneamente en GitHub Pages o en Vercel sin necesidad de pasos de compilación complejos.