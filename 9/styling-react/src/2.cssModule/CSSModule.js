import React from 'react';
import styles from "./CSSModule.module.scss"; // CSS module (scss) 불러옴
// import styles from "./CSSModule.module.css"; // CSS module 불러옴
// css module 내에 설정한 class 들을 포함하는 객체가 불러와짐

// 라이브러리 사용
import classNames from "classnames/bind";

// not CSSModule 에서 :local 사용해보기
import "./notCSSModule.css";

const CSSModule = () => {
    console.log(styles);  //__ {wrapper: "CSSModule_wrapper__2_EKu"}
                                    //  파일명 _ 클래스명 _ 해시값
    return (
        <div>
            <div className={styles.wrapper}> {/* styles에서 특정 class 불러오기 */}
                Hi, I am <span className="something">CSS Module 1 !</span>
                            {/* 전역 class 불러오기 */}
            </div>

            <div className={`${styles.wrapper} ${styles.inverted}`}> {/* 복수의 class 불러오기 */}
                Hi, I am <span className="something">CSS Module 2 !</span>
            </div>
            <div className=":local wrapper_test">
                .css 파일에서 CSS Module 사용 연습
            </div>
        </div>
    );
};

if(false){
    // classnames 라이브러리의 bind 함수를 사용한 경우 :
    // 상단에 import classNames from "classnames/bind"; 로 불러옴

    const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아 오도록 설정

    const CSSModule = () => {
        return (
          <div className={cx('wrapper', 'inverted')}>
            Hi, I am <span className="something">CSS Module!</span>
          </div>
        );
      };
}

export default CSSModule;