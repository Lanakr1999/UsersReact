import React, { Dispatch, SetStateAction } from 'react';
import './ButtonProps.css';

interface ButtonProps {
  children: string,
  color: string,
  setText: Dispatch<SetStateAction<string>>,
}

const ButtonProps = ({children, color, setText}: ButtonProps) => {
  return (
    <div>
      <button onClick={() => setText('Do you click me?')} className={color}>{children}</button>
    </div>
  );
};

export default ButtonProps;