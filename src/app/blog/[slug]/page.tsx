import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  BookOpen,
  ArrowRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Phone,
  Heart,
  ShieldCheck,
  Stethoscope,
  ChevronLeft
} from 'lucide-react';

interface ArticleData {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  description: string;
  leadServiceUrl: string;
  leadServiceText: string;
  content: {
    intro: string;
    clinicalContext: string;
    exercises: {
      name: string;
      focus: string;
      steps: string[];
      mistakesToAvoid: string;
    }[];
    safetyTips: string[];
    conclusion: string;
  };
}

const articlesData: Record<string, ArticleData> = {
  'exercises-for-knee-pain': {
    slug: 'exercises-for-knee-pain',
    title: '7 Safe In-Home Exercises for Knee Pain & Osteoarthritis Relief',
    category: 'Joint Pain & Mobility',
    readTime: '6 min read',
    date: 'August 24, 2026',
    description: 'Learn doctor-recommended non-weight bearing exercises that strengthen the VMO quadriceps, decompress knee joint cartilage, and relieve osteoarthritic pain safely at home.',
    leadServiceUrl: '/senior-fitness/knee-therapy',
    leadServiceText: 'Fit4Steps Joint Restoration Therapy',
    content: {
      intro: 'Knee pain is the most frequent musculoskeletal complaint among adults over 50 in India. When cartilage in the knee begins to wear thin, everyday movements like getting out of an armchair or descending stairs can feel agonizing. Many people assume surgery is the only path—but strengthening the shock-absorbing muscles around the joint often provides dramatic, long-lasting relief.',
      clinicalContext: 'The knee is a hinge joint trapped between the hip and ankle. It cannot function smoothly if the quadriceps (specifically the Vastus Medialis Oblique) and hamstrings are weak or imbalanced. By performing non-weight bearing exercises while seated or lying down, we rebuild muscular stability without wearing down joint cartilage.',
      exercises: [
        {
          name: '1. Supine Straight Leg Raise (Quad Shock-Absorber)',
          focus: 'Vastus Medialis Oblique (VMO) & Anterior Hip Flexors',
          steps: [
            'Lie flat on your back on a firm bed or exercise mat.',
            'Bend one knee with the foot flat on the bed. Keep the target leg completely straight.',
            'Flex your ankle towards your face (dorsiflexion) and tighten the thigh muscle.',
            'Slowly elevate the straight leg 12 inches off the bed, hold for 3 seconds, and slowly lower.',
            'Perform 10 to 12 controlled repetitions per side.'
          ],
          mistakesToAvoid: 'Do not arch your lower back or swing the leg using momentum.'
        },
        {
          name: '2. Seated Terminal Knee Extension with Towel Roll',
          focus: 'End-Range Knee Stabilization',
          steps: [
            'Sit upright in a sturdy chair with your back supported.',
            'Place a rolled bath towel directly under your thigh just above the knee.',
            'Slowly kick the foot forward until your leg is completely horizontal.',
            'Hold the top squeeze for 4 seconds, feeling the inner quad engage.',
            'Lower slowly with a 3-second descent.'
          ],
          mistakesToAvoid: 'Avoid slouching back or tilting your pelvis.'
        },
        {
          name: '3. Prone Hamstring Curl (Posterior Support)',
          focus: 'Hamstring & Popliteus Stabilizers',
          steps: [
            'Lie on your stomach with a soft pillow under your hips for comfort.',
            'Slowly bend your target knee, bringing your heel up toward your glutes.',
            'Hold at a 90-degree angle for 2 seconds.',
            'Lower with control. Perform 12 repetitions.'
          ],
          mistakesToAvoid: 'Do not jerk your lower back or lift your hips off the surface.'
        },
        {
          name: '4. Isometric Pillow Squeeze (Adductor Co-contraction)',
          focus: 'Medial Knee Stability',
          steps: [
            'Lie on your back with knees bent at 45 degrees, feet flat.',
            'Place a firm pillow or yoga block between your knees.',
            'Gently squeeze the pillow with 60% of your maximum strength.',
            'Hold the squeeze continuously for 5 seconds while breathing normally.',
            'Release and repeat 10 times.'
          ],
          mistakesToAvoid: 'Do not hold your breath during the isometric hold.'
        }
      ],
      safetyTips: [
        'Never push through sharp or clicking pain; exercise should produce a muscular burn, never a stabbing joint sensation.',
        'Apply an ice pack wrapped in a cloth for 15 minutes after exercise if your knee feels warm or swollen.',
        'Warm the joint up with gentle ankle pumps and seated heel slides before adding resistance.'
      ],
      conclusion: 'Consistency is far more powerful than intensity. When performed 3 to 4 times weekly, these gentle movements restore synovial joint lubrication and take pressure off worn cartilage. If you need 1-on-1 supervision, our certified trainers can guide you in your own living room.'
    }
  },
  'safe-exercises-for-elderly': {
    slug: 'safe-exercises-for-elderly',
    title: 'Safe Daily Exercises for Senior Citizens at Home: Complete Guide',
    category: 'Senior Fitness',
    readTime: '8 min read',
    date: 'August 20, 2026',
    description: 'A geriatric fitness guide on chair squats, tandem stance balance, ankle pumps, and safe in-home routines for elderly parents living in Delhi NCR.',
    leadServiceUrl: '/fitness-training-program-for-senior-citizens',
    leadServiceText: 'Senior Citizen In-Home Coaching',
    content: {
      intro: 'Remaining active in older age is the single best predictor of longevity, cognitive clarity, and independent living. Yet fear of falling or joint injury often prevents seniors from exercising. This guide outlines four foundational movements that can be performed safely at home with zero expensive equipment.',
      clinicalContext: 'Between age 60 and 80, the body naturally loses 15% of muscle mass per decade (sarcopenia) and reflex coordination slows down. Gentle, supported daily movement retrains these pathways, keeping seniors agile and confident.',
      exercises: [
        {
          name: '1. Supported Chair Sit-to-Stand (Functional Leg Power)',
          focus: 'Quadriceps, Glutes & Functional Independence',
          steps: [
            'Sit on a sturdy dining chair with feet shoulder-width apart.',
            'Cross your arms across your chest (or lightly rest fingers on armrests for initial support).',
            'Lean slightly forward from the hips, press through your heels, and stand tall.',
            'Pause for 1 second, then slowly control your descent back onto the chair.',
            'Aim for 8 to 10 repetitions twice daily.'
          ],
          mistakesToAvoid: 'Do not collapse back into the chair; the slow descent is where strength is built.'
        },
        {
          name: '2. Tandem Stance (Heel-to-Toe Fall Prevention)',
          focus: 'Vestibular Balance & Ankle Equilibrium',
          steps: [
            'Stand alongside a sturdy dining table or kitchen counter for support.',
            'Place the heel of your right foot directly touching the toes of your left foot.',
            'Look straight ahead at eye level. Hold this stance for 15 to 20 seconds.',
            'Switch feet and repeat on the opposite side.'
          ],
          mistakesToAvoid: 'Do not look down at your feet; looking ahead trains your inner ear balance.'
        },
        {
          name: '3. Seated Ankle Alphabet (Circulation & Foot Drop Prevention)',
          focus: 'Ankle Dorsiflexion & Calf Mobility',
          steps: [
            'Sit comfortably with your back upright.',
            'Extend one leg slightly forward.',
            'Use your big toe as a pen to draw the letters A through Z in the air.',
            'Switch to the other foot.'
          ],
          mistakesToAvoid: 'Move the ankle joint, not the entire hip.'
        }
      ],
      safetyTips: [
        'Always exercise near a stable, heavy piece of furniture or wall for instant balance recovery.',
        'Wear supportive footwear with non-slip rubber soles rather than socks or smooth slippers.',
        'Drink a glass of water before and after exercise to prevent orthostatic dizziness.'
      ],
      conclusion: 'Building a consistent 15-minute daily habit changes everything. Seniors who maintain strong legs and sharp balance enjoy freedom, travel, and social outings without fear.'
    }
  },
  'benefits-of-strength-training-after-50': {
    slug: 'benefits-of-strength-training-after-50',
    title: 'Why Strength Training is Non-Negotiable After Age 50',
    category: 'Senior Fitness',
    readTime: '5 min read',
    date: 'August 18, 2026',
    description: 'Discover how progressive resistance bands and light dumbbells reverse muscle loss, protect against osteoporosis, and supercharge vitality after 50.',
    leadServiceUrl: '/personal-fitness-training-for-50-plus',
    leadServiceText: 'Personal Coaching for 50+',
    content: {
      intro: 'For decades, conventional fitness advice for adults over 50 focused almost exclusively on gentle morning walks. While walking is wonderful for cardiovascular health, it does almost nothing to stop sarcopenia (age-related muscle loss) or bone density decline.',
      clinicalContext: 'Muscle mass is our largest metabolic organ. Without resistance training, resting metabolic rate drops by 2-4% per decade, leading to stubborn visceral belly fat, insulin resistance, and fragile bones.',
      exercises: [
        {
          name: '1. Resistance Band Bicep & Hammer Curls',
          focus: 'Grip Strength & Functional Arm Power',
          steps: [
            'Stand on the center of a resistance loop band or sit on a chair with the band anchored under feet.',
            'Grip the handles with palms facing up.',
            'Curl your hands toward your shoulders, squeeze for 1 second, and lower under control.',
            '12 repetitions per set.'
          ],
          mistakesToAvoid: 'Do not swing your elbows or arch your lower back.'
        },
        {
          name: '2. Banded Seated Rows (Upper Back Posture)',
          focus: 'Rhomboids, Latissimus & Scapular Retraction',
          steps: [
            'Sit with legs extended, loop band securely wrapped around the middle of your soles.',
            'Hold the ends with an upright spine.',
            'Pull the elbows backward, pinching your shoulder blades together.',
            'Hold 2 seconds, then return.'
          ],
          mistakesToAvoid: 'Do not shrug your shoulders toward your ears.'
        }
      ],
      safetyTips: [
        'Start with light resistance and prioritize slow, 3-second negative eccentric phases.',
        'Allow 48 hours of recovery between working the same muscle groups.'
      ],
      conclusion: 'Strength is the fountain of youth. It is never too late to start, and improvements in vitality and vigor can be observed in as little as three weeks.'
    }
  },
  'joint-mobility-routine-for-seniors': {
    slug: 'joint-mobility-routine-for-seniors',
    title: 'The 15-Minute Morning Joint Mobility Routine for Stiff Joints',
    category: 'Joint Pain & Mobility',
    readTime: '5 min read',
    date: 'August 15, 2026',
    description: 'A 15-minute gentle mobility routine for older adults to eliminate morning hip, spine, and knee stiffness before getting out of bed.',
    leadServiceUrl: '/mobility-exercises-for-senior-citizens',
    leadServiceText: 'Mobility & Balance Training',
    content: {
      intro: 'Many seniors wake up feeling stiff and achy, as if their joints need to be "oiled." Synovial fluid inside our joint capsules is naturally thicker when we are asleep. Gentle, circular movements warm up the fluid, allowing smooth, pain-free gliding throughout the day.',
      clinicalContext: 'Moving joints through their full physiological range without heavy loads activates mechanoreceptors that inhibit pain signals sent to the brain.',
      exercises: [
        {
          name: '1. Gentle Supine Pelvic Tilts (Bed Mobility)',
          focus: 'Lower Back & Sacroiliac Joint Decompression',
          steps: [
            'Lie flat in bed on your back with knees bent.',
            'Gently flatten your lower back against the mattress by contracting your lower abdominals.',
            'Hold for 3 seconds, then release into a natural gentle arch.',
            'Repeat 10 slow times.'
          ],
          mistakesToAvoid: 'Do not lift your hips into a high bridge; this is a subtle pelvic rotation.'
        },
        {
          name: '2. Seated Torso Spirals (Spinal Rotation)',
          focus: 'Thoracic Mobility & Ribcage Expansion',
          steps: [
            'Sit on the edge of the bed with feet flat on the floor.',
            'Place your right hand on your left knee and gently turn your shoulders to look left.',
            'Take a deep belly breath, feeling the gentle twist in the mid-back.',
            'Return to center and repeat on the opposite side.'
          ],
          mistakesToAvoid: 'Do not force the neck to twist further than the shoulders comfortably go.'
        }
      ],
      safetyTips: [
        'Perform these movements while still warm under the covers or right after a warm cup of water.',
        'Never make rapid, ballistic jerks.'
      ],
      conclusion: 'Starting your morning with 10 minutes of gentle joint mobility sets a comfortable, pain-free tone for the entire day.'
    }
  },
  'posture-correction-desk-workers': {
    slug: 'posture-correction-desk-workers',
    title: 'Fixing Text Neck & Anterior Pelvic Tilt from Long Desk Hours',
    category: 'Corporate Wellness',
    readTime: '7 min read',
    date: 'August 12, 2026',
    description: 'Ergonomic exercises and scapular retractions for corporate tech professionals working in Noida and Gurugram office parks.',
    leadServiceUrl: '/services/corporate-wellness-yoga',
    leadServiceText: 'Corporate Ergonomic Programs',
    content: {
      intro: 'Sitting for 8 to 10 hours a day in front of multiple monitors leads to upper crossed syndrome: forward head posture, hunched shoulders, tight hip flexors, and inactive glutes.',
      clinicalContext: 'Every inch the head moves forward of the shoulders adds approximately 10 pounds of additional shearing pressure on the cervical spine.',
      exercises: [
        {
          name: '1. Chin Tucks (Cervical Retraction)',
          focus: 'Deep Neck Flexors',
          steps: [
            'Sit upright looking straight ahead.',
            'Without tilting your head down, slide your chin backward as if making a double chin.',
            'Hold for 3 seconds, feeling the stretch at the base of the skull.',
            'Repeat 10 times every 2 hours during the workday.'
          ],
          mistakesToAvoid: 'Do not nod your head; the movement is straight horizontal retraction.'
        },
        {
          name: '2. Doorway Pectoral Stretch',
          focus: 'Chest Opening & Scapular Reset',
          steps: [
            'Stand in an open doorway with elbows bent at 90 degrees placed against the frame.',
            'Step forward gently with one foot until you feel a comfortable stretch across the chest.',
            'Breathe deeply for 30 seconds.'
          ],
          mistakesToAvoid: 'Do not overarch your lower back to reach further.'
        }
      ],
      safetyTips: [
        'Position your laptop monitor at eye height using a laptop stand and external keyboard.'
      ],
      conclusion: 'Periodic 2-minute posture micro-breaks throughout the day restore spinal alignment and enhance cognitive alertness.'
    }
  },
  'diastasis-recti-postnatal-recovery': {
    slug: 'diastasis-recti-postnatal-recovery',
    title: 'Safe Postnatal Core Recovery & Diastasis Recti Exercises',
    category: 'Pregnancy & Postnatal',
    readTime: '6 min read',
    date: 'August 10, 2026',
    description: 'A certified female trainer’s guide on healing abdominal separation, pelvic floor restoration, and safe postnatal recovery at home.',
    leadServiceUrl: '/services/prenatal-postnatal-yoga',
    leadServiceText: 'Prenatal & Postnatal Yoga',
    content: {
      intro: 'Abdominal separation (diastasis recti) affects up to 60% of new mothers. Traditional abdominal crunches or planks can worsen the condition by creating excessive intra-abdominal pressure. Healing requires deep transverse abdominis reconnection.',
      clinicalContext: 'The linea alba connective tissue softens during pregnancy due to the hormone relaxin. Proper breathing and gentle TVA activation encourage tissue re-approximation.',
      exercises: [
        {
          name: '1. Diaphragmatic TVA Hugs',
          focus: 'Transverse Abdominis & Pelvic Floor Synchronization',
          steps: [
            'Lie on your side or back with knees bent.',
            'Inhale into the ribs and lower abdomen.',
            'Exhale through pursed lips while gently drawing the belly button inward as if wrapping a corset.',
            'Hold for 3 seconds and release.'
          ],
          mistakesToAvoid: 'Do not suck in by lifting your chest.'
        }
      ],
      safetyTips: [
        'Always obtain medical clearance from your obstetrician (usually 6 weeks post-vaginal delivery, 8-10 weeks post-C-section).'
      ],
      conclusion: 'Gentle, structured core recovery rebuilds functional pelvic stability, eliminating lower back pain and restoring confidence.'
    }
  },
  'screen-time-and-kids-posture': {
    slug: 'screen-time-and-kids-posture',
    title: 'Combatting Child Screen-Time Slouching Through Functional Play',
    category: 'Kids Fitness',
    readTime: '5 min read',
    date: 'August 08, 2026',
    description: 'Agility drills, animal walks, and posture games that keep kids active and upright in apartment living environments.',
    leadServiceUrl: '/fitness-training-for-kids-noida',
    leadServiceText: 'Kids Functional Training',
    content: {
      intro: 'Children today spend more time on screens than ever before. Heavy school bags and slouching over mobile devices can lead to early postural dysfunction and low physical stamina.',
      clinicalContext: 'Growing bones and growth plates respond directly to mechanical signals. Playful, varied functional movement ensures symmetrical musculoskeletal development.',
      exercises: [
        {
          name: '1. Animal Walks (Bear Crawl & Crab Walk)',
          focus: 'Full-Body Core, Shoulder Stability & Coordination',
          steps: [
            'Bear Crawl: Crawl on hands and feet across the living room with knees hovering off the ground.',
            'Crab Walk: Sit on the floor, lift hips, and walk backward using palms and feet.',
            'Perform 3 rounds of 20 seconds as a fun relay game.'
          ],
          mistakesToAvoid: 'Ensure the floor is clean and clear of tripping obstacles.'
        }
      ],
      safetyTips: [
        'Keep sessions playful and gamified rather than rigid drill-sergeant training.'
      ],
      conclusion: 'Making fitness a fun daily habit gives kids healthy posture, agility, and sports confidence.'
    }
  },
  'how-to-set-up-home-workout-space': {
    slug: 'how-to-set-up-home-workout-space',
    title: 'How to Set Up an Effective Home Workout Space in an Apartment',
    category: 'Home Workouts',
    readTime: '4 min read',
    date: 'August 05, 2026',
    description: 'A minimalist guide to preparing your apartment living room or balcony for comfortable in-home personal training.',
    leadServiceUrl: '/in-home-personal-trainer-near-me',
    leadServiceText: 'In-Home Personal Training',
    content: {
      intro: 'You do not need a 500-square-foot dedicated gym room or expensive treadmills to achieve life-changing fitness results at home. All you need is a 6x6 foot clear space.',
      clinicalContext: 'Functional fitness relies on multi-planar movements using resistance bands, dumbbells, and bodyweight, which require very little physical footprint.',
      exercises: [
        {
          name: '1. The 3-Step Space Checklist',
          focus: 'Safety & Ventilation',
          steps: [
            'Select a spot with natural light and good cross-ventilation or air-conditioning.',
            'Ensure a non-slip surface: a high-density rubber exercise mat provides joint cushioning and floor grip.',
            'Clear sharp coffee table corners or delicate decorative glassware from the immediate 6-foot radius.'
          ],
          mistakesToAvoid: 'Do not exercise on slippery marble floors without a non-slip mat.'
        }
      ],
      safetyTips: [
        'Fit4Steps trainers carry all essential sanitized equipment directly to your session, so you don’t have to purchase or store bulky weights.'
      ],
      conclusion: 'A convenient, welcoming home fitness corner eliminates all excuses and creates lifelong workout consistency.'
    }
  }
};

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const art = articlesData[slug];
  if (!art) {
    return { title: 'Article Not Found | Fit4Steps' };
  }

  return {
    title: `${art.title} | Fit4Steps Health Guide`,
    description: art.description,
    alternates: {
      canonical: `https://fit4steps.com/blog/${art.slug}`,
    }
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const art = articlesData[slug];

  if (!art) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: art.title,
    description: art.description,
    author: {
      '@type': 'Person',
      name: 'Master Trainer Satheesan',
      jobTitle: 'Founder & Senior Rehabilitation Specialist',
      worksFor: {
        '@type': 'Organization',
        name: 'Fit4Steps Wellness'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fit4Steps Wellness',
      logo: {
        '@type': 'ImageObject',
        url: 'https://fit4steps.com/assets/image/logo-v2.webp'
      }
    },
    datePublished: '2026-08-01',
    dateModified: '2026-08-24'
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* 1. ARTICLE HEADER */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '820px' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              color: 'var(--primary-gold)',
              fontWeight: 600,
              marginBottom: '20px',
              textDecoration: 'none'
            }}
          >
            <ChevronLeft size={16} /> Back to Knowledge Hub
          </Link>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
            <span className="badge badge-gold">{art.category}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={13} /> {art.readTime}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>• {art.date}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-main)', lineHeight: 1.22, marginBottom: '20px', fontWeight: 800 }}>
            {art.title}
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-color)'
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--card-navy)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px' }}>
              MS
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>By Master Trainer Satheesan</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Founder & Certified Rehabilitation Coach (15+ Yrs Experience)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE BODY */}
      <section className="section-surface">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {/* Intro */}
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-main)', marginBottom: '24px', fontWeight: 500 }}>
              {art.content.intro}
            </p>

            {/* Clinical Context Box */}
            <div style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'rgba(201, 117, 8, 0.06)',
              border: '1px solid rgba(201, 117, 8, 0.2)',
              marginBottom: '36px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary-gold)', fontWeight: 700, marginBottom: '8px' }}>
                <Stethoscope size={18} /> Biomechanical Insight
              </div>
              <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>
                {art.content.clinicalContext}
              </p>
            </div>

            {/* Exercises List */}
            <h2 style={{ fontSize: '26px', color: 'var(--text-main)', marginBottom: '24px', fontWeight: 800 }}>
              Step-by-Step Exercise Instructions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '40px' }}>
              {art.content.exercises.map((ex, idx) => (
                <div key={idx} style={{
                  padding: '24px',
                  borderRadius: '16px',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)'
                }}>
                  <h3 style={{ fontSize: '20px', color: 'var(--text-main)', marginBottom: '6px', fontWeight: 700 }}>
                    {ex.name}
                  </h3>
                  <div style={{ fontSize: '13px', color: 'var(--primary-gold)', fontWeight: 600, marginBottom: '14px' }}>
                    Target Area: {ex.focus}
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>Execution Steps:</div>
                    <ol style={{ paddingLeft: '20px', margin: 0 }}>
                      {ex.steps.map((st, i) => (
                        <li key={i} style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '4px' }}>
                          {st}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    fontSize: '13px',
                    color: '#B91C1C',
                    background: 'rgba(239, 68, 68, 0.08)',
                    padding: '10px 14px',
                    borderRadius: '8px'
                  }}>
                    <AlertCircle size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Mistake to avoid:</strong> {ex.mistakesToAvoid}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Safety Tips */}
            <h2 style={{ fontSize: '24px', color: 'var(--text-main)', marginBottom: '16px', fontWeight: 700 }}>
              Crucial Safety Guidelines
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {art.content.safetyTips.map((tip, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <ShieldCheck size={18} color="var(--primary-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.6 }}>{tip}</span>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '32px' }}>
              {art.content.conclusion}
            </p>

            {/* In-Article Cross Link to Service */}
            <div style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'var(--card-navy)',
              color: '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--primary-gold)', fontWeight: 600, textTransform: 'uppercase' }}>
                  Need 1-on-1 Guidance?
                </div>
                <div style={{ fontSize: '18px', fontWeight: 700, marginTop: '2px' }}>
                  {art.leadServiceText}
                </div>
                <div style={{ fontSize: '13px', opacity: 0.8, marginTop: '4px' }}>
                  Certified coaches available in Noida, South Delhi & Gurugram.
                </div>
              </div>
              <Link href={art.leadServiceUrl} className="btn btn-gold" style={{ padding: '10px 20px', fontSize: '14px' }}>
                View In-Home Program <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Consult Directly with Master Trainer Satheesan
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Book a 45-minute doorstep physical assessment to design your safe, customized in-home routine.
          </p>
          <a
            href={`https://wa.me/919999448206?text=${encodeURIComponent(`Hi Master Trainer Satheesan, I read your article "${art.title}" and would like to ask a question.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Ask a Question on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
