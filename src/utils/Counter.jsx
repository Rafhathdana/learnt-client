import React from "react";
import AnimatedNumber from "react-animated-numbers";
function Counter({ value = 200 }) {
  return value;
  // return (
  //   <AnimatedNumber
  //     includeComma
  //     animateToNumber={value}
  //     locale="en-US"
  //     // configs={[
  //     //   { mass: 1, tension: 220, friction: 100 },
  //     //   { mass: 1, tension: 180, friction: 130 },
  //     //   { mass: 1, tension: 280, friction: 90 },
  //     // ]}
  //   />
  // );
}
export default Counter;
