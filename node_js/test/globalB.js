const A = require('./globalA');
global.message = 'hi';

console.log(A());

//global 객체 === browser의 window 객체
// 전역객체이다
// node에는 DOM, BOM이 없어서 window, document 객체를 쓰면 에러가 발생한다