import React from 'react';
import './DeleteButton.scss';

interface DeleteButtonProps {
  onClick?(): void;
}

const DeleteButton = ({ onClick }: DeleteButtonProps) => {
  return (
    <div className="delete" onClick={onClick} aria-hidden="true">
      <div>❌</div>
    </div>
  );
};
export default DeleteButton;
