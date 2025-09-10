
import React, { useState, useCallback } from 'react';
import PromptInput from './components/PromptInput';
import PoemDisplay from './components/PoemDisplay';
import LoadingIndicator from './components/LoadingIndicator';
import { generateMurakamiPoem } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [poem, setPoem] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePoem = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setPoem('');

    try {
      const generatedPoem = await generateMurakamiPoem(prompt);
      setPoem(generatedPoem);
    } catch (err) {
      setError('詩の生成中にエラーが発生しました。もう一度お試しください。');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="bg-slate-100 min-h-screen text-slate-800 flex items-center justify-center p-4">
      <main className="w-full max-w-2xl bg-white shadow-lg rounded-xl overflow-hidden">
        <header className="p-6 sm:p-8 border-b border-slate-200">
          <h1 className="font-serif-jp text-2xl sm:text-3xl font-bold text-slate-900">村上春樹風 詩ジェネレーター</h1>
          <p className="mt-2 text-sm text-slate-600">
            お題を入力してください。まるで村上春樹が書いたかのような詩が生成されます。
          </p>
        </header>

        <div className="p-6 sm:p-8">
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            onSubmit={handleGeneratePoem}
            isLoading={isLoading}
          />

          <div className="mt-8">
            {isLoading && <LoadingIndicator />}
            {error && <p className="text-center text-red-600 bg-red-100 p-4 rounded-md">{error}</p>}
            {poem && <PoemDisplay poem={poem} />}
          </div>
        </div>

        <footer className="bg-slate-50 text-center p-4 border-t border-slate-200">
          <p className="text-xs text-slate-500">Powered by Gemini API</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
