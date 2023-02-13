import React from 'react';
import './TodoItem.scss';
import { CheckBox, DeleteButton } from 'View/index';

interface ItemProps {
  onClickCheckBox(id: number): void;
  onClickDelete(id: number): void;
  isCompleted?: boolean;
  text: string;
  id: number;
}

const Item = ({
  onClickCheckBox,
  onClickDelete,
  isCompleted,
  text,
  id,
}: ItemProps) => {
  return (
    <>
      <div className="item">
        <CheckBox isChecked={isCompleted} onClick={() => onClickCheckBox(id)} />
        <div className={`text ${isCompleted && 'completed'}`}>{text}</div>
        <DeleteButton onClick={() => onClickDelete(id)} />
      </div>
    </>
  );
};

export default Item;
