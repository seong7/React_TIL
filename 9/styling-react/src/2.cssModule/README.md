# 3. CSS Module

- css 를 불러와서 사용할 때 클래스 이름을 **[파일이름]\_[클래스 이름]\_[해시값]** 형태의 **고유값**으로 자동 생성해주는 기술

  - 즉, **클래스 명**을 **흔히 사용하는 단어**로 지어줘도 상관 없음  
    (해당 파일을 사용하는 **컴포넌트 내부에서만** 작동하므로)
  - **전역**으로 사용하고 싶은 클래스는 **" :global "** 을 앞에 붙여주면 됨

- v2 버전 이상부터는 **.module.css 확장자**로 파일 저장하기만 하면 CSS Module 이 적용됨

  > 구버전(v1) create-react-app 에서는 webpack 에서 css-loader 설정을 해줘야 했음

- CSS Module 사용법 : [./src/2.cssModule/CSSModule.module.css](./src/2.cssModule/CSSModule.module.css)

### CSS Module 사용을 더 편하게 해주는 외부 라이브러리

- **classnames**

       yarn add classnames

  - 기본 사용 방법 [[>>](./src/2.cssModule/ClassNames_lib.js)]
  - CSS Module 과 함께 사용하기 [[>> CSSModule.js 24번 줄]()]

### CSS Module 을 SASS 함께 사용하기

- css 와 마찬가지로 .module.scss 확장자를 사용하면 CSS Module 사용 가능  
  [CSSModule.module.scss](./src/2.cssModule/CSSModule.module.scss) / [CSSMdule.js](https://github.com/seong7/React_study/blob/master/9/styling-react/src/2.cssModule/CSSModule.js#L2)

### .module.css 이 아닌 파일에서 CSS Module 사용하기

- CSS Module에서 글로벌 클래스를 **:global** 로 정의했던 것처럼  
  일반 .css/.scss 파일에서도 **:local**을 사용하여 **CSS Module을 사용**할 수 있다.

       :local .wrapper {
         /* 스타일 */
       }

       :local {
         .wrapper {
           /* 스타일 */
         }
       }

       /*
         컴포넌트에서
         import styles from "./스타일시트 파일명.css";

       */
