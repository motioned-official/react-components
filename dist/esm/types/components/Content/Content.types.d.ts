import type { MouseEventHandler } from "react";
export interface MotionedContentComponentProps {
    id?: string;
    displayType: 'inline' | 'block';
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: JSX.Element;
}
