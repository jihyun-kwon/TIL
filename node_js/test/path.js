// path 모듈 : 폴더와 파일의 경로를 쉽게 다루도록 도와주는 모듈
// 운영체제별로 경로가 다르기 때문에 필요하다. 크게 POSIX(/)와 window(\) 경로로 나뉜다
const path = require('path');
const string = __filename;

console.log('path.sep : ', path.sep); // \. 경로의 구분자.
console.log('path.delimiter : ', path.delimiter); // ;. 환경변수의 구분자(POSIX는 :이 나옴)
console.log('path.dirname : ', path.dirname(string)); // C:\Users\jihyu\project\TIL\node_js\test. dirname 안에 __filename을 넣으면 path 나옴
console.log('path.extname : ', path.extname(string)); // js. 확장자의 형태가 나옴
console.log('path.parse : ' , path.parse(string)); // 쪼갠 경로들
console.log('path.basename : ', path.basename(string)); // 걍 이름