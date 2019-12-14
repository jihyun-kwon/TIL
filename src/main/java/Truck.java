
import java.util.*;

public class Truck {

    private int[] goBridge;

    public int solution() {
        int answer = 0;
        int bridge_length = 2;  //ptr 스택포인터
        int weight = 10;    //max
        int[]  truck_weights = {7,4,5,6};   //스택본체

        ArrayList<Integer> goBridge = new ArrayList<>();

        int sum = 0;
        int count = 0;
        int count2 = 0;

        for(int i=0; i< truck_weights.length; i++){
            System.out.println("&&&&&&&&");
            System.out.println("truck_weights[i] : " +truck_weights[i]);
            goBridge.add(truck_weights[i]); // goBridge = [7] -> [7,4]
            //다리 위 전체 합계값구하기
/*            for (int k=0; k < goBridge.size(); k++ ) {
                System.out.println("goBridge.size(): "+ goBridge.get(k));
                sum += goBridge.get(k);
            }*/

//7을 add하고 2번째 7돌릴때 4를넣으려하는데 if(sum < 10)에 걸려 거부당하고
            // 3번째 4는 텅빈 다리위에 push되고
            //4번째 5를 넣으려하는데 if(sum <10)안에 들어가 수용되고
            //5번째 4가 2번째라 나가고
            // 6번째 5가 2번째라 나가는데 6이 if(sum<10)에 걸려 거부당하고
            // 7번째 6이 텅빈 다리위에 push되고
            // 8번째 6이 2번째라 나갔음
            // 남은트럭없어 끝
            for(int j=bridge_length; j>0; j--){


                for (int k=0; k < goBridge.size(); k++ ) {
                    System.out.println("goBridge(): " + goBridge.get(k));
                    sum += goBridge.get(k);
                }
                System.out.println("sum : " +sum);
                    if(sum < 10){   //sum = true -> false(11)
                        count++;
                        count2++;
                    } else {
                        //하고싶은거 1. sum에서 -4하고픔 2.count++하고픔(7이니깐)
                      //  sum -= goBridge.get(i);
                    }
                    System.out.println("count : " +count);
                    //하고싶은거 1. 7이 2번돌았음 제거한다
                //2. 계속 truck_weights[i]가 삽입하려한다
                if(count2 == 2){
                    sum =  0;
                    goBridge.remove(i);
                }
            }


        }

        return answer;
    }
    public static void main(String[] args) {
        Truck truck = new Truck();
        int[] answer = {};
        truck.solution();
    }


}
