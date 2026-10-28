'use client';

import { useEffect } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Captured by global error boundary:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#25231F] text-[#E0DDD5] flex flex-col items-center justify-center p-6 text-center select-none font-sans">
            <div className="w-16 h-16 rounded-3xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mb-6 shadow-xl shadow-rose-950/40">
                <AlertCircle className="w-8 h-8 text-rose-400" />
            </div>
            
            <h2 className="text-xl font-black text-rose-200 mb-2 tracking-tight">화면 렌더링 중 오류가 발생했습니다</h2>
            <p className="text-xs text-[#A8A49A] max-w-md mb-6 leading-relaxed">
                일시적인 연결 지연이나 데이터 파싱 문제일 수 있습니다.<br />
                아래 버튼을 눌러 안전하게 다시 로드할 수 있습니다.
            </p>

            <div className="flex gap-3">
                <button
                    onClick={() => reset()}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#546147] hover:bg-[#637254] text-white font-bold text-xs shadow-lg shadow-[#546147]/20 transition-all hover:scale-105 active:scale-95"
                >
                    <RefreshCw className="w-4 h-4" />
                    다시 시도하기
                </button>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-[#E0DDD5] font-bold text-xs border border-white/10 transition-all hover:scale-105 active:scale-95"
                >
                    전체 새로고침
                </button>
            </div>

            {error?.message && (
                <pre className="mt-8 p-4 bg-black/40 rounded-xl text-[10px] text-rose-300/70 max-w-lg overflow-x-auto border border-rose-500/10 font-mono text-left">
                    {error.message}
                </pre>
            )}
        </div>
    );
}
