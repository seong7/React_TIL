import React, { Fragment } from "react";

function Frag() {
  if (false) {
    return (
      <>
        {/* Fragment 사용법 1 */}
        <h1>Hello World!</h1>
      </>
    );
  }
  if (true) {
    return {
      /* Fragment 사용법 2 : Fragment 를 import 해야 사용가능 */
    }(<Fragment>Hello World !</Fragment>);
  }
}

export default Frag;
