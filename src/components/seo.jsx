import Head from 'next/head';

const SEO = ({
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
      <link rel="canonical" href={metaOgUrl} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta property="og:title" content={metaOgTitle} />
      <meta property="og:url" content={metaOgUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaOgImage} />
      <meta property="og:description" content={metaDescription} />
    </Head>
  );
};

export default SEO;
