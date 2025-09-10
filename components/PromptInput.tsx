
import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  };
  
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="prompt-textarea" className="font-bold text-slate-700">詩のお題</label>
      <textarea
        id="prompt-textarea"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="例：雨の日の猫、真夜中のドーナツ、失われたレコード"
        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200 resize-none h-24"
        disabled={isLoading}
      />
      <button
        onClick={onSubmit}
        disabled={isLoading || !prompt.trim()}
        className="w-full sm:w-auto self-end px-6 py-3 bg-slate-800 text-white font-bold rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
      >
        {isLoading ? '生成中...' : '詩を書く'}
      </button>
    </div>
  );
};

export default PromptInput;
