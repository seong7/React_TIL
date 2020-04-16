# Router 사용해 SPA 개발

## SPA (Single Page Application)

### 장점

#### 서버의 부하를 줄여줄 수 있다.

#### UI 상태를 원하는대로 유지시킬 수 있다.

화면 전환이 일어날 때마나 html 을 계속 서버에 요청하면 서버에 부하가 생길 수 있다. 그리고 UI 에서 사용 중이던 상태를 유지하는 것도 번거롭고, 바뀌지 않는 부분까지 새로 불러와야 해서 비효율적이다.

그래서 리액트 같은 library 또는 framework 를 사용해 뷰 렌더링을 브라우저가 담당하게 하고, 필요할 때만 js 를 이용해 업데이트해준다. 새로운 데이터가 필요하면 서버 API 를 호출해 필요한 데이터만 업데이트한다.

### 단점

**1. Javascript 파일이 너무 커진다.**  
Javascript 로 제어하는 기능이 많고 페이지도 많아 파일이 너무 커질 수 있다.

_하지만, Code Splitting 을 사용하면 Route 별로 파일들을 나누어서 트래픽과 로딩 속도를 개선할 수 있다._

**2. SEO 에 취약하다**  
SEO (Search Engine Optimization) : 검색엔진 최적화

React Router 처럼 브라우저에서 js 를 사용해 routing 을 관리하면, javascript 를 실행하지 않는 일반 크롤러에서는 페이지의 정보를 제대로 수집하지 못한다는 잠재적인 단점이 있다. 즉, 포털싸이트의 검색결과 노출에 문제가 생길 수 있다.

구글에서는 일부 크롤러에 js 실행기능을 탑재했지만 여전히 일부 페이지에만 적용된다.

**3. Javascript 파일이 로딩되는 시간동안 흰페이지가 나타날 수 있다.**  
js 가 실행되기 전까지는 페이지가 비어 있기 때문이다.

_하지만, 2번, 3번의단점도 SSR 을 통해 모두 해결 할 수 있다._

<br/>

## React Router

SPA 라고 꼭 화면이 한 종류가 아니다.

서버에서 제공한 페이지는 한 종류이지만, 해당 페이지에서 로딩된 Javascript 와 브라우저의 주소 상태에 따라 다양한 화면을 보여줄 수 있다.

**다른 주소에 다른 화면을 보여 주는 것을 Routing 이라고 한다.**  
React Router 는 브라우저에서 javascript 를 사용해 Routing 을 관리한다. 브라우저 단에서 관리를 하므로, 서버에서 주소에 따라 페이지를 제어하는 것보다 효율적이다.

**React Router 는 이러한 Routing 을 아주 간단히 구현할 수 있게 해준다.**  
더 나아가서 SSR(Server-Side-Rendering) 의 Routing 에 필요한 컴포넌트들을 제공해준다.

**React Routing Library 의 종류**

- react-router (가장 많이 쓰임 / 해당 프로젝트에서도 사용)
- reach-router
- Next.js

<br/>

## react-router 라이브러리 사용

#### 1. index.js 에서 BrowserRouter 로 App 을 감싸주기 [[index.js >>](./src/index.js)]

BrowserRouter 컴포넌트는 웹 앱에 HTML5의 History API를 사용하여 페이지를 새로고침하지 않고도 주소를 변경하고, 현재 주소에 관련된 정보를 props로 쉽게 조회하거나 사용할 수 있도록 해준다.

#### 2. Route 적용 [[App.js >>](./src/App.js)]

Route 컴포넌트를 사용하면 어떤 경로에 어떤 컴포넌트를 보여 줄지 정의할 수 있다.

**Route 컴포넌트의 props 설정**

- exact 는 중요하므로 필요한 Route 컴포넌트에 꼭 사용할 것.
- path 에 배열을 넣어주면 두가지 경로 모두 하나의 Route 로 설정 가능하다. [[App.js L28 >>](https://github.com/seong7/React_study/blob/master/13/router-tutorial/src/App.js#L37)]
- component 대신 render 를 넣어줄 수도 있다. [[Profiles.js L31 >>](https://github.com/seong7/React_study/blob/master/13/router-tutorial/src/Profiles.js#L31)]
- Route 의 component 는 props 로 location 과 match 객체를 자동으로 전달 받는다.

#### 3. Link 사용 [[App.js >>](./src/App.js)]

HTML 의 a 태그와 비슷하지만 중요한 차이점이 있다.  
a 태그는 페이지를 전환하는 과정에서 페이지를 새로 불러오기 때문에 앱의 state 들을 모두 날려버린다. 즉, 렌더링된 컴포넌트들이 모두 사라지고 다시 처음부터 렌더링된다.

Link 컴포넌트를 사용하면 앱의 state를 유지한 상태로 HTML5 History API 를 사용해 페이지의 주소만 변경해 준다. 실제로는 페이지 전환을 방지하는 기능을 가진 a 태그이다.

#### 4. URL Parameter 와 Query [[Profile.js >>](./src/Profile.js)]

페이지 주소에 유동적인 값을 전달해야할 때 사용한다.

```
파라미터 예시: /profiles/velopert
쿼리 예시: /about?details=true
```

정해진 건 없지만, 일반적으로 아래와 같이 사용한다.  
**parameter** : 특정 아이디 혹은 이름 사용해 조회할 때 사용  
**query** : 어떤 키워드를 검색하거나 페이지에 필요한 옵션 전달할 때 사용

<br/>

**URL Parameter 값을 컴포넌트에서 사용하는 법**

Route 의 component 는 **"match"** 라는 객체를 자동으로 prop 값으로 받는다. [[Profile.js L15 >>](https://github.com/seong7/React_study/blob/master/13/router-tutorial/src/Profile.js#L15)]

```javascript
// match 객체는 해당 컴포넌트가 어떤 경로 규칙에 의해 보이는지 정보를 담고 있다.
{
  path: "/profile/:username";
  url: "/profile/jason";
  isExact: true;
  params: {
    username: "jason";
  }
}
```

**URL Query 값을 컴포넌트에서 사용하는 법**

Route 의 component 는 **"location"** 이라는 객체를 자동으로 prop 값으로 받는다.

location.search 는 url query 값을 가지고 있지만 문자열형태라서 다루기가 쉽지 않다.  
문자열을 객체 형태로 parsing 해주는 라이브러리 (qs) 를 사용한다. [[About.js >>](./src/About.js)]

```javascript
// location 은
{
  pathname: "/about";
  search: "?detail=true";
  hash: "";
  state: undefined;
}
```

<br/>

#### 5. 서브 라우트 [[Profile.js >>](./src/Profile.js)]

라우트 내부에 또 라우트를 정의하는 것을 서브 라우트라고 한다.  
그냥 라우트로 사용되고 있는 컴포넌트의 내부에 Route 컴포넌트를 또 사용하면 된다.

**예시**

1. App.js 의 /profiles Route [App.js L38 >>](https://github.com/seong7/React_study/blob/master/13/router-tutorial/src/App.js#L38)
2. Profiles.js 의 sub-Route [Profiles.js >>](./src/Profiles.js)
3. Profile.js 에서 최종 rendering [Profile.js >>](./src/Profile.js)

<br/>

#### 6. react-rounte 부가 기능 [[profile.js >>](./src/Profile.js)]

**history [[사용 예제 (class 컴포넌트) >>](./src/HistorySample.js)]**  
history 객체는 match, location 과 함께 Route 로 사용된 component 에게 전해지는 props 중 하나이다.

```javascript
// history 출력
{
  length: 33
  action: "POP"
  location: {pathname: "/history", search: "", hash: "", state: undefined, key: "ejgp6n"}
  createHref: ƒ createHref(location)
  push: ƒ push(path, state)
  replace: ƒ replace(path, state)
  go: ƒ go(n)
  goBack: ƒ goBack()
  goForward: ƒ goForward()
  block: ƒ block(prompt)
  listen: ƒ listen(listener)
}
```

**withRouter**

withRouter 함수는 HoC(Higher-order Component)이다. 어떤 컴포넌트가 Route 로 사용된 컴포넌트가 아니더라도 match, location, history 객체를 접근할 수 있게 해 준다.

[[WithRouter 컴포넌트 >>](./src/WithRouterSample.js)]  
[[호출 (Profile.js L38) >>](https://github.com/seong7/React_study/blob/master/13/router-tutorial/src/Profile.js#L38)]

**Switch [[App.js L33 >>](https://github.com/seong7/React_study/blob/master/13/router-tutorial/src/App.js#L33)]**  
Switch 컴포넌트는 여러 Route를 감싸서 그중 일치하는 단 하나의 라우트만을 렌더링시켜 준다.  
Switch를 사용하면 모든 규칙과 일치하지 않을 때 보여 줄 Not Found 페이지도 구현할 수 있다.

**NavLink [[Profiles.js 16줄 >>](https://github.com/seong7/React_study/blob/master/13/router-tutorial/src/Profiles.js#L16)]**  
NavLink는 Link와 매우 비슷하다. NavLink 의 to (경로) 와 현재 브라우저의 URL 이 일치하는 경우 특정 스타일 혹은 CSS 클래스를 적용할 수 있는 컴포넌트이다.

- **사용가능한 props**
  - activeStyle : 스타일을 적용할 때 사용
  - activeClassName : 클래스 적용할 때 사용
  - exact
  - isActive
