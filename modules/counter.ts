//typedafe추가후 리팩토링 !
import { createAction, ActionType, createReducer } from 'typesafe-actions';
//액션 type 선언
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';
//액션 생성 함수 선언
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();
//  (diff: number) => ({  type: INCREASE_BY,  payload: diff, //FSA 규칙});

//increaseBy 의경우에는 diff 라는 값을 파라미터로 받아와서 액션의 payload 값을 설정해준다

//액션객체들에대한 type 준비
// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>;

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

//ReturnType 은 함수에서 반환하는 타입을 가져올수 있게 해주는 유틸타입

//counter 모듈에서 관리할 상태의 타입과 초깃값을 선언
//리덕스 상태의 타입을 선언할때는 type 을 써도 되고 인터페이스 만 써도됨
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

//리듀서작성
// function counter(state: CounterState = initialState, action: CounterAction) {
//   console.log('상태값', state);
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

export default counter;
