(function () {
  "use strict";
  document.documentElement.classList.add("js");

  // El correo se monta aquí para que no aparezca en el HTML y lo lean menos bots.
  var addr = ["franceshernandezpedro", "gmail.com"].join("@");
  ["mail", "mail2"].forEach(function (id) {
    var a = document.getElementById(id);
    if (a) { a.href = "mailto:" + addr; }
  });

  // Si la foto no existe todavía, se oculta y el hero queda a una columna.
  var img = document.querySelector(".photo img");
  function hidePhoto() {
    var f = img.closest(".photo");
    if (f) { f.hidden = true; }
    document.querySelector(".hero").classList.add("nophoto");
  }
  if (img) {
    if (img.complete && img.naturalWidth === 0) { hidePhoto(); }
    img.addEventListener("error", hidePhoto);
  }

  // Aparición progresiva de experiencia, formación e idiomas.
  var items = document.querySelectorAll(".reveal");
  document.querySelectorAll(".langs .reveal").forEach(function (el, i) {
    el.style.transitionDelay = (i * 150) + "ms";
  });
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  items.forEach(function (el) { io.observe(el); });
})();
