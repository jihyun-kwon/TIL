import java.util.Arrays;
import java.util.Scanner;

public class maxOfArray {
    //배열 a의 최대값을 구하여반환
    static int maxOf(int[] a) {
        int max = a[0];
        for(int i=0; i < a.length; i++){
            if(max < a[i]){
                max = a[i];
            }
        }
        return max;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("키의 최대값을 구할 사람 수를 입력하시오.");
        int num = scan.nextInt();

        int[] height = new int[num];

        for(int i=0; i < num; i++) {
            System.out.print("height[" + i + "] : ");
            height[i] = scan.nextInt();
        }
        System.out.println("최대 키는 " + maxOf(height) + "다");
    }
}
