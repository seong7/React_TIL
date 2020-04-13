import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">Velopert</Link>
        </li>
        <li>
          <Link to="/profiles/jason">Jason</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact // props 값에 자동으로 {true} 부여됨
        render={() => <div>사용자를 선택해 주세요.</div>}
        // component 대신 render 라는 props 넣어줌
        //      간단한 jsx 만 필요할 때 사용
        //      또는 컴포넌트에 render 라는 props 꼭 넣어주고 싶을 때도 사용
      />

      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
