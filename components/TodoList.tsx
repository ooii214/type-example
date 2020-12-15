import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';
import useTodos from '../hooks/useTodos';

function TodoList() {
  const todos = useTodos();
  //Todo: 커스텀 Hook 를 사용해서 조회하기
  console.log('두투리스트값', todos);
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
