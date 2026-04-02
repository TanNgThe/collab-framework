import React, { useState } from 'react';
import { MessageCircle, ChevronDown } from 'lucide-react';

export default function DiscussionPrompts() {
  const [expandedPhase, setExpandedPhase] = useState(null);

  const prompts = [
    {
      phase: 1,
      title: "Ideation & Socialization",
      prompts: [
        "What assumptions are we making about this goal?",
        "Who hasn't spoken up yet, and what might they be thinking?",
        "If we failed, what would be the most common reason?",
        "How does this idea serve different parts of the organization?"
      ],
      technique: "Round-robin sharing: Give each person 2 minutes to voice their perspective without interruption."
    },
    {
      phase: 2,
      title: "Attainable Goal Design",
      prompts: [
        "What's the smallest meaningful win we could achieve in 2 weeks?",
        "Where might we encounter bottlenecks, and how do we mitigate them?",
        "How will we know we've succeeded at each checkpoint?",
        "What dependencies do we need to address first?"
      ],
      technique: "Reverse timeline: Start with the final goal and work backward to identify dependencies."
    },
    {
      phase: 3,
      title: "Building the Coalition",
      prompts: [
        "Who are the natural influencers for this initiative?",
        "What concerns might these key players have?",
        "How can we make them feel ownership of this vision?",
        "Who will these influencers naturally influence next?"
      ],
      technique: "Stakeholder mapping: Create a visual map of who influences whom and at what decision points."
    },
    {
      phase: 4,
      title: "Trust & Innovation Culture",
      prompts: [
        "When has our team taken an informed risk and succeeded?",
        "What mistakes have we made that we learned from?",
        "How safe do people feel admitting when they don't know something?",
        "What behaviors should we celebrate more often?"
      ],
      technique: "Story sharing: Ask 2-3 team members to share stories of failures that led to growth."
    },
    {
      phase: 5,
      title: "Inclusive Change Management",
      prompts: [
        "Who might resist this change and why?",
        "What valid concerns could they raise?",
        "How can we incorporate their feedback without derailing the goal?",
        "What communication cadence keeps everyone informed?"
      ],
      technique: "Perspective-taking exercise: Assign someone to argue the skeptic's position, then discuss."
    },
    {
      phase: 6,
      title: "Constant Refinement",
      prompts: [
        "What metrics matter most for tracking progress?",
        "How often should we review and adjust our approach?",
        "What feedback mechanisms will we establish?",
        "How do we decide when to pivot versus persisting?"
      ],
      technique: "Feedback loop design: Create a calendar of review touchpoints and define decision criteria."
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-600 rounded-lg">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Discussion Prompts & Techniques</h2>
      </div>

      <p className="text-slate-600 mb-6 text-sm font-medium">
        Use these conversation starters and facilitation techniques at each phase to deepen team understanding and co-create the execution strategy.
      </p>

      <div className="space-y-3">
        {prompts.map((item) => (
          <div key={item.phase} className="border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors">
            <button
              onClick={() => setExpandedPhase(expandedPhase === item.phase ? null : item.phase)}
              className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full">
                  {item.phase}
                </span>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform ${
                  expandedPhase === item.phase ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedPhase === item.phase && (
              <div className="p-4 bg-white border-t border-slate-200">
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Discussion Prompts</h4>
                  <ul className="space-y-2">
                    {item.prompts.map((prompt, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex gap-3">
                        <span className="text-blue-600 font-bold">Q:</span>
                        <span>{prompt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Facilitation Technique</h4>
                  <p className="text-sm text-slate-600 bg-blue-50 border border-blue-200 rounded-lg p-3 italic">
                    {item.technique}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
