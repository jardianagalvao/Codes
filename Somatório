import java.util.Scanner;
import java.util.ArrayList;

public class SomaConjuntoNumeros {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer> numeros = new ArrayList<Integer>();
        int opcao;
        
        do {
            System.out.println("Escolha uma opção:");
            System.out.println("1 - Adicionar número");
            System.out.println("2 - Calcular a soma dos números");
            System.out.println("0 - Sair");
            opcao = scanner.nextInt();
            
            switch(opcao) {
                case 1:
                    System.out.print("Digite um número: ");
                    int numero = scanner.nextInt();
                    numeros.add(numero);
                    break;
            
                case 2:
                    int soma = 0;
                    for (int num : numeros) {
                        soma += num;
                    }
                    System.out.println("A soma dos números é: " + soma);
                    break;
                case 0:
                    System.out.println("Encerrando o programa...");
                    break;
                default:
                    System.out.println("Opção inválida, tente novamente.");
            }
        } while (opcao != 0);
        
        scanner.close();
    }
    
}
