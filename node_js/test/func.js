// var.js를 불러온 후에 odd, even 체크 후 다시 모듈화
const {odd, even} = require('./var.js');

function checkOddOrEven(num){
    if(num % 2 === 0) {
        return even;
    } else {
        return odd;
    }
}

module.exports = checkOddOrEven;