import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트를 좋아하는 개발자",
  },
  jason: {
    name: "김성진",
    description: "리액트를 잘하게될 개발자",
  },
};

const Profile = ({ match }) => {
  console.log(match);
  /*
    출력되는 match 객체 :
    {
        path: "/profile/:username"
        url: "/profile/jason"
        isExact: true
        params: {username: "jason"}
    }
  */
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>

      {/* WithRouter 예제 */}
      <WithRouterSample />
    </div>
  );
};

export default Profile;
