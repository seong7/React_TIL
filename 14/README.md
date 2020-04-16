# news-viewer-app 프로젝트 [[repo >>](https://github.com/seong7/react-news-viewer-app)]

### 개발 환경 설정

**.prettierrc**

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

**.jsconfig.json**  
컴포넌트 이름 입력 + ctrl + space 하면 컴포넌트 자동으로 불러도록 설정

```json
{
  "compilerOptions": {
    "target": "es6"
  }
}
```

### useEffect hook 에 async 함수 사용하는 방법

uesEffect 함수 매개변수 callback 함수의 내부에 사용해주어야 함  
[NewsList.js](https://github.com/seong7/react-news-viewer-app/blob/master/src/components/NewsList.js#L31)

### useEffect hook 이용해 비동기 통신할 경우 loading 판단하는 로직

[NewsList.js](https://github.com/seong7/react-news-viewer-app/blob/master/src/components/NewsList.js)

### loading 판단하는 로직을 커스텀 Hook 으로 만들어 사용하기

[src/lib/usePromise.js](https://github.com/seong7/react-news-viewer-app/blob/master/src/lib/usePromise.js)

### styled-components 에서 props 값에 따라 style 적용하기

[Categories.js ](https://github.com/seong7/react-news-viewer-app/blob/master/src/components/Categories.js#L65)

### a tag 다양한 속성들

[NewsItem.js](https://github.com/seong7/react-news-viewer-app/blob/master/src/components/NewsItem.js#L61)  
[참고 싸이트](http://tcpschool.com/html-tag-attrs/area-rel)

```
target="_blank"
  새창 또는 새탭에 링크 페이지 열기

rel="noopener"
  _blank 의 경우 보안 취약점이 존재하므로 꼭 사용해 보완해준다. (원리는 잘 모름)

rel="noreferrer"
  사용자가 하이퍼링크를 클릭할 때 브라우저가 HTTP 리퍼러 헤더(referer header)를 전송해서는 안 됨을 명시함.
```

### Route 의 path 유동적으로 설정하기

param 이용 시 "?" 를 사용해 값이 없을 수도 있음을 표현할 수 있다. [App.js](https://github.com/seong7/react-news-viewer-app/blob/master/src/App.js#L23)

Route 의 component 에서는 || 식을 이용해 사용한다. [NewsPage.js](https://github.com/seong7/react-news-viewer-app/blob/master/src/pages/NewsPage.js#L9)
