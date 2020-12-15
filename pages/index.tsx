import React from 'react';
import ReactDOM from 'react-dom';
// import Test from './Test';
import CounterContainer from '../containers/CounterContainer';
import Counter from '../components/Counter';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
const Home: React.FunctionComponent = () => {
  return (
    <>
      {/* <Counter /> */}
      <TodoInsert />
      <TodoList />
    </>
  );
};

export default Home;
