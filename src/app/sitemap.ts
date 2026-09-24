import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fit4steps.com';

  const routes = [
    '',
    '/v1',
    '/v2',
    '/v3',
    '/v4',
    '/v5',
    '/v6',
    '/about',
    '/about/trainers',
    // Flagship & Ranking Senior Programs
    '/fitness-training-program-for-senior-citizens',
    '/strength-training-for-seniors-at-home-delhi',
    '/strength-training-for-seniors-at-home-gurugram',
    '/exercises-for-senior-citizens-gurugram',
    '/mobility-exercises-for-senior-citizens',
    '/personal-fitness-training-for-50-plus',
    '/senior-fitness/knee-therapy',
    '/senior-citizen-fitness-trainer-at-home-delhi',
    '/senior-citizen-fitness-trainer-at-home-gurugram',
    // Flagship & Ranking In-Home Personal Training Services
    '/in-home-personal-trainer-near-me',
    '/female-fitness-trainers-in-delhi',
    '/couples-fitness-training-at-home-delhi',
    '/fitness-training-for-kids-noida',
    '/services',
    '/services/prenatal-postnatal-yoga',
    '/services/corrective-exercise-lifestyle-diseases',
    '/services/stress-management-training',
    '/services/personalized-online-training',
    '/services/corporate-wellness-yoga',
    // Locations
    '/locations',
    '/locations/noida',
    '/locations/gurugram',
    '/personal-fitness-trainer-delhi',
    '/personal-trainer-greater-kailash-delhi',
    // Programs Hub & Individual Programs
    '/programs',
    '/programs/weight-training',
    '/programs/yoga',
    '/programs/power-yoga',
    '/programs/pilates',
    '/programs/aerobics',
    '/programs/kick-boxing',
    '/programs/stretching-mobility',
    '/programs/ball-exercise',
    '/programs/circuit-training',
    '/programs/hiit',
    '/programs/trx-exercise',
    '/programs/sports-games',
    // Blog Hub & Articles
    '/blog',
    '/blog/exercises-for-knee-pain',
    '/blog/safe-exercises-for-elderly',
    '/blog/benefits-of-strength-training-after-50',
    '/blog/joint-mobility-routine-for-seniors',
    '/blog/posture-correction-desk-workers',
    '/blog/diastasis-recti-postnatal-recovery',
    '/blog/screen-time-and-kids-posture',
    '/blog/how-to-set-up-home-workout-space',
    // Company, Trust & Legal
    '/success-stories',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route.startsWith('/blog') ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1.0
        : route === '/fitness-training-program-for-senior-citizens' ||
          route === '/in-home-personal-trainer-near-me' ||
          route.startsWith('/strength-training')
        ? 0.95
        : route.startsWith('/locations') || route.startsWith('/services')
        ? 0.9
        : 0.8,
  }));
}
