import { MotionedSectionComponentProps } from "./Section.types"
import React from "react";
const Section : React.FC<MotionedSectionComponentProps> = (props) => {
    const {id, className, onClick, children} = props;
    return (
        <section
        id={id ?? ''}
        className={className ?? ''}
        onClick={onClick}
        >
            {children}
        </section>
    )
}
export default Section;