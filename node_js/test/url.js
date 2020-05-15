// url 모듈 : 인터넷 주소를 쉽게 조작하도록 도와주는 모듈. url 처리에는 크게 2가지가 있음.
// 1. 노드버전 7에서 추가된 (WHATWG)방식의 url
// 2. 예전부터 노드에서 사용하던 방식

const url = require('url');

const URL = url.URL;
const myURL = new URL('https://dev.fixelsoft.com/#/code-management/price-code/caddie-fee-price-registration');
console.log('new URL() : ', myURL);

const yourURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL2() : ', yourURL);
console.log('url.format() :', url.format(yourURL));

console.log("**************************************************");

const parsedUrl = url.parse("https://dev.fixelsoft.com/#/code-management/price-code/caddie-fee-price-registration");
console.log('url.parse() : ', parsedUrl);
const parsedUrl2 = url.parse("http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor");
console.log('url.parse()2 : ', parsedUrl2);
// url.parse(주소) : 주소를 분해함.

console.log('url.format() :', url.format(parsedUrl2));
// url.format(객체) : 분해되었던 객체를 다시 조립함