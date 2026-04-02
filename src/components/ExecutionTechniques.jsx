import React, { useState } from 'react';
import { Zap, Clock, Users as Users2, CheckSquare } from 'lucide-react';

export default function ExecutionTechniques() {
  const [selectedTechnique, setSelectedTechnique] = useState(0);

  const techniques = [
    {
      name: "Structured Alignment Sessions",
      duration: "90 minutes per session",
      audience: "Cross-functional leadership + key stakeholders",
      icon: <Users2 className="w-6 h-6" />,
      steps: [
        "15 min: Share the framework overview",
        "20 min: Review current initiative challenges",
        "35 min: Walk through each phase with the initiative as context",
        "15 min: Identify immediate next steps and owners",
        "5 min: Schedule follow-up checkpoints"
      ],
      outcomes: ["Shared mental model", "Clear ownership", "Alignment on approach"],
      color: "bg-blue-50 border-blue-200 text-blue-700"
    },
    {
      name: "Phase-Based Workshops",
      duration: "2 hours per phase",
      audience: "Core project team",
      icon: <CheckSquare className="w-6 h-6" />,
      steps: [
        "20 min: Deep dive into phase principles using Intel Values",
        "30 min: Conduct interactive discussion using provided prompts",
        "40 min: Apply phase to current project with worksheets",
        "20 min: Document decisions and action items",
        "10 min: Preview next phase"
      ],
      outcomes: ["Deep phase understanding", "Contextualized application", "Team buy-in"],
      color: "bg-teal-50 border-teal-200 text-teal-700"
    },
    {
      name: "Executive Briefing",
      duration: "60 minutes",
      audience: "C-suite and board-level",
      icon: <Zap className="w-6 h-6" />,
      steps: [
        "10 min: Executive summary of framework benefits",
        "15 min: Show how it reduces change resistance and accelerates execution",
        "20 min: Present case study or current initiative walkthrough",
        "10 min: Discuss ROI and scaling potential",
        "5 min: Next steps for rollout"
      ],
      outcomes: ["Executive buy-in", "Resource allocation", "Strategic alignment"],
      color: "bg-amber-50 border-amber-200 text-amber-700"
    },
    {
      name: "Continuous Refinement Rituals",
      duration: "30-45 minutes, recurring",
      audience: "Execution team",
      icon: <Clock className="w-6 h-6" />,
      steps: [
        "5 min: Review current checkpoint progress",
        "15 min: Discuss what's working and what's not",
        "10 min: Use feedback loops to adjust tactics",
        "10 min: Celebrate wins and learn from obstacles",
        "5 min: Confirm next checkpoint and commitments"
      ],
      outcomes: ["Momentum maintenance", "Adaptive execution", "Quick learning cycles"],
      color: "bg-rose-50 border-rose-200 text-rose-700"
    },
    {
      name: "Leadership Cohort Program",
      duration: "6 sessions over 12 weeks",
      audience: "Emerging and mid-level leaders",
      icon: <Users2 className="w-6 h-6" />,
      steps: [
        "Session 1: Framework foundations and Intel Values",
        "Sessions 2-7: Deep dive into each phase with peer case studies",
        "Breakout sessions: Peer coaching on real initiatives",
        "Monthly reflection: How each leader applied the framework",
        "Capstone: Showcase initiative using the framework"
      ],
      outcomes: ["Leadership capability uplift", "Framework evangelists", "Cultural integration"],
      color: "bg-emerald-50 border-emerald-200 text-emerald-700"
    },
    {
      name: "Async Learning Path",
      duration: "Self-paced over 4 weeks",
      audience: "Individual contributors and managers",
      icon: <Clock className="w-6 h-6" />,
      steps: [
        "Week 1: View framework overview + Intel Values",
        "Week 2: Study 2-3 phases with optional discussion forum",
        "Week 3: Complete phase-based application exercise",
        "Week 4: Reflection assignment + peer feedback",
        "Ongoing: Access to facilitation guides and templates"
      ],
      outcomes: ["Broad awareness", "Self-directed mastery", "Scalable learning"],
      color: "bg-purple-50 border-purple-200 text-purple-700"
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-600 rounded-lg">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Execution Techniques</h2>
      </div>

      <p className="text-slate-600 mb-6 text-sm font-medium">
        Choose the facilitation method that best fits your audience and timeline. Each technique helps teams internalize and execute the framework.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-2">
          {techniques.map((technique, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTechnique(idx)}
              className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                selectedTechnique === idx
                  ? `${technique.color} border-current font-semibold`
                  : 'border-slate-200 bg-slate-50 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                {technique.icon}
                <span>{technique.name}</span>
              </div>
            </button>
          ))}
        </div>

        <div className={`border-2 rounded-xl p-6 transition-all ${techniques[selectedTechnique].color}`}>
          <div className="flex items-center gap-2 mb-4">
            {techniques[selectedTechnique].icon}
            <h3 className="text-xl font-bold">{techniques[selectedTechnique].name}</h3>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold mb-1 text-slate-800">Duration</p>
              <p className="text-slate-700">{techniques[selectedTechnique].duration}</p>
            </div>

            <div>
              <p className="font-semibold mb-1 text-slate-800">Best For</p>
              <p className="text-slate-700">{techniques[selectedTechnique].audience}</p>
            </div>

            <div>
              <p className="font-semibold mb-2 text-slate-800">Steps</p>
              <ol className="space-y-1">
                {techniques[selectedTechnique].steps.map((step, idx) => (
                  <li key={idx} className="text-slate-700 flex gap-2">
                    <span className="font-bold text-slate-600">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="font-semibold mb-2 text-slate-800">Key Outcomes</p>
              <div className="flex flex-wrap gap-1">
                {techniques[selectedTechnique].outcomes.map((outcome, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2.5 py-1 bg-white/50 border border-current rounded-full text-xs font-medium"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
