//각 할일 항목에 대한 정보를 보여주는 컴포넌트
import React from 'react';
import './TodoItem.css';
import { Todo } from '../modules/todos';

type TodoItemProps = {
  todos: Todo;
};

function TodoItem({ todos }: TodoItemProps) {
  return (
    <li className={`TodoItem ${todos.done ? 'done' : ''}`}>
      <span className='write'>{todos.write}</span>
      <span className='remove'>X</span>
    </li>
  );
}

export default TodoItem;
