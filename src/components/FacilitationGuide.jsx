import React from 'react';
import { BookOpen, Lightbulb, Users } from 'lucide-react';

export default function FacilitationGuide() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-600 rounded-lg">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Facilitation Guide</h2>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            For Leadership Audiences
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="font-bold text-blue-600">•</span>
              <span>Frame the framework as a <strong>systematic approach to organizational change</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-600">•</span>
              <span>Emphasize <strong>scalability</strong> across departments and initiatives</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-600">•</span>
              <span>Highlight <strong>risk mitigation</strong> through inclusive change management</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-blue-600">•</span>
              <span>Connect each phase to <strong>measurable business outcomes</strong></span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-teal-900 mb-3 flex items-center gap-2">
            <Users className="w-5 h-5" />
            For Team Facilitation
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex gap-2">
              <span className="font-bold text-teal-600">•</span>
              <span><strong>Interactive walkthrough:</strong> Use the framework as a roadmap for team workshops</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-teal-600">•</span>
              <span><strong>Checkpoint activities:</strong> Run exercises at each phase to solidify understanding</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-teal-600">•</span>
              <span><strong>Real-world mapping:</strong> Have teams apply each phase to current initiatives</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold text-teal-600">•</span>
              <span><strong>Peer learning:</strong> Leverage the Intel Values as discussion anchors</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
