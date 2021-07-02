import React from "react";

import "./Overlay.css";

interface IProps {
  children: React.ReactNode;
  scrollingUp: boolean;
  position: string;
}

const Overlay: React.FC<IProps> = ({ children, scrollingUp, position }) => {
  let overlayStyle =
    position === "top" ? "overlay overplay-top" : "overlay overlay-bottom";
  if (!scrollingUp) overlayStyle += " hide";

  return <div className={overlayStyle}>{children}</div>;
};

export default Overlay;
