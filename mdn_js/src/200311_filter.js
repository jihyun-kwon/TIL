// 필터 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다

const words = ['1','11','111','1111','11111'];
const result = words.filter(item => item.length > 3);

console.log(result); // expected output: Array ['1111', '11111']

// 구문 :  arr.filter(callback(element[, index[, array]])[, thisArg])
// 반환값 : 테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열 반환

// 설명 : filter()는 배열 내 각 요소에 대해 한번 제공된 callback 함수를 호출해, callback이 true인 모든 값이 있는 새로운 배열을 반환합니다
// callback은 할당된 값이 있는 배열의 인덱스에 대해서만 호출됩니다. callback 테스트를 통과하지 못하면 그냥 넘겨뛰며 새 배열에 포함 안ㄷ오비니다
// callback은 다음 인수값과 함께 호출됩니다
// 1. 요소값 2. 요소인덱스 3. 순회되는배열객체
// ***** filter는 호출되는 배열을 변화시키지 않습니다 *********

//1. 모든작은 값 걸러내기
// 값이 10 이하인 모든 요소가 제거된 배열을 만들기 위해 filter를 사용할수 있습니다
function isBigEnough(value){
    return value >= 10;
}

var filtered = [12,54,5,1,0].filter(isBigEnough);
console.log(filtered); // [12,54]

var lambdaFiltered = [12,54,5,1,0].filter(item => item >= 10);
console.log(lambdaFiltered); // [12,54]

//2. json에서 무효한 항목 거르기
// 0이 아닌 숫자 id인 모든 요소의 걸러진 json을 만들기 위해 filter를 사용합니다
var arr = [{ id: 15 }, { id: NaN }, { id: -1}, , { id: 0}, { id: 12.2}, { id: null}, { id: undefined}, {}];

var invalidEntries = 0;

function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
    if(isNumber(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

var arrByID = arr.filter(filterByID);
console.log(arrByID); // [{ id:15}, {id: -1}, {id: 3}, ]