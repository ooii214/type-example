import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
const rootReducer = combineReducers({
  counter,
  todos,
});
export default rootReducer;

//type RootState 이렇게 내보내줘야한다. 이 타입은 추후에 컨테이너컴포넌트를 만들게 될때
//스토어에서 관리하고 있는 상태를 조회하기 위해서 useSelector 를 사용할때 필요함
export type RootState = ReturnType<typeof rootReducer>;
