import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  Dumbbell,
  ArrowRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Flame,
  Zap,
  Award,
  Clock
} from 'lucide-react';

interface ProgramDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  intensity: string;
  duration: string;
  benefits: string[];
  equipmentNeeded: string;
  suitableFor: string;
  curriculum: { phase: string; title: string; desc: string }[];
}

const programsData: Record<string, ProgramDetail> = {
  'weight-training': {
    slug: 'weight-training',
    title: 'In-Home Weight Training',
    tagline: 'Hypertrophy, Strength & Metabolic Body Toning',
    description: 'Progressive resistance training utilizing adjustable dumbbells, kettlebells, resistance bands, and bodyweight to stimulate muscle hypertrophy, increase metabolism, and sculpt lean body mass.',
    intensity: 'Moderate to High',
    duration: '60 Minutes / Session',
    benefits: [
      'Increases lean muscle mass and resting metabolic rate',
      'Strengthens connective tendons and improves bone density',
      'Customized progression avoiding joint hyperextension',
      'All portable weights and resistance bands provided by coach'
    ],
    equipmentNeeded: 'Adjustable dumbbells, resistance loops, workout bench/mat (brought by trainer)',
    suitableFor: 'Individuals aiming for fat loss, muscle definition, and full-body structural strength',
    curriculum: [
      { phase: 'Phase 1', title: 'Movement Pattern Mastery', desc: 'Squat, hinge, push, and pull biomechanics with neutral spine control.' },
      { phase: 'Phase 2', title: 'Progressive Overload', desc: 'Gradually increasing resistance and time-under-tension for muscle tone.' },
      { phase: 'Phase 3', title: 'Functional Integration', desc: 'Multi-planar strength exercises that translate into daily stamina.' }
    ]
  },
  'yoga': {
    slug: 'yoga',
    title: 'Traditional Hatha & Vinyasa Yoga',
    tagline: 'Spinal Decompression, Joint Mobility & Serenity',
    description: 'Classical yoga asanas synchronized with conscious pranayama breathing to enhance joint range of motion, relieve spinal compression from sedentary desk hours, and cultivate mental calm.',
    intensity: 'Gentle to Moderate',
    duration: '60 Minutes / Session',
    benefits: [
      'Relieves lower back stiffness and anterior pelvic tilt',
      'Calms sympathetic nervous system and lowers resting cortisol',
      'Deep opening for tight hips, hamstrings, and thoracic spine',
      'Guided by certified yoga masters with anatomical awareness'
    ],
    equipmentNeeded: 'Eco-friendly non-slip yoga mat, yoga bricks, cotton yoga strap',
    suitableFor: 'All age groups, beginners, seniors, and corporate executives needing stress relief',
    curriculum: [
      { phase: 'Phase 1', title: 'Breath & Joint Lubrication', desc: 'Sukshma Vyayama gentle joint warming and diaphragmatic breathing.' },
      { phase: 'Phase 2', title: 'Asana Alignment & Holds', desc: 'Classical standing and seated postures with precise alignment.' },
      { phase: 'Phase 3', title: 'Pranayama & Shavasana', desc: 'Nadi Shodhana breathing and restorative relaxation for nervous system reset.' }
    ]
  },
  'power-yoga': {
    slug: 'power-yoga',
    title: 'Athletic Power Yoga',
    tagline: 'Dynamic Heat, Caloric Burn & Muscular Endurance',
    description: 'A vigorous, fitness-based approach to vinyasa yoga. High-cadence flow series combined with core-centric isometric holds build internal heat, sweat out toxins, and develop functional power.',
    intensity: 'High Intensity',
    duration: '50 - 60 Minutes',
    benefits: [
      'Elevated heart rate with joint-friendly flexibility',
      'Builds deep abdominal and shoulder stabilizing power',
      'Improves cardiovascular endurance without treadmill monotony',
      'Enhances mental grit and balance under fatigue'
    ],
    equipmentNeeded: 'Traction grip mat, resistance bands, yoga blocks',
    suitableFor: 'Intermediate practitioners, runners, and individuals wanting an athletic sweat session',
    curriculum: [
      { phase: 'Phase 1', title: 'Dynamic Sun Salutations', desc: 'Fast-paced Surya Namaskar variations to elevate cardiac workload.' },
      { phase: 'Phase 2', title: 'Strength Flows & Balances', desc: 'Warrior series, chair poses, and arm balance progressions.' },
      { phase: 'Phase 3', title: 'Deep Fascial Release', desc: 'Pigeon poses and seated twists to prevent delayed muscle soreness.' }
    ]
  },
  'pilates': {
    slug: 'pilates',
    title: 'Mat & Core Pilates',
    tagline: 'Pelvic Alignment, Waistline Toning & Spine Support',
    description: 'Precision core activation focusing on the transverse abdominis, pelvic floor, and lumbar stabilizers. Ideal for toning the waistline and fixing chronic lower back aches.',
    intensity: 'Moderate Intensity',
    duration: '55 - 60 Minutes',
    benefits: [
      'Flattens and strengthens the deep abdominal wall',
      'Corrects anterior pelvic tilt and posture slumping',
      'Non-impact, low-load movements safe for spinal discs',
      'Strengthens the gluteal complex and hip rotators'
    ],
    equipmentNeeded: 'Pilates small ball, mini-loop bands, high-density exercise mat',
    suitableFor: 'Postnatal mothers, desk workers with lower back pain, and tone seekers',
    curriculum: [
      { phase: 'Phase 1', title: 'Imprint & Neutral Pelvis', desc: 'Finding anatomical neutral spine and learning core bracing.' },
      { phase: 'Phase 2', title: 'The Classical Mat Series', desc: 'The Hundred, Single Leg Stretch, Criss-Cross, and Roll-Up progressions.' },
      { phase: 'Phase 3', title: 'Glute-Core Integration', desc: 'Bridge variations and lateral leg lifts to sculpt hips and thighs.' }
    ]
  },
  'aerobics': {
    slug: 'aerobics',
    title: 'Aerobics & Cardio Conditioning',
    tagline: 'High-Energy Rhythm, Stamina & Cardiovascular Health',
    description: 'Rhythmic, high-energy cardio choreographies that elevate heart rate, improve cardiovascular oxygenation, and turn home workouts into an exhilarating rhythm session.',
    intensity: 'Moderate to High',
    duration: '45 - 60 Minutes',
    benefits: [
      'Accelerates calorie burning and metabolic conditioning',
      'Boosts brain endorphins, lifting mood and relieving anxiety',
      'Strengthens cardiac stroke volume and lung capacity',
      'Fun, music-synchronized home workout routines'
    ],
    equipmentNeeded: 'Light hand weights, resistance bands, non-slip mat',
    suitableFor: 'Anyone wanting high-energy cardiovascular conditioning at home',
    curriculum: [
      { phase: 'Phase 1', title: 'Cardio Warm-Up', desc: 'Low-impact stepping and arm patterns to gradually elevate pulse.' },
      { phase: 'Phase 2', title: 'Aerobic Peak Phase', desc: 'Intervals of energetic movement sequences that maximize stamina.' },
      { phase: 'Phase 3', title: 'Gradual Cool-Down', desc: 'Heart-rate recovery stretches for calves, hamstrings, and shoulders.' }
    ]
  },
  'kick-boxing': {
    slug: 'kick-boxing',
    title: 'Kick Boxing & Combat Agility',
    tagline: 'Striking Power, Reflexes & Executive Catharsis',
    description: 'High-intensity striking drills using focus pads, shadow boxing, and agility footwork. Enhances hand-eye coordination, hip rotational speed, and releases workday stress and frustration.',
    intensity: 'Very High Intensity',
    duration: '45 - 55 Minutes',
    benefits: [
      'Explosive rotational core power from hips and torso',
      'Rapid stress release and cathartic executive mental reset',
      'High calorie burn in a dynamic, empowering format',
      'Trainer provides target pads and wraps for safe striking'
    ],
    equipmentNeeded: 'Focus mitts, boxing gloves, hand wraps, agility cones',
    suitableFor: 'Executives, teens, and adults wanting fun martial-arts conditioning',
    curriculum: [
      { phase: 'Phase 1', title: 'Stance & Footwork', desc: 'Orthodox/Southpaw footwork, pivoting, and head movement drills.' },
      { phase: 'Phase 2', title: 'Pad Combinations', desc: 'Jab-cross-hook-uppercut and roundhouse kick combinations on pads.' },
      { phase: 'Phase 3', title: 'Core Conditioning Burnout', desc: 'Rotational medicine ball twists and planks.' }
    ]
  },
  'stretching-mobility': {
    slug: 'stretching-mobility',
    title: 'Assisted Stretching & Fascial Mobility',
    tagline: 'Joint Restoration, Decompression & Muscle Release',
    description: 'Our signature assisted passive stretching protocol. Your trainer applies calculated traction to decompress tight joints, release myofascial knots, and restore pain-free walking.',
    intensity: 'Restorative & Therapeutic',
    duration: '60 Minutes',
    benefits: [
      'Eliminates chronic neck, shoulder, and lower back spasms',
      'Restores full anatomical joint range of motion',
      'Crucial for senior knee recovery and post-workout recovery',
      'Stimulates lymphatic drainage and blood circulation'
    ],
    equipmentNeeded: 'Foam roller, massage balls, stretch straps (all provided)',
    suitableFor: 'Seniors with osteoarthritis, stiff executives, and recovering athletes',
    curriculum: [
      { phase: 'Phase 1', title: 'Myofascial Palpation', desc: 'Identifying tight muscle trigger points in hips and thoracic spine.' },
      { phase: 'Phase 2', title: 'Assisted PNF Stretches', desc: 'Contract-relax stretching techniques that expand flexibility safely.' },
      { phase: 'Phase 3', title: 'Joint Decompression', desc: 'Gentle manual traction for hips, ankles, and lumbar spine.' }
    ]
  },
  'ball-exercise': {
    slug: 'ball-exercise',
    title: 'Swiss Ball Stability Training',
    tagline: 'Unstable Surface Core & Balance Mastery',
    description: 'Unstable surface training on anti-burst Swiss exercise balls. Forces micro-stabilizer muscles in the hips, spine, and ankles to fire, creating unbreakable balance.',
    intensity: 'Moderate Intensity',
    duration: '50 - 60 Minutes',
    benefits: [
      'Recruits deep transverse core and spinal multifidus',
      'Zero-impact spinal support while performing abdominal work',
      'Directly corrects poor sitting posture for desk workers',
      'Safe and supportive for senior balance conditioning'
    ],
    equipmentNeeded: 'Anti-burst professional Swiss stability ball (provided)',
    suitableFor: 'People with chronic back pain, seniors, and posture-conscious adults',
    curriculum: [
      { phase: 'Phase 1', title: 'Seated Postural Tilts', desc: 'Pelvic clocks and balance balancing drills in a seated position.' },
      { phase: 'Phase 2', title: 'Prone & Supine Stability', desc: 'Swiss ball bridges, roll-outs, and hamstring curls.' },
      { phase: 'Phase 3', title: 'Spinal Extension Stretch', desc: 'Gentle supine drape over the ball to open tight chest and thoracic cage.' }
    ]
  },
  'circuit-training': {
    slug: 'circuit-training',
    title: 'In-Home Circuit Training',
    tagline: 'High-Density Fat Burn & Functional Endurance',
    description: 'Multi-station timed workout circuits alternating upper body, lower body, and core stations with minimal rest to keep heart rates in the optimal fat-burning zone.',
    intensity: 'High Intensity',
    duration: '45 - 55 Minutes',
    benefits: [
      'Generates post-exercise oxygen consumption (EPOC) fat burn',
      'Time-efficient total body conditioning without wasted minutes',
      'Varied exercise stations prevent boredom and plateauing',
      'Customized to apartment living spaces without noise or disturbance'
    ],
    equipmentNeeded: 'Kettlebells, agility markers, resistance tubes, sliders',
    suitableFor: 'Weight loss seekers and individuals wanting fast, structured sessions',
    curriculum: [
      { phase: 'Station 1', title: 'Lower Body Power', desc: 'Squats, lunges, and step-ups.' },
      { phase: 'Station 2', title: 'Upper Body Conditioning', desc: 'Push-ups, rows, and overhead presses.' },
      { phase: 'Station 3', title: 'Core & Agility', desc: 'Plank jacks, mountain climbers, and rotational holds.' }
    ]
  },
  'hiit': {
    slug: 'hiit',
    title: 'High-Intensity Interval Training (HIIT)',
    tagline: 'Maximum Calorie Burn & Cardiovascular Peak',
    description: 'Short, explosive bursts of exercise paired with brief active recovery intervals. Maximizes post-workout calorie burn in half the time of steady-state cardio.',
    intensity: 'Very High Intensity',
    duration: '35 - 45 Minutes',
    benefits: [
      'Maximum metabolic boost in under 45 minutes',
      'Preserves lean muscle while burning visceral fat',
      'Significantly increases VO2 max and cellular mitochondrial density',
      'Tailored with low-impact variations to protect joints'
    ],
    equipmentNeeded: 'Heart-rate monitor, resistance bands, jump rope',
    suitableFor: 'Busy professionals seeking maximum fitness in minimal time',
    curriculum: [
      { phase: 'Block 1', title: 'Metabolic Primer', desc: 'Progressive intervals to safely bring heart rate into threshold zones.' },
      { phase: 'Block 2', title: 'Tabata / HIIT Intervals', desc: '20s work / 10s rest or 40s work / 20s rest dynamic cycles.' },
      { phase: 'Block 3', title: 'Active Recovery Downshift', desc: 'Breathing normalization and standing static stretches.' }
    ]
  },
  'trx-exercise': {
    slug: 'trx-exercise',
    title: 'TRX Suspension Training',
    tagline: 'Bodyweight Resistance & 3D Functional Power',
    description: 'Using military-grade suspension straps anchored to a home door or beam, TRX uses gravity and your bodyweight to develop 3-dimensional functional power.',
    intensity: 'Customizable / All Levels',
    duration: '50 - 60 Minutes',
    benefits: [
      'Infinite scalability: simply adjust your foot angle to change resistance',
      'Engages the core in 100% of movements',
      'Safe for joints: suspended straps allow natural rotational freedom',
      'Portable and clean setup that leaves zero marks in your home'
    ],
    equipmentNeeded: 'Official TRX suspension trainer with door anchor (provided)',
    suitableFor: 'All fitness levels, from beginners to advanced functional athletes',
    curriculum: [
      { phase: 'Phase 1', title: 'Suspended Rows & Presses', desc: 'Upper body pulling and pushing using body angle calibration.' },
      { phase: 'Phase 2', title: 'Suspended Squats & Lunges', desc: 'Deep knee and hip flexor ranges with strap support.' },
      { phase: 'Phase 3', title: 'Suspended Core Pikes', desc: 'Feet in foot cradles for atomic push-ups and core pikes.' }
    ]
  },
  'sports-games': {
    slug: 'sports-games',
    title: 'Sports Conditioning & Athletic Games',
    tagline: 'Tennis, Golf, Badminton & Running Agility',
    description: 'Sport-specific conditioning for badminton, tennis, marathon running, or golf. Combines lateral footwork, rotational power, and injury-prevention drills.',
    intensity: 'Moderate to High',
    duration: '60 Minutes',
    benefits: [
      'Improves rotational clubhead or racquet swing speed',
      'Prevents common sports injuries (tennis elbow, rotator cuff, ACL tears)',
      'Sharpens change-of-direction agility on court or field',
      'Engaging gamified drills that build competitive stamina'
    ],
    equipmentNeeded: 'Agility ladders, reaction balls, medicine balls, speed bands',
    suitableFor: 'Club players, weekend golfers, runners, and school athletes',
    curriculum: [
      { phase: 'Phase 1', title: 'Multi-Directional Footwork', desc: 'Agility ladder drills and lateral deceleration mechanics.' },
      { phase: 'Phase 2', title: 'Rotational Kinetic Chain', desc: 'Medicine ball rotational slams and anti-rotational Paloff presses.' },
      { phase: 'Phase 3', title: 'Sport Prehab Stretches', desc: 'Shoulder capsule stretches and ankle mobility preservation.' }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(programsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programsData[slug];
  if (!program) {
    return { title: 'Program Not Found | Fit4Steps' };
  }

  return {
    title: `${program.title} at Home | Noida, Delhi & Gurugram | Fit4Steps`,
    description: `${program.description.slice(0, 155)}... Book in-home ${program.title.toLowerCase()} in Delhi NCR.`,
    alternates: {
      canonical: `https://fit4steps.com/programs/${program.slug}`,
    }
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programsData[slug];

  if (!program) {
    notFound();
  }

  return (
    <div>
      {/* 1. HERO */}
      <section className="page-header-clean">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
            <Dumbbell size={14} /> Certified Home Program
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', color: 'var(--text-main)', lineHeight: 1.18, marginBottom: '16px' }}>
            {program.title} <br />
            <span className="text-gold">{program.tagline}</span>
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '28px' }}>
            {program.description}
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/919999448206?text=${encodeURIComponent(`Hi Fit4Steps, I would like to book a trial session for the "${program.title}" program at home.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              <MessageCircle size={18} /> Book Doorstep Trial Session
            </a>
            <Link href="/programs" className="btn btn-outline">
              View All 12 Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PROGRAM AT A GLANCE */}
      <section className="section-surface">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            <div className="card-clean">
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Session Duration</div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)' }}>{program.duration}</div>
            </div>
            <div className="card-clean">
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Intensity Level</div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)' }}>{program.intensity}</div>
            </div>
            <div className="card-clean">
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Trainer Accreditation</div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)' }}>ACE / Gold's / K11 Certified</div>
            </div>
            <div className="card-clean">
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Service Locations</div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)' }}>Noida, Delhi & Gurugram</div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px'
          }}>
            <div>
              <h2 style={{ fontSize: '24px', color: 'var(--text-main)', marginBottom: '16px', fontWeight: 700 }}>
                Target Outcomes & Key Benefits
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                {program.benefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle2 size={18} color="var(--primary-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '15px', color: 'var(--text-main)' }}>{b}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: '20px', borderRadius: '16px', background: 'var(--bg-main)', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '15px', color: 'var(--text-main)', marginBottom: '6px', fontWeight: 700 }}>Equipment Provided by Trainer:</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-body)', margin: 0 }}>{program.equipmentNeeded}</p>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '24px', color: 'var(--text-main)', marginBottom: '16px', fontWeight: 700 }}>
                Session Progression Structure
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {program.curriculum.map((c, i) => (
                  <div key={i} className="card-clean">
                    <span className="badge badge-navy" style={{ marginBottom: '8px' }}>{c.phase}</span>
                    <h3 style={{ fontSize: '17px', color: 'var(--text-main)', marginBottom: '6px', fontWeight: 700 }}>{c.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-body)', margin: 0 }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ fontSize: '28px', color: 'var(--text-main)', marginBottom: '16px' }}>
            Experience {program.title} in Your Home
          </h2>
          <p style={{ color: 'var(--text-body)', fontSize: '16px', lineHeight: 1.6, marginBottom: '28px' }}>
            Book a trial session with all required equipment brought directly to your doorstep.
          </p>
          <a
            href={`https://wa.me/919999448206?text=${encodeURIComponent(`Hi Fit4Steps, I would like to schedule a trial for ${program.title}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <MessageCircle size={18} /> Book Trial on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
