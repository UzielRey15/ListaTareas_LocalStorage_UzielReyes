const btnAgregar = document.querySelector(".agregarBtn");
const input = document.querySelector(".nuevaTarea");
const lista = document.querySelector(".listaTareas");

// SECCION PARA CARGAR LAS HOMEWORKS DESDE LA LOCAL STORAGE
const tareasGuardadas = localStorage.getItem("tareas");
if (tareasGuardadas !== "") {
  lista.innerHTML = tareasGuardadas || "";
}

// SECCION PARA AGREGAR NUEVAS HOMEWORKS
btnAgregar.addEventListener("click", () => {
  const texto = input.value.trim();

  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
    guardar();
    input.value = "";
  }
});

// SECCION PARA MARCAR COMO COMPLETADAS LAS HOMEWORKS
lista.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completada");
    guardar();
  }
});

function guardar() {
  localStorage.setItem("tareas", lista.innerHTML);
}
