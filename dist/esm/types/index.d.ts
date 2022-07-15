/// <reference types="react" />
declare const Motioned: {
    MReact: {
        Section: import("react").FC<import("./react/Section/Section.types").MotionedSectionComponentProps>;
        Wrap: import("react").FC<import("./react/Wrap/Wrap.types").MotionedWrapComponentProps>;
        Content: import("react").FC<import("./react/Content/Content.types").MotionedContentComponentProps>;
    };
    MNext: {
        SEO: import("react").FC<import("./next/SEO/SEO.types").MotionedSEOComponentProps>;
    };
};
export default Motioned;
