/* ==========================================================================
   Julian Murno · Portfolio
   JS mínimo: revelado al hacer scroll + año dinámico en el footer.
   Sin dependencias.
   ========================================================================== */

(function () {
  "use strict";

  /* ----- Año actual en el footer ----- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ----- Revelado progresivo al hacer scroll ----- */
  var reveals = document.querySelectorAll(".reveal");
  var prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Si el navegador no soporta IntersectionObserver, o el usuario pide menos
  // movimiento, mostramos todo directamente.
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
})();