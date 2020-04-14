// global.console()
// 주로 디버깅을 위해 사용되며, 개발 중 변수에 값이 제대로 들어있나 사용한다
// 에러 내용을 표시, 코드실행 시간을 알아보기 위해 표시
// 시간 측정도 가능

const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        }
    }
}

console.time('전체 시간'); // timeEnd 레이블과 동일한 레이블을 가진 경우 시간을 재줍니다
console.log(string, number, boolean);
console.error('에러메시지 출력할 땐 console.error');
console.dir(obj, {colors: false, depth: 2}); // depth 깊이가 있는 객체 내용 깔때 써
console.dir(obj, {colors: true, depth: 1});
console.time('시간측정');
for(let i=0; i < 100000; i++) {
    continue;
}
console.timeEnd('시간측정');

function a(){
    b();
}
function b() {
    console.trace('에러 발생 지점 찾기'); // 레이블을 띄우면서 좀더 에러 위치를 찾기 쉽게 해주는 trace
}
a();
console.timeEnd('전체 시간');

console.log(__filename); // 파일 절대경로
console.log(__dirname); // 폴더 절대경로