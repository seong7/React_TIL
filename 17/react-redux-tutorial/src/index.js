import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux 적용 부분

// 1. 관련 함수들 import
import rootReducer from './modules';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // chrome devTool 확장자 쓰는 방법 (npm 으로 redux-devtools-extension 받아야함)

// 2. store 생성
const store = createStore(rootReducer, composeWithDevTools());

// 3. react-redux 의 Provider 로 App 을 감싸준다.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
