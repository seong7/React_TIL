# Styled-Components
> #### 참고 싸이트   
> - [styled-components 는 어떻게 동작할까?](https://john015.netlify.com/styled-components%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%A0%EA%B9%8C)   
> - [styled-components 의 다양한 기능 참조하기](https://hudi.kr/styled-components-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%84-%ED%92%88%EC%9D%80-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8/)

<br/>

Tagged Template Literal 을 이용해 js 파일 내에 css 를 작성할 수 있게 해주는 라이브러리이다.   

Styled components 는 기본적으로 no-class 철학을 따른다. 스타일을 외부 CSS 파일에 분리시키지 않고, 컴포넌트 내부에 정의하기 때문에, Global 하게 영향을 끼치는 Class를 사용하지 않아도 된다. (사실 굳이 필요하다면, SASS 문법을 사용하여 과거의 방식처럼 Class를 사용할 수 있다) 또한, **CSS 파일을 사용하지 않기 때문에 놀랍게도 React Native 와도 스타일 공유가 가능해진다.**

> Tagged Template Literal 내의 css 들이 syntax hightlighting 될 수 있도록 vscode extension "vscode-styled-components" 를 다운받는다.

### Tagged Template Literal 과 그냥 Template Literal 의 차이
#### 1. Data 보존
```javascript
// Template Literal :
    `hello ${{foo: 'bar' }} ${() => 'world'}!`
    // 결과: "hello [object Object] () => 'world'!"
                // 객체와 함수가 형태를 잃음

// Tagged Template Literal :
    function tagged(...args) {
    console.log(args);
    }
    tagged`hello ${{foo: 'bar' }} ${() => 'world'}!`
    // 결과 : 
        //(3) [Array(3), {…}, ƒ]
        //   0: (3) ["hello ", " ", "!", raw: Array(3)]
        //   1: {foo: "bar"}
        //   2: () => 'world'
        //   length: 3
        //   __proto__: Array(0)
            // 객체와 함수가 온전히 추출됨
```

tagged 템플릿 리터럴 문법으로 함수를 호출하게 되면 첫 번째 인자로 문자열 부분만 들어간 배열이 전달되고, 나머지 인자들에는 표현식들이 순서대로 전달된다.

**그래서 Tagged Template Literal를 사용하게 되면 손 쉽게 문자열 부분과 표현식 부분을 분리해서 배열로 받아올 수 있다.**

styled-components 는 tagged 템플릿 리터럴의 이러한 속성을 이용해 컴포넌트의 props 를 style 선언부에서 쉽게 접근할 수 있도록 해준다.

#### 2. props 를 이용한 함수 실행
```javascript

//그냥 template literal 로 작성한 경우

${props => 
    props.inverted && 
    `     /* css 변수 적지 않음*/
        background : ${props =>{ if(props.color){
            return props.color}
            else{
                return "#61dafb"
            } }
        };                   /* 다수의 코드로 작성된 식은 실행 불가능*/

        color: ${props.color};      /* 단일 식은 수행 가능 */

    `
};

// Tagged template literal 사용

${props => 
    props.inverted && 
    css`        /* 이제 다수의 식도 실행 가능하다.*/
        /*스타일은 위와 동일 __ 생략함*/
    `
};

```
<br/>

### 사용 방법
- 태그명과 함께 선언하는 방식
    ```javascript
    const Box = styled.div` 스타일 `;
    ```
- 태그명을 유동적으로 지정하는 방식
    ```javascript
    const MyInput = styled("input")` 스타일 `;
    ```
- 컴포넌트 자체를 넣어주는 방식
    ```javascript

        // 컴포넌트 선언 (props.className 을 매개변수로 넣어준다.)
    const Sample = ({ className }) => {
        return <div className={className}>div생성</div>;
    };
    // 컴포넌트 자체를 넣어 styled comopnent 로 만든다.
    const StyledSample = styled(Sample)`
        font-size: 2rem;
        color:white;
    `;
    ```

### 조건부 스타일링
일반 CSS 클래스를 이용한 styling 에서는 className 을 이용해 조건부 스타일링이 가능했다.   
**styled-components 를 사용하면 Props 를 활용한 조건부 스타일링이 가능하다.**   
style 선언부에서 Props 접근이 가능하다는 특징 때문이다. 

### id 와 className 생성
**styled-components 는 MurmurHash 알고리즘을 이용해 컴포넌트의 id와 className 을 생성한다.**   
생성된 className 출력해보기 **[>>StyledComponent.js 113번줄]()**  

id 는 어떻게 출력시키는지 모르겠다..


### media query 유틸함수 생성하여 사용하기 (~~코드에서 확인~~)
