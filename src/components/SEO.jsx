import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "YDCODERS - IT Experts | Web Development & Digital Solutions",
  description = "YDCODERS provides world-class IT solutions including web development, mobile app development, digital marketing, and custom software development. Hire experienced IT experts for your next project.",
  keywords = "YDCODERS, IT solutions, web development, mobile app development, digital marketing, software development, React, Node.js, Python, Flutter, IT experts, technology solutions",
  image = "https://ydcoders.com/images/og-image.jpg",
  url = "https://ydcoders.com",
  type = "website",
  author = "YDCODERS",
  canonical,
  noindex = false,
  structuredData
}) => {
  const siteUrl = "https://ydcoders.com";
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      {!canonical && <link rel="canonical" href={fullUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="YDCODERS" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:site" content="@ydcoders" />
      <meta property="twitter:creator" content="@ydcoders" />

      {/* Additional Meta Tags */}
      <meta name="language" content="EN" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
