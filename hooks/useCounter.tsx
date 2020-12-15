import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { increase, decrease, increaseBy } from '../modules/counter';

//useSelector 와 useDispatch 로 이루어진 커스텀 Hook 을 만들어서 사용
export default function useCounter() {
  //   const count = useSelector((state: RootState) => {
  //     console.log('스테이트', state.counter.count);
  //   });
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  const onIncreaseBy = useCallback(
    (diff: number) => dispatch(increaseBy(diff)),
    [dispatch]
  );

  return {
    count,
    onIncrease,
    onDecrease,
    onIncreaseBy,
  };
}
