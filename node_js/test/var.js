console.log(module.exports === exports);

const odd = "홀수";
const even = "짝수";
module.exports = {odd, even};

// 아래와 동일하다
exports.odd = '홀수';
exports.even = '짝수';