# Styling - react

# 1. css 활용
  - 클래스 Naming 방법
    - [컴포넌트 이름-클래스] (예 : App-header)
    - **BEM Naming** 방법 (**예** : .card__title-primary)   
      : 일종의 규칙을 준수해 클래스가 어디에서 어떤 용도로 사용되는지 명확하게 작성하는 법

# 2. SASS (Syntatically Awesome Style Sheets) 사용
 - SASS 파일의 최초에 확장자는 **.sass 파일**이었지만   
   개발자들의 요청으로 **css 와 비슷한 문법을 제공**하는 **.scss** 가 배포됨

        // .sass 문법 예시
        $font-stack: Helvetica, sans-serif
        $primary-color: #333

        body
          font: 100% $font-stack
          color: $primary-color

            // .sass 확장자는 {} 와 ; 를 사용하지 않음
            // .scss 확장자는 css 와 비슷한 문법 사용 

        /* .scss 문법 예시 */
        $font-stack: Helvetica, sans-serif;
        $primary-color: #333;
        
        body {
          font: 100% $font-stack;
          color: $primary-color;
        }
        
  ### 1. sass-loader 설정하기
  - **설정을 통해 Sass 파일을 .css 파일로 컴파일 하지 않고 바로 앱에 주입할 수 있게 할 수 있음**
  - react app 은 **webpack 세부 설정 파일들**이 모두 **숨겨져** 있음
  - **설정 파일들 꺼내는 방법 :**   
  1. 현재 repository 의 working directory 에 수정사항들 commit 해주기   
  2. **$ yarn eject**   
        -  => 각종 설정 폴더 보이게 됨   
        -  => config/webpack.config.js 파일 열기   
        -  => sassRegex 라는 키워드 검색   
        -  => 아래와 같이 내용 수정    
            
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
  3.  => **dev server 재실행** 
      - (**error 발생 시** : yarn eject 이후 개발 서버가 제대로 시작되지 않는 현상이 발생한다면  node_modules 디렉터리를 삭제한 후, yarn install 하여 다시 yarn start 해보기!)
  4. **완료 !!**   
      comopnent 파일의 상단에 **import ".scss 파일 경로";** 로 사용해보기 **[[>> (SassComponent.js 2번째 줄)]()]**

  ### 2. scss 파일의 import
   - Sass 는 **[./src/styles/utils.scss](./src/styles/utils.scss)** 파일처럼 **공용 파일**을 만들어 모든 파일에서 **import** 해서 사용할 수 있다.
     #### 1. Sass 파일 import 하는 방법
     - import 하는 파일의 상단에 아래 명령어 작성
        
            @import "../styles/utils.scss";  // __ import 대상 파일의 경로

     #### 2. 파일을 default 로 모든 Sass 파일에 import 시키는 방법
     - **위의 webpack.config.js 수정 부분에 아래 내용 포함되어 있음**

            options: {
              sassOptions: {
                includePaths: [paths.appSrc + '/styles'],
              },
              sourceMap: isEnvProduction && shouldUseSourceMap,
              prependData: `@import 'utils';`
              //__ utils (.scss / .sass) 파일을 default import 로 지정
            }
     - 위 설정 후 **[./src/1.sass/SassComponent.scss](./src/1.sass/SassComponent.scss)** 파일에서 **@import** 문 없이 **[./src/styles/utils.scss](./src/styles/utils.scss)** 파일의 **@mixin** square() 을 **@include** 하여 사용 하고 있음을 확인 가능

 ### 3. Sass 외부 라이브러리 사용하기
  - 라이브러리 두 가지:   
  **include-media** : 반응형 디자인을 쉽게 만들어주는 라이브러리   
  **open-color** : 색상 팔레트 라이브러리 
  - 다운로드
      
         yarn add open-color include-media

  - [utils.scss](./src/styles/utils.scss) 에 import 해주기   
      
        @import '~include-media/dist/include-media';   
        @import '~open-color/open-color';

        // ~ 표시 : 현재 파일의 위치에서 node_modules 의 해당 라이브러리 까지의 경로를 의미
  
  - [SassComponent.scss](./src/1.sass/SassComponent.scss) 에서 라이브러리 사용하기

        .SassComponent {
          display: flex;
          background: $oc-gray-2;
          @include media('<768px') {
            background: $oc-gray-9;
          }
          (...생략)
        }


# 3. CSS Module
 - css 를 불러와서 사용할 때 클래스 이름을 **[파일이름]_[클래스 이름]\_[해시값]** 형태의 **고유값**으로 자동 생성해주는 기술
   - 즉, **클래스 명**을 **흔히 사용하는 단어**로 지어줘도 상관 없음   
     (해당 파일을 사용하는 **컴포넌트 내부에서만** 작동하므로)
   - **전역**으로 사용하고 싶은 클래스는 **" :global "** 을 앞에 붙여주면 됨

 - v2 버전 이상부터는 **.module.css 확장자**로 파일 저장하기만 하면 CSS Module 이 적용됨
    >  구버전(v1) create-react-app 에서는 webpack 에서 css-loader 설정을 해줘야 했음
 
 - CSS Module 사용법 : [./src/2.cssModule/CSSModule.module.css](./src/2.cssModule/CSSModule.module.css)

  ### - CSS Module 사용을 더 편하게 해주는 외부 라이브러리
   - **classnames**
 
          yarn add classnames
  
      - 기본 사용 방법 [[>>](./src/2.cssModule/ClassNames_lib.js)]
      - CSS Module 과 함께 사용하기 [[>> CSSModule.js 24번 줄]()]
  ### - CSS Module 을 SASS 함께 사용하기 
   - css 와 마찬가지로 .module.scss 확장자를 사용하면 CSS Module 사용 가능   
   [CSSModule.module.scss](./src/2.cssModule/CSSModule.module.scss) / [CSSMdule.js  CSSModule.js 의 두번째 줄]()
  ### - .module.css 이 아닌 파일에서 CSS Module 사용하기
  - CSS Module에서 글로벌 클래스를  **:global** 로 정의했던 것처럼   
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


