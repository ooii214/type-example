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
  //  typescript 컨테이너 컴포넌트를 작성할때 특별한점!
  //useSelector 부분에서 stat 의 타입을 RootState으로 지정해서 사용한다는 것 외에는 없다.

  //   const onIncrease = () => {
  //     dispatch(increase());
  //   };
  //   const onDecrease = () => {
  //     dispatch(decrease());
  //   };
  //   const onIncreaseBy = (diff: number) => {
  //     dispatch(increaseBy(diff));
  //   };
  //   return (
  //     <Counter
  //       count={count}
  //       onIncrease={onIncrease}
  //       onDecrease={onDecrease}
  //       onIncreaseBy={onIncreaseBy}
  //     />
  //   );
}

export default CounterContainer;
