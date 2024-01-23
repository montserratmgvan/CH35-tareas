var formulario = document.querySelector(".formulario") // estaba definido como como id #form y es una clase de nombre .formulario

formulario.onsubmit = function(e) {

  e.preventDefault(); //agregue el default porque la función correcta es e.preventDefault()
  

  //obtener elementos del formulario 
//renombre las variables para tener mejor contexto
  var nombreElemento = formulario.elements[0]
  var edadElemento = formulario.elements[1]
  var nacionalidadElemento = formulario.elements[2]


  //Obtener los valores del formulario  

  var nombre = nombreElemento.value
  var edad = edadElemento.value
  var indiceNacionalidad = nacionalidadElemento.selectedIndex;
  var nacionalidad = nacionalidadElemento.options[indiceNacionalidad].value ; 
  
  
  console.log(nombre, edad)
  console.log(nacionalidad)


// Validar y agregar invitado si cumple con los requisitos

if (nombre.length === 0) {
  nombreElemento.classList.add("error");
}
else if (edad < 18 || edad > 120) {
  edadElemento.classList.add("error");
}

else {
agregarInvitado(nombre, edad, nacionalidad);
}
}; //simplifique el codigo utilizando la declaración else if

// Función para agregar invitado a la lista

function agregarInvitado(nombre, edad, nacionalidad) {
//Mapear código de nacionalidad a nombre de paises

  var nacionalidadMap ={
    ar: "Argentina",
    mx: "Mexicana",
    vnzl: "Venezonala",
    per: "Peruan",
  }


// crear contenedor de lista de invitados  
var lista = document.getElementById("lista-de-invitados") 


// crear elementos de la lista

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista") // eliminar ed del added para que quede add.
lista.appendChild(elementoLista)

//Funcion para crear elementos de nombre, edad y nacionalidad
function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor ;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}  // elimine parte de código que se repetia antes de la funcion crear elemento, ya que era lo mismo.


//Crear elementos para nombre, edad y nacionalidad
crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidadMap[nacionalidad]);//agregar lo de la variable nacionalidadMap

//Crear boton para eliminar invitado dentro del elemento lista

var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar); // se repetia dos veces la parte de borrar , solo deje esta.

// Asignar función al botón para eleminar el invitado actual

botonBorrar.onclick = function() {
elementoLista.remove(); // cambair botonBorrar.parentNode.remove() a elementoLista.remove() para eliminar el elemento de la lista de invitados y no tener problemas si hay varios elementos en el mismo nivel.
  };
}



