### React Event 종류
  - 참고 : 
  (https://facebook.github.io/react/docs/events.html)

        - Clipboard
        - Composition
        - Keyboard
        - Focus
        - Form
        - Mouse
        - Selection
        - Touch
        - UI
        - Wheel
        - Media
        - Image
        - Animation
        - Transition


  # Event

  ### 1. 익명함수 Event Handler (class) [>>](./EventBasic_cl.js)
  ### 2. Event Handler binding (class) [>>](./HandlerBinding_cl.js)
  ### 3. Arrow 함수 _binding 없이 사용  (class) [>>](./HandlerArrow_cl.js)
   > Babel 의 transform-class-properties 문법 !   
   > constructor 에서 binding 을 따로 해주지 않아도 됨
  ### 4. Arrow 함수 __ useState로 하나씩의 property 관리  (fn) [>>](./HandlerArrow_fn.js)
  ### 5. Arrow 함수 __ useState로 객체형식의 state (다수의 property) 관리  (fn) [>>](./HandlerForm_fn.js)