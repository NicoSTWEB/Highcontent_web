const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://highcontent.io'
).replace(/\/$/, '');

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
