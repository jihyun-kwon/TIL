const { URL } = require('url');

// searchParams : WHATWG 방식으로 url을 조작할 때 사용하는 다양한 메서드를 알아보자

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams : ', myURL.searchParams);
/* 결과
searchParams :  URLSearchParams {
    'page' => '3',
        'limit' => '10',
        'category' => 'nodejs',
        'category' => 'javascript' }*/

console.log('searchParams.getAll()', myURL.searchParams.getAll('category'));
// getAll(키) : 키에 해당하는 모든 값을 가져온다. searchParams.getAll() [ 'nodejs', 'javascript' ]
console.log('searchParams.get() : ', myURL.searchParams.get('limit'));
// get(키) : 키에 해당하는 첫번째 값을 가져온다. searchParams.get() :  10
console.log('searchParams.has() : ', myURL.searchParams.has('page'));
// has(키) : 키가 존재하는지 아닌지 boolean 검사. searchParams.has() :  true
console.log('searchParams.keys() : ', myURL.searchParams.keys());
// keys() : 모든 키를 iterator 객체로 가져온다. searchParams.keys() :  URLSearchParams Iterator { 'page', 'limit', 'category', 'category' }
console.log('searchParams.values() : ', myURL.searchParams.values());
// searchParams.values() :  URLSearchParams Iterator { '3', '10', 'nodejs', 'javascript' }

myURL.searchParams.append('filter', 'es3');

myURL.searchParams.delete('limit');

console.log('searchParams.tostring : ', myURL.searchParams.toString());
//searchParams.tostring :  page=3&limit=10&category=nodejs&category=javascript&filter=es3