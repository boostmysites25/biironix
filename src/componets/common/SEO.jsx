import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, url, image }) => {
    const siteName = "BIIRONIX TECH";
    const defaultTitle = "BIIRONIX TECH - Next-Gen IT Solutions & AI Development";
    const defaultDescription =
        "BIIRONIX TECH offers cutting-edge IT solutions including Generative AI, App Development, Web Development, and Cloud Computing to transform your business.";
    const defaultImage = "https://biironixtech.com/logo.png"; // Assuming logo is available at this URL
    const defaultUrl = "https://biironixtech.com/";

    const metaTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const metaDescription = description || defaultDescription;
    const metaImage = image || defaultImage;
    const metaUrl = url || defaultUrl;

    return (
        <Helmet>
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={metaTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
