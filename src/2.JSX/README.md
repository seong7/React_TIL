# 2. JSX 문법

## 조건식 사용법 [>>](./Conditional.js)
  - Turnary (삼항조건식)
  - And (&&)
  > 0 은 falsy value 지만 "0" 으로 출력됨 

## Inline Style 사용법 [>>](./InlineStyle.js)
  - 객체로 작성하여 객체형식으로 지정해줌
  - 구분자 "-" 는 대문자로 대체
  - 단위를 생략하면 px 가 대입됨

## ClassName
  - class 를 사용해도 동작은 하지만 console 에 경고 뜸

## Fragment 사용법 [>>](./Fragment.js)
  - 컴포넌트의 최상위 div 대신 사용가능
  - 방법 1 : <></> (빈 태그)
  - 방법 2 : { Fragment } import 후 Fragment 태그 사용

## Undefined 에 대응하기 [>>](./Undefined.js)
  - undefined 변수만 render 하면 Noting was return from render 에러 발생
  - Or (||) 사용해 방지 :
  > return undefined || "값이 undefined 임"
  - **JSX 내부**에서는 undefined **출력 가능** : **방지 필요** 
  - JSX 내부에서의 undefined **출력 방지법**
  > **or (||)** 이용