import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp, Check, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PainPoint } from '../types';

export default function Checklist() {
  const [selectedId, setSelectedId] = useState<string | null>('mobility');

  const painPoints: PainPoint[] = [
    {
      id: 'mobility',
      title: 'Limited mobility',
      desc: 'Inability to close deep guards, clear frames, or slide into sweeps without pinching joints or risking groin strains.',
      solution: 'Our target Mobility Flows unlock deep BJJ angles so you transition smoothly without feeling stiff.'
    },
    {
      id: 'recovery',
      title: 'Poor recovery',
      desc: 'Waking up stiff, sore, and exhausted. Feeling completely depleted after just two hard rounds of sparring.',
      solution: 'Our active Decompression protocols reset your central nervous system so you wake up fully energized.'
    },
    {
      id: 'fatigue',
      title: 'Shoulder fatigue',
      desc: 'Your arms feel like lead after framing. Once your shoulders fail, you expose your neck, back, and posture.',
      solution: 'Targeted joint stabilization exercises reinforce your shoulders, making your defensive frames solid as concrete.'
    },
    {
      id: 'grip',
      title: 'Weak grip',
      desc: 'Losing sleeve control in seconds. Your fingers cramp up, forcing you into a defensive, reactive game.',
      solution: 'Specific tendon-glide warm-ups and isometric grip protocols ensure your controls remain locked in.'
    },
    {
      id: 'endurance',
      title: 'Low endurance',
      desc: 'Technical execution completely collapses the second your heart rate spikes and you enter oxygen debt.',
      solution: 'Specific jiu-jitsu cardiovascular training conditions your lungs to keep you calm and technical in deep water.'
    }
  ];

  return (
    <div id="self-assessment" className="space-y-3 my-6">
      {painPoints.map((point) => {
        const isOpen = selectedId === point.id;
        return (
          <div
            key={point.id}
            onClick={() => setSelectedId(isOpen ? null : point.id)}
            className={`border rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-[#121212] border-[#D4AF37]/40 shadow-[0_4px_20px_rgba(212,175,55,0.06)]'
                : 'bg-[#121212]/40 border-white/5 hover:border-white/10'
            }`}
          >
            <div className="p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                    isOpen ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-red-950/40 text-red-500 border border-red-900/30'
                  }`}
                >
                  <span className="font-sans text-xs font-bold">✕</span>
                </div>
                <span className={`font-display text-xs md:text-sm font-semibold transition-colors ${
                  isOpen ? 'text-[#D4AF37]' : 'text-white'
                }`}>
                  {point.title}
                </span>
              </div>
              <div>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-[#D4AF37]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-500" />
                )}
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="px-4 pb-4 pt-1 border-t border-neutral-800/50 space-y-3">
                    <p className="text-xs text-[#BFBFBF] leading-relaxed">
                      {point.desc}
                    </p>
                    <div className="bg-[#19C15F]/5 border border-[#19C15F]/20 rounded-xl p-3 flex items-start gap-2.5">
                      <Zap className="w-4 h-4 text-[#19C15F] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-mono text-[#19C15F] uppercase tracking-wider font-bold">The Solution</p>
                        <p className="text-[11px] text-[#BFBFBF] leading-relaxed mt-0.5">{point.solution}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
