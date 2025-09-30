const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (pagina) => {
  pagina.preventDefault();

  const envio = formulario.querySelectorAll("input, textarea");

  envio.forEach((campo) => {
    const dado = campo.value.trim();
    const campoObg = campo.parentElement.querySelector(".obrigatorio");

    campo.classList.remove("camponulo", "preenchido");
    campoObg.classList.remove("nulo");

    if (dado === "") {
      campo.classList.add("camponulo");
      campoObg.classList.add("nulo");
    } else {
      campo.classList.add("preenchido");
    }
  });
});
