import React, { useState, useRef, useEffect, Fragment } from "react";

interface IProps {
  children: React.ReactNode;
  render(parentRenderProps: boolean): React.ReactNode;
}

const ScrollHandler: React.FC<IProps> = ({ render, children }) => {
  const lastScrollY = useRef(0);
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingUp]);

  const handleScroll = () => {
    const currScrollY = window.scrollY;

    if (lastScrollY.current > currScrollY) {
      setScrollingUp(true);
    } else if (lastScrollY.current < currScrollY) {
      setScrollingUp(false);
    }
    lastScrollY.current = currScrollY;
  };

  return (
    <Fragment>
      {render(scrollingUp)}
      {children}
    </Fragment>
  );
};

export default ScrollHandler;
