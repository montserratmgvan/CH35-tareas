/*Montserrat Martínez Galván = 4 
compañero Pedro Antonio*/


// se movio la declaración de la función filtrado hacia arriba
const filtrado = (productos = [], texto) => {
  const textoMinusculas = texto.toLowerCase(); // se agrego para que no fuera nsensible a mayúsculas y minúsculas.
  return productos.filter(
    (item) => item.tipo.includes(textoMinusculas) || item.color.includes(textoMinusculas)
  );
};

// Tenemos un li de productos


const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

//se cambian las variables a un getElementById
const divProductos = document.getElementById("lista-de-productos"); // se renombra la variable a divProductos
const inputFiltro = document.getElementById("inputFiltro"); //se renombra la variable a inputDeFiltro
const botonDeFiltro = document.getElementById("botonFiltro"); // se mueve a la parte de arriba para mantener un mejor orden.


function displayProductos(productos) { // puse lo del cliclo for dentro de la funcion display productos, ya que no estaba definida en en código solo se declaro abajo
  // Limpiar el contenido actual antes de mostrar los productos
  divProductos.innerHTML = "";

  for (let i = 0; i < productos.length; i++) {
    var divProducto = document.createElement("div");// agregar ; y cambiar d a divProducto para que se entienda mejor.
    divProducto.classList.add("producto");//agregar ;  
  
    var tituloProducto = document.createElement("p"); //agregar ; y cambair ti a tituloProducto
    tituloProducto.classList.add("titulo");
    tituloProducto.textContent = productos[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
  
    divProducto.appendChild(tituloProducto);
    divProducto.appendChild(imagen);
  
    divProductos.appendChild(divProducto);
  }
  
}
displayProductos(productos) // le faltaba su función

// evento de click para el botón de filtro
botonDeFiltro.onclick = function() {
  while (divProductos.firstChild) {
    divProductos.removeChild(divProductos.firstChild);
  }

  const texto = inputFiltro.value.toLowerCase(); // agrgar toLowerCase()
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
  //se pone este displayProducts dentro de la funcion de botonDeFiltro.
//se quita un código del ciclo for que estaba antes ya que arriba hay un método para agregar elementos mediante manipulación del DOM. 
};
  






