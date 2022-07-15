/// <reference types="react" />
import * as react from 'react';
import { MouseEventHandler } from 'react';

interface MotionedSEOComponentProps {
    title: {
        subString?: string;
        default: string;
        joinBy?: string;
    };
    meta?: {
        keywords?: {
            words: string[];
            joinBy: string;
        };
        description?: string;
    };
    children: React.ReactNode;
}

interface MotionedContentComponentProps {
    id?: string;
    displayType: 'inline' | 'block';
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: JSX.Element;
}

interface MotionedWrapComponentProps {
    id?: string;
    className?: string;
    children: JSX.Element;
}

interface MotionedSectionComponentProps {
    id?: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: JSX.Element;
}

declare const Motioned: {
    MReact: {
        Section: react.FC<MotionedSectionComponentProps>;
        Wrap: react.FC<MotionedWrapComponentProps>;
        Content: react.FC<MotionedContentComponentProps>;
    };
    MNext: {
        SEO: react.FC<MotionedSEOComponentProps>;
    };
};

export { Motioned as default };
