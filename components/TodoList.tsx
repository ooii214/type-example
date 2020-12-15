import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

function TodoList() {
  const todos: Todo[] = []; //Todo: 커스텀 Hook 를 사용해서 조회하기

  if (todos.length === 0) return <div> 등록된 항목이 없다.</div>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todos={todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
