import React, { useEffect } from "react";
import { connect } from "react-redux";
import Sample from "../components/Api_Sample";
import { getPost, getUsers } from "../modules/api_sample";

const Api_Sample_Container = ({
  getPost,
  getUsers, // mapDispatchToProps 사용
  post,
  users, // mapStateToProps 사용
  loadingPost,
  loadingUsers,
}) => {
  // class 컴포넌트의 componentDidMount
  useEffect(() => {
    getPost(1);
    getUsers();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     post: state.api_sample.post,
//     users: state.api_sample.users,
//     loadingPost: state.api_sample.loading.GET_POST,
//     loadingUsers: state.api_sample.loading.GET_USERS,
//   };
// };
// 위와 같은데 state 객체에 비구조 할당으로 api_sample 필드만 지정함
const mapStateToProps = ({ api_sample }) => {
  //   console.log({ api_sample });
  return {
    post: api_sample.post,
    users: api_sample.users,
    loadingPost: api_sample.loading.GET_POST,
    loadingUsers: api_sample.loading.GET_USERS,
  };
};

const mapDispatchToProps = {
  getPost,
  getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Api_Sample_Container);
