
public class MDC {

	public static void main(String[] args)  {
        int asd = 30, bsd = 40; 
        int mdc = calcularMDC(asd, bsd); 

        System.out.println("O mdc de " + asd + " e " + bsd + " é " + mdc); 
    }

    public static int calcularMDC(int asd, int bsd) {
        if (bsd == 0) {
            return asd; 
        } else {
            return calcularMDC(bsd, asd % bsd); 
        }
    }

}
