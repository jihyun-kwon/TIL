// 터미널에 node 치면 repl로 사용 가능한 node
// 간단한 js 파일을 만든 후에 repl로서의 node 사용해보기
function helloNode(){
    console.log('hello World');
    helloNode2();
}

function helloNode2(){
    console.log("hello node");
}

helloNode();

// node helloNode