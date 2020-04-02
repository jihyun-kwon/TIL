var app_v_if = new Vue({
    el: "#app-v-if",
    data: {
        seen: false
    }
})

app_v_if.seen = true;

var app_v_for = new Vue({
    el: "#app-v-for",
    data: {
        todos: [
            { text: 'javascript 배우기' },
            { text: 'Vue 배우기' },
            { text: '무언가 멋진 것을 만들기' },
        ]
    }
});

app_v_for.todos.push({ text: "New Item"});

var app_v_on= new Vue({
    el: "#app_v_on",
    data: {
        message : "Hello Reversed Vue.js!"
    },
    methods : {
        reverseMessage(){
            this.message = this.message.split('').reverse().join('');
        }
    }
})

var app_v_model = new Vue({
    el: "#app-v-model",
    data: {
        message: "안녕하세요 Vue!"
    }
})

Vue.component("todo-item", {
    template: "<li>할일 항목 하나입니다.</li>"
});

var app = new Vue();