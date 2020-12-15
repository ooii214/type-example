import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useTodos() {
  const todos = useSelector((state: RootState) => state.todos);
  return todos;
  //useSelector 를 사용해서 상태를 조회하는 코드만 작성함
}
