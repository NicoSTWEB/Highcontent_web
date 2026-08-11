import { OUTSETA_PLAN_UIDS } from '@/lib/outseta';

export const PRICING_CATEGORIES = [
  {
    id: 'dentist',
    title: 'Dentist',
    sub: 'Build trust. Educate. Attract patients.',
    img: '/assets/Template-Content-Social-Media-Stock-Dentist.png',
    tag: '120 assets',
    outsetaPlanUid: OUTSETA_PLAN_UIDS.starterDentist,
  },
  {
    id: 'esthetician',
    title: 'Esthetician',
    sub: 'Elevated content for skincare professionals',
    img: '/assets/Template-%26-Content-Social-Media-Stock-Dermatology.png',
    tag: '110 assets',
    outsetaPlanUid: OUTSETA_PLAN_UIDS.starterEsthetician,
  },
  {
    id: 'business-coach',
    title: 'Business Coach',
    sub: 'Build authority. Attract clients. Sell expertise.',
    img: '/assets/Template-Content-Social-Media-Stock-Business-Coach.png',
    tag: '95 assets',
    outsetaPlanUid: OUTSETA_PLAN_UIDS.starterBusinessCoach,
  },
  {
    id: 'aesthetic-medicine',
    title: 'Aesthetic Clinics',
    sub: 'Elevated content for aesthetic clinics & doctors',
    img: '/assets/Template-Content-Social-Media-Stock-Aesthetic-Clinics.png',
    tag: '140 assets',
    outsetaPlanUid: null,
    comingSoon: true,
  },
];
