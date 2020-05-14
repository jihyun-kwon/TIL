const {odd, even} = require('./var');
const checkNumber = require ('./func');
// 할일 : 모듈화한 함수와 모듈화한 변수를 이용해서 입력한 length가 짝 홀 뭔지 알아보기

console.log(module.exports === exports); // module.exports와 exports는 동일하다

function checkOddOrEvenLength(str){
    if(str % 2 === 0) {
        return odd;
    } else {
        return even;
    }
}

console.log(checkNumber("hello Node!"));
console.log(checkOddOrEvenLength("hello Node"));

module.exports = checkOddOrEvenLength;