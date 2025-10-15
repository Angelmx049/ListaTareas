const inputTarea = document.querySelector('.tarea');
const btnAgregar = document.querySelector('.agregar');
const listaTareas = document.querySelector('.lista-tareas');

let tareas = localStorage.getItem('tareasGuardadas');
tareas = tareas ? tareas.split('|') : [];

mostrarTareas();

btnAgregar.addEventListener('click', () => {
    const texto = inputTarea.value.trim();
    if (texto !== '') {
        tareas.push(texto);
        guardarTareas();
        mostrarTareas();
        inputTarea.value = '';
    }
});

function mostrarTareas() {
    listaTareas.innerHTML = '';
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = tarea;

        li.addEventListener('click', () => {
            li.classList.toggle('completada');
        });

        listaTareas.appendChild(li);
    });
}

function guardarTareas() {
    localStorage.setItem('tareasGuardadas', tareas.join('|'));
}
