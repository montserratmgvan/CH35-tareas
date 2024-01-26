/**
 * Montserrat Martínez Galván
 * la retroalimentación que me dio mi compañero es que me falto mucho para completar el reto, que me puse nerviosa y necesito repasar más lo de las APIS.
 */

function fetchAnswer (){

}

const boton = document.getElementById("boton");
boton.addEventListener("click", fetchAnswer);


fetch ("https://yesno.wtf/api"){
.then(response => response.json)()
.then(data)
}