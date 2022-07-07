/// <reference types="react" />
import React, { MouseEventHandler } from 'react';

interface MotionedSectionComponentProps {
    id?: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: JSX.Element;
}

declare const Section: React.FC<MotionedSectionComponentProps>;

interface MotionedWrapComponentProps {
    id?: string;
    className?: string;
    children: JSX.Element;
}

declare const Wrap: React.FC<MotionedWrapComponentProps>;

interface MotionedContentComponentProps {
    id?: string;
    displayType: 'inline' | 'block';
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: JSX.Element;
}

declare const Content: React.FC<MotionedContentComponentProps>;

export { Content, Section, Wrap };
