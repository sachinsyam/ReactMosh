import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    if(count<5)
    setCount(count + 1);
  }
  function decrease(){
    if(count>0)
    setCount(count - 1);
  }

  return (
    <div>
        <p>Count: {count}</p>
      <button className="btn btn-primary mx-4" onClick={increase}>
        +
      </button>
      <button className="btn btn-danger mx-3" onClick={decrease}>-</button>
    </div>
  );
}
