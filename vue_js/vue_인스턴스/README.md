Vue 인스턴스 만들기

모든 vue앱은 vue함수로 새인스턴스를 만드는 것부터 시작합니다

var vm = new Vue({
    // 여기에 옵션을 넣음
})

vue 인스턴스를 인스턴스화 할때는 데이터, 템플릿, 마운트할 엘리먼트, 메소드,
라이프사이클 콜백 등의 옵션을 포함할 수 있는 options 객체를 전달해야함.

Vue생성자는 미리 정의된 옵션으로 재사용 가능한 컴포넌트 생성자를 생성하도록
확장될 수 있음.
Vue앱은 new Vue를 통해 만들어진 루트 Vue 인스턴스로 구성되며 선택적으로 중첩이
가능하고 재사용 가능한 컴포넌트 트리로 구성됨.

Root Instance
 - TodoList
   - TodoItem
     - DeleteTodoButton
     - EditTodoButton
   - TodoListFooter
     - ClearTodosBustton
     - TodoListStatistics
     
확장된 인스턴스를 만들수는 있으나 대개 템플릿에서 사용자지정 엘리먼트로 선언적으로
작성하는 것이 좋음.