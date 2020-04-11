import React, { Component } from 'react';

class State_cl extends Component {
    // 컴포넌트에 state를 설정하는 방법 1 : constructor 메서드(생성자 함수) 사용
    // constructor(props) {
    //     // Component 클래스의 생성자함수 우선 호출
    //     super(props);

    //     // state의 초깃값 설정하기  (state 는 객체 형식으로)
    //     this.state = {
    //         number : 0,
    //         fixedNumber : 0
    //     }
    // }

    // 컴포넌트에 state를 설정하는 방법 2   : constructor 안써도 됨
    state = {
        number : 0,
        fixedNumber: 0
    }

    render() {
        const { number, fixedNumber } = this.state; // state 를 조회할 때는 this.state로 조회
        
        return (
            <div>
                <h1>바뀌는 값 : {number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    // onClick 을 통해 event Handler 지정
                    onClick = {() => {

                        // this.setState 를 사용해 state 에 새로운 값 넣음
                        if(false){
                            this.setState({number : number + 1});
                        }
                        
                        // this.setState 를 두번 호출 : setState 는 비동기적으로 실행됨
                        // => this.setState 함수 두개가 background 에서 동시에 비동기적으로 실행됨 (둘 다 동일한 number 값에 + 1 함)
                        // => 결과: 아래 코드에서 number는 한번만 바뀜
                        if(false){
                            this.setState({number : number + 1});
                            this.setState({number : this.state.number + 1});
                            setTimeout(() => {
                                console.log(this.state.number); // 1씩만 오름
                            }, 1000);
                        }

                        // 위의 문제 극복 :
                        // this.setState 를 두번 호출하려면 객체 대신 callback 함수를 입력 (비동기에서 중요함 !)
                        // 아래처럼 prevState 라는 매개변수 사용하면 됨
                        if(false){
                            this.setState((prevState, props) => {  
                                // prevState : 기존 state , props 는 생략 가능
                                return {
                                    // 업데이트 내용
                                    number : prevState.number + 1,
                                }
                            })
                            // 위 와 동일
                            this.setState(prevState => ({ number : prevState.number + 1})
                            )
                        }

                        // this.setState 의 두번째 매개변수 : 
                            // 첫번째 매개변수 실행 후 실행됨
                        if(true){
                            this.setState(()=>({number : number + 1}) , ()=> {
                                console.log("방금 setState 호출됨");
                                // console.log(number);             // 바뀌기 전 수 출력함
                                console.log(this.state.number);     // 바뀌고 난 후 수 출력함    __ ???
                            })
                        }
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default State_cl;