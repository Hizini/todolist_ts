import React from 'react';
import './AddTodo.scss';

interface AddTodoProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  inputText: string;
  onClick(): void;
}

const AddTodo = ({ onChange, inputText, onClick }: AddTodoProps) => {
  return (
    <div className="add">
      <input
        type="text"
        placeholder="TODO"
        value={inputText}
        onChange={onChange}
      />
      <button onClick={onClick}>+</button>
    </div>
  );
};
export default AddTodo;
