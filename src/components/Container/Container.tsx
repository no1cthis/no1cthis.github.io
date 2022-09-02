import React from "react";

import cl from "./container.module.scss";

interface ContainerProps {
  children: any;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={cl.container}>{children}</div>;
};

export default Container;
