# Styling - react

## 1. css 활용
  - 클래스 Naming 방법
    - [컴포넌트 이름-클래스] (예 : App-header)
    - **BEM Naming** 방법 (**예** : .card__title-primary)   
      : 일종의 규칙을 준수해 클래스가 어디에서 어떤 용도로 사용되는지 명확하게 작성하는 법

## 2. SASS 사용
  - sass-loader 설정 커스터마이징하기
    - react app 은 webpack 세부 설정이 모두 숨겨져 있음
    > 꺼내는 방법 :   
    > 현재 repository 에서 git commit 해주기   
    > $ yarn eject   
    >  => webpack.config.js 파일 보이게 됨