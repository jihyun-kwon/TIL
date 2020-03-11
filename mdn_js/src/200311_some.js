const array = [1,2,3,4,5];
//some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다
//빈배열은 무조건 false 반환

const even = (element) => element % 2 === 0;
console.log(array.some(even));
// true

// 구문 arr.some(callback [, thisArg])
// some은 callback이 true를 반환하는 요소를 찾을 때까지 배열에 있는 각 요소에 대해 한번씩 callback 함수를 실행합니다
// 해당하는 요소를 발견하면 즉시 true를 반환
// 발견 못하면 false 반환


// 1. 배열의 요소 테스트 (배열 내 요소 중 하나라도 10보다 큰 지 판볋)
function isBiggerThan10(element, idx, arr) {
    return element > 10;
}

const isBiggerThan10Arr = [2,4,6,1,11].some(isBiggerThan10);
const isSmallerThan10Arr = [1,2,3,4,5,6].some(isBiggerThan10);
console.log(isBiggerThan10Arr); // true
console.log(isSmallerThan10Arr); // false

// 2. 화살표 함수를 사용한 배열의 요소 테스트 (더 짧은 구문)
[2,4,5,1,11].some(element => element > 10);
[1,2,3,4,5,6].some(element => element > 10);

// 3.값이 배열 내 존재하는지 확인
// 아래는 하나라도 요소가 배열내에 존재하는 경우 true를 반환한다
const fruits = ['apple', 'mange', 'appleMange'];
fruits.some(element => element === 'apple'); // true
fruits.some(element => element === 'grape'); // false