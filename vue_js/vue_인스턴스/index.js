// 데이터 객체
var data = { a: 1 }

// vue인스턴스에 데이터 객체 추가
var vm = new Vue({
    data: data
})

// 같은 객체 참조!
vm.a === data.a // true

// 속성 설정은 원본 데이터에도 영향을 미침
vm.a = 2
data.a // 2

// 데이터가 변경되면 화면은 다시 렌더링됨.

// 어떤 속성이 나중에 필요하다는 것을 알고 있으며, 빈 값이거나 존재하지 않은 상태로 시작한다면 아래와 같이 초기값을 지정할 필요가 있음
data = {
newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
}