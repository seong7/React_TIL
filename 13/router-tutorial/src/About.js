import React from "react";
import qs from "qs";

const About = ({ location }) => {
  //   console.log(location);
  //   console.log(location.search); // query 문이 string 으로 저장되어 있음

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 맨 앞의 ? 를 생략하는 설정
  });
  console.log(query); // query 가 객체형으로 변형됨

  const showDetail = query.detail === "true";
  // 중요 !!!  url 쿼리를 qs.parse 한 속성의 value 는 문자열임 (boolean 아님)

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 포르젝트입니다.</p>
      {showDetail && <p>detail 값을 true 로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
