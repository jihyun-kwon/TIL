import java.util.Scanner;

public class cardConvRev {
    //기수변환하는 알고리즘 만들기
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int no, cd, dno, retry;
        char[] cno = new char[32];
        System.out.println("10진수 기수변환 시작");

        do{
            do{
                System.out.println("변환할 음이 아닌 정수를 입력하세요");
                no = scan.nextInt();
            }while(no < 0);

            do{
                System.out.print("어떤 진수로 변환할까요? (2 ~ 36) : ");
                cd = scan.nextInt();
            }while(cd < 2 || cd > 36);  //no를 cd진수로 변환

            dno = cardConvR(no, cd, cno);

            for(int i= dno-1; i>=0; i--){
                System.out.println(cno[i]);
            }
            System.out.println("한번더? 1:ㅇ 2:ㄴ");
            retry = scan.nextInt();
        }while(retry == 1);
    }

    static int cardConvR(int no, int cd, char[] cno){
        int digits = 0;
        String dchar = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        do {
            cno[digits++] = dchar.charAt(no % cd);
            no /= cd;
        }while(no != 0);
        return digits;
    }
}