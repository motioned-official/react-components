/// <reference types="react" />
declare const ReactComponent: {
    Section: import("react").FC<import("./Section/Section.types").MotionedSectionComponentProps>;
    Wrap: import("react").FC<import("./Wrap/Wrap.types").MotionedWrapComponentProps>;
    Content: import("react").FC<import("./Content/Content.types").MotionedContentComponentProps>;
};
export default ReactComponent;
