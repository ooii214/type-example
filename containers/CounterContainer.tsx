import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';

//리덕스 스토어안에있는 상태를 조회해서 사용해
// 액션도 디스패치하는 컨테이너 컴포넌트를 만들거보기
function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };
  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;
