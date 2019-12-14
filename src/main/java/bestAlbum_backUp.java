import java.util.*;

class bestAlbum_backUp {
    public int[] solution() {
        String[] genres = {"jazz", "jpop", "kpop", "kpop", "jpop", "kpop"};
        int[] plays = {1000000, 200, 600, 300, 200, 100};
        int[] answer = {};

        HashMap<String, ArrayList<Integer>> hashMap = new HashMap<>();

        for (int i = 0; i < genres.length; i++) {
            ArrayList<Integer> arrayList = new ArrayList<>();
            if (hashMap.containsKey(genres[i])) {
                arrayList = hashMap.get(genres[i]);
                arrayList.add(plays[i]);
                System.out.println("arry1 : " + arrayList);
            } else {
                arrayList.add(plays[i]);
            }
            hashMap.put(genres[i], arrayList);

        }
            //출력용 이터레이터
        Iterator iterator = hashMap.keySet().iterator();
        while (iterator.hasNext()) {
            String temp = (String) iterator.next();
            System.out.println(temp + " = " + hashMap.get(temp));
        }



        //1. addAll

        //2. 장르별 key 설정

        //3. Array.sort

        //4. value split (2개씩)


        //5. return 고유번호?!?!?!



        /*

        Iterator it = sortByValue(hashMap).iterator();

        while (it.hasNext()) {
            String temp = (String) it.next();
            System.out.println(temp + " = " + hashMap.get(temp));



        }

        //Genres별로 정렬할거니까 일단 genre 별로 나눈다음, plays[i]의 총합이 가장 큰 순서대로 genre를 정렬한다
//그 다음에 genres 안에서 노래 순서대로 정렬할거다
//그러니까 아마 처음엔 array를 쓰면 될듯. 그리고 총합을 구하는 +=의 반복문을 쓴다
        return answer;
    }
//별도의 스태틱 함수로 구현
*/
        return answer;
    }


    public static void main(String[] args) {
        bestAlbum_backUp solution = new bestAlbum_backUp();
        solution.solution();
    }

}


