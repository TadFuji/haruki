
import React from 'react';

interface PoemDisplayProps {
  poem: string;
}

const PoemDisplay: React.FC<PoemDisplayProps> = ({ poem }) => {
  return (
    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 animate-fade-in">
      <h2 className="font-serif-jp text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">生成された詩</h2>
      <p className="font-serif-jp text-base leading-loose text-slate-700 whitespace-pre-wrap">
        {poem}
      </p>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PoemDisplay;
