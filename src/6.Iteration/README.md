# 6. Iteration 사용

## 1. key
 ### key 란 ?
  - **Reat** 에서 **컴포넌트 배열**을 render 했을 때 어떤 원소에 **변동**이 있었는지 알아내기 위해 **고유 값인 key 를 사용**함
  - **key 가 없을 때**는 **Virtual Dom** 을 비교하는 과정에서 **List** 를 **순차적으로** 비교하면서 변화 감지   

    **=>  key 를 사용하면 훨씬 더 빠르게 감지할 수 있음**

 ### key 설정 방법
  #### - 기본 코드
    const articleList = articles.map(article => (
        <Article
            title={article.title}
            writer={article.writer}
            key={article.id}
        />
    );

  #### - 배열의 원소에 key 가 없을 때
   - 원소들의 배열 내 **index** 값을 key 로 넣어줌 [>>](./IterationSample.js)
      - 하지만, index 를 key 로  사용하면, **배열이 변경될 때** 효율적으로 re-rendering 하지 못함
      - 즉, **key 값이 따로 없을 경우에만 index 사용 !!**

  #### - key 를 생성하여 추가해주는 방법 [>>IterationSample 의 17라인]()
   - **불변성유지** (추후에 더 자세히 다룸)  
     : 리액트에서 상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야 한다. 이를 **불변성 유지**라고 함 불변성 유지를 해 주어야 나중에 **리액트 컴포넌트의 성능을 최적화할 수 있음**.

       > - 배열 형태인 상태를 **set** 하는 경우 기존 상태를 변경하는 **push 대신**   
       >  **concat()** 을 사용하여 **새로운 배열(상태)** 생성 후 **setter(새로운배열)**   
       >  형태로 추가해준다.
       
       > - 삭제를 할 때는 **filter()** 사용해서 위와 마찬가지로 **새로운 배열** 생성 후 **setter에 넣어줌**