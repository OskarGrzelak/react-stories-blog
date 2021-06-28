import React from "react";

import "./Button.css";

interface IProps {
  clicked: () => void;
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ clicked, children }) => {
  return (
    <button className="button" onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
