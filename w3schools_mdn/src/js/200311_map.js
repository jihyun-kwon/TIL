// map() 메서드는 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다
const array1 = [1,3,4, 17];
console.log(array1.map(item => item * 2)); // [2,6,8,34]

// map은 callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듭니다
// callback함수는 배열 값이 들어있는 인덱스에 대해사만 호출됩니다
/// 즉 값이 삭제되거나 아직 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않습니다
// callback 함수는 호출될 때 대상 요소의 값, 그요소의 인덱스, 그리고 map을 호출한 원본 배열 3개의 인수르 전달받습니다
// map은 배열의 값을 변형하지 않습니다 하지만 callback 함수에 의해 변형된 배열을 반환할 수 있습니다

// 1. 배열에 들어있는 숫자들의 제곱근을 구하여 새 배열 만들기
var numbers = [1,2,3];
var roots = numbers.map(Math.sqrt); // [1,4,9] // Math.sqrt 는 제곱급을 반환하는 메소드

// 2. map을 활용해 배열 속 객체를 재구성하기
var kvArray = [{key:1, value:10},{key:2, value:20},{key:3, value:30}];
var reformmatedArray = kvArray.map(function(obj) {
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});

console.log(reformmatedArray); // [{1:10}, {2:20}, {3:30}]
// kvArray는 그대로 존재[{key:1, value:10} ...

// 3. 인자를 받는 함수를 사용하여 숫자 배열 재구성하기
var numbers2 = [1,3,9];
var doubles = numbers2.map(item => item * 2);
console.log(doubles); // [2,6,18]

// 4. map을 포괄적으로 사용하기
// 아래 예제는 String에 map을 사용해서 각 문자의 ASCII 인코딩 값을 요소로 갖는 배열을 보여줍니다
var map = Array.prototype.map;
var a = map.call("hello world", x => x.charCodeAt(0));
console.log(a); // [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]





