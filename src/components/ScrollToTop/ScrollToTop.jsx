import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { cloneElement } from "react";

const ScrollToTop = ({ children }) => {
  const [click, setClick] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, click]);

  const childrenWithProps = React.Children.map(children, (child) => {
    return cloneElement(child, {
      onClick: () => setClick((prev) => !prev),
    });
  });

  return <>{childrenWithProps}</>;
};

ScrollToTop.propTypes = {
  children: PropTypes.node,
};

export default ScrollToTop;
