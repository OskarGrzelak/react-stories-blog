import React from "react";

import './Button.css';

interface Props {
  clicked: () => void;
  children: React.ReactChildren | string;
}

const Button: React.FC<Props> = ({ clicked, children }) => {
  return <button className="button" onClick={clicked}>{children}</button>;
};

export default Button;
