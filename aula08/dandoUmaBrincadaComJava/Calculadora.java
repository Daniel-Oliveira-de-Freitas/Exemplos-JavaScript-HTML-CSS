package dandoUmaBrincadaComJava;

import java.util.Scanner;

public class Calculadora {

    public static void main(String[] args) {
        Calcula calc = new Calcula();
        Scanner tec = new Scanner(System.in);
        int n1, n2, result = 0, op;
        String operacao= "", sinal = "";
        do {
            System.out.println("           Calculadora");
            System.out.println("Escolha a operação que deseja fazer");
            System.out.println("[1] Para somar");
            System.out.println("[2] Para subtrair");
            System.out.println("[3] Para multiplicar");
            System.out.println("[4] Para dividir");
            System.out.println("[0] Para sair");
            System.out.println("Digite sua opção");
            op = tec.nextInt();
            
            System.out.println("digite 1º numero:");
            n1 = tec.nextInt();

            System.out.println("Calculadora");
            System.out.println("digite 2º numero:");
            n2 = tec.nextInt();



            switch (op) {

                case 1:
                    result = calc.soma(n1, n2);
                    break;
                case 2:
                    result = calc.subtrai(n1, n2);
                    break;
                case 3:
                    result = calc.multiplica(n1, n2);
                    break;
                case 4:
                    result = calc.divide(n1, n2);
                    break;
                default:
                    System.out.println("Obrigado por usar a Calculadora!");
            }
            if (op == 1) {
                operacao = "soma";
                sinal = "+";
            } else if (op == 2) {
                operacao = "subtração";
                sinal = "-";
            } else if (op == 3) {
                operacao = "multiplicação";
                sinal = "*";
            } else if (op == 4){
                operacao = "divisão";
                sinal = "/";
            }

            System.out.println("O resultado da "+ operacao +  " : " + n1 +" "+ sinal +" "+ n2 + " = " + result);

        } while (op != 0);

    }

}