import java.util.Scanner;

public class Contagem {

	public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe um número N: ");
        int N = scanner.nextInt(); 

        int[] dd = {1, 3, 5, 7, 9, 12, 15, 18, 20, 22, 25, 27, 30};
        int cn = 0;

        for (int i = 0; i < dd.length; i++) {
            if (dd[i] >= 1 && dd[i] <= N) { 
                cn++;
            }
        }

        System.out.println("Existem " + cn + " valores inteiros entre o primeiro dado e " + N);
    }

}
