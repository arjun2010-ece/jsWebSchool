import Head from "next/head";
import { FC } from "react";

type SeoType = {
  title: string;
  metaDescription: string;
  metaKeywords: string;
  metaOgTitle: string;
  metaOgUrl: string;
  metaOgImage: string;
};

const SEO: FC<SeoType> = ({
  title,
  metaDescription,
  metaKeywords,
  metaOgTitle,
  metaOgUrl,
  metaOgImage,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta property="og:title" content={metaOgTitle} />
      <meta property="og:url" content={metaOgUrl} />
      <meta property="og:image" content={metaOgImage} />
      <meta property="og:description" content={metaDescription} />
    </Head>
  );
};

export default SEO;
