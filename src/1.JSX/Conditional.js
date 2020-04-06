import React from "react";

function Conditional() {
  if (false) {
    {/* Turnary */}
    const name = "react";
    return (
      <div>{name === "react" ? <h1>Is React</h1> : <h1>Not React</h1>}</div>
      );
    }
    if (false) {
      {/* And (&&) 1 */}
      const name = "react";
      return <div>{name === "react" && <h1>And React</h1>}</div>;
    }
    if (false) {
      {/* And (&&) 2 */}
    const name = true;
    return <div>{name  && <h1>And React</h1>}</div>;
  }
    if (true) {
      {/* And (&&) 3 */}
    const name = 0;
    return <div>{name  && <h1>And React</h1>}</div>;
    {/* __ 0 만 출력됨 (<h1> 출력안됨)
        0 은 예외
    */}
  }

}

export default Conditional;
