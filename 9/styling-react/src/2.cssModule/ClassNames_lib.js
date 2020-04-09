import React from 'react';

import classNames from "classnames";

if(false){
    // 동작 원리 : 

    classNames('one', 'two'); // = "one two"
    classNames('one', {two:true}); //  = "one two"
    classNames('one', { two: false }); // = "one"
    classNames('one', ['two', 'three']); // = "one two three"
    const myClass = 'hello';
    classNames('one', myClass, { myCondition: true }); // = 'one hello myCondition'
            // string 값의 변수는 그냥 입력
}

const Classnames_lib = ({ highlighted, theme /* props 로 bool 값과 string 값을 받음*/}) => {
    return (
        <div className = {
                    /* props 값에 따라 class 명 결정됨 */
            classNames('Classnames_lib', 
                        { highlighted },  /* bool 여부에 따라 결정됨 */
                         theme ) /* string 그대로 옴 */
        }
        >Hello</div>
    );
};

if(false){
    // 라이브러리 사용하지 않는 다면 :
    const Classnames_lib = ({ highlighted, theme }) => (
        <div className={`Classnames_lib ${theme} ${highlighted ? 'highlighted' : ''}`}>
          Hello
        </div>
      );
}

export default Classnames_lib;