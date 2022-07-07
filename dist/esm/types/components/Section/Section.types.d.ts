import type { MouseEventHandler } from "react";
export interface MotionedSectionComponentProps {
    id?: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: JSX.Element;
}
