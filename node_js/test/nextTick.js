setImmediate(() => {
    console.log('immediate 4');
});

process.nextTick(() => {
    console.log('nextTick 1');
});

setTimeout(() => {
    console.log('timeout 3');
}, 0);

Promise.resolve().then(() => console.log(('promise 2')));

//nextTick, Promise는 최우선시 되기 때문에 마이크로태스크라고도 부른다
/*실행순서
nextTick 1
promise 2
setTimeout 3
setImmediate 4*/