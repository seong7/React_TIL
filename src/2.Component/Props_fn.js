import React from 'react';
import PropTypes from 'prop-types'; 

if(false){

    const Props_fn = (props) => {
        if(false){
            // props 기본 사용 법
            return (
                <div>
                Props Test : {props.test}<br/>
                children 값 : {props.children}
                
            </div>
            );
        }
        if(true){
            // 비구조화 할당(destructing assignment) props 사용
            const { test, children } = props;
            return (
                <div>
                    props Test : {test} <br/>
                    children 값 : {children}
                </div>
            )
        }
    };
}

// if(false){

    const Props_fn = ({test, children, favoriteNumber}) => {
        return (
            <div>
                props Test : {test} <br/>
                children 값 : {children} <br/>
                My favorite Number is : {favoriteNumber}
            </div>
        )
    }
// }

// 부모 컴포넌트에서 해당 props 설정되지 않은 경우
Props_fn.defaultProps = {
    test : "default props 사용됨",
}

// prop 값의 type 을 정해주는 방법 (import 로 불러와야 사용 가능)
Props_fn.propTypes = {
    test : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired,
}
    /* 해당 prop 값의 type 이 설정과 다르면 console 에 경고 출력 
        (결과는 출력해줌) */
    /* isRequired : 해당 prop 값이 없으면 console 에 경고 출력 */

    /* 
        propTypes 로 설정가능한 값 :

        - func : 함수
        - number, object, string, bool
        - symbol : ES6 의 Symbol
        - node : 렌더링할 수 있는 모든 것(숫자, 문자열, JSX코드, children  등)
        - instanceOf(클래스) : 특정 클래스의 instance
        - array
        - arrayOf(다른 PropType)   ex) arrayOf(PropTypes.number) 는 숫자로 이루어진 배열
        - oneOf(['dog', 'cat']) : 주어진 배열 요소 중 값 하나
        - oneOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열 안 type 중 하나
        - objectOf(React.PropTypes.number) : 객체의 모든 키 값이 인자로 주어진 PropType 인 객체
        - shape({ name: PropTypes.string, num: PropTypes.number }) : 주어진 스키마를 가진 객체
        - any : 아무 type
    
        ** 참고 : https://github.com/facebook/prop-types
    */

export default Props_fn;