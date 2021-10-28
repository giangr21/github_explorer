import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  newRepo: string;
  setNewRepo: (value: any) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  newRepo,
  setNewRepo,
  ...rest
}) => {
  return (
    <input
      {...rest}
      value={newRepo}
      onChange={(e) => setNewRepo(e.target.value)}
      placeholder={placeholder}
      type="text"
    />
  );
};

export default Input;
