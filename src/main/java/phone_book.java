import java.util.Arrays;
import java.util.HashMap;

public class phone_book {

    public boolean solution() {
        boolean answer = true;

        String[] phone_book = {"1101010", "20202020312321", "33030301","14"};
        Arrays.sort(phone_book, (a, b)->Integer.compare(a.length(), b.length()));

        for(int i=0; i<phone_book.length; i++) {
            for(int j=1; j<phone_book.length; j++) {
                    if(phone_book[i].startsWith(phone_book[j])){
                        answer = false;
                        System.out.println(i);
                    }
                }
            }
        System.out.println(answer);
        return answer;
    }


    public static void main(String[] args) {
        phone_book solution = new phone_book();
         solution.solution();

    }


}
