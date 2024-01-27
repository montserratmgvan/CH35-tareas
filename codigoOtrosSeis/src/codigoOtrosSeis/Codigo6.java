//Montserrat Martínez Galván= 4 / compañero Rey David Martínez  

// faltaba el package
package codigoOtrosSeis;

import java.util.Scanner; //importamos scanner

public class Codigo6 { // nombre clase iniciaba en minúscula e inicia con mayúscula
	
	//falta el método main
	
	
	public static void main (String[] args) {
		  
	    int[] n = new int[20]; // agregar la palabra reservada new

	    for (int i = 0; i < 20; i++) {// le faltaba un signo de +
	      n[i] = (int)(Math.random() * 381) + 20;
	      System.out.println(n[i] + " "); //falta el .out y el ln del print 
	    }
	    
	    System.out.println("\n¿Qué números quiere resaltar? "); // le falata una n la pintln
	    System.out.println("(1 – los múltiplos de 5, 2 – los múltiplos de 7): "); // falataba la ln
	    
	    Scanner scanner = new Scanner(System.in); // agregar scanner
	    
	    int opcion = scanner.nextInt(); // agregar este sacanner.netxInt
	   // int opcion = Integer.parseInt(System.console().readLine()); // eliminar esto

	    int multiplo = (opcion == 1) ? 5 : 7; //inverir el ? y : 

	   

		for (int e : n) { // cambiar nombre ciclo foreach a for, cambiar char por int
		      if (e % multiplo == 0) {
		        System.out.print("[" + e + "] ");
		        //falataba cerrar la llave del if
		      } else {
		        System.out.print(e + " "); // cambiar el in a .out 
		      }
		    }
		 
		scanner.close(); //cerrar scanner que se agrego
		    }
		
	}
	 


