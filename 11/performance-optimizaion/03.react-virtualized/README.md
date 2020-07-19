## react-virtualized 를 사용한 Rendering 최적화

컴포넌트들의 크기만 화면상에 유지시키고 스크롤이 되었을 때만 rendering 하게끔 제어할 수 있는 React 라이브러리

```bash
yarn add react-virtualized
```

### TodoList 컴포넌트에 적용시키기

1. 각 TodoListItem 항목의 실제 크기를 px 단위로 알아낸다.  
   (브라우저 개발자 도구에서)

   - TodoItem 의 두번째 항목부터 border-top 을 줬기 때문에 두번째 항목의 크기를 측정한다.
     **493.33 \* 57 px**

2. list 컴포넌트를 수정해준다. [TodoList.js >>](https://github.com/seong7/react-todo-app/blob/master/src/components/TodoList.js)

   - List 라는 가상 component 를 import
   - 기존 list 컴포넌트는 rowRenderer 함수에 return 시켜줌
   - List 가상 component 에 rowRender 함수 적용 및 각종 props 값 입력

3. listItem 항목 컴포넌트를 수정한다. [TodoListItem.js >>](https://github.com/seong7/react-todo-app/blob/master/src/components/TodoListItem.js#L11)

   - style 을 props 에 추가해준다. (컴포넌트 함수의 매개변수에)
   - style 을 추가하기 위해 새로운 div 로 감싸준다.
   - export 내용을 변경한다.
