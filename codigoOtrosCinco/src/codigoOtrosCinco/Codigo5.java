//Montserrat Martínez Galván= 4 / compañero Rey David Martínez  

package codigoOtrosCinco; // faltaba el package

import java.util.Scanner; //importar scanner
public class Codigo5 {

	// agregar el método main
public static void main (String [] args) {
	    Scanner s = new Scanner(System.in); //agregar System.in
	    System.out.println("Introduzca un número: "); //la comilla estaba mal era " y agregar el ln del pirnt
	    
	    int numIngresado = s.nextInt();//cambiamos el next.Line por next.Int para que el usuario ingrese datos de tipo número. Y también cambiamos el tipo de dato de la variable a int.
	    int num = numIngresado; 
	    // cambiar nombre de c a num, ni a numero, afortunado a afortunadortunado y noAfortunadortunado a no afortunadortunado ,ingresado para entenderlo mejor.
	    int afortunado = 0;
	    int noAfortunadortunado = 0;
	    
	    while (numIngresado > 0) {
		  int digito = (int)(numIngresado % 10);
	      if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
			afortunado++;
	      } else {
			noAfortunadortunado++;
		  
		  numIngresado /= 10;
	    }
	     
	    if (afortunado > noAfortunadortunado) {
	      System.out.println("El " + num + " es un número afortunadortunado.");// falataba la t en el print
	    } else {
	      System.out.println("El " + num + " no es un número afortunadortunado.");
	    }
	    break; //cerrar el ciclo
	  } 
	   
	    s.close(); // cerrar scanner
	}
}


