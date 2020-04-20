// 파일이름을 index.js 로 해주면 다른 파일에서 imoprt 할때
// 디렉터리 까지만 경로 쓰면 자동으로 불러와짐
// ex) from './modules' 하면 index.js import 됨

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 일반적으로 앱은 하나의 store 를 사용하고
// store 에는 하나의 reducer 만 저장할 수 있으므로 rootReducer 로 합쳐준다.
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
