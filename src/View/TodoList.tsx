import React, { useState } from 'react';
import './TodoList.scss';
import { Header, AddTodo, TodoItem } from 'View/index';

interface TodoList {
  id: number;
  text: string;
  isCompleted: boolean;
}

const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<TodoList[]>([
    {
      id: 1,
      text: '타입스크립트 뿌시기',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'f45 가기',
      isCompleted: false,
    },
    {
      id: 3,
      text: '롤 하기',
      isCompleted: true,
    },
  ]);

  const handleClickCheckBox = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleClickAdd = () => {
    const newTodoList: TodoList = {
      id: todos.length + 1,
      text: inputText,
      isCompleted: false,
    };
    setTodos(todos.concat(newTodoList));
    setInputText('');
  };

  const handleClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  console.log(todos);
  return (
    <div className="view">
      <Header />
      <div className="todolist">
        {todos.map((todo) => (
          <TodoItem
            key={`todo${todo.id}`}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            onClickCheckBox={handleClickCheckBox}
            onClickDelete={handleClickDelete}
          />
        ))}
      </div>
      <AddTodo
        onChange={handleInputTextChange}
        inputText={inputText}
        onClick={handleClickAdd}
      />
    </div>
  );
};
export default TodoList;
