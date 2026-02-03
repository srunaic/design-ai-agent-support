"use client";

import { useState, useEffect } from 'react';
import { Layout, Video, Activity, Image as ImageIcon, Sparkles, ChevronRight, User, Loader2, Send, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { bridge, ToolStatus } from '../lib/bridge';
import { getCoaching, CoachingResponse } from '../lib/coach';

const STEPS = [
    { id: 1, title: 'UI/UX 디자인', icon: Layout, desc: 'Figma로 화면 구조를 만듭니다.', tool: 'figma' },
    { id: 2, title: '영상 편집', icon: Video, desc: '홍보 영상 구성을 설계합니다.', tool: 'premiere' },
    { id: 3, title: '모션 그래픽', icon: Activity, desc: '생동감 있는 효과를 추가합니다.', tool: 'after_effects' },
    { id: 4, title: '에셋 생성', icon: ImageIcon, desc: 'AI로 이미지를 생성합니다.', tool: 'image_gen' },
];

export default function Dashboard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [status, setStatus] = useState<ToolStatus | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        setStatus(null);
        setPreviewUrl(null);
    }, [currentStep]);

    useEffect(() => {
        if (bridge) {
            bridge.onMessage((data) => {
                if (data.type === 'TOOL_STATUS') {
                    setStatus(data.payload);
                } else if (data.type === 'PREVIEW_UPDATE') {
                    setPreviewUrl(data.payload.url);
                }
            });
        }
    }, []);

    const handleRunTool = () => {
        const step = STEPS[currentStep - 1];
        bridge?.executeTool(step.tool, 'launch');
    };

    return (
        <main className="flex h-screen bg-[#050505] text-slate-100 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-72 glass m-4 rounded-[2rem] flex flex-col p-6 shadow-2xl border-white/5">
                <div className="flex items-center gap-3 mb-12 px-2">
                    <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/30">
                        <Zap size={22} className="text-white fill-current" />
                    </div>
                    <div>
                        <h1 className="font-black text-lg tracking-tighter leading-none">THE HANDS</h1>
                        <p className="text-[10px] text-indigo-400 font-bold tracking-widest uppercase">Design Supporter</p>
                    </div>
                </div>

                <nav className="flex-1 space-y-1.5 overflow-y-auto px-1">
                    {STEPS.map((step) => (
                        <button
                            key={step.id}
                            onClick={() => setCurrentStep(step.id)}
                            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 group ${currentStep === step.id
                                ? 'bg-white/10 text-white shadow-inner border border-white/10'
                                : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                                }`}
                        >
                            <div className={`p-2 rounded-xl transition-colors ${currentStep === step.id ? 'bg-indigo-600 text-white' : 'bg-slate-800/50 group-hover:bg-slate-800'}`}>
                                <step.icon size={18} />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-bold tracking-tight">{step.title}</p>
                                <p className="text-[9px] opacity-40 font-medium">STEP 0{step.id}</p>
                            </div>
                            {currentStep === step.id && <motion.div layoutId="active" className="w-1 h-4 bg-indigo-500 rounded-full ml-auto" />}
                        </button>
                    ))}
                </nav>

                <div className="mt-8 p-5 glass-card rounded-2xl">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                <User size={20} className="text-indigo-400" />
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#050505] rounded-full" />
                        </div>
                        <div>
                            <p className="text-[11px] font-black tracking-tight">ADMIN SESSION</p>
                            <p className="text-[9px] text-slate-500 font-bold uppercase">Connected</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <section className="flex-1 flex flex-col p-4 pl-0 gap-4">
                <div className="flex-1 flex gap-4 overflow-hidden">
                    {/* Working Area / Preview */}
                    <div className="flex-1 glass rounded-[2rem] flex flex-col overflow-hidden relative border-white/5">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-600/50 to-transparent" />

                        <header className="p-10 pb-4 flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Processing Step {currentStep}</span>
                                </div>
                                <h2 className="text-4xl font-black tracking-tight">{STEPS[currentStep - 1].title}</h2>
                                <p className="text-slate-400 text-sm mt-1 font-medium">{STEPS[currentStep - 1].desc}</p>
                            </div>

                            <div className="flex gap-2">
                                <button className="p-3 glass-card rounded-2xl text-slate-400 hover:text-white"><Activity size={18} /></button>
                                <button className="p-3 glass-card rounded-2xl text-slate-400 hover:text-white"><Zap size={18} /></button>
                            </div>
                        </header>

                        <div className="flex-1 flex items-center justify-center p-10">
                            {/* Live Preview Area (Ready for Antigravity Results) */}
                            <div className="w-full max-w-4xl aspect-video rounded-[2.5rem] bg-black/60 border border-white/5 shadow-2xl flex flex-col items-center justify-center relative group overflow-hidden">
                                {previewUrl ? (
                                    <motion.img
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        src={previewUrl}
                                        alt="Design Preview"
                                        className="w-full h-full object-contain p-4"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        {status?.status === 'RUNNING' || status?.status === 'SAVING' ? (
                                            <div className="text-center">
                                                <div className="w-20 h-20 mb-6 mx-auto relative">
                                                    <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full" />
                                                    <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin" />
                                                </div>
                                                <p className="text-lg font-bold tracking-tight">{status.message}</p>
                                            </div>
                                        ) : (
                                            <div className="text-center relative z-10">
                                                <div className="w-16 h-16 bg-white/5 rounded-3xl mx-auto flex items-center justify-center mb-6 border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                                    <Sparkles size={32} className="text-white fill-current opacity-20" />
                                                </div>
                                                <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter italic">Ready for Directing</h3>
                                                <p className="text-slate-500 text-sm max-w-xs mx-auto mb-10 font-medium">
                                                    Antigravity 에이전트와 연동하여 실제 작업 결과물을 실시간으로 미리보기 할 수 있습니다.
                                                </p>
                                                <button
                                                    onClick={handleRunTool}
                                                    className="px-10 py-4 bg-white text-black rounded-2xl font-black text-sm shadow-2xl hover:bg-slate-200 transition-all active:scale-95 flex items-center gap-3 mx-auto"
                                                >
                                                    <Zap size={16} />
                                                    {STEPS[currentStep - 1].tool.toUpperCase()} 런칭
                                                </button>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* coaching / Antigravity Agent Panel */}
                    <div className="w-96 glass rounded-[2rem] flex flex-col border-white/5 overflow-hidden shadow-2xl">
                        <div className="p-8 border-b border-white/5 flex items-center gap-3 bg-gradient-to-r from-indigo-600/10 to-transparent">
                            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                                <Sparkles size={16} className="text-white fill-current" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-indigo-400 tracking-widest uppercase">Interaction</p>
                                <h3 className="font-black text-lg tracking-tight">ANTIGRAVITY COACH</h3>
                            </div>
                        </div>

                        <div className="flex-1 p-8 flex flex-col">
                            <div className="flex-1 glass-card rounded-3xl p-6 flex flex-col border-white/5">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Listening</span>
                                </div>

                                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="p-4 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                                        <Loader2 size={32} className="text-indigo-400 animate-spin" />
                                    </div>
                                    <p className="text-sm font-black text-slate-200 leading-tight">
                                        항시 대기 중...<br />
                                        <span className="text-indigo-400">Antigravity Agent</span> 실행 후<br />내용을 입력하세요.
                                    </p>
                                    <p className="text-[11px] text-slate-500 font-medium max-w-[200px]">
                                        에이전트에서 생성된 디자인 가이드가 이곳에 실시간으로 표시됩니다.
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <div className="flex gap-2">
                                        <div className="flex-1 bg-white/5 border border-white/5 rounded-xl h-10 px-4 flex items-center">
                                            <span className="text-[10px] text-slate-500 font-bold">Waiting for input...</span>
                                        </div>
                                        <button className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/30 opacity-50 cursor-not-allowed">
                                            <Send size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-slate-600 font-black tracking-widest uppercase">
                                <Zap size={10} className="text-indigo-500" />
                                Real-time syncing active
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
