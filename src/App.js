import { useState } from "react";

function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("Nov 22 2023");
  date.setDate(date.getDate() + count);

  function stepForward() {
    return setStep((s) => s + 1);
  }
  function stepBackward() {
    return setStep((s) => s - 1);
  }
  function countForward() {
    return setCount((c) => c + step);
  }
  function countBackward() {
    return setCount((c) => c - step);
  }

  return (
    <div className="center">
      <div>
        <div>
          <button onClick={stepBackward}> - </button>
          <span>Step {step}</span>
          <button onClick={stepForward}> + </button>
        </div>
        <div>
          <button onClick={countBackward}>-</button>
          <span>Count {count}</span>
          <button onClick={countForward}>+</button>
        </div>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()} </span>
      </p>
    </div>
  );
}

export default App;
