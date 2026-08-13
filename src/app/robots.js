const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://highcontent.io'
).replace(/\/$/, '');

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
