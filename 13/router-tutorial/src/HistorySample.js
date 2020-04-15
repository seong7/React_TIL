import React, { Component } from "react";

class HistorySample extends Component {
  // 뒤로가기 기능
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 홈으로 이동
  handleGoHome = () => {
    this.props.history.push("/");
  };

  // 컴포넌트가 Mount 되고 난 직후 호출된다.
  componentDidMount() {
    // 컴포넌트가 mount 되고 나면 this.unblock 에 질문을 생성해둔다.
    this.unblock = this.props.history.block("정말 떠나실 건가요?");
    console.log(this.props.history);
  }

  // 컴포넌트가 unmount 되기 직전에 호출된다.
  componentWillUnmount() {
    // componentDidMount() 에서 생성해둔 질문을 Unmount 전에 묻는다.
    // 즉, 페이지에 변화가 생기려고 할 때마다 정말 떠날 것이지 질문한다.

    // 컴포넌트가 언마운트되면 질문을 멈춘다.
    if (this.unblock) {
      this.unblock(); // 질문
    }
  }

  render() {
    console.log(this.props.history);
    console.log("---");
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
