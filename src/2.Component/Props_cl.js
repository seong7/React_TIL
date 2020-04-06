import React, { Component } from 'react';
import PropTypes from "prop-types";

class Props_cl extends Component {
    // defaultProps 와 propTypes 를 지정하는 방법 1
    static defaultProps = {
        test: '기본 test'
    };
    static propTypes = {
    test: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
    };

    render() {
        const {test, favoriteNumber, children} = this.props; 
        // 비구조화 할당

        return (
            <div>
                props Test : {test} <br/>
                children 값 : {children} <br/>
                My favorite Number is : {favoriteNumber}
            </div>
        );
    }
}


// defaultProps 와 propTypes 를 지정하는 방법 2 ( class 외부에 지정 __ fn 형과 동일)
if(false){
    Props_cl.defaultProps = {
        test : "class 형 component Default Props 테스트"
    }
    
    Props_cl.propTypes = {
        test : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired,
    }
}

export default Props_cl;