import * as api from "../lib/api";

// 1. Action type 선언
//    각 API 요청 하나 당 총 3 개의 Action 필요 (시작, 성공, 실패)
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// 2. Action 생성함수 정의
const get_post = () => ({
  type: GET_POST,
});
const get_post_success = (payload) => ({
  type: GET_POST_SUCCESS,
  payload,
});
const get_post_failure = (payload, error) => ({
  type: GET_POST_FAILURE,
  //   payload: payload,
  payload,
  error,
});
const get_users = () => ({
  type: GET_USERS,
});
const get_users_success = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});
const get_users_failure = (payload, error) => ({
  type: GET_USERS_FAILURE,
  //   payload: payload,
  payload,
  error,
});

// 3. Thunk 함수 정의 (Containers 에서 import 함)
//    시작, 성공, 실패 시 각 다른 action 을 dispatch 한다.
export const getPost = (id) => async (dispatch) => {
  //   console.log("ddddddd");
  dispatch(get_post()); // 요청 시작을 알린다.
  try {
    const response = await api.getPost(id);
    // console.log(response);
    dispatch(get_post_success(response.data)); // 요청 성공 시
    //                      axios 로 받아오니 fetch 랑 다르게 {data: {}} 형태로 받아온다..
  } catch (e) {
    dispatch(get_post_failure(e, true)); // 에러발생 시
    throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
  }
};
export const getUsers = () => async (dispatch) => {
  dispatch(get_users()); // 요청 시작을 알린다.
  try {
    const response = await api.getUsers();
    dispatch(get_users_success(response.data)); // 요청 성공 시
  } catch (e) {
    dispatch(get_users_failure(e, true)); // 에러발생 시
    throw e; // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
  }
};

// 4. state 초기화
const initialState = {
  loading: {
    // 요청의 로딩 중 여부 상태 관리
    GET_POST: false,
    GET_USERS: false,
  },
  post: null,
  users: null,
};

// 5. reducer 정의
const api_sample = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: true, // 요청 시작 알림
        },
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false,
        },
        post: action.payload,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_POST: false,
        },
        // post: action.payload,
      };
    case GET_USERS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: true, // 요청 시작 알림
        },
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false,
        },
        users: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USERS: false,
        },
      };
    default:
      return state;
  }
};

export default api_sample;
