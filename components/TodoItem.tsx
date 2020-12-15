//각 할일 항목에 대한 정보를 보여주는 컴포넌트
import React from 'react';
// import './TodoItem.css';
import { Todo } from '../modules/todos';
import styled from 'styled-components';
type TodoItemProps = {
  todos: Todo;
};

function TodoItem({ todos }: TodoItemProps) {
  {
    console.log(todos, '두투리스트');
  }
  return (
    <Item className={`Item ${todos.done ? 'done' : ''}`}>
      <DoneWrite className='write'>{todos.write}</DoneWrite>
      <Remove className='remove'>X</Remove>
    </Item>
  );
}

const Item = styled.li``;
const DoneWrite = styled.span`
  color: #999999;
  text-decoration: line-through;
`;
const Remove = styled.span`
  color: red;
  margin-left: 4px;
  cursor: pointer;
`;

export default TodoItem;
