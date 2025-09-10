
import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-8 h-8 border-4 border-slate-300 border-t-slate-600 rounded-full animate-spin mb-4"></div>
      <p className="font-serif-jp text-slate-600">
        言葉の井戸を、深く、深く、潜っている...
      </p>
    </div>
  );
};

export default LoadingIndicator;
