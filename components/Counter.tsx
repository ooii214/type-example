import React from 'react';
import useCounter from '../hooks/useCounter';

function Counter() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();
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
