import Head from "next/head";
import React from "react";
import { MotionedSEOComponentProps } from "./SEO.types";

const SEO: React.FC<MotionedSEOComponentProps> = ({
  children,
  title,
  meta,
}) => {
  return (
    <Head>
      {meta && (
        <>
          {meta.keywords && (
            <meta
              name="keywords"
              content={meta.keywords.words.join(meta.keywords.joinBy)}
            />
          )}
          {meta.description && (
            <meta name="description" content={meta.description} />
          )}
        </>
      )}
      {children ?? null}
      <title>
        {title.subString
          ? [title.default, title.subString].join(" " + title.joinBy + " ")
          : title.default}
      </title>
    </Head>
  );
};
export default SEO;
