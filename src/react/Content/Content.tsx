import { MotionedContentComponentProps } from "./Content.types";
import React from "react";
const Content: React.FC<MotionedContentComponentProps> = (props) => {
  const { id, className, displayType, onClick, children } = props;
  return displayType === "block" ? (
    <article id={id ?? ""} className={className ?? ""} onClick={onClick}>
      {children}
    </article>
  ) : (
    <span id={id ?? ""} className={className ?? ""} onClick={onClick}>
      {children}
    </span>
  );
};
export default Content;
