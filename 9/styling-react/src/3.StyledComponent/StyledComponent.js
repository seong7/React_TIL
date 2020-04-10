import React from 'react';
import styled, {css} from "styled-components";  // 라이브러리 import
// `style` 을 작성해줄 때 styled 또는 css 변수를 사용해야
// Tagged template litral 사용가능 


// media query 를 각 컴포넌트에 반복하려면 귀찮음
// styled-components 메뉴얼에서 제공하는 유틸함수 사용해보기
const sizes = {
    desktop : 1024,
    tablet : 768
};
// sizes 객체에 따라 자동으로 media query 함수를 만들어 준다.
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});
    // 위 함수를 다른 파일로 모듈화한 후 불러와 사용하는 방식이 편함



const Box = styled.div`
    /* styled-components 의 장점 : 
       props 로 넣어 준 값을 직접 전달 가능 */
    background : ${props => props.color || "blue"};
    padding : 1rem;
    display : flex;

    /* media query 영역 */
    width: 1024px;
    margin : 0 auto;

    /* 위에서 선언한 media 함수 사용해보기*/
    ${media.desktop`width:768px;`}
    ${media.tablet`width:100%;`}

    /* @media(max-width : 1024px) {
        width : 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    } */
`;

const Button = styled.button`
    background : white;
    color : black;
    border-radius : 4px;
    padding : 0.5rem;
    display : flex;
    align-items : center;
    justify-content : center;
    box-sizing : border-box;
    font-size : 1rem;
    font-weight : 600;

    /* & 문자를 사용해 Sass 처럼 자기 자신 선택 가능 */
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }


    /* inverted 값이 true 일 때 특정 스타일 추가로 부여 
       한번 더 props 에 접근 */
    ${props => 
        props.inverted && 
        css`    /* 스타일 내에서 props 에 접근하기 위해 css 변수 사용 */
            background : ${props =>{ if(props.color){
                return props.color}
                else{
                    return "#61dafb"
                } }
            };
            border : 2px solid white;
            color: white;
            $:hover{
                background: white;
                color: black;
            }
        `};
        & + button {
            margin-left : 1rem;
        }

`;

/* 
    단순변수가 아니라 여러 줄의 스타일 구문을 "조건부"로 처리해야 하며,
    props 값에 접근해야 하는 경우에는 'styled-components'의 css 변수를 불러와야합니다.
    
    그냥 아래와 같이 css 변수 없이  ` ` 로만 사용하는 경우
    그냥 문자열로만 인식되어 syntax highlighting 안됨
    그리고 props 값에 접근 불가능

    ${props =>
        props.inverted &&
            ` 스타일 `
     };

     ....
     그런데.. 위의 코드에서 css 를 제거해도 작동함... !? 왜? 
*/



/* 태그의 타입을 유동적으로 지정하기 */
const MyInput = styled("input")`
    background : gray;
    border-radius : 10px;
`;

/* 컴포넌트 자체를 넣어 주기 */

    // 컴포넌트 선언 (props.className 을 매개변수로 넣어준다.)
const Sample = ({ className, xx }) => { // className 은 styled-component 에서 Hash 값으로 자동 생성해준다.
    return <div className={className}>{ className }, { xx ? "yes" : "no"}</div>;
  };
   // 컴포넌트 자체를 넣어 styled comopnent 로 만든다.
const StyledSample = styled(Sample)`
    font-size: 2rem;
    color:white;
`;

const StyledComponent = () => (
    <Box color="coral">
        <Button inverted={true} color={"pink"}>Hi</Button>
        <Button inverted={false}>테두리만</Button>
        <StyledSample xx/>
        <MyInput type="number"/>
    </Box>
);

export default StyledComponent;