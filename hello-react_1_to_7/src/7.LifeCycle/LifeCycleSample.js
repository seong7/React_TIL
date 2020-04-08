import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number : 0,
        color : null,
    }
    // color : null,    // state 에서 필요가 없지 않나? _ 아님, state 와 props 를 비교해야함
    
    myRef = null; // ref   ___ 굳이 초기화 하는 이유? _ 없어도 잘됨..

    // Mount 때만 호출됨
    // constructor(props){
    //     super(props);
    //     console.log("constrctor");
    // }

    // Mount, Update / props 의 변화와 state 를 비교 후 동기화
    static getDerivedStateFromProps(nextProps, prevState){
        console.log("getDerivedStateFromProps");
        if(nextProps.color !== prevState.color) {
            return {color : nextProps.color};
        }
        return null;
    }

    // Mount / 컴포넌트가 render 된 후 에 호출됨
    componentDidMount(){
        console.log("comopnenetDidMount");
    }

    // Update / 컴포넌트를 re-reder 할지 결정함
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState);
        return nextState.number % 10 !== 4;
        // 숫자의 마지막 자리가 4면 re-render 하지 않음

    }

    // Unmount / 컴포넌트가 사라지기 전에 호출됨
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    // Update / DOM 에 변화를 반영하기 직전에 호출됨
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate");
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    // Mount, Update / 컴포넌트 업데이트 후 또는 rendering 후 호출됨 
    componentDidUpdate(prevProps, prevState, snapshot) { // snapshot 을 받아모
        console.log("componentDidUpdate", prevProps, prevState);
        if(snapshot){
            console.log("업데이트되기 직전 색상 : " , snapshot);
        }
    }

    
    handleClick = () => {
        this.setState({
            number : this.state.number + 1
        });
    }


    // Mount, Update 
    render() {
        console.log("render");

        // const {color} = this.props;  // 이렇게 써도 됨
        // const style = {
        //     color : color
        // };
        const style = {
            color : this.props.color
        };

        console.log("this.props 확인해보기 : " , this.props)
        console.log(this)   //  컴포넌트 객체 안에 props 라는 propery 가 자동으로 들어오는 것 확인 가능


        return (
            <div>
                {this.props.missing.value}
                {/* {value} */}
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        );
    }
}

export default LifeCycleSample;