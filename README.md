# Portfolio · Julián Murno

Sitio web personal de presentación como **Analista de Sistemas / Analista Funcional Junior**.
Una página estática, liviana y responsive que resume mi perfil, experiencia, aptitudes y formación.

🔗 **Ver en vivo:** [julianmurno.github.io](https://julianmurno.github.io/sitioweb/)

---

## Sobre el proyecto

El sitio está pensado como una extensión de mi perfil profesional: comunica de qué se trata
mi trabajo —traducir necesidades de negocio en requerimientos claros y en soluciones que la
gente realmente usa— con un diseño sobrio de "documento técnico".

Lo construí desde cero con HTML, CSS y JavaScript puros (sin frameworks ni dependencias),
priorizando el rendimiento, la accesibilidad y un código ordenado y fácil de mantener.

## Tecnologías

- **HTML5** semántico
- **CSS3** (variables personalizadas, Grid y Flexbox, diseño responsive)
- **JavaScript** (vanilla, sin librerías) para las animaciones de aparición al hacer scroll
- **GitHub Pages** para el hosting

## Características

- Diseño responsive, adaptado a escritorio y celular
- Animaciones de revelado suaves al hacer scroll
- Respeta la preferencia del sistema `prefers-reduced-motion`
- Navegación por teclado con foco visible (accesibilidad)
- Enlaces de contacto directos (email, LinkedIn, teléfono)
- Sin dependencias externas más allá de las tipografías

## Estructura

```
.
├── index.html      # Estructura y contenido
├── styles.css      # Estilos y sistema de diseño (colores, tipografías, layout)
└── script.js       # Animaciones de aparición y año dinámico
```

## Cómo verlo localmente

No requiere instalación ni build. Basta con clonar el repositorio y abrir `index.html`
en el navegador:

```bash
git clone https://github.com/julianmurno/julianmurno.github.io.git
cd julianmurno.github.io
# abrir index.html en el navegador
```

## Personalización

Los colores y tipografías están centralizados como variables CSS al inicio de `styles.css`
(`--paper`, `--ink`, `--blue`, etc.), así que se pueden ajustar desde un solo lugar.

---

## Contacto

- **Email:** julianmurno@gmail.com
- **LinkedIn:** [linkedin.com/in/julianmurno](https://www.linkedin.com/in/julianmurno)
- **Ubicación:** Villa Carlos Paz, Córdoba, Argentina