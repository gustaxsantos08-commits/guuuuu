import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ShieldCheck, Lock, Sparkles, X, ChevronRight, Activity, Trophy } from 'lucide-react';
import { OrderState } from '../types';

interface UpgradeModalProps {
  orderState: OrderState;
  onClose: () => void;
}

export default function UpgradeModal({ orderState, onClose }: UpgradeModalProps) {
  const [step, setStep] = useState<'loading' | 'success' | 'declined_success'>('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (orderState.status === 'processing') {
      setStep('loading');
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            if (orderState.selectedOption === 'upgrade') {
              setStep('success');
            } else {
              setStep('declined_success');
            }
            return 100;
          }
          return prev + 8;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [orderState]);

  if (orderState.status === 'idle') return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          exit={{ opacity: 0 }}
          onClick={step !== 'loading' ? onClose : undefined}
          className="absolute inset-0 bg-black backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-[400px] bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 text-white z-10"
        >
          {/* Subtle gold line on top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Close button (Only available when done loading) */}
          {step !== 'loading' && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {step === 'loading' && (
            <div className="flex flex-col items-center text-center py-8">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full border-4 border-neutral-900 border-t-[#19C15F] animate-spin" />
                <Activity className="w-6 h-6 text-[#19C15F] absolute inset-0 m-auto animate-pulse" />
              </div>

              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                {orderState.selectedOption === 'upgrade' 
                  ? 'Securing One-Click Upgrade' 
                  : 'Updating Your Preferences'}
              </h3>
              <p className="text-xs text-[#BFBFBF] mt-2 max-w-[280px]">
                {orderState.selectedOption === 'upgrade'
                  ? 'Adding BJJ Performance System to your existing order secure terminal...'
                  : 'Routing directly to your main instruction dashboard...'}
              </p>

              {/* Progress bar container */}
              <div className="w-full bg-neutral-900 h-1.5 rounded-full mt-6 overflow-hidden border border-neutral-800/80">
                <div 
                  className="bg-gradient-to-r from-[#19C15F] to-[#D4AF37] h-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-[10px] text-neutral-500 mt-2 font-bold">{progress}% SECURED</span>
            </div>
          )}

          {step === 'success' && (
            <div className="flex flex-col py-2">
              <div className="w-12 h-12 rounded-full bg-[#19C15F]/10 border border-[#19C15F]/30 text-[#19C15F] flex items-center justify-center mb-4 self-center shadow-[0_0_20px_rgba(25,193,95,0.15)]">
                <Check className="w-6 h-6 stroke-[3px]" />
              </div>

              <div className="text-center">
                <span className="text-[10px] bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 px-2.5 py-0.5 rounded-full font-mono font-bold tracking-wider uppercase">
                  UPGRADE CONFIRMED
                </span>
                <h3 className="font-display font-black text-xl text-white mt-2 uppercase tracking-tight">
                  Welcome to the Elite
                </h3>
                <p className="text-xs text-[#BFBFBF] mt-1.5 leading-relaxed">
                  Your order has been successfully updated. Your card has been safely charged under one-click protocol guidelines.
                </p>
              </div>

              {/* Receipt Breakdowns */}
              <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-4 my-5 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Main Grappling Masterclass</span>
                  <span className="text-[#BFBFBF] font-mono">$97.00</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    BJJ Performance System
                  </span>
                  <span className="text-[#19C15F] font-mono font-bold">+$47.00</span>
                </div>
                <div className="border-t border-neutral-800/60 pt-2.5 flex justify-between items-center text-sm font-bold">
                  <span className="text-white">Total Updated Investment</span>
                  <span className="text-white font-mono">$144.00</span>
                </div>
              </div>

              {/* Secure badge */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#BFBFBF] bg-neutral-900/40 py-2 border border-neutral-800 rounded-xl">
                <ShieldCheck className="w-3.5 h-3.5 text-[#19C15F]" />
                <span className="font-mono">30-DAY REFUND PROTECTION ENFORCED</span>
              </div>

              {/* CTA to view training material */}
              <button
                onClick={onClose}
                className="w-full mt-4 bg-white text-black font-display font-bold text-xs uppercase tracking-wider py-3 rounded-xl hover:bg-neutral-200 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Go to Training Dashboard
                <ChevronRight className="w-4 h-4 text-black shrink-0" />
              </button>
            </div>
          )}

          {step === 'declined_success' && (
            <div className="flex flex-col py-2">
              <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center mb-4 self-center">
                <Lock className="w-5 h-5" />
              </div>

              <div className="text-center">
                <h3 className="font-display font-black text-xl text-white uppercase tracking-tight">
                  Purchase Confirmed
                </h3>
                <p className="text-xs text-[#BFBFBF] mt-1.5 leading-relaxed">
                  Your original order is secured. We did not apply any upgrade changes or extra charges to your account.
                </p>
              </div>

              {/* Receipt Breakdowns */}
              <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-4 my-5 space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Main Grappling Masterclass</span>
                  <span className="text-[#BFBFBF] font-mono">$97.00</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500">BJJ Performance System</span>
                  <span className="text-neutral-600 font-mono">Declined</span>
                </div>
                <div className="border-t border-neutral-800/60 pt-2.5 flex justify-between items-center text-sm font-bold">
                  <span className="text-white">Total Final Investment</span>
                  <span className="text-white font-mono">$97.00</span>
                </div>
              </div>

              {/* Secure badge */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-500 bg-neutral-900/40 py-2 border border-neutral-800 rounded-xl">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                <span className="font-mono font-medium">ORIGINAL RECEIPT CONFIRMED</span>
              </div>

              {/* CTA to view training material */}
              <button
                onClick={onClose}
                className="w-full mt-4 bg-neutral-900 text-white font-display font-bold text-xs uppercase tracking-wider py-3 rounded-xl border border-neutral-800 hover:bg-neutral-800 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Go to Training Dashboard
                <ChevronRight className="w-4 h-4 text-[#BFBFBF] shrink-0" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
