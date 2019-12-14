import java.util.Scanner;

public class sumOfArray {
    //배열 요소를 입력받고 전체 합계 리턴하는 알고리즘 만들기
    static int sumOf(int[] arr) {
        int sum =0;
        for(int i=0; i<arr.length;i++){
            sum+=arr[i];
        }
        return sum;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int[] arr = new int[10];
        System.out.println("10개의 배열을 입력해주세요.");
        for(int i=0; arr.length>i ;i++){
            arr[i] = scan.nextInt();
        }

        int result = sumOf(arr);
        System.out.print("배열 전체 합 : " +result);
    }
}