
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');  //no habia llamado la clase por eso le agregue el (.) 
const $b = document.querySelector('.blog'); // se llamo un id (#) no una clase (.), por eso cambie a (.)
const $l = document.querySelector('.location'); // se agrego para la ubicación  en el html

 async function displayUser(username) { // agregue el async a la funcion ya que tenia definido el await pero faltaba el async.
  try{ // lo agregue porque es parte de la estructura basica de una función asyn-await, usando un bloque try catch para manejo de errores en la función.
  $n.textContent = `cargando...`;
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = response.json(); // se agrego para convertir la respuesta en formato JSON.
  data.then((data) => { // variable data no esta inicializada por eso se agrego aqui y en el const data.
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`; // cambiar las comillas por  (``) backticks, ya que se esta usando la cadena con la expresión ${}.
});
} catch (error) { // faltaba agregar esto como parte del bloque try-catch.

}
}


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`; // agregue el ; 
}

displayUser('stolinski').catch(handleError); 

