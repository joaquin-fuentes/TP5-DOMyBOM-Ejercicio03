/*
Crea una web con bootstrap y js, 
que contenga un botón input donde se pueda cargar una tarea 
y un botón que al ser presionado agregue dicha tarea a una lista,
 cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
 */

const botonNuevaTarea = document.querySelector("#btnCargarNuevaTarea");
const formulario = document.querySelector("#formulario");
const botonGuardar = document.querySelector("#btnGuardar");
const botonEliminar = document.querySelector("#btnEliminar")
let tarea = document.querySelector("#txtTarea")
let listaTareas = document.querySelector("#listaTareas")
let listadoDeTareas = []


function mostrarFormulario(){
    botonNuevaTarea.className = "d-none"
    formulario.className = ""
}

function guardarNuevaTarea(){
    
    listadoDeTareas.push(tarea.value)
    console.log(listadoDeTareas)
    
    // alert("Nueva tarea agregada al listado");
    
    mostrarTareas()
    
    tarea.value = ""
    botonNuevaTarea.className = "btn btn-primary mt-5"
    formulario.className = "d-none"
    // return listadoDeTareas

    
}
function eliminarTarea(){

}

function mostrarTareas(){
    listaTareas.innerHTML = " "

    if(listadoDeTareas.length === 0){
        listaTareas.innerHTML += `
        <h1 class=" my-3 text-primary-emphasis" >Aún no hay tareas cargadas</h1>
    

         `
    } else {

        listaTareas.innerHTML += `
        <h1 class=" my-3 text-primary-emphasis" >Listado de Tareas</h1>
        `
        for(let i = 0 ; i < listadoDeTareas.length ; i++){
            listaTareas.innerHTML += `
        
            <div class="border border-primary rounded p-2 mb-4 text-primary-emphasis d-flex justify-content-between align-content-center flex-row">
                
                <b class="my-auto">${i + 1} ${listadoDeTareas[i]}</b>
                <button class="btn btn-danger m-1 text-start" id="btnEliminar">Eliminar</button>
             </div>
             `
        }

    }
}
// function eliminarNuevaTarea(){
    
//     listadoDeTareas.pop()
//     console.log(listadoDeTareas)
    
// }


window.addEventListener('load', function() {
    // Código a ejecutar cuando se cargue la página
  mostrarTareas()
  });

botonNuevaTarea.addEventListener('click', function() {
      mostrarFormulario()
});

botonGuardar.addEventListener("click", function(e){
    e.preventDefault();
     guardarNuevaTarea();
})
//  botonEliminar.addEventListener("click", function(){
//       eliminarTarea();
//  })
