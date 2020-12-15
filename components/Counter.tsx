import React from 'react';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>일 더하기</button>
      <button onClick={onDecrease}>일 빼기</button>
      <button onClick={() => onIncreaseBy(5)}>오 더하기 </button>
    </div>
  );
}

export default Counter;
