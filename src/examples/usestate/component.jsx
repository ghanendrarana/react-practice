import React from "react";

function Component() {
  const [number, setNumber] = React.useState(0)

  const Increase = () => setNumber(number + 1)
  const Multiply = () => setNumber(number * 6)

  function Decrease() {
    setNumber(number - 1);
  }
  return (
    <div>
      <p> Number: {number} </p>
      <button onClick={Increase}>Increment</button>
      <button onClick={Decrease}>Decrement</button>
      <button onClick={Multiply}>Multiple by 6 </button>
    </div>
  )
}

export default Component;