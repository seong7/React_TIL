# Styling - react

## 1. css 활용
  - 클래스 Naming 방법
    - [컴포넌트 이름-클래스] (예 : App-header)
    - **BEM Naming** 방법 (**예** : .card__title-primary)   
      : 일종의 규칙을 준수해 클래스가 어디에서 어떤 용도로 사용되는지 명확하게 작성하는 법

## 2. SASS 사용
  - sass-loader 설정 커스터마이징하기
    - react app 은 webpack 세부 설정이 모두 숨겨져 있음
      - 꺼내는 방법 :   
      - 현재 repository 에서 git commit 해주기   
      - $ yarn eject   
      -  => 각종 폴더 보이게 됨   
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
                  }
                }),
                sideEffects: true
                },
        -  => dev server 재실행 
        - 완료 !! comopnent 파일의 상단에 import "scss 경로"; 로 사용해보기
        - .scss 파일 하나를 utils 파일로 만들어 모든 파일에서 import 하기 ( **위와 같이 webpack.config.js 수정하면 됨** )

  - open-color 와 include-media 라이브러리 사용하기

    - $ yarn add open-color include-media

    - utils.scss 에 추가해주기   
    >  @import '~include-media/dist/include-media';   
    >  @import '~open-color/open-color';
    
    - SassComponent.scss 에서 라이브러리 사용하기

          .SassComponent {
            display: flex;
            background: $oc-gray-2;
            @include media('<768px') {
              background: $oc-gray-9;
            }
            (...생략)
          }