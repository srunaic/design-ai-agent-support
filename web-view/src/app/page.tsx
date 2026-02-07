"use client";

import { useState, useEffect } from 'react';
import { Layout, Video, Activity, Image as ImageIcon, Sparkles, ChevronRight, User, Loader2, Send, Zap, Film, Settings, MoreHorizontal, Save } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { bridge, ToolStatus } from '../lib/bridge';
import { getCoaching, CoachingResponse } from '../lib/coach';

const STEPS = [
    { id: 1, title: 'UI/UX 디자인', icon: Layout, desc: 'Figma로 화면 구조를 만듭니다.', tool: 'figma' },
    { id: 2, title: '영상 편집', icon: Video, desc: '홍보 영상 구성을 설계합니다.', tool: 'premiere' },
    { id: 3, title: '모션 그래픽', icon: Activity, desc: '생동감 있는 효과를 추가합니다.', tool: 'after_effects' },
    { id: 4, title: '에셋 생성', icon: ImageIcon, desc: 'AI로 이미지를 생성합니다.', tool: 'image_gen' },
    { id: 5, title: '애니메이션 생성', icon: Film, desc: 'AI로 영상 에셋을 제작합니다.', tool: 'animation_gen' },
    { id: 6, title: '어도비 연동', icon: Sparkles, desc: '포토샵 및 일러스트레이터와 연결합니다.', tool: 'adobe_connect' },
];

export default function Dashboard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [status, setStatus] = useState<ToolStatus | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [showSettings, setShowSettings] = useState(false);
    const [psPath, setPsPath] = useState('');
    const [aiPath, setAiPath] = useState('');
    const [chatInput, setChatInput] = useState("");
    const [isCoachTyping, setIsCoachTyping] = useState(false);
    const [lastResponse, setLastResponse] = useState("무엇을 도와드릴까요? 디자인 가이드나 애니메이션 생성을 명령해보세요.");
    const [showStep1Menu, setShowStep1Menu] = useState(false);

    const handleSavePaths = () => {
        bridge?.executeTool('config', 'save_adobe_paths', { photoshopPath: psPath, illustratorPath: aiPath });
        setShowSettings(false);
    };

    useEffect(() => {
        setStatus(null);
        setPreviewUrl(null);
        setVideoUrl(null);
    }, [currentStep]);

    useEffect(() => {
        if (bridge) {
            bridge.onMessage((data) => {
                if (data.type === 'TOOL_STATUS') {
                    setStatus(data.payload);
                    if (data.payload.status === 'RUNNING') {
                        setIsCoachTyping(true);
                        setLastResponse(`${data.payload.message}`);

                        // 도구 실행 시 해당 스텝으로 자동 전환
                        const relevantStep = STEPS.find(s => s.tool === data.payload.tool);
                        if (relevantStep) setCurrentStep(relevantStep.id);
                    } else if (data.payload.status === 'COMPLETED') {
                        setIsCoachTyping(false);
                        setLastResponse(`작업이 완료되었습니다: ${data.payload.message.split('\n')[0]}`);
                    }
                } else if (data.type === 'PREVIEW_UPDATE') {
                    setPreviewUrl(data.payload.url);
                } else if (data.type === 'VIDEO_UPDATE') {
                    setVideoUrl(data.payload.url);
                }
            });
        }
    }, []);

    const handleRunTool = () => {
        const step = STEPS[currentStep - 1];
        bridge?.executeTool(step.tool, 'launch');
    };

    const handleDownload = async () => {
        if (!videoUrl) return;
        try {
            const response = await fetch(videoUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `Antigravity_Animation_80s_${Date.now()}.mp4`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            // Fallback to simple link
            window.open(videoUrl, '_blank');
        }
    };

    const handleSendMessage = () => {
        if (!chatInput.trim()) return;

        // 에이전트로 채팅 메시지 전송
        bridge?.send('CHAT_MESSAGE', { text: chatInput });

        setIsCoachTyping(true);
        setChatInput("");
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
                                {videoUrl && (
                                    <button
                                        onClick={handleDownload}
                                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 rounded-xl hover:bg-indigo-600 hover:text-white transition-all text-xs font-bold"
                                    >
                                        <Activity size={14} />
                                        MP4 DOWNLOAD
                                    </button>
                                )}
                                <button className="p-3 glass-card rounded-2xl text-slate-400 hover:text-white"><Zap size={18} /></button>
                            </div>
                        </header>

                        <div className="flex-1 flex items-center justify-center p-10">
                            <div className="w-full max-w-4xl aspect-video rounded-[2.5rem] bg-black/60 border border-white/5 shadow-2xl flex flex-col items-center justify-center relative group">
                                {videoUrl ? (
                                    <motion.video
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        src={videoUrl}
                                        controls
                                        autoPlay
                                        loop
                                        className="w-full h-full object-contain p-4"
                                    />
                                ) : previewUrl ? (
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

                                        {currentStep === 1 ? (
                                            <div className="flex flex-col items-center justify-center h-full relative">
                                                {/* Pink & White Toggle UI Mockup */}
                                                <div className="bg-white/95 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(255,105,180,0.2)] border border-pink-100 flex flex-col items-center gap-6 group">
                                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/30">
                                                        <User size={40} className="text-white" />
                                                    </div>
                                                    <div className="text-center">
                                                        <h3 className="text-xl font-black text-slate-800 tracking-tight">Game Session</h3>
                                                        <p className="text-pink-500 text-xs font-bold uppercase tracking-widest mt-1">Experimental UI</p>
                                                    </div>

                                                    {/* Toggle Button */}
                                                    <button
                                                        onClick={() => setShowStep1Menu(!showStep1Menu)}
                                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${showStep1Menu ? 'bg-pink-500 text-white rotate-90' : 'bg-slate-100 text-slate-400 hover:bg-pink-50 hover:text-pink-500'}`}
                                                    >
                                                        <MoreHorizontal size={24} />
                                                    </button>

                                                    <AnimatePresence>
                                                        {showStep1Menu && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                                                                className="absolute -bottom-36 flex flex-col gap-2 w-48 p-2 bg-white rounded-3xl shadow-2xl border border-pink-50"
                                                            >
                                                                <button className="flex items-center gap-3 w-full p-4 hover:bg-pink-50 rounded-2xl transition-colors text-slate-600 hover:text-pink-600 group/btn">
                                                                    <div className="p-2 bg-slate-50 rounded-xl group-hover/btn:bg-white group-hover/btn:shadow-sm">
                                                                        <Settings size={16} />
                                                                    </div>
                                                                    <span className="text-xs font-black uppercase tracking-wider">Option</span>
                                                                </button>
                                                                <button className="flex items-center gap-3 w-full p-4 hover:bg-pink-50 rounded-2xl transition-colors text-slate-600 hover:text-pink-600 group/btn">
                                                                    <div className="p-2 bg-slate-50 rounded-xl group-hover/btn:bg-white group-hover/btn:shadow-sm">
                                                                        <Save size={16} />
                                                                    </div>
                                                                    <span className="text-xs font-black uppercase tracking-wider">Save</span>
                                                                </button>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>

                                                <div className="flex flex-col items-center gap-6">
                                                    <p className="mt-20 text-[10px] text-pink-500/50 font-black uppercase tracking-[0.3em] animate-pulse">
                                                        Pink & White Theme Preview
                                                    </p>

                                                    {/* Export Button */}
                                                    <button
                                                        onClick={() => bridge?.executeTool('figma', 'export_step1_ui')}
                                                        className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-black text-[10px] tracking-widest uppercase shadow-lg shadow-pink-500/30 transition-all active:scale-95 flex items-center gap-3 border border-pink-400/30"
                                                    >
                                                        <Layout size={14} />
                                                        Export to Figma
                                                    </button>
                                                </div>
                                            </div>
                                        ) : currentStep === 6 ? (
                                            <div className="flex flex-col items-center gap-6">
                                                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                                                    <Sparkles size={40} className="animate-pulse" />
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="text-2xl font-black tracking-tight text-white mb-2 uppercase">Ready for Adobe Sync</h3>
                                                    <p className="text-slate-400 text-sm font-medium">관리자님의 어도비 도구와 Antigravity를 직접 연결합니다.</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <button
                                                        onClick={() => bridge?.executeTool('photoshop', 'launch')}
                                                        className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-[1.5rem] font-bold shadow-xl shadow-blue-900/20 transition-all flex items-center gap-3 active:scale-95"
                                                    >
                                                        <ImageIcon size={20} />
                                                        포토샵 연동하기
                                                    </button>
                                                    <button
                                                        onClick={() => bridge?.executeTool('illustrator', 'launch')}
                                                        className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-[1.5rem] font-bold shadow-xl shadow-orange-900/20 transition-all flex items-center gap-3 active:scale-95"
                                                    >
                                                        <ImageIcon size={20} />
                                                        일러스트레이터 연동하기
                                                    </button>
                                                    <button
                                                        onClick={() => bridge?.executeTool('photoshop', 'execute_script', { scriptPath: 'd:/Github/Design_Supporter/desktop-agent/photoshop_automation.jsx' })}
                                                        className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[1.5rem] font-bold shadow-xl shadow-indigo-900/20 transition-all flex items-center gap-3 active:scale-95 animate-pulse"
                                                    >
                                                        <Zap size={20} />
                                                        타이틀 이미지 FHD 최적화
                                                    </button>
                                                    <button
                                                        onClick={() => bridge?.executeTool('photoshop', 'execute_script', { scriptPath: 'd:/Github/Design_Supporter/desktop-agent/painting_stages.jsx' })}
                                                        className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-[1.5rem] font-bold shadow-xl shadow-purple-900/20 transition-all flex items-center gap-3 active:scale-95"
                                                    >
                                                        <Sparkles size={20} />
                                                        단계별 페인팅 가동 (Draft)
                                                    </button>
                                                    <button
                                                        onClick={() => setShowSettings(!showSettings)}
                                                        className="p-4 glass-card rounded-2xl text-slate-400 hover:text-white transition-all active:scale-95"
                                                    >
                                                        <Settings size={20} />
                                                    </button>
                                                </div>

                                                <AnimatePresence>
                                                    {showSettings && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                            className="absolute bottom-32 left-1/2 -translate-x-1/2 w-96 p-6 bg-slate-900/95 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[100]"
                                                        >
                                                            <h4 className="text-white font-black text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
                                                                <Settings size={14} className="text-indigo-400" />
                                                                Adobe Path Configuration
                                                            </h4>
                                                            <div className="space-y-4">
                                                                <div>
                                                                    <label className="text-[10px] text-slate-500 font-black uppercase mb-1 block">Photoshop.exe Path</label>
                                                                    <input
                                                                        type="text"
                                                                        value={psPath}
                                                                        onChange={(e) => setPsPath(e.target.value)}
                                                                        placeholder="C:\...\Photoshop.exe"
                                                                        className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2 text-xs text-white placeholder:text-slate-700 outline-none focus:border-blue-500/50 transition-all"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="text-[10px] text-slate-500 font-black uppercase mb-1 block">Illustrator.exe Path</label>
                                                                    <input
                                                                        type="text"
                                                                        value={aiPath}
                                                                        onChange={(e) => setAiPath(e.target.value)}
                                                                        placeholder="C:\...\Illustrator.exe"
                                                                        className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-2 text-xs text-white placeholder:text-slate-700 outline-none focus:border-orange-500/50 transition-all"
                                                                    />
                                                                </div>
                                                                <button
                                                                    onClick={handleSavePaths}
                                                                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-xs transition-all active:scale-95 shadow-lg shadow-indigo-900/20"
                                                                >
                                                                    APPLY CUSTOM PATHS
                                                                </button>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (currentStep === 4 || currentStep === 5) && status ? (
                                            <div className="flex flex-col items-center gap-6">
                                                <div className="w-20 h-20 mb-6 mx-auto relative">
                                                    <div className="absolute inset-0 border-4 border-indigo-500/20 rounded-full" />
                                                    <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin" />
                                                </div>
                                                <p className="text-lg font-bold tracking-tight">{status.message}</p>
                                            </div>
                                        ) : status?.status === 'RUNNING' || status?.status === 'SAVING' ? (
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
                                    <div className={`p-4 rounded-2xl border transition-all duration-500 ${isCoachTyping ? 'bg-indigo-600/20 border-indigo-500/40 animate-pulse' : 'bg-white/5 border-white/10'}`}>
                                        {isCoachTyping ? (
                                            <Loader2 size={32} className="text-indigo-400 animate-spin" />
                                        ) : (
                                            <Activity size={32} className="text-indigo-500/50" />
                                        )}
                                    </div>
                                    <p className="text-sm font-black text-slate-200 leading-tight">
                                        {isCoachTyping ? "Antigravity 분석 중..." : "항시 대기 중..."}<br />
                                        <span className="text-indigo-400 font-medium text-[11px] block mt-2">
                                            {lastResponse}
                                        </span>
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <form
                                        onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                                        className="flex gap-2"
                                    >
                                        <input
                                            type="text"
                                            value={chatInput}
                                            onChange={(e) => setChatInput(e.target.value)}
                                            placeholder="Antigravity에게 명령하세요..."
                                            className="flex-1 bg-white/5 border border-white/10 rounded-xl h-10 px-4 text-xs text-white placeholder:text-slate-600 outline-none focus:border-indigo-500/50 transition-all font-medium"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!chatInput.trim()}
                                            className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all active:scale-95 ${chatInput.trim()
                                                ? 'bg-indigo-600 text-white shadow-indigo-600/30 hover:bg-indigo-500'
                                                : 'bg-indigo-600/20 text-slate-600 opacity-50 cursor-not-allowed'
                                                }`}
                                        >
                                            <Send size={16} />
                                        </button>
                                    </form>
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
