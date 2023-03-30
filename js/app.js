/*
Crea una web con bootstrap y js, 
que contenga un botón input donde se pueda cargar una tarea 
y un botón que al ser presionado agregue dicha tarea a una lista,
 cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
 */

const botonNuevaTarea = document.querySelector("#btnCargarNuevaTarea");
const formulario = document.querySelector("#formulario");
const botonGuardar = document.querySelector("#btnGuardar");
let listadoDeTareas = []

botonNuevaTarea.addEventListener('click', function() {
    botonNuevaTarea.className = "d-none"
    formulario.className = ""
});

botonGuardar.addEventListener("submit", function(e){
    e.preventDefault();

    
    alert("Nueva tarea agregada al listado");
    botonNuevaTarea.className = "btn btn-primary mt-5"
    formulario.className = "d-none"
})