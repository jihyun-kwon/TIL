/*
import java.util.*;

class Solution {
    public int[] solution() {
        int answer = 0;
        int total = 0;
        int order = 0;
        Map<Integer, Integer> map = new HashMap<>();

        while(true) {
            if (order == truck_weights.length) {
                break;
            }

            answer++;

            if (map.get(answer) != null) {
                total -= map.get(answer);
            }

            if (weight >= (total + truck_weights[order])) {
                total += truck_weights[order];
                map.put(answer + bridge_length, truck_weights[order]);
                order++;
            }
        }

        answer += bridge_length;

        return answer;
    }
}


*/
