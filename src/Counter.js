import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Simple Counter</h1>
      <h2>This is Simple</h2>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
    </div>
  );
}
