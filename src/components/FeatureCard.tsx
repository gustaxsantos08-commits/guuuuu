import React, { useState } from 'react';
import { ShieldCheck, Flame, Heart, Activity, Dumbbell, Calendar, Check, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Feature } from '../types';

export default function FeatureCards() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const features: Feature[] = [
    {
      id: 'warmup',
      title: 'Complete Warm-Up Protocols',
      badge: 'PRE-TRAINING',
      shortDesc: 'Activate grappling-specific muscles and neural pathways in 5-8 minutes.',
      detailDesc: 'Move away from generic cardio. These science-backed mobility protocols are designed specifically to prime your hips, rotator cuffs, and neck before stepping onto the mats. Reduces initial round fatigue by up to 35%.',
      duration: '5 - 8 mins',
      focus: 'Neural Activation'
    },
    {
      id: 'mobility',
      title: 'Mobility Flows',
      badge: 'MOVEMENT',
      shortDesc: 'Unlock deep joint angles to slide into positions and escape holds easily.',
      detailDesc: 'Say goodbye to stiff hips. Target the exact rotational capacity required for rubber guard, inverted transitions, deep half, and complex guard passes. Unshackles tight joints without sacrificing muscular power.',
      duration: '10 - 15 mins',
      focus: 'Joint Amplitude'
    },
    {
      id: 'recovery',
      title: 'Recovery Systems',
      badge: 'DECOMPRESSION',
      shortDesc: 'Active central nervous system protocols to optimize deep sleep and reset.',
      detailDesc: 'The secret weapon of elite competitors. Guided post-training routines trigger parasympathetic activation to stop soreness before it starts. Optimizes natural endocrine recovery so you can train hard consecutive days.',
      duration: '12 mins',
      focus: 'CNS Restoration'
    },
    {
      id: 'injury',
      title: 'Injury Prevention',
      badge: 'STABILIZATION',
      shortDesc: 'Strengthen shoulders, neck, and ligaments against high-stress submissions.',
      detailDesc: 'Reinforce the joints most vulnerable to injury in BJJ. Focuses on isometric neck strength, wrist stabilizers, and rotator cuff durability so you can tap out of choice rather than mechanical breakdown.',
      duration: '8 mins',
      focus: 'Joint Durability'
    },
    {
      id: 'strength',
      title: 'Jiu-Jitsu Strength Training',
      badge: 'PERFORMANCE',
      shortDesc: 'Build explosive rotational power, isometric grip tension, and core rigidity.',
      detailDesc: 'Grappling-specific weight and bodyweight regimes. Focuses on posterior chain power to boost sweeps, pull-ups for secure grips, and deep core stabilizers to resist high-pressure guard passes.',
      duration: '20 - 30 mins',
      focus: 'Functional Force'
    },
    {
      id: 'planning',
      title: 'Training & Competition Planning',
      badge: 'PERIODIZATION',
      shortDesc: 'Structure your weeks, match workloads, and peak safely for tournaments.',
      detailDesc: 'Prevent overtraining syndrome. This template shows you how to program light, medium, and heavy sparring days so you step on the mats in peak physical condition without lingering joint wear and tear.',
      duration: 'Self-paced',
      focus: 'Workload Strategy'
    }
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case 'warmup': return <Flame className="w-5 h-5 text-[#D4AF37]" />;
      case 'mobility': return <Activity className="w-5 h-5 text-[#D4AF37]" />;
      case 'recovery': return <Heart className="w-5 h-5 text-[#D4AF37]" />;
      case 'injury': return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'strength': return <Dumbbell className="w-5 h-5 text-[#D4AF37]" />;
      case 'planning': return <Calendar className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Check className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <div id="features" className="grid grid-cols-1 gap-4 my-6">
      {features.map((feature) => {
        const isExpanded = activeCardId === feature.id;
        return (
          <div
            key={feature.id}
            onClick={() => setActiveCardId(isExpanded ? null : feature.id)}
            className={`group bg-[#121212] border rounded-2xl p-4 cursor-pointer transition-all duration-300 relative overflow-hidden ${
              isExpanded
                ? 'border-[#19C15F]/40 shadow-[0_4px_25px_rgba(25,193,95,0.05)] bg-[#161616]'
                : 'border-white/5 hover:border-white/10'
            }`}
          >
            {/* Top right indicator badge */}
            <div className="absolute top-4 right-4 bg-neutral-950 px-2 py-0.5 rounded-full border border-neutral-800 text-[8px] font-mono font-bold tracking-wider text-[#BFBFBF] uppercase group-hover:border-neutral-700 transition-colors">
              {feature.badge}
            </div>

            <div className="flex items-start gap-3.5 pr-20">
              <div className="p-2 bg-neutral-950 border border-neutral-800 rounded-xl shrink-0 group-hover:border-[#D4AF37]/30 transition-colors">
                {getIcon(feature.id)}
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                  {feature.title}
                </h4>
                <p className="text-xs text-[#BFBFBF] leading-relaxed mt-1">
                  {feature.shortDesc}
                </p>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="mt-4 pt-3 border-t border-neutral-800/50 text-xs text-[#BFBFBF] space-y-3 leading-relaxed">
                    <p>{feature.detailDesc}</p>
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="bg-neutral-950/60 p-2 rounded-xl border border-neutral-800/60">
                        <span className="block text-[8px] uppercase tracking-wider text-[#BFBFBF]/60 font-mono">Suggested Time</span>
                        <span className="font-display font-semibold text-[#D4AF37] text-[11px]">{feature.duration}</span>
                      </div>
                      <div className="bg-neutral-950/60 p-2 rounded-xl border border-neutral-800/60">
                        <span className="block text-[8px] uppercase tracking-wider text-[#BFBFBF]/60 font-mono">Core Focus</span>
                        <span className="font-display font-semibold text-white text-[11px]">{feature.focus}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tap to expand micro instruction */}
            <div className="mt-2.5 flex items-center justify-end text-[9px] text-neutral-500 font-mono gap-1 font-medium">
              <span>{isExpanded ? 'Tap to close' : 'Tap to expand full protocol details'}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
