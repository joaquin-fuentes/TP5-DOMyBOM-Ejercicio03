/*
Crea una web con bootstrap y js, 
que contenga un botón input donde se pueda cargar una tarea 
y un botón que al ser presionado agregue dicha tarea a una lista,
 cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
 */

let id 
const botonNuevaTarea = document.querySelector("#btnCargarNuevaTarea");
const formulario = document.querySelector("#formulario");
const botonGuardar = document.querySelector("#btnGuardar");
const botonEliminar = document.querySelector(`#btnEliminar${id+1}`)
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
    let numeroAEliminar = parseInt(prompt("Escriba el numero de la tarea que desea ELIMINAR:")) 

        
        if(numeroAEliminar <= listadoDeTareas.length){

            for(let i = 1 ; i <= listadoDeTareas.length ; i++){
                if(numeroAEliminar == i){
                    listadoDeTareas.splice(numeroAEliminar - 1, 1)
                }
            }
            alert(`La tarea numero ${numeroAEliminar} fue eliminada`)
            mostrarTareas()
        }   else {
            alert("Debe ingresar un número válido, vuelva a intentar.")
        } 
    
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
             </div>
             `
        }
        listaTareas.innerHTML += `<button class="btn btn-danger m-1 text-start" onclick="eliminarTarea()" id="btnEliminar">Eliminar</button>`

    }
}



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
