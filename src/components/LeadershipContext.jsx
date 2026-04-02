import React from 'react';
import { Crown, TrendingUp, Target } from 'lucide-react';

export default function LeadershipContext() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl p-6 md:p-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500 rounded-lg">
          <Crown className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold">Leadership Context</h2>
      </div>

      <div className="space-y-4">
        <div className="bg-white/10 rounded-xl p-4 border border-white/5 hover:bg-white/15 transition-colors">
          <h4 className="font-bold text-blue-300 mb-2 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Why This Framework Works
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Organizations fail at execution not because of poor strategy, but because stakeholders aren't aligned and trust is lacking. This framework systematically builds both. By the time you reach execution, you've already eliminated friction.
          </p>
        </div>

        <div className="bg-white/10 rounded-xl p-4 border border-white/5 hover:bg-white/15 transition-colors">
          <h4 className="font-bold text-teal-300 mb-2 flex items-center gap-2">
            <Target className="w-4 h-4" />
            Key Talking Points
          </h4>
          <ul className="space-y-1.5 text-sm text-slate-300">
            <li>• <strong>Reduces time-to-alignment</strong> by making dissent surface early when it's addressable</li>
            <li>• <strong>Scales across the org</strong> by embedding it as a repeatable capability</li>
            <li>• <strong>Lowers execution risk</strong> by building coalition strength before major commitment</li>
            <li>• <strong>Improves employee engagement</strong> through psychological safety and inclusion</li>
            <li>• <strong>Creates accountability clarity</strong> by defining roles in each phase</li>
          </ul>
        </div>

        <div className="bg-white/10 rounded-xl p-4 border border-white/5 hover:bg-white/15 transition-colors">
          <h4 className="font-bold text-amber-300 mb-2">Implementation Roadmap</h4>
          <ul className="space-y-1.5 text-sm text-slate-300">
            <li>• <strong>Month 1:</strong> Socialize framework with leadership cohort</li>
            <li>• <strong>Month 2:</strong> Apply to current 2-3 strategic initiatives</li>
            <li>• <strong>Month 3:</strong> Train first tier of internal facilitators</li>
            <li>• <strong>Month 4+:</strong> Expand to teams across departments</li>
          </ul>
        </div>

        <div className="bg-white/10 rounded-xl p-4 border border-white/5 hover:bg-white/15 transition-colors">
          <h4 className="font-bold text-emerald-300 mb-2">Success Metrics to Track</h4>
          <ul className="space-y-1.5 text-sm text-slate-300">
            <li>• % of initiatives meeting Phase 2 checkpoints on time</li>
            <li>• Employee sentiment scores on psychological safety</li>
            <li>• Time from ideation to coalition formed (Phase 1-3)</li>
            <li>• Adoption rate across teams and departments</li>
            <li>• Feedback integration rate in Phase 5 (change management)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
