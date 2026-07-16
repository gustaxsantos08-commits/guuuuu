import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Check, ShieldCheck, Lock, ChevronRight, Award, Flame, Activity, Zap, Sparkles } from 'lucide-react';
import { OrderState } from './types';
import InteractiveMockup from './components/InteractiveMockup';
import Checklist from './components/Checklist';
import FeatureCards from './components/FeatureCard';
import UpgradeModal from './components/UpgradeModal';

export default function App() {
  const [orderState, setOrderState] = useState<OrderState>({ status: 'idle' });

  const handleUpgrade = () => {
    setOrderState({
      status: 'processing',
      selectedOption: 'upgrade',
    });
  };

  const handleDecline = () => {
    setOrderState({
      status: 'processing',
      selectedOption: 'main_only',
    });
  };

  const handleCloseModal = () => {
    setOrderState({ status: 'idle' });
  };

  return (
    <div className="min-h-screen bg-[#020202] flex flex-col items-center justify-start select-none font-sans overflow-x-hidden relative">
      
      {/* Decorative desktop-only ambient grid/glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none hidden md:block" />
      <div className="absolute top-[10%] left-1/2 -translate-x-[600px] w-[500px] h-[500px] bg-[#D4AF37]/2 blur-[140px] rounded-full pointer-events-none hidden md:block" />
      <div className="absolute bottom-[20%] left-1/2 translate-x-[200px] w-[600px] h-[600px] bg-[#19C15F]/2 blur-[160px] rounded-full pointer-events-none hidden md:block" />

      {/* Main Mobile-First Container (Max 430px) */}
      <div className="w-full max-w-[430px] bg-[#090909] text-white min-h-screen shadow-[0_0_80px_rgba(0,0,0,0.95)] border-x border-neutral-900/80 relative flex flex-col justify-between pb-10">
        
        {/* Red Urgency Alert Banner */}
        <div className="bg-[#cc1111] text-white px-4 py-3 text-center relative z-40 border-b border-red-800">
          <p className="text-[11px] font-sans font-black tracking-wide leading-snug uppercase">
            ⚠️ WAIT! YOUR ORDER IS NOT COMPLETE YET!
          </p>
          <p className="text-[9px] text-red-100 mt-0.5 leading-tight font-medium">
            Do NOT close or refresh this page — you'll lose your order and this exclusive offer forever.
          </p>
        </div>

        {/* Progress bar from the previous page */}
        <div className="bg-[#0f0f0f] px-4 py-2.5 border-b border-white/5 z-40 flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-[10px] font-mono font-bold text-neutral-400">
            <span>Finalizing your order...</span>
            <span className="text-blue-500 font-bold">91% Complete</span>
          </div>
          <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full w-[91%]" />
          </div>
        </div>

        {/* Outer scrollable area */}
        <div className="px-5 pt-6 flex-1">
          
          {/* ==========================================
              SECTION 1: HERO & PERSUASION
             ========================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col items-center"
          >
            {/* Warning badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-4 shadow-[0_2px_10px_rgba(212,175,55,0.05)] animate-bounce">
              <AlertTriangle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-extrabold uppercase">
                ⚠️ WAIT!
              </span>
            </div>

            {/* Large Headline */}
            <h1 className="font-display font-black text-3xl tracking-tight leading-none text-white uppercase">
              Your techniques <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#BFBFBF] to-[#D4AF37]">are ready.</span>
            </h1>

            {/* Subhead block */}
            <div className="mt-4 space-y-2 max-w-[340px]">
              <h2 className="font-display font-bold text-sm text-[#D4AF37] tracking-tight uppercase">
                Mastering techniques is only the first step.
              </h2>
              <h3 className="text-xs text-[#BFBFBF] leading-relaxed font-medium">
                Performing them consistently is what separates average grapplers from exceptional ones.
              </h3>
            </div>

            {/* Body Copy */}
            <p className="text-xs text-neutral-400 mt-5 leading-relaxed max-w-[340px]">
              The better your body performs, the more effectively you can apply every technique you've already learned.
            </p>
          </motion.div>

          {/* Premium Mockup Placeholder Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="my-7"
          >
            <InteractiveMockup />
          </motion.div>

          {/* Premium Information Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#121212] border border-white/5 p-3.5 rounded-2xl flex items-start gap-3 shadow-md"
          >
            <span className="text-lg shrink-0 select-none">🥋</span>
            <p className="text-[11px] text-[#BFBFBF] leading-normal font-medium">
              Designed specifically for BJJ athletes who want to train consistently, recover faster, and perform at their best.
            </p>
          </motion.div>

          {/* Immediately below the badge... Large Green CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 mb-12"
          >
            <button
              onClick={handleUpgrade}
              className="w-full bg-[#19C15F] hover:bg-[#15A350] text-white font-display font-black text-[12px] uppercase tracking-wider py-4 px-6 rounded-2xl shadow-lg shadow-[#19C15F]/25 active:scale-98 transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5"
            >
              <span className="text-[10px] tracking-widest text-[#D4AF37] font-black uppercase font-mono">YES! ADD TO MY ORDER</span>
              <span className="text-white font-bold leading-none">Add the BJJ Performance System to My Order</span>
            </button>
          </motion.div>


          {/* ==========================================
              SECTION 2: CORE GRAAPLER BOTTLENECK
             ========================================== */}
          <div className="border-t border-white/5 pt-10 pb-8">
            <div className="text-center">
              <span className="text-[9px] font-mono text-[#D4AF37] tracking-widest font-black uppercase bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full">
                COMMON BOTTLENECK
              </span>
              <h2 className="font-display font-black text-xl text-white uppercase tracking-tight mt-3">
                Why do so many grapplers improve slowly?
              </h2>
            </div>

            <div className="space-y-3.5 mt-5 text-xs text-[#BFBFBF] leading-relaxed">
              <p>
                It's usually <strong className="text-white font-bold">not because they lack techniques</strong>.
              </p>
              <p>
                Most grapplers already know what they should do.
              </p>
              <p>
                The real challenge is <strong className="text-[#D4AF37] font-bold">being physically prepared</strong> to execute those techniques consistently during every training session and every match.
              </p>
            </div>

            {/* Interactive self-diagnosis point checklist */}
            <Checklist />

            <div className="mt-6 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-2xl p-4 text-center">
              <p className="text-xs text-[#BFBFBF] leading-relaxed">
                When your body performs better... <br />
                <strong className="text-white font-bold font-display uppercase tracking-wide text-[13px] block mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4AF37]">
                  Every technique becomes easier to execute.
                </strong>
              </p>
            </div>
          </div>


          {/* ==========================================
              SECTION 3: INTRODUCING THE SYSTEM
             ========================================== */}
          <div className="border-t border-white/5 pt-10 pb-8">
            <div className="text-center">
              <span className="text-[10px] font-mono text-[#19C15F] tracking-widest font-bold uppercase">
                EXCLUSIVE SYSTEM OVERVIEW
              </span>
              <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-[0.25em] mt-1.5 font-bold">
                Introducing
              </h3>
              <h2 className="font-display font-black text-3xl text-white tracking-tight leading-none uppercase mt-1">
                BJJ PERFORMANCE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-white to-neutral-400">SYSTEM</span>
              </h2>
              <p className="text-xs text-[#BFBFBF] leading-relaxed max-w-[320px] mx-auto mt-3">
                The complete physical performance system designed specifically for Jiu-Jitsu practitioners.
              </p>
            </div>

            {/* Core Action Slogan badges */}
            <div className="grid grid-cols-2 gap-2 mt-5">
              <div className="bg-[#121212] border border-white/5 rounded-xl p-2.5 text-center flex flex-col items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#19C15F] mb-1 animate-pulse" />
                <span className="text-[10px] font-display font-black text-white uppercase tracking-wider">Train Harder</span>
              </div>
              <div className="bg-[#121212] border border-white/5 rounded-xl p-2.5 text-center flex flex-col items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mb-1 animate-pulse" />
                <span className="text-[10px] font-display font-black text-white uppercase tracking-wider">Recover Faster</span>
              </div>
              <div className="bg-[#121212] border border-white/5 rounded-xl p-2.5 text-center flex flex-col items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#19C15F] mb-1 animate-pulse" />
                <span className="text-[10px] font-display font-black text-white uppercase tracking-wider">Move Better</span>
              </div>
              <div className="bg-[#121212] border border-white/5 rounded-xl p-2.5 text-center flex flex-col items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mb-1 animate-pulse" />
                <span className="text-[10px] font-display font-black text-white uppercase tracking-wider">Perform At Highest</span>
              </div>
            </div>

            {/* Six Premium Feature Cards */}
            <FeatureCards />
          </div>


          {/* ==========================================
              OFFER CARD & PRICING
             ========================================== */}
          <div className="border-t border-white/5 pt-10 pb-8">
            <div className="bg-black border border-[#D4AF37] rounded-3xl p-6 relative overflow-hidden shadow-2xl shadow-black">
              {/* Glow backing */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 blur-[40px] rounded-full pointer-events-none" />

              {/* Tag */}
              <div className="absolute top-4 right-4 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-2.5 py-0.5 rounded-full">
                <span className="text-[8px] font-mono font-black text-[#D4AF37] tracking-widest uppercase">EXCLUSIVE UPGRADE</span>
              </div>

              <h4 className="font-display font-black text-lg uppercase tracking-tight text-white mb-4">
                The BJJ Performance Package
              </h4>

              {/* Price elements */}
              <div className="space-y-1 mb-5">
                <p className="text-[10px] font-mono text-[#BFBFBF]/60 uppercase tracking-widest flex items-center gap-1.5">
                  Retail Price
                  <span className="line-through font-bold text-neutral-600">$297</span>
                </p>
                <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                  Today's Exclusive Price
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display font-black text-white tracking-tight">$47</span>
                  <span className="text-xs text-neutral-500 font-mono">one-time only</span>
                </div>
              </div>

              {/* Features check list */}
              <div className="space-y-2.5 border-t border-white/5 pt-4 mb-6 text-xs text-[#BFBFBF]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#19C15F] shrink-0" />
                  <span className="font-medium">One-Time Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#19C15F] shrink-0" />
                  <span className="font-medium">Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#19C15F] shrink-0" />
                  <span className="font-medium">30-Day Money-Back Guarantee</span>
                </div>
              </div>

              {/* CTA Upgrade Button inside Offer Card */}
              <button
                onClick={handleUpgrade}
                className="w-full bg-[#19C15F] hover:bg-[#15A350] text-white font-display font-black text-[12px] uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-[#19C15F]/20 active:scale-98 transition-all cursor-pointer flex flex-col items-center justify-center"
              >
                <span className="text-[9px] tracking-widest text-[#D4AF37] font-black leading-none mb-0.5">YES! UPGRADE MY ORDER</span>
                <span className="font-bold">Add the BJJ Performance System to My Order</span>
              </button>

              {/* No thanks decline link */}
              <div className="mt-4 text-center">
                <button
                  onClick={handleDecline}
                  className="text-[11px] text-neutral-500 hover:text-neutral-300 font-mono font-medium underline underline-offset-4 transition-colors cursor-pointer"
                >
                  No thanks. I'll continue with my current order.
                </button>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee section matching screenshot 3 exactly */}
          <div className="mt-6 mb-8 bg-[#121212] border border-white/5 rounded-2xl p-5 flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-[#19C15F]/10 text-[#19C15F] border border-[#19C15F]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-display font-bold text-sm text-white">30-Day Money Back Guarantee</h4>
              <p className="text-xs text-[#BFBFBF] leading-relaxed">
                Try it risk-free. If you're not completely satisfied, email us within 30 days for a full refund — no questions asked.
              </p>
            </div>
          </div>

          {/* Guarantee Safe Seals */}
          <div className="flex items-center justify-center gap-6 py-2 border-t border-white/5 mt-4 text-neutral-600">
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-neutral-600" />
              <span className="text-[9px] font-mono uppercase tracking-wider font-semibold">SSL Secured</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4 text-neutral-600" />
              <span className="text-[9px] font-mono uppercase tracking-wider font-semibold">Athlete Approved</span>
            </div>
          </div>

        </div>

        {/* ==========================================
            FOOTER SECTION
           ========================================== */}
        <div className="px-5 pt-4 border-t border-white/5 text-center">
          <p className="text-[9px] font-mono text-neutral-600 uppercase tracking-[0.2em] font-bold">
            Secure Checkout • Instant Access • 30-Day Money-Back Guarantee
          </p>
          <p className="text-[8px] font-mono text-neutral-700 uppercase tracking-widest mt-2">
            © 2026 BJJ Performance Labs. All Rights Reserved.
          </p>
        </div>

      </div>

      {/* Instant Secure One-Click Checkout Sim Modal */}
      <UpgradeModal orderState={orderState} onClose={handleCloseModal} />
      
    </div>
  );
}
