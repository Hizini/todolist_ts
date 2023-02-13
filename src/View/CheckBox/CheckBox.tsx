import React from 'react';
import './CheckBox.scss';

interface CheckBoxProps {
  isChecked?: boolean;
  onClick?(): void;
}

const CheckBox = ({ isChecked, onClick }: CheckBoxProps) => {
  return (
    <div
      className={`checkbox ${isChecked && 'checked'}`}
      onClick={onClick}
      aria-hidden="true"
    >
      {isChecked && <div>✔️</div>}
    </div>
  );
};
export default CheckBox;
