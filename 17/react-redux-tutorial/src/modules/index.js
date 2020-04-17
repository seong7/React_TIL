// 파일이름을 index.js 로 해주면 다른 파일에서 imoprt 할때
// 디렉터리 까지만 경로 쓰면 자동으로 불러와짐
// ex) from './modules' 하면 index.js import 됨

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
