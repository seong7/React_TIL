import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error : false
    }
    componentDidCatch(error, info){
        console.log("compoenentDidCatch 발생 ! ", error, info);
        this.setState({
            error : true,
            info : info,
        })
    }
    render() {
        if(this.state.error) return <div>에러가 발생했습니다.</div>;
        return this.props.children;        
        // return (
        //     <div>
        //         <div>
        //             {this.state.error}
        //         </div>
        //         <div>{this.state.info}</div>
        //     </div>
        // );
    }
}

export default ErrorBoundary;
