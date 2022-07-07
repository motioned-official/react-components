import { MotionedWrapComponentProps } from "./Wrap.types"
import React from "react";
const Wrap : React.FC<MotionedWrapComponentProps> = (props) => {
    const {id, className, children} = props;
    return (
        <div
        id={id ?? ''}
        className={className ?? ''}
        >
            {children}
        </div>
    )
}
export default Wrap;