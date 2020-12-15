//액션타입
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
// 액션 생성함수
export const addTodo = (write: string) => ({
  type: ADD_TODO,
  payload: write,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

//타입스크립트 타입 준비

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

//상태를 위한 타입선언
export type Todo = {
  id: number;
  write: string;
  done: boolean;
};

type TodoState = Todo[];

//초깃값 설정

const initialState: TodoState = [
  { id: 1, write: '재미있다', done: true },
  { id: 2, write: '오랜만', done: true },
  { id: 3, write: '타입스크립트', done: false },
];

function todos(
  state: TodoState = initialState,
  action: TodosAction
): TodoState {
  {
    console.log('액션타입', action.type, '상태', state);
  }
  switch (action.type) {
    case ADD_TODO:
      const nextId = Math.max(...state.map((todo) => todo.id)) + 1;
      return state.concat({
        id: nextId,
        write: action.payload,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
