import React, { useState } from 'react';
import { Play, Flame, Heart, Zap, Sparkles, Activity, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function InteractiveMockup() {
  const [activeTab, setActiveTab] = useState<'warmup' | 'mobility' | 'recovery'>('warmup');
  const [isPlaying, setIsPlaying] = useState(false);
  const [exerciseIndex, setExerciseIndex] = useState(0);

  const programs = {
    warmup: [
      { name: 'Hip Escape Mobility Flow', duration: '4 min', intensity: 'Medium', target: 'Hips & Lower Back' },
      { name: 'Thoracic Bridge Protocol', duration: '3 min', intensity: 'High', target: 'Shoulders & Spine' },
      { name: 'K Guard Knee-In Prep', duration: '5 min', intensity: 'Medium', target: 'Adductors & Knees' }
    ],
    mobility: [
      { name: 'Guard Retention Flex Flow', duration: '8 min', intensity: 'Low', target: 'Hip Flexors' },
      { name: 'Scapular Decompression', duration: '6 min', intensity: 'Low', target: 'Upper Back & Neck' },
      { name: 'Combat Base Squat Flow', duration: '10 min', intensity: 'Medium', target: 'Ankles & Deep Hips' }
    ],
    recovery: [
      { name: 'Post-Sparring Decompression', duration: '12 min', intensity: 'Low', target: 'CNS Reset' },
      { name: 'Hyper-Oxygenation Breath', duration: '5 min', intensity: 'Very Low', target: 'Parasympathetic' },
      { name: 'Joint Anti-Inflam System', duration: '15 min', intensity: 'Low', target: 'Full Body' }
    ]
  };

  const currentProgramList = programs[activeTab];
  const currentExercise = currentProgramList[exerciseIndex % currentProgramList.length];

  return (
    <div id="interactive-mockup" className="relative w-full aspect-[4/5] bg-gradient-to-b from-[#141414] to-[#0c0c0c] rounded-3xl border border-neutral-800 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden select-none">
      {/* Glossy top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50" />
      
      {/* Background ambient gold/green glow */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#D4AF37]/5 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-25%] right-[-20%] w-[70%] h-[70%] bg-[#19C15F]/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Interface Frame Container */}
      <div className="h-full flex flex-col justify-between relative z-10">
        
        {/* Mockup Top Header */}
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-white">BJJ SYSTEM v2.1</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] text-[#BFBFBF] bg-neutral-900 px-2 py-0.5 rounded-full border border-neutral-800 flex items-center gap-1">
              <Activity className="w-2.5 h-2.5 text-[#19C15F]" />
              98.4% RECOVERY
            </span>
          </div>
        </div>

        {/* Video / Visual Dashboard Area */}
        <div className="my-3 flex-1 min-h-0 bg-neutral-950/80 rounded-2xl border border-neutral-800/60 p-3 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(25,193,95,0.02),transparent)] pointer-events-none" />
          
          {/* Workout Video Simulation Card */}
          <div className="relative w-full aspect-[16/9] bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800/50 flex items-center justify-center">
            {/* Visual simulation of video scanlines or grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_95%,rgba(0,0,0,0.3)_5%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
            
            {/* Animated BJJ Athlete Wireframe Background (simulated with CSS circles and lines) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-24 h-24 rounded-full border border-neutral-700 flex items-center justify-center animate-spin" style={{ animationDuration: '25s' }}>
                <div className="w-16 h-16 rounded-full border border-dashed border-[#D4AF37]/50" />
              </div>
              <div className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-[#19C15F]/40 to-transparent transform rotate-45" />
              <div className="absolute w-32 h-[1px] bg-gradient-to-r from-transparent via-[#19C15F]/40 to-transparent transform -rotate-45" />
            </div>

            {/* Simulated Playback Overlay */}
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-neutral-950/40 p-2 flex flex-col justify-between"
                  onClick={() => setIsPlaying(false)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-mono text-[#19C15F] bg-[#19C15F]/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-[#19C15F] animate-ping" />
                      LIVE TUTORIAL PREVIEW
                    </span>
                    <span className="text-[8px] font-mono text-[#BFBFBF]">0:47 / {currentExercise.duration}</span>
                  </div>
                  <div className="w-full flex justify-center pb-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-900/90 border border-neutral-700 flex items-center justify-center text-[#19C15F] scale-90 shadow-md">
                      <div className="w-2.5 h-2.5 bg-[#19C15F] rounded-sm" />
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "42%" }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-[#19C15F] to-[#D4AF37]" 
                    />
                  </div>
                </motion.div>
              ) : (
                <div 
                  className="absolute inset-0 cursor-pointer flex flex-col justify-center items-center bg-black/60 hover:bg-black/50 transition-colors group"
                  onClick={() => setIsPlaying(true)}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-[#19C15F] flex items-center justify-center text-white shadow-[0_0_15px_rgba(25,193,95,0.4)] group-hover:shadow-[0_0_20px_rgba(25,193,95,0.6)] transition-all"
                  >
                    <Play className="w-5 h-5 fill-white translate-x-0.5" />
                  </motion.div>
                  <span className="mt-2 text-[9px] tracking-wider uppercase font-mono text-[#BFBFBF]">Click to preview flow</span>
                </div>
              )}
            </AnimatePresence>
            
            {/* Corner wireframe corners to make it look premium/tactical */}
            <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-neutral-700" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-neutral-700" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-neutral-700" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-neutral-700" />
          </div>

          {/* Current Program Stats Dashboard */}
          <div className="mt-2 flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-display font-medium text-white line-clamp-1">{currentExercise.name}</span>
              <span className="text-[9px] font-mono text-[#D4AF37] px-1.5 py-0.2 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/20 whitespace-nowrap">
                {currentExercise.duration}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 mt-0.5">
              <div className="bg-neutral-900/60 p-1.5 rounded-lg border border-neutral-800/40 text-center">
                <p className="text-[7px] text-[#BFBFBF] uppercase tracking-wider font-mono">Intensity</p>
                <p className="text-[9px] font-semibold text-white mt-0.5 flex items-center justify-center gap-0.5">
                  <Flame className="w-2.5 h-2.5 text-orange-500 fill-orange-500/10" />
                  {currentExercise.intensity}
                </p>
              </div>
              <div className="bg-neutral-900/60 p-1.5 rounded-lg border border-neutral-800/40 text-center">
                <p className="text-[7px] text-[#BFBFBF] uppercase tracking-wider font-mono">Focus Target</p>
                <p className="text-[9px] font-semibold text-white mt-0.5 truncate">{currentExercise.target}</p>
              </div>
              <div className="bg-neutral-900/60 p-1.5 rounded-lg border border-neutral-800/40 text-center cursor-pointer hover:border-neutral-700/60 transition-colors" onClick={() => setExerciseIndex(prev => prev + 1)}>
                <p className="text-[7px] text-[#BFBFBF] uppercase tracking-wider font-mono">Up Next</p>
                <p className="text-[9px] font-semibold text-[#19C15F] mt-0.5 flex items-center justify-center gap-0.5">
                  Next <Zap className="w-2.5 h-2.5" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Controls (Interactable) */}
        <div className="flex bg-neutral-950 p-1 rounded-xl border border-neutral-800">
          {(['warmup', 'mobility', 'recovery'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setExerciseIndex(0);
                setIsPlaying(false);
              }}
              className={`flex-1 py-1.5 text-[10px] font-display font-medium rounded-lg uppercase tracking-wider transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-neutral-800 text-white font-bold shadow-sm'
                  : 'text-[#BFBFBF] hover:text-white'
              }`}
            >
              {tab === 'warmup' ? 'WARM-UPS' : tab === 'mobility' ? 'MOBILITY' : 'RECOVERY'}
            </button>
          ))}
        </div>

        {/* Product Mockup Tag Overlay to confirm Mockup Requirement */}
        <div className="mt-3 py-1 bg-neutral-900/80 border border-neutral-800 rounded-xl flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[10px] font-mono tracking-[0.1em] text-[#D4AF37] uppercase font-bold">PRODUCT MOCKUP PLACEHOLDER</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#19C15F]" />
        </div>
      </div>
    </div>
  );
}
