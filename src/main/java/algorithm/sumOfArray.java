import java.util.Scanner;

public class reverseArray {
    //배열 요소를 입력받고 역순 정렬하는 알고리즘 만들기
    static int[] reverse(int[] arr) {
        int temp;
        for(int i=0; i<arr.length/2;i++){
            temp = arr[i];
            arr[i] = arr[arr.length-i-1];
            arr[arr.length-i-1] = temp;
        }
        return arr;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int[] arr = new int[10];
        System.out.println("10개의 배열을 입력해주세요.");
        for(int i=0; arr.length>i ;i++){
            arr[i] = scan.nextInt();
        }

        int[] reversedArr = reverse(arr);

        for (int reversedArray: reversedArr) {
            System.out.print(reversedArray+ " ");
        }
    }
}