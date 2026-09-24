/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/yoga_detail_page',
        destination: '/programs/yoga',
        permanent: true,
      },
      {
        source: '/weight_training_detail_page',
        destination: '/programs/weight-training',
        permanent: true,
      },
      {
        source: '/success_stories',
        destination: '/success-stories',
        permanent: true,
      },
      {
        source: '/exercises-for-knee-pain',
        destination: '/blog/exercises-for-knee-pain',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/programs.html',
        destination: '/programs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
