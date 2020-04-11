# SASS (Syntatically Awesome Style Sheets)

- SASS 파일의 최초에 확장자는 **.sass 파일**이었지만  
  개발자들의 요청으로 **css 와 비슷한 문법을 제공**하는 **.scss** 가 배포됨

```sass
    // .sass 문법 예시
    $font-stack: Helvetica, sans-serif
    $primary-color: #333

    body
      font: 100% $font-stack
      color: $primary-color

    // .sass 확장자는 {} 와 ; 를 사용하지 않음
```

```scss
// .scss 확장자는 css 와 비슷한 문법 사용

/* .scss 문법 예시 */
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

### 1. node-sass 패키지 설치하기

### 2. sass-loader 설정하기

- **설정을 통해 Sass 파일을 .css 파일로 컴파일 하지 않고 바로 앱에 주입할 수 있게 할 수 있음**
- react app 은 **webpack 세부 설정 파일들**이 모두 **숨겨져** 있음
- **설정 파일들 꺼내는 방법 :**

1. 현재 repository 의 working directory 에 수정사항들 commit 해주기
2. **\$ yarn eject**  
   => 각종 설정 폴더 보이게 됨  
   => config/webpack.config.js 파일 열기  
   => sassRegex 라는 키워드 검색  
   => 아래와 같이 내용 수정

```javascript
    // < 수정할 부분 >
    {
      test: sassRegex,
      exclude: sassModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 2,
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        'sass-loader'
      ),
      sideEffects: true,
    },


    //< 수정 내용 >
    {
      test: sassRegex,
      exclude: sassModuleRegex,
      use: getStyleLoaders({
        importLoaders: 2,
        sourceMap: isEnvProduction && shouldUseSourceMap
      }).concat({
        loader: require.resolve('sass-loader'),
        options: {
          sassOptions: {
            includePaths: [paths.appSrc + '/styles'],
          },
          sourceMap: isEnvProduction && shouldUseSourceMap,
          prependData: `@import 'utils';`
          //__ utils (.scss / .sass) 파일을 default import 로 지정
        }
      }),
      sideEffects: true
      },
```

3. **dev server 재실행**

   > **error 발생 시**  
   > yarn eject 이후 개발 서버가 제대로 시작되지 않는 현상이 발생한다면 node_modules 디렉터리를 삭제한 후, yarn install 하여 다시 yarn start 해보기!

4. **완료 !!**  
   component 파일의 상단에 **import ".scss 파일 경로";** 로 사용해보기 **[[>>](https://github.com/seong7/React_study/blob/master/9/styling-react/src/1.sass/SassComponent.js#L2)]**

### 3. scss 파일의 import

- Sass 는 **[./src/styles/utils.scss](./src/styles/utils.scss)** 파일처럼 **공용 파일**을 만들어 모든 파일에서 **import** 해서 사용할 수 있다.

  #### 1. Sass 파일 import 하는 방법

  - import 하는 파일의 상단에 아래 명령어 작성
    @import "../styles/utils.scss"; // \_\_ import 대상 파일의 경로

  #### 2. 파일을 default 로 모든 Sass 파일에 import 시키는 방법

  - **위의 webpack.config.js 수정 부분에 아래 내용 포함되어 있음**

  ```javascript
   options: {
     sassOptions: {
       includePaths: [paths.appSrc + '/styles'],
     },
     sourceMap: isEnvProduction && shouldUseSourceMap,
     prependData: `@import 'utils';`
     //__ utils (.scss / .sass) 파일을 default import 로 지정
   }
  ```

- 위 설정 후 **[./src/1.sass/SassComponent.scss](./src/1.sass/SassComponent.scss)** 파일에서 **@import** 문 없이 **[./src/styles/utils.scss](./src/styles/utils.scss)** 파일의 **@mixin** square() 을 **@include** 하여 사용 하고 있음을 확인 가능

### 4. Sass 외부 라이브러리 사용하기

- 라이브러리 두 가지:  
  **include-media** : 반응형 디자인을 쉽게 만들어주는 라이브러리  
  **open-color** : 색상 팔레트 라이브러리
- 다운로드

       yarn add open-color include-media

- [utils.scss](./src/styles/utils.scss) 에 import 해주기

  ```javascript
    @import '~include-media/dist/include-media';
    @import '~open-color/open-color';

    // ~ 표시 : 현재 파일의 위치에서 node_modules 의 해당 라이브러리 까지의 경로를 의미
  ```

- [SassComponent.scss](./src/1.sass/SassComponent.scss) 에서 라이브러리 사용하기

```scss
      .SassComponent {
        display: flex;
        background: $oc-gray-2;
        @include media('<768px') {
          background: $oc-gray-9;
        }
        (...생략)
      }
```
