# Component 의 Life Cycle (수명 주기)
- **클래스형 컴포넌트에서만 사용 가능** (함수형은 hook 사용)
- **render 되기 전 준비 과정**부터 페이지에서 **사라질 때까지가 수명주기임**

## Life Cycle Method 란
 - **컴포넌트의 첫 rendering / 컴포넌트 업데이트 전후의 작업, 불필요한 업데이트 방지** 등의 경우에 컴포넌트의 **LifeCycle method** 사용한다.
 
 - **Will 접두사** 붙은 method : 어떤 작업 **작동 전**에 실행 
 - **Did 접두사** 붙은 method : 어떤 작업 **작동 후**에 실행

 - **Mount / Update / Unmount** 의 3가지 카테고리로 나눈다.

 ![lifeCycle img](./ref/lifecycle.JPG)

 ### 1. Mount
  - **DOM이 생성되고 브라우저에 나타나는 것** 을 말함

  - **Mount할 때 호출하는 method**
    - constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드

    - getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드

    - render: 준비한 UI를 렌더링하는 메서드

    - componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드
 
 ### 2. Update
  - **Component 가 update 되는 4가지 경우**
    1. props가 바뀔 때
    2. state가 바뀔 때
    3. 부모 컴포넌트가 리렌더링될 때
    4. this.forceUpdate로 강제로 렌더링을 트리거할 때

  - **update 시 호출되는 method**
    - getDerivedStateFromProps: 이 메서드는 마운트 과정에서도 호출되며, 업데이트가 시작하기 전에도 호출됩니다. props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용합니다.

    - shouldComponentUpdate: 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드입니다. 이 메서드에서는 true 혹은 false 값을 반환해야 하며, true를 반환하면 다음 라이프사이클 메서드를 계속 실행하고, false를 반환하면 작업을 중지합니다. 즉, 컴포넌트가 리렌더링되지 않습니다. 만약 특정 함수에서 this.forceUpdate() 함수를 호출한다면 이 과정을 생략하고 바로 render 함수를 호출합니다.

    - render: 컴포넌트를 리렌더링합니다.

    - getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드입니다.

    - componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드입니다.
 
 ### 3. Unmount
   - 마운트의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것이 언마운트(unmount)
  - **unmount 시 호출되는 method**
    - componentWillUnmount: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드