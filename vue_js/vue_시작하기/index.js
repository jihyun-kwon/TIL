var app = new Vue({
    el: "#app",
    data: {
        seen: false
    }
})

app.seen = true;

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { text: 'javascript 배우기' },
            { text: 'Vue 배우기' },
            { text: '무언가 멋진 것을 만들기' },
        ]
    }
});

app4.todos.push({ text: "New Item"});
