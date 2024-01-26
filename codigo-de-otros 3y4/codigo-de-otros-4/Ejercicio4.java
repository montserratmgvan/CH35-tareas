//Montserrat Martínez Galván = 4 , compañero Pedro Antonio

package com.generation;

import java.util.Scanner; // faltaba importar el Scanner

public class Codigo4 {

	public static void main(String[] args) { //faltaba definir el método main y meter el código dentro de él.
		
// cambie nombre de s a scanner y  j a jugador y g a ganador para tener mejor contexto.
		
		    Scanner juego = new Scanner(System.in); // agregar el System.in
		    
		    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
		    String jugador1 = juego.nextLine();
		    
		    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): "); // decia jugador 1 y debe ser jugador 2
		    // aqui habia un scanner de más por eso se elimino
		    String jugador2 = juego.nextLine();
		    
		    if (jugador1.equals(jugador2)) { //se cambio el == por el método .equals(), ya que se esta comparando el contenido de dos objetos.
		      System.out.println("Empate");
		    } else {
		   
		    int ganador = 2;
		      
		    switch(jugador1) {
		        case "piedra":
		          if (jugador2.equals("tijeras")) { 
		            ganador = 1;
		          }
		          break; // se agrego un break
		        case "papel":
		          if (jugador2.equals("piedra")) {
		            ganador = 1;
		          }// faltaba cerrar esta llave
		          break;// se agrego un break
		          
		        case "tijera":
		          if (jugador2.equals("papel")) { 
		            ganador = 1;
		          }
		          break;
		        default:
		      }
		      System.out.println("Gana el jugador " + ganador);
		    }
		  
		  juego.close(); // falataba cerrar el scanner
		}

	}
