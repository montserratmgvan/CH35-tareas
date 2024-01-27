/*Montserrat Martínez Galván- compañero Rey David Martínez
 * Mi compañero de me dijo de retroalimentación que estuvo bien que le iba explicando y haciendo punto por punto como lo pedia el ejercicio, que implemente bien la lógica para el ejercicio.
 * */

package fizzBuzz;

public class FizzBuzz {

	public void imprimir(int j) {
	for(int i=1 ; i <= 100 ; i++) {
		if (i%3==0) {
			System.out.println("Fizz");
		} else if (i%5==0) {
			System.out.println("Buzz");
		} else if(i%3==0 && i%5==0){
			System.out.println("FizzBuzz");
		} else {
			System.out.println(i);
		}
	  }	
	}
 
	public static void main (String[] args) {
	
		FizzBuzz ejecutarFizz = new FizzBuzz(); 
		ejecutarFizz.imprimir(33);

	}
  }