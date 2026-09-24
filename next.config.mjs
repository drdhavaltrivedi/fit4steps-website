/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // 1. Blog moves (from original site to blog)
      {
        source: '/exercises-for-knee-pain',
        destination: '/blog/exercises-for-knee-pain',
        permanent: true,
      },
      {
        source: '/safe-exercises-for-elderly',
        destination: '/blog/safe-exercises-for-elderly',
        permanent: true,
      },

      // 2. Folder duplicates redirected to Established #1 Ranking URLs
      {
        source: '/services/female-fitness-trainers',
        destination: '/female-fitness-trainers-in-delhi',
        permanent: true,
      },
      {
        source: '/services/couple-training',
        destination: '/couples-fitness-training-at-home-delhi',
        permanent: true,
      },
      {
        source: '/services/kids-fitness-functional-training',
        destination: '/fitness-training-for-kids-noida',
        permanent: true,
      },
      {
        source: '/senior-fitness/fifty-plus',
        destination: '/personal-fitness-training-for-50-plus',
        permanent: true,
      },
      {
        source: '/senior-fitness/mobility-balance',
        destination: '/mobility-exercises-for-senior-citizens',
        permanent: true,
      },
      {
        source: '/locations/delhi',
        destination: '/personal-fitness-trainer-delhi',
        permanent: true,
      },
      {
        source: '/services/personal-training-at-home',
        destination: '/in-home-personal-trainer-near-me',
        permanent: true,
      },
      {
        source: '/senior-fitness',
        destination: '/fitness-training-program-for-senior-citizens',
        permanent: true,
      },
      {
        source: '/senior-fitness/strength-seniors',
        destination: '/strength-training-for-seniors-at-home-delhi',
        permanent: true,
      },

      // 3. Legacy URLs from original site
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
