"use client";

import { useState, useEffect, useRef } from 'react';
import { Layout, Video, Activity, Image as ImageIcon, Sparkles, ChevronRight, ChevronLeft, User, Loader2, Send, Zap, Film, Settings, MoreHorizontal, Save, Play, Pause, FastForward, SkipForward, Rewind, X, Clock, History, Grid, Maximize2, Copy, Check, Download, Shield, Lock as LockIcon, Lock, Smartphone, Heart, Target, MessageSquare, Star, ArrowUpRight, XCircle, Info, Edit3, Trash2, Upload, IterationCw, AlertCircle, RefreshCw, Folder } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { bridge, ToolStatus } from '../lib/bridge';
import { getCoaching, CoachingResponse } from '../lib/coach';
import JSZip from 'jszip';
import { toPng } from 'html-to-image';

const STEPS = [
    { id: 1, title: 'UI/UX 디자인', icon: Layout, desc: 'Figma로 화면 구조를 만듭니다.', tool: 'figma' },
    { id: 2, title: '영상 편집', icon: Video, desc: '홍보 영상 구성 및 설계를 진행합니다.', tool: 'premiere' },
    { id: 5, title: '애니메이션 생성', icon: Film, desc: 'AI로 영상 에셋을 제작합니다.', tool: 'animation_gen' },
    { id: 6, title: 'AI 드로잉 이미지 생성', icon: Sparkles, desc: '실시간 AI 드로잉 및 포토샵과 연동합니다.', tool: 'adobe_connect' },
];

const BASE_PATH = '/design-ai-agent-support';

interface Workspace {
    id: string;
    name: string;
    slideIds: string[];
}

const DEFAULT_SLIDES: string[] = [];

// --- Realistic UI Components for Preview ---

const ToggleMenuPreview = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div data-asset-id="toggle_menu" data-asset-name="toggle_menu_bg" className="bg-white/95 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(255,105,180,0.2)] border border-[#d4cfc0]/20 flex flex-col items-center gap-6 relative group/toggle">
            <div data-asset-id="user_profile_icon" data-asset-name="user_profile_icon" className="w-24 h-24 rounded-full bg-gradient-to-br from-[#546147] to-[#546147] flex items-center justify-center shadow-lg shadow-[#d4cfc0]/30">
                <User size={40} className="text-[#4a463d]" />
            </div>
            <div className="text-center">
                <h3 data-asset-id="session_title" data-asset-name="session_title_text" className="text-xl font-black text-[#8c8270] tracking-tight">Game Session</h3>
                <p data-asset-id="experimental_tag" data-asset-name="experimental_tag_text" className="text-[#56604e] text-xs font-bold uppercase tracking-widest mt-1">Experimental UI</p>
            </div>
            <button
                data-asset-id="more_button" data-asset-name="more_button_icon"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#d4cfc0] text-[#4a463d] rotate-90' : 'bg-[#d4cfc0]/10 text-[#4a463d]/30 hover:bg-[#d4cfc0]/10 hover:text-[#56604e]'}`}
            >
                <MoreHorizontal size={24} />
            </button>
            {isOpen && (
                <div data-asset-id="menu_dropdown" data-asset-name="menu_dropdown_bg" className="flex flex-col gap-2 w-48 p-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-[#d4cfc0]/10 absolute top-full mt-4 z-50">
                    <button data-asset-id="option_item" data-asset-name="option_item" className="flex items-center gap-3 w-full p-4 hover:bg-[#d4cfc0]/10 rounded-2xl transition-colors text-[#4a463d]/60 hover:text-[#546147] group">
                        <div className="p-2 bg-[#fdead3]/20 rounded-xl group-hover:bg-white group-hover:shadow-sm"><Settings size={16} /></div>
                        <span className="text-base font-black uppercase tracking-wider">Option</span>
                    </button>
                    <button data-asset-id="save_item" data-asset-name="save_item" className="flex items-center gap-3 w-full p-4 hover:bg-[#d4cfc0]/10 rounded-2xl transition-colors text-[#4a463d]/60 hover:text-[#546147] group">
                        <div className="p-2 bg-[#fdead3]/20 rounded-xl group-hover:bg-white group-hover:shadow-sm"><Save size={16} /></div>
                        <span className="text-base font-black uppercase tracking-wider">Save</span>
                    </button>
                </div>
            )}
        </div>
    );
};

const VNControlsPreview = () => (
    <div data-asset-id="vn_controls" data-asset-name="vn_controls_bg" className="bg-white/80 backdrop-blur-2xl p-10 rounded-[4rem] shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-white flex flex-col items-center gap-10 w-full max-w-lg">
        <div data-asset-id="dialog_box" data-asset-name="dialog_box_bg" className="w-full bg-[#fdead3]/20/50 rounded-[2.5rem] p-8 border border-[#d4cfc0]/10/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#d4cfc0]" />
            <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#d4cfc0] animate-pulse" />
                <span data-asset-id="char_name" data-asset-name="char_name_text" className="text-xs font-black text-[#56604e] uppercase tracking-[0.2em]">Miyu</span>
            </div>
            <p data-asset-id="dialog_text" data-asset-name="dialog_text_content" className="text-[#4a463d]/60 font-medium leading-relaxed italic text-lg">
                "이 아름다운 세상에서, 우리의 이야기가 시작됩니다..."
            </p>
        </div>
        <div className="flex items-center gap-6">
            <button data-asset-id="rewind_btn" data-asset-name="rewind_icon" className="w-14 h-14 rounded-2xl bg-[#fdead3]/20 text-[#4a463d]/30 hover:text-[#56604e] hover:bg-[#d4cfc0]/10 transition-all flex items-center justify-center">
                <Rewind size={24} />
            </button>
            <button data-asset-id="play_btn" data-asset-name="play_icon_large" className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-[#546147] to-[#546147] text-[#4a463d] shadow-xl shadow-[#d4cfc0]/40 hover:scale-110 transition-all flex items-center justify-center">
                <Play size={32} className="ml-1" />
            </button>
            <button data-asset-id="forward_btn" data-asset-name="forward_icon" className="w-14 h-14 rounded-2xl bg-[#fdead3]/20 text-[#4a463d]/30 hover:text-[#56604e] hover:bg-[#d4cfc0]/10 transition-all flex items-center justify-center">
                <FastForward size={24} />
            </button>
        </div>
    </div>
);

const SaveMenuPreview = () => (
    <div data-asset-id="save_slots" className="w-full max-w-4xl p-12 relative flex gap-12 overflow-hidden group/save min-h-[600px]">
        {/* Main Menu Frame Background */}
        <div
            data-asset-name="save_menu_bg"
            data-asset-padding="40"
            className="absolute inset-0 bg-[#fdead3]/10 rounded-[4rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all z-0"
        />

        {/* Left Side: Save Slots */}
        <div className="flex-1 flex flex-col gap-6 relative z-10">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    data-asset-id={`save_slot_${i}`}
                    className={`group/slot relative rounded-[2.5rem] transition-all duration-500 ${i === 1 ? 'scale-[1.02]' : ''}`}
                >
                    {/* Dedicated Background Layer for Clean Extraction */}
                    <div
                        data-asset-name={`save_slot_${i}_frame_bg`}
                        data-asset-padding="20"
                        className={`absolute inset-0 rounded-[2.5rem] border border-white/10 transition-all ${i === 1 ? 'bg-[#9ea897] shadow-md shadow-xl shadow-slate-200/50' : 'bg-[#fdead3]/10'}`}
                    >
                        <div className="absolute inset-[1px] bg-[#0c0c0e]/90 rounded-[2.45rem]" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 p-6 flex items-center gap-8">
                        <div data-asset-id={`slot_thumb_${i}`} data-asset-name={`slot_${i}_thumbnail`} data-asset-padding="10" className="w-40 h-24 rounded-3xl bg-[#8c8270] flex-shrink-0 relative overflow-hidden border border-transparent shadow-inner">
                            {i < 3 ? (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d4cfc0]/10 to-[#546147]/10" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-[#4a463d]/60 font-black text-[10px] uppercase tracking-widest bg-[#fdead3]/20 italic">Empty Slot</div>
                            )}
                            <div data-asset-name={`slot_${i}_tag`} className="absolute bottom-2 left-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[8px] font-black text-[#4a463d]/50 border border-white/10 uppercase tracking-widest">
                                {i < 3 ? 'Prolog' : 'No Data'}
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <span data-asset-id={`slot_label_${i}`} data-asset-name={`slot_${i}_badge`} className="px-4 py-1.5 bg-[#d4cfc0] rounded-full text-[9px] font-black text-[#4a463d] uppercase tracking-wider shadow-lg shadow-[#d4cfc0]/20">Slot 0{i}</span>
                                {i < 3 && <span data-asset-name={`slot_${i}_chapter`} className="text-xs font-black text-[#4a463d] tracking-widest uppercase">Chapter 1</span>}
                            </div>
                            <h4 data-asset-id={`slot_title_${i}`} data-asset-name={`slot_${i}_title`} className={`text-xl font-black tracking-tight italic uppercase ${i < 3 ? 'text-[#4a463d]' : 'text-[#4a463d]/20'}`}>
                                {i === 1 ? '첫 번째 만남' : i === 2 ? '꿈의 시작' : '비어 있음'}
                            </h4>
                            <div className="flex items-center gap-4 mt-3">
                                <div data-asset-name={`slot_${i}_time_info`} className="flex items-center gap-2 text-[#4a463d]/30">
                                    <Clock size={10} />
                                    <span className="text-[9px] font-bold tracking-widest">2026.03.09 12:49</span>
                                </div>
                                <div data-asset-name={`slot_${i}_playtime_info`} className="flex items-center gap-2 text-[#4a463d]/30">
                                    <History size={10} />
                                    <span className="text-[9px] font-bold tracking-widest">01:24:55</span>
                                </div>
                            </div>
                        </div>

                        <button data-asset-id={`slot_delete_${i}`} data-asset-name="delete_button" className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${i < 3 ? 'bg-red-500/10 text-red-500/40 hover:bg-red-500 hover:text-[#4a463d] hover:rotate-90' : 'hidden'}`}>
                            <X size={18} />
                        </button>
                    </div>
                </div>
            ))}

            {/* Pagination */}
            <div className="flex items-center gap-2 mt-4 px-2">
                {[1, 2, 3, 4, 5].map(p => (
                    <button key={p} className={`w-10 h-10 rounded-2xl text-sm font-black transition-all border ${p === 1 ? 'bg-[#546147] border-indigo-400 text-[#4a463d] shadow-lg shadow-[#546147]/20' : 'bg-[#fdead3]/10 border-transparent text-[#4a463d]/20 hover:text-[#4a463d]/60 hover:bg-white/10'}`}>
                        {p}
                    </button>
                ))}
            </div>
        </div>

        {/* Right Side: Options & Confirmation */}
        <div className="w-80 flex flex-col justify-between border-l border-transparent pl-12 relative z-10">
            <div className="space-y-8">
                <div>
                    <h2 data-asset-id="game_title" data-asset-name="game_main_title" className="text-3xl font-black text-[#4a463d] italic tracking-tighter uppercase leading-tight mb-2">우리 집<br />천사냥이</h2>
                    <div className="w-12 h-1 bg-[#d4cfc0] rounded-full" />
                </div>

                <nav className="flex flex-col gap-4">
                    {['게임 시작', '불러오기', '앨범', '설정', '종료'].map((item, idx) => (
                        <button key={item} className={`group/nav text-left flex items-center gap-4 transition-all ${idx === 1 ? 'text-[#56604e]' : 'text-[#4a463d]/30 hover:text-[#4a463d]'}`}>
                            <span className="text-xs font-black tracking-widest opacity-20">0{idx + 1}</span>
                            <span className="text-lg font-black uppercase tracking-tight italic group-hover/nav:translate-x-2 transition-transform">{item}</span>
                        </button>
                    ))}
                </nav>
            </div>

            <div className="bg-[#fdead3]/10 rounded-[2.5rem] p-8 border border-transparent backdrop-blur-xl">
                <p data-asset-id="confirmation_msg" data-asset-name="confirmation_text" className="text-sm font-black text-[#4a463d]/60 uppercase tracking-widest mb-6 leading-relaxed">
                    슬롯을 선택하시겠습니까?
                </p>
                <div className="flex gap-4">
                    <button className="flex-1 py-4 bg-[#546147] hover:bg-[#546147] text-[#4a463d] rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-[#546147]/20 transition-all active:scale-95">Yes</button>
                    <button className="flex-1 py-4 bg-[#fdead3]/10 hover:bg-white/10 text-[#4a463d]/50 rounded-2xl text-xs font-black uppercase tracking-widest border border-transparent transition-all">No</button>
                </div>
            </div>
        </div>

        {/* Decorative Blur Backgrounds */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4cfc0]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#546147]/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </div>
);

const CharacterSelectionPreview = () => (
    <div data-asset-id="character_stats" data-asset-name="char_selection_bg" className="w-full flex gap-8 p-12 bg-[#fdead3]/20 rounded-[4rem] border border-transparent shadow-3xl overflow-hidden relative">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4cfc0]/20 blur-[150px] rounded-full animate-pulse" />
        <div className="w-80 flex flex-col gap-6 z-10">
            <div className="flex items-center gap-4 mb-4">
                <div data-asset-id="profile_icon_container" data-asset-name="profile_icon" className="p-3 bg-[#d4cfc0] rounded-2xl text-[#4a463d] shadow-lg shadow-[#d4cfc0]/30">
                    <User size={28} />
                </div>
                <div>
                    <h3 data-asset-id="profile_title" data-asset-name="profile_title_text" className="text-2xl font-black text-[#4a463d] italic tracking-tighter uppercase leading-none">Profile</h3>
                    <p className="text-[10px] text-[#56604e] font-black tracking-[.3em] uppercase mt-1">Status: Active</p>
                </div>
            </div>
            <div data-asset-id="stats_card" data-asset-name="stats_card_bg" className="flex-1 bg-white/60 border border-[#d4cfc0]/30 backdrop-blur-md shadow-sm shadow-[#d4cfc0]/10/5 bg-[#fdead3]/10 border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-8 backdrop-blur-3xl">
                <div className="space-y-4">
                    <div className="flex justify-between items-center px-1">
                        <span data-asset-id="affinity_label" data-asset-name="affinity_label_text" className="text-xs font-black text-[#4a463d]/40 uppercase tracking-widest">Affinity</span>
                        <span data-asset-id="affinity_rank" data-asset-name="affinity_rank_text" className="text-xs font-black text-[#546147] uppercase">Rank S</span>
                    </div>
                    <div data-asset-id="affinity_bar_bg" data-asset-name="affinity_bar_bg" className="w-full h-3 bg-[#fdead3]/10 rounded-full overflow-hidden border border-transparent">
                        <div data-asset-id="affinity_bar_fill" data-asset-name="affinity_bar_fill" className="w-[85%] h-full bg-gradient-to-r from-[#d4cfc0] to-[#546147] shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div data-asset-id="defense_stat" data-asset-name="defense_stat_box" className="p-4 bg-white/[0.03] rounded-2xl border border-transparent">
                        <Shield size={16} className="text-[#4a463d] mb-2" />
                        <p className="text-[9px] text-[#4a463d]/30 font-black uppercase tracking-tighter">Defense</p>
                        <p className="text-lg font-black text-[#4a463d] tracking-tighter">89<span className="text-[10px] text-[#4a463d]/50">%</span></p>
                    </div>
                    <div data-asset-id="power_stat" data-asset-name="power_stat_box" className="p-4 bg-white/[0.03] rounded-2xl border border-transparent">
                        <Zap size={16} className="text-[#546147] mb-2" />
                        <p className="text-[9px] text-[#4a463d]/30 font-black uppercase tracking-tighter">Power</p>
                        <p className="text-lg font-black text-[#4a463d] tracking-tighter">MAX</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-1 relative z-10 flex flex-col items-center justify-center">
            <div className="relative w-full h-[300px] flex items-center justify-center group/stage">
                <div className="absolute w-[250px] h-[250px] border-2 border-transparent rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="relative z-20 h-full flex items-center justify-center drop-shadow-[0_0_50px_rgba(236,72,153,0.3)]">
                    <div data-asset-id="hero_text_overlay" data-asset-name="hero_name_badge" className="text-center">
                        <h4 data-asset-id="hero_name" data-asset-name="hero_name_text" className="text-6xl font-black text-[#4a463d] italic tracking-tighter mb-1">MIYU</h4>
                        <p data-asset-id="hero_role" data-asset-name="hero_role_text" className="text-[#546147] text-base font-black uppercase tracking-[0.4em]">Celestial Guardian</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const AffinitySystemPreview = () => (
    <div data-asset-id="affinity_system" data-asset-name="affinity_system_full_layout" className="w-full h-full flex gap-10 p-12 bg-[#fdead3]/20 rounded-[4rem] border border-transparent shadow-3xl overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#546147]/10 blur-[180px] rounded-full" />
        <div className="flex-1 flex flex-col gap-8 z-10">
            <div data-asset-id="affinity_header" data-asset-name="affinity_header_area" className="flex items-center gap-6">
                <div data-asset-id="heart_icon_box" data-asset-name="heart_icon_active" className="p-5 bg-gradient-to-br from-[#d4cfc0] to-[#546147] rounded-[2rem] text-[#4a463d] shadow-xl shadow-slate-200/50 shadow-[#d4cfc0]/40">
                    <Heart size={36} />
                </div>
                <div>
                    <h3 data-asset-id="resonance_title" data-asset-name="resonance_title_text" className="text-6xl font-black text-[#4a463d] italic tracking-tighter uppercase leading-none">Affinity Resonance</h3>
                    <p data-asset-id="connection_stats" data-asset-name="connection_stats_text" className="text-[11px] text-[#56604e] font-black tracking-[0.4em] uppercase mt-2">Core Connection: 88.4%</p>
                </div>
            </div>
            <div data-asset-id="resonance_visualizer" data-asset-name="resonance_visualizer_box" className="flex-1 bg-white/60 border border-[#d4cfc0]/30 backdrop-blur-md shadow-sm shadow-[#d4cfc0]/10/5 bg-white/[0.03] border border-white/10 rounded-[3.5rem] p-12 flex flex-col items-center justify-center gap-12 relative overflow-hidden backdrop-blur-3xl">
                <div className="relative w-64 h-64 flex items-center justify-center">
                    <div className="absolute inset-0 border-[6px] border-transparent rounded-full" />
                    <div data-asset-id="visualizer_ring" data-asset-name="visualizer_ring" className="absolute inset-0 border-[6px] border-[#d4cfc0] rounded-full border-t-transparent border-l-transparent rotate-[45deg] shadow-[0_0_30px_rgba(236,72,153,0.3)]" />
                    <div className="flex flex-col items-center">
                        <h4 data-asset-id="bonded_status" data-asset-name="bonded_status_text" className="text-6xl font-black text-[#4a463d] italic tracking-tighter leading-none mb-2">Deep</h4>
                        <div data-asset-id="bonded_badge" data-asset-name="bonded_badge" className="px-6 py-2 bg-[#d4cfc0] text-[#4a463d] rounded-full text-sm font-black uppercase tracking-[0.5em] shadow-xl shadow-[#d4cfc0]/40">Bonded</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- End of Preview Components ---

export default function Dashboard() {
    const [currentStep, setCurrentStep] = useState(1);
    const currentStepRef = useRef(currentStep);
    const [status, setStatus] = useState<ToolStatus | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [videoUrl, setVideoUrl] = useState<string | null>(null);
    const [showSettings, setShowSettings] = useState(false);
    const [psPath, setPsPath] = useState('');
    const [aiPath, setAiPath] = useState('');
    const [chatInput, setChatInput] = useState("");
    const [isCoachTyping, setIsCoachTyping] = useState(false);
    const [lastResponse, setLastResponse] = useState("무엇을 도와드릴까요? 디자인 가이드나 애니메이션 생성 명령을 해보세요.");
    const [showStep1Menu, setShowStep1Menu] = useState(false);
    const [vnPlaying, setVnPlaying] = useState(false);
    const [vnSpeed, setVnSpeed] = useState(1);
    const [vnShowControls, setVnShowControls] = useState(true);
    const [previewSlide, setPreviewSlide] = useState(0);
    const [isFocusMode, setIsFocusMode] = useState(false);
    const [aniMotionModules, setAniMotionModules] = useState<string[]>([]);
    const [selectedMotionModule, setSelectedMotionModule] = useState("");
    const [aniUpscaleModels, setAniUpscaleModels] = useState<string[]>([]);
    const [aniUpscale, setAniUpscale] = useState(false);
    const [aniSmooth, setAniSmooth] = useState(false);
    const [aniDuration, setAniDuration] = useState(3);
    const [isLongAni, setIsLongAni] = useState(false);
    const [aniFps, setAniFps] = useState(8);
    const [aniDenoising, setAniDenoising] = useState(0.35); // Lowered to 0.35 to preserve cell-shading integrity
    const [aniLlmModels, setAniLlmModels] = useState<string[]>([]);
    const [selectedAniLlm, setSelectedAniLlm] = useState("");
    const [isMagicActive, setIsMagicActive] = useState(false);
    const [useMotionGuide, setUseMotionGuide] = useState(true); // Enabled by default for stability

    // Workspace States
    const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
    const [activeWorkspaceId, setActiveWorkspaceId] = useState<string>('default');
    const activeWorkspaceIdRef = useRef(activeWorkspaceId);

    // Sync refs
    useEffect(() => { currentStepRef.current = currentStep; }, [currentStep]);
    useEffect(() => { activeWorkspaceIdRef.current = activeWorkspaceId; }, [activeWorkspaceId]);
    const [editingWorkspaceId, setEditingWorkspaceId] = useState<string | null>(null);
    const [newWorkspaceName, setNewWorkspaceName] = useState("");
    const [isCreatingWorkspace, setIsCreatingWorkspace] = useState(false);

    const activeWorkspace = workspaces.find(w => w.id === activeWorkspaceId) || { id: 'default', name: 'Main Project', slideIds: DEFAULT_SLIDES };
    const currentSlideIds = activeWorkspace.slideIds;

    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [isDownloading, setIsDownloading] = useState(false);
    const [upscaleFolder, setUpscaleFolder] = useState<{ path: string; imageCount: number } | null>(null);
    const [upscaleProgress, setUpscaleProgress] = useState<number | null>(null);
    const [uploadedFiles, setUploadedFiles] = useState<{ name: string; data: string; type: string; previewUrl: string }[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [useDetailRefinement, setUseDetailRefinement] = useState(true);
    const [isVectorMode, setIsVectorMode] = useState(false);
    const [isRedrawMode, setIsRedrawMode] = useState(false);
    const [animationStyle, setAnimationStyle] = useState('cinematic');

    // AI Drawing States (V12.0)
    const [aiPrompt, setAiPrompt] = useState('고품질, 화려한 일러스트, 귀여운 고양이 캐릭터, 게임 아트 스타일');
    const [aiNegativePrompt, setAiNegativePrompt] = useState('낮은 품질, 흐릿함, 워터마크, 텍스트, 뭉개진 손가락');
    const [aiDenoising, setAiDenoising] = useState(0.5);
    const [aiInterval, setAiInterval] = useState(4000);
    const [aiResultImage, setAiResultImage] = useState<string | null>(null);
    const [aiActive, setAiActive] = useState(false);
    const [aiAutoMode, setAiAutoMode] = useState(false); // Manual by default as requested
    const [aiGenerating, setAiGenerating] = useState(false);
    const [aiStatusMsg, setAiStatusMsg] = useState("AI 드로잉 준비됨");
    const [selectedModel, setSelectedModel] = useState('animagineXLV31_v31.safetensors'); // Switched to 2D standard
    const [selectedUpscaleModel, setSelectedUpscaleModel] = useState('4x-UltraSharp.pth');
    const [aiUpscale, setAiUpscale] = useState(false);
    const [aiDrawMode, setAiDrawMode] = useState<'t2i' | 'i2i' | 'ps_sync'>('ps_sync');
    const [aniPrompt, setAniPrompt] = useState('(2d animation:1.3), (flat coloring:1.2), (simple style:1.2), (flat shadows:1.2), clean lineart, vibrant colors, cinematic lighting, highly detailed');
    const [aniNegativePrompt, setAniNegativePrompt] = useState('lowres, bad anatomy, worst quality, distorted face, blurry, 3d, realistic, photorealistic, rough sketch, blurry lines, text, watermark');
    const [aniStylePreset, setAniStylePreset] = useState('Laftel Anime');
    const [useGGUF, setUseGGUF] = useState(false);
    const [aniMotionModule, setAniMotionModule] = useState('mm_sdxl_v10_119.ckpt'); // SDXL compatible motion module
    const [aniVideoUrl, setAniVideoUrl] = useState<string | null>(null);
    const [aniGenerating, setAniGenerating] = useState(false);
    const [aniStatusMsg, setAniStatusMsg] = useState('');
    const [aniVideoFullscreen, setAniVideoFullscreen] = useState(false);

    // My Assets State
    const [assetFolderPath, setAssetFolderPath] = useState('');
    const [assetImages, setAssetImages] = useState<any[]>([]);
    const [selectedMyAsset, setSelectedMyAsset] = useState<any>(null);
    const [comfyConnected, setComfyConnected] = useState(false);
    const [comfyModels, setComfyModels] = useState<string[]>([]);
    const [aiResolution, setAiResolution] = useState('512x512');
    const [aiAspectRatio, setAiAspectRatio] = useState('1:1');
    const [uiPrompt, setUiPrompt] = useState('modern game workspace, futuristic aesthetic, sleek layout, glassmorphism, high quality');
    const [uiNegativePrompt, setUiNegativePrompt] = useState('low quality, messy, text, watermark, hand-drawn');
    const [uiUpscale, setUiUpscale] = useState(false);
    const [selectedUiModel, setSelectedUiModel] = useState('UiUX-SDXL.safetensors');

    // Video Editing States (V11.0)
    const [activeVideoIndex, setActiveVideoIndex] = useState(0);
    const [subtitles, setSubtitles] = useState([{ time: '00:00', text: '' }]);

    // Inspector Mode States
    const [isInspectorMode, setIsInspectorMode] = useState(false);
    const [hoveredAsset, setHoveredAsset] = useState<{ id: string, name: string, rect: DOMRect } | null>(null);
    const [selectedAsset, setSelectedAsset] = useState<{ id: string, name: string, element: HTMLElement } | null>(null);

    // NSFW & Adult Verification States (V4.2)
    const [isAdultVerified, setIsAdultVerified] = useState(false);
    const [showVerificationModal, setShowVerificationModal] = useState(false);
    const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

    // Adult Verification State
    const [isSending, setIsSending] = useState(false);

    const NSFW_KEYWORDS = [
        'nsfw', 'nude', 'naked', 'erotic', 'sexy', 'sex', 'porn', 'bikini', 'lingerie', 'undressing',
        'nipples', 'pussy', 'penis', 'cum', 'adult', '18+', '19금', '19', 'r18', 'r-18', 'r19', 'r-19',
        '성인', '노출', '알몸', '가슴', '엉덩이', '젖가슴', '성기', '보지', '자지', '포르노',
        'hentai', 'ecchi', 'lewd', 'topless', 'bottomless', 'bra ', 'panties'
    ];

    const checkNSFW = (prompt: string) => {
        const lowerPrompt = prompt.toLowerCase();
        return NSFW_KEYWORDS.some(keyword => lowerPrompt.includes(keyword.toLowerCase()));
    };

    const handleNSFWVerification = (action: () => void, prompt: string) => {
        if (checkNSFW(prompt || '') && !isAdultVerified) {
            setPendingAction(() => action);
            setShowVerificationModal(true);
            return true; // NSFW intercepted
        }
        return false; // Safe or already verified
    };

    const handleResetVerification = () => {
        if (confirm('성인 인증 상태를 초기화하시겠습니까?\n이후 NSFW 콘텐츠 생성 시 다시 인증이 필요합니다.')) {
            localStorage.removeItem('isAdultVerified');
            setIsAdultVerified(false);
            alert('인증 상태가 초기화되었습니다.');
        }
    };

    const handleCheckUpdate = () => {
        setIsMagicActive(true);
        setTimeout(() => {
            setIsMagicActive(false);
            alert('현재 최신 버전(v4.6.5)을 사용 중입니다.\n새로운 기능이 추가되면 자동으로 업데이트 알림을 드립니다.');
        }, 1500);
    };

    const handleSavePaths = () => {
        bridge?.executeTool('config', 'save_adobe_paths', {
            photoshopPath: psPath,
            illustratorPath: aiPath
        });
        setShowSettings(false);
    };

    useEffect(() => {
        setStatus(null);
        setPreviewUrl(null);
        setVideoUrl(null);
        setUploadedFiles([]);
    }, [currentStep, aiDrawMode]);

    const handleStylePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setAniStylePreset(val);
        if (val === 'Laftel Anime') {
            setAniPrompt('(2d animation:1.3), (flat coloring:1.2), (simple style:1.2), (flat shadows:1.2), clean lineart, vibrant colors, cinematic lighting, highly detailed');
            setAniNegativePrompt('lowres, bad anatomy, worst quality, distorted face, blurry, 3d, realistic, photorealistic, rough sketch, blurry lines, text, watermark');
        } else if (val === 'Premium Cinematic') {
            setAniPrompt('masterpiece, best quality, realistic anime, high resolution, hyper detailed anime style, incredible lighting, ray tracing, bloom effect, depth of field, 4k');
            setAniNegativePrompt('lowres, bad anatomy, worst quality, deformed, cell shaded, flat color, cartoonish, 2d, watermark, text');
        } else if (val === 'Webtoon Flat') {
            setAniPrompt('webtoon style, flat color, minimal shading, clean vector lines, manhwa style, bright colors, clear lineart');
            setAniNegativePrompt('lowres, bad anatomy, worst quality, messy lines, realistic, 3d, photorealistic, blurry, heavy shading, heavy contrast');
        }
    };

    const handleFileDrop = async (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        const allowedFiles = files.filter(f => f.type.startsWith('image/') || f.type.startsWith('video/') || f.type.startsWith('audio/'));

        if (currentStep === 5) {
            if (uploadedFiles.length + allowedFiles.length > 6) {
                setAniStatusMsg("⚠️ Animation Forge supports up to 6 keyframes.");
                return;
            }
        } else {
            if (uploadedFiles.length + allowedFiles.length > 1) {
                setAniStatusMsg("⚠️ This mode supports only 1 source image.");
                return;
            }
        }

        const newFiles = await Promise.all(allowedFiles.map(async (file) => {
            return new Promise<{ name: string; data: string; type: string; previewUrl: string }>((resolve) => {
                const reader = new FileReader();
                reader.onload = (prev) => {
                    const base64Data = (prev.target?.result as string).split(',')[1];
                    let defaultType = 'image/png';
                    if (file.type.startsWith('video/')) defaultType = 'video/mp4';
                    if (file.type.startsWith('audio/')) defaultType = 'audio/mpeg';

                    resolve({
                        name: file.name,
                        data: base64Data,
                        type: file.type || defaultType,
                        previewUrl: URL.createObjectURL(file) // Use ObjectURL for reliable preview
                    });
                };
                reader.readAsDataURL(file);
            });
        }));

        setUploadedFiles(prev => [...prev, ...newFiles]);
    };

    // Clean up ObjectURLs to prevent memory leaks
    useEffect(() => {
        return () => {
            uploadedFiles.forEach(file => URL.revokeObjectURL(file.previewUrl));
        };
    }, [uploadedFiles]);

    useEffect(() => {
        if (bridge) {
            bridge.onMessage((data) => {
                if (data.type === 'TOOL_STATUS') {
                    const { tool, action, status, message, verified } = data.payload;
                    setStatus(data.payload);

                    if (status === 'RUNNING') {
                        setIsCoachTyping(true);
                        setLastResponse(`${message}`);
                        // Auto-switch step if applicable
                        const relevantStep = STEPS.find(s => s.tool === tool);
                        if (relevantStep) setCurrentStep(relevantStep.id);

                        // Keep aniGenerating true if it's an animate action
                        if (tool === 'photoshop' && action === 'ai_animate') setAniGenerating(true);
                        if (tool === 'photoshop' && (action === 'ai_draw_once' || action === 'ai_draw_start')) setAiActive(true);

                    } else if (status === 'COMPLETED') {
                        setIsCoachTyping(false);
                        setLastResponse(`작업이 완료되었습니다. ${message.split('\n')[0]}`);

                        if (tool === 'photoshop') {
                            setAniGenerating(false);
                            setAiActive(false);
                            if (action === 'ai_cancel') setAniStatusMsg("🚫 작업이 취소되었습니다.");
                        }

                        // Handle Google Auth verification success
                        if (tool === 'auth') {
                            if (verified) {
                                setIsAdultVerified(true);
                                localStorage.setItem('isAdultVerified', 'true');
                                setShowVerificationModal(false);
                                setIsSending(false);
                                if (pendingAction) {
                                    pendingAction();
                                    setPendingAction(null);
                                }
                            }
                        }
                    } else if (status === 'ERROR') {
                        setIsCoachTyping(false);
                        setAniGenerating(false);
                        setAiActive(false);
                        setAniStatusMsg(`❌ ${message}`);

                        if (tool === 'auth') {
                            setIsSending(false);
                            alert(message);
                        }
                    }
                }
                else if (data.type === 'FOLDER_SELECTED') {
                    setUpscaleFolder(data.payload);
                    setAssetFolderPath(data.payload.path);
                    // Automatically scan for images when folder is selected
                    bridge?.executeTool('photoshop', 'scan_assets', { folderPath: data.payload.path });
                } else if (data.type === 'PREVIEW_UPDATE') {
                    setPreviewUrl(data.payload.url);
                } else if (data.type === 'VIDEO_UPDATE') {
                    setVideoUrl(data.payload.url);
                    setAniVideoUrl(data.payload.url);
                    setAniGenerating(false);
                    setAniStatusMsg('✨ 애니메이션 생성 완료!');
                } else if (data.type === 'AI_DRAW_RESULT') {
                    let imgData = data.payload.imageBase64 || data.payload.image;
                    if (imgData) {
                        if (!imgData.startsWith('data:')) {
                            imgData = `data:image/png;base64,${imgData}`;
                        }

                        const isUIDesign = data.payload.target === 'ui_design' ||
                            (data.payload.width === 1024 && data.payload.height === 768) ||
                            (currentStepRef.current === 1 && !data.payload.target);
                        const target = isUIDesign ? 'ui_design' : 'ai_drawing';

                        if (target === 'ui_design') {
                            // Add result directly to active workspace
                            setWorkspaces(prev => prev.map(w => {
                                if (w.id === activeWorkspaceIdRef.current) {
                                    const newSlides = [...w.slideIds, imgData];
                                    // Auto-select the last slide
                                    setPreviewSlide(newSlides.length - 1);
                                    return { ...w, slideIds: newSlides };
                                }
                                return w;
                            }));
                            setAiStatusMsg("✨ UI 디자인 시안이 워크스페이스에 추가되었습니다!");
                        } else {
                            setAiResultImage(imgData);
                            setAiStatusMsg("✨ AI 이미지 생성 완료!");
                        }
                        setAiGenerating(false);
                    } else {
                        console.error('AI_DRAW_RESULT received but no image data found', data.payload);
                    }
                } else if (data.type === 'AI_DRAW_STATUS') {
                    setAiActive(data.payload.active);
                    if (!data.payload.active) {
                        setAiGenerating(false);
                        setAiStatusMsg("AI 드로잉 중지됨");
                    }
                } else if (data.type === 'AI_DRAW_PROGRESS') {
                    setAiStatusMsg(data.payload.message);
                    if (data.payload.stage === 'generating') setAiGenerating(true);
                    if (data.payload.stage === 'error') setAiGenerating(false);
                    if (data.payload.stage === 'analysis_done') {
                        setAniPrompt(data.payload.message);
                        setAiStatusMsg("✨ Magic Tags Applied!");
                    }
                } else if (data.type === 'COMFYUI_STATUS') {
                    setComfyConnected(data.payload.connected);
                    if (data.payload.models) {
                        const newModels = data.payload.models;
                        setComfyModels(newModels);

                        // Validation: If selected model is missing from the updated list, switch to the first valid one
                        if (newModels.length > 0) {
                            if (!selectedModel || !newModels.includes(selectedModel)) {
                                setSelectedModel(newModels[0]);
                                console.log("Model missing or invalid, auto-switched to:", newModels[0]);
                            }
                        }
                    }
                    if (data.payload.motionModules) {
                        setAniMotionModules(data.payload.motionModules);
                        if (!selectedMotionModule && data.payload.motionModules.length > 0) {
                            setSelectedMotionModule(data.payload.motionModules[0]);
                        }
                    }
                    if (data.payload.upscaleModels) {
                        setAniUpscaleModels(data.payload.upscaleModels);
                        if (!selectedUpscaleModel && data.payload.upscaleModels.length > 0) {
                            setSelectedUpscaleModel(data.payload.upscaleModels[0]);
                        }
                    }
                    if (data.payload.llmModels) {
                        setAniLlmModels(data.payload.llmModels);
                        if (!selectedAniLlm && data.payload.llmModels.length > 0) {
                            setSelectedAniLlm(data.payload.llmModels[0]);
                        }
                    }
                } else if (data.type === 'ASSET_LIST') {
                    setAssetImages(data.payload.images);
                } else if (data.type === 'MAGIC_PROMPT_RESULT') {
                    if (data.payload.targetType === 'animation') {
                        if (data.payload.prompt) setAniPrompt(data.payload.prompt);
                        if (data.payload.negativePrompt) setAniNegativePrompt(data.payload.negativePrompt);
                        setAniStatusMsg("✨ AI 마법 번역 및 프롬프트 적용 완료!");
                    } else if (data.payload.targetType === 'ai_draw') {
                        if (data.payload.prompt) setAiPrompt(data.payload.prompt);
                        if (data.payload.negativePrompt) setAiNegativePrompt(data.payload.negativePrompt);
                    } else if (data.payload.targetType === 'ui_design') {
                        if (data.payload.prompt) setUiPrompt(data.payload.prompt);
                        if (data.payload.negativePrompt) setUiNegativePrompt(data.payload.negativePrompt);
                        setAiStatusMsg("✨ UI 디자인 번역 및 매직 프롬프트 적용 완료!");
                    }
                    setIsMagicActive(false);
                } else if (data.type === 'SET_CONFIG') {
                    const { photoshopPath, illustratorPath } = data.payload;
                    if (photoshopPath) setPsPath(photoshopPath);
                    if (illustratorPath) setAiPath(illustratorPath);
                }
            });
        }
    }, []);

    useEffect(() => {
        const savedWorkspaces = localStorage.getItem('workspaces');
        const savedActiveId = localStorage.getItem('activeWorkspaceId');

        if (savedWorkspaces) {
            try {
                setWorkspaces(JSON.parse(savedWorkspaces));
            } catch (e) {
                console.error('Failed to parse workspaces', e);
            }
        } else {
            // Initial workspace
            setWorkspaces([{ id: 'default', name: 'Main Project', slideIds: DEFAULT_SLIDES }]);
        }

        if (savedActiveId) {
            setActiveWorkspaceId(savedActiveId);
        }

        const savedVerification = localStorage.getItem('isAdultVerified');
        if (savedVerification === 'true') {
            setIsAdultVerified(true);
        }
    }, []);

    useEffect(() => {
        if (workspaces.length > 0) {
            localStorage.setItem('workspaces', JSON.stringify(workspaces));
        }
    }, [workspaces]);


    useEffect(() => {
        localStorage.setItem('activeWorkspaceId', activeWorkspaceId);
    }, [activeWorkspaceId]);

    // Request initial config
    useEffect(() => {
        if (bridge) {
            bridge.executeTool('config', 'get_config');
        }
    }, [bridge]);

    // Check ComfyUI connection when entering Step 5 or 6
    useEffect(() => {
        if ((currentStep === 5 || currentStep === 6) && bridge) {
            bridge.executeTool('photoshop', 'check_comfyui');
        }
    }, [currentStep, bridge]);

    const handleAiDrawStart = () => {
        const [w, h] = aiResolution.split('x').map(Number);

        // Check for NSFW before starting
        if (handleNSFWVerification(() => handleAiDrawStart(), aiPrompt)) return;

        // Validation for I2I
        const imageBase64 = aiDrawMode === 'i2i' && uploadedFiles.length > 0 ? uploadedFiles[0].data : undefined;
        if (aiDrawMode === 'i2i' && !imageBase64) {
            setAiStatusMsg("⚠️ 생성할 이미지를 먼저 업로드해주세요!");
            return;
        }

        setAiStatusMsg(aiDrawMode === 't2i' ? "🧠 AI 자율 상상 생성 중..." : aiDrawMode === 'i2i' ? "🖼️ 참조 이미지 기반 생성 중..." : "📸 포토샵 화면 동기화 생성 중...");

        bridge?.executeTool('photoshop', (aiAutoMode && aiDrawMode === 'ps_sync') ? 'ai_draw_start' : 'ai_draw_once', {
            target: 'ai_drawing',
            mode: aiDrawMode,
            imageBase64,
            prompt: aiPrompt,
            negativePrompt: aiNegativePrompt,
            denoisingStrength: aiDrawMode === 't2i' ? 1.0 : aiDenoising,
            interval: aiInterval,
            modelName: selectedModel,
            width: w,
            height: h,
            upscale: aiUpscale
        });
    };

    const handleAiResolutionChange = (res: string, ratio: string) => {
        setAiResolution(res);
        setAiAspectRatio(ratio);
        const [w, h] = res.split('x').map(Number);
        if (aiActive) {
            updateAiSettings({ width: w, height: h });
        }
    };

    const handleAiDrawStop = () => {
        bridge?.executeTool('photoshop', 'ai_draw_stop');
    };

    const handleAiDrawOnce = () => {
        if (!bridge) return;

        // Check for NSFW before starting
        if (handleNSFWVerification(() => handleAiDrawOnce(), aiPrompt)) return;

        setAiStatusMsg("📸 캔버스 캡처 및 생성 중...");
        bridge.executeTool('image_gen', 'ai_draw_once', {
            target: 'ai_drawing',
            prompt: aiPrompt,
            negativePrompt: aiNegativePrompt,
            denoisingStrength: aiDenoising,
            modelName: selectedModel,
            width: aiResolution.split('x')[0],
            height: aiResolution.split('x')[1],
            upscale: aiUpscale,
            upscaleModel: selectedUpscaleModel
        });
    };

    const handleAiDrawApply = () => {
        bridge?.executeTool('photoshop', 'ai_draw_apply');
    };

    const updateAiSettings = (newSettings: any) => {
        bridge?.executeTool('photoshop', 'ai_draw_settings', newSettings);
    };

    const handleMagicPrompt = () => {
        if (!bridge || !aniPrompt) return;

        // Check for NSFW before magic prompt (translation/refinement)
        if (handleNSFWVerification(() => handleMagicPrompt(), aniPrompt)) return;

        setIsMagicActive(true);
        setAniStatusMsg("🪄 AI 마법 텍스트 번역 시전 중... (한국어 상황 분석)");
        bridge.executeTool('photoshop', 'ai_magic_prompt', {
            text: aniPrompt,
            negativeText: aniNegativePrompt,
            targetType: 'animation',
            llmModel: selectedAniLlm,
            images: uploadedFiles.map(f => ({ name: f.name, data: f.data }))
        });
    };

    const handleAiDrawMagicPrompt = () => {
        if (!bridge || !aiPrompt) return;

        // Check for NSFW before magic prompt
        if (handleNSFWVerification(() => handleAiDrawMagicPrompt(), aiPrompt)) return;

        setIsMagicActive(true);
        setAiStatusMsg("🪄 LibreTranslate 한국어-영문 번역 중...");
        bridge.executeTool('photoshop', 'ai_magic_prompt', {
            text: aiPrompt,
            negativeText: aiNegativePrompt,
            targetType: 'ai_draw'
        });
    };

    const handleUiMagicPrompt = () => {
        if (!bridge || !uiPrompt) return;

        // Check for NSFW before magic prompt
        if (handleNSFWVerification(() => handleUiMagicPrompt(), uiPrompt)) return;

        setIsMagicActive(true);
        setAiStatusMsg("🪄 UI 디자인 한국어-영문 번역 중...");
        bridge.executeTool('photoshop', 'ai_magic_prompt', {
            text: uiPrompt,
            negativeText: uiNegativePrompt,
            targetType: 'ui_design'
        });
    };

    const handleAiAnimate = () => {
        if (!bridge) return;

        // Check for NSFW before starting
        if (handleNSFWVerification(() => handleAiAnimate(), aniPrompt)) return;

        setAniGenerating(true);
        const statusPrefix = useMotionGuide ? '🧩 Motion-Guided ' : '🎬 Standard ';
        setAniStatusMsg(`${statusPrefix} 애니메이션 생성 중... (약 2~5분 소요)`);
        setAniVideoUrl(null);

        // Map animation style to prompt enhancements
        let stylePrompt = "";
        if (animationStyle === 'cinematic') stylePrompt = ", cinematic camera, high dynamic range, masterpiece, best quality";
        if (animationStyle === 'slowmo') stylePrompt = ", slow motion, graceful movement, ethereal, high quality";
        if (animationStyle === 'handdrawn') stylePrompt = ", hand-drawn style, sketch-like animation, artistic, masterpiece";

        bridge.executeTool('photoshop', 'ai_animate', {
            prompt: aniPrompt + stylePrompt,
            negativePrompt: aniNegativePrompt,
            modelName: selectedModel,
            motionModule: selectedMotionModule,
            upscale: aniUpscale,
            upscaleModel: selectedUpscaleModel,
            smooth: aniSmooth,
            fps: aniFps,
            frameCount: Math.floor((isLongAni ? aniDuration : 3) * aniFps),
            width: 512,
            height: 512,
            useGGUF: useGGUF,
            denoisingStrength: aniDenoising,
            images: uploadedFiles.map(f => ({ name: f.name, data: f.data })),
            useMotionGuide: useMotionGuide,
            totalDuration: isLongAni ? aniDuration : 3
        });
    };

    const handleSafeMode = () => {
        setAniDuration(2);
        setAniFps(8);
        setAniUpscale(false);
        setAniDenoising(0.5);
        setAniStatusMsg("🛡️ Safe Mode 적용: 2초/8fps (8GB VRAM 최적화)");
    };

    const handleMagicAnalysis = () => {
        if (!bridge || uploadedFiles.length === 0) return;
        setAiStatusMsg("🔍 Analyzing image features...");
        bridge.executeTool('photoshop', 'ai_analyze_image', {
            imagePath: uploadedFiles[0].data // Base64
        });
    };

    const handleCreateWorkspace = () => {
        if (!newWorkspaceName.trim()) {
            setIsCreatingWorkspace(false);
            return;
        }

        const newWorkspace: Workspace = {
            id: Date.now().toString(),
            name: newWorkspaceName,
            slideIds: [] // Start with an empty workspace as requested
        };
        setWorkspaces([...workspaces, newWorkspace]);
        setActiveWorkspaceId(newWorkspace.id);
        setPreviewSlide(0);
        setNewWorkspaceName("");
        setIsCreatingWorkspace(false);
    };

    const handleRenameWorkspace = (id: string, newName: string) => {
        if (!newName.trim()) return;
        setWorkspaces(workspaces.map(w => w.id === id ? { ...w, name: newName } : w));
        setEditingWorkspaceId(null);
    };

    const handleLoadTemplates = () => {
        const updatedWorkspaces = workspaces.map(w => {
            if (w.id === activeWorkspaceId) {
                return { ...w, slideIds: [...DEFAULT_SLIDES] };
            }
            return w;
        });
        setWorkspaces(updatedWorkspaces);
        setPreviewSlide(0);
    };

    const handleDeleteDesign = (e: React.MouseEvent, slideId: string) => {
        e.stopPropagation();
        if (!confirm('Are you sure you want to remove this design from this workspace?')) return;

        const updatedWorkspaces = workspaces.map(w => {
            if (w.id === activeWorkspaceId) {
                return { ...w, slideIds: w.slideIds.filter(id => id !== slideId) };
            }
            return w;
        });

        setWorkspaces(updatedWorkspaces);
        if (previewSlide >= activeWorkspace.slideIds.length - 1) {
            setPreviewSlide(0);
        }
    };

    const handleRunTool = () => {
        const step = STEPS[currentStep - 1];
        bridge?.executeTool(step.tool, 'launch');
    };

    const handleDownloadAssets = async (slideId: string) => {
        try {
            setIsDownloading(true);
            const container = document.querySelector(`[data-asset-id="${slideId}"]`);
            if (!container) throw new Error('Container not found');

            // Find all assets including the container itself if it has a name
            const allElements = Array.from(container.querySelectorAll('[data-asset-name]'));
            if (container.hasAttribute('data-asset-name')) {
                allElements.unshift(container);
            }

            if (allElements.length === 0) throw new Error('No assets found');

            const zip = new JSZip();
            const folder = zip.folder("assets");

            for (const asset of allElements) {
                const el = asset as HTMLElement;
                const name = el.getAttribute('data-asset-name') || 'unnamed_asset';
                const padding = parseInt(el.getAttribute('data-asset-padding') || '0', 10);

                const dataUrl = await toPng(el, {
                    pixelRatio: 4.0, // Ultra high quality
                    skipFonts: false,
                    cacheBust: true,
                    filter: (node: HTMLElement) => {
                        // CRITICAL: For "Background Layers" or parent panels, 
                        // hide child nodes that have their own 'data-asset-name' 
                        // to ensure a clean hierarchical extraction.
                        if (node !== el && node.hasAttribute && node.hasAttribute('data-asset-name')) {
                            return false;
                        }
                        return true;
                    },
                    style: padding ? { padding: `${padding}px` } : {}
                });

                if (!dataUrl || dataUrl === 'data:,') continue;
                const base64Data = dataUrl.split(',')[1];
                folder?.file(`${name}.png`, base64Data, { base64: true });
            }

            const content = await zip.generateAsync({ type: "blob" });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(content);
            link.download = `assets_${slideId}_HQ.zip`;
            link.click();
        } catch (err) {
            console.error('Asset extraction failed:', err);
            alert('에셋 추출에 실패했습니다.');
        } finally {
            setIsDownloading(false);
        }
    };

    const handleDownloadSingleAsset = async (element: HTMLElement, assetName: string) => {
        try {
            setIsDownloading(true);
            const padding = parseInt(element.getAttribute('data-asset-padding') || '0', 10);

            const dataUrl = await toPng(element, {
                pixelRatio: 4.0, // High fidelity sync
                skipFonts: false,
                cacheBust: true,
                backgroundColor: 'transparent',
                filter: (node: HTMLElement) => {
                    // CRITICAL: Filter out children that are themselves named assets
                    // This allows extracting ONLY the background of a parent panel.
                    if (node !== element && node.hasAttribute && node.hasAttribute('data-asset-name')) {
                        return false;
                    }
                    return true;
                },
                style: padding ? { padding: `${padding}px` } : {}
            });

            const link = document.createElement('a');
            link.download = `${assetName}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('Single asset extraction failed:', err);
            alert('에셋 추출에 실패했습니다.');
        } finally {
            setIsDownloading(false);
        }
    };

    const handleCanvasMouseMove = (e: React.MouseEvent) => {
        if (!isInspectorMode) return;

        const target = e.target as HTMLElement;
        const assetEl = target.closest('[data-asset-id]') as HTMLElement;

        if (assetEl) {
            const id = assetEl.getAttribute('data-asset-id') || '';
            const name = assetEl.getAttribute('data-asset-name') || 'unnamed_asset';
            const rect = assetEl.getBoundingClientRect();

            // Calculate relative to consistent canvas element
            const canvas = document.getElementById('inspector-canvas');
            const canvasRect = canvas?.getBoundingClientRect();

            if (canvasRect) {
                setHoveredAsset({
                    id,
                    name,
                    rect: {
                        left: rect.left - canvasRect.left,
                        top: rect.top - canvasRect.top,
                        width: rect.width,
                        height: rect.height
                    } as any
                });
            }
        } else {
            setHoveredAsset(null);
        }
    };

    const handleCanvasClick = (e: React.MouseEvent) => {
        if (!isInspectorMode) return;

        const target = e.target as HTMLElement;
        const assetEl = target.closest('[data-asset-id]') as HTMLElement;

        if (assetEl) {
            e.preventDefault();
            e.stopPropagation();
            const id = assetEl.getAttribute('data-asset-id') || '';
            const name = assetEl.getAttribute('data-asset-name') || 'unnamed_asset';
            setSelectedAsset({ id, name, element: assetEl });
        } else {
            setSelectedAsset(null);
        }
    };

    const renderPreview = () => {
        const id = activeWorkspace.slideIds[previewSlide];
        if (!id) return null;

        if (id.startsWith('data:image')) {
            return (
                <div data-asset-id="generated_ui" data-asset-name="ai_design_mockup" className="w-full h-full rounded-[2.5rem] overflow-hidden border border-[#d4cfc0]/20 bg-black/5 animate-in fade-in zoom-in-95 duration-700 relative">
                    <img src={id} alt="AI UI Preview" className="w-full h-full object-contain" />
                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-[9px] font-black text-[#fdead3]/60 border border-white/10 uppercase tracking-[0.2em]">
                        AI Generated Mockup
                    </div>
                </div>
            );
        }

        switch (id) {
            case 'toggle_menu': return <ToggleMenuPreview />;
            case 'vn_controls': return <VNControlsPreview />;
            case 'inventory_modal': return <div className="p-20 bg-[#fdead3]/10 rounded-[3rem] border border-white/10 text-[#4a463d]/20 font-black uppercase tracking-[0.3em] italic text-sm">Inventory System UI<br /><span className="text-[10px] opacity-50 mt-2 block">Coming Soon in Next Update</span></div>;
            case 'save_slots': return <SaveMenuPreview />;
            case 'character_stats': return <CharacterSelectionPreview />;
            case 'affinity_system': return <AffinitySystemPreview />;
            default: return <div className="text-[#4a463d]">Preview Coming Soon</div>;
        }
    };

    const slideIds = ['toggle_menu', 'character_stats', 'inventory_modal', 'affinity_system', 'save_slots'];

    return (
        <main className="flex h-screen bg-[#fdead3] text-[#4a463d] overflow-hidden relative font-sans">
            <AnimatePresence>
                {!isFocusMode && (
                    <motion.aside
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="w-80 bg-white/80 border border-[#d4cfc0]/50 backdrop-blur-xl m-2 md:m-4 rounded-[2rem] flex flex-col p-4 md:p-6 shadow-xl shadow-slate-200/50 border border-transparent relative z-50 overflow-hidden"
                    >
                        <div className="flex items-center gap-4 mb-6 md:mb-12 px-2 relative z-10">
                            <div className="w-12 h-12 bg-[#546147] rounded-2xl flex items-center justify-center shadow-xl shadow-[#546147]/20 border border-[#6b7a5a]/30">
                                <span className="text-2xl font-black text-[#e8e4d9] italic">H</span>
                            </div>
                            <div>
                                <h1 className="font-black text-xl tracking-tighter leading-none text-[#4a463d]">THE HANDS</h1>
                                <p className="text-[9px] text-[#546147] font-black tracking-[0.3em] uppercase mt-1">Design Supporter</p>
                            </div>
                        </div>

                        <div className="flex-1 min-h-0 flex flex-col gap-4 md:gap-6 px-1 relative z-10">
                            <nav className="flex-none md:flex-shrink-0 space-y-1 md:space-y-1.5 overflow-y-auto scrollbar-hide min-h-[150px] md:min-h-[250px]">
                                <div className="px-3 mb-1 md:mb-2 flex items-center justify-between">
                                    <p className="text-[10px] md:text-xs font-black text-[#4a463d]/40 tracking-[0.2em] uppercase">Navigation</p>
                                </div>
                                {STEPS.map((step) => (
                                    <button
                                        key={step.id}
                                        onClick={() => setCurrentStep(step.id)}
                                        className={`w-full flex items-center gap-3 md:gap-4 p-2 md:p-4 rounded-[1.2rem] md:rounded-[1.5rem] transition-all duration-500 group relative border ${currentStep === step.id ? 'bg-[#e8e4d9] text-[#4a463d] border-[#d4cfc0] shadow-xl' : 'text-[#8c8270] hover:text-[#4a463d] hover:bg-[#e8e4d9]/50 border-transparent hover:border-[#d4cfc0]/30'}`}
                                    >
                                        <div className={`p-2 md:p-2.5 rounded-xl transition-all duration-500 ${currentStep === step.id ? 'bg-[#546147] text-[#e8e4d9] shadow-lg shadow-[#546147]/30 scale-110' : 'bg-[#4a463d]/5 text-[#4a463d]/40 group-hover:bg-[#4a463d]/10'}`}>
                                            <step.icon size={16} />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm md:text-base font-black tracking-tight">{step.title}</p>
                                            <p className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] opacity-40 mt-0.5">Level 0{step.id}</p>
                                        </div>
                                        {currentStep === step.id && (
                                            <motion.div layoutId="activeStep" className="absolute left-0 w-1 h-6 bg-[#546147] rounded-r-full" />
                                        )}
                                    </button>
                                ))}
                            </nav>

                            <div className="flex-1 flex flex-col min-h-0">
                                <div className="px-3 mb-4 flex items-center justify-between">
                                    <p className="text-xs font-black text-[#4a463d]/30 tracking-[0.2em] uppercase">Workspaces</p>
                                    <button onClick={() => setIsCreatingWorkspace(true)} className="p-1 hover:text-[#4a463d] text-[#8c8270] transition-colors">
                                        <Sparkles size={14} />
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto space-y-1 scrollbar-hide px-1">
                                    {isCreatingWorkspace && (
                                        <div className="p-2 bg-[#546147]/10 border border-[#546147]/30 rounded-xl mb-2">
                                            <input
                                                autoFocus
                                                value={newWorkspaceName}
                                                onChange={(e) => setNewWorkspaceName(e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && handleCreateWorkspace()}
                                                onBlur={() => handleCreateWorkspace()}
                                                placeholder="New Project..."
                                                className="w-full bg-transparent border-none text-sm font-black text-[#4a463d] outline-none placeholder:text-[#4a463d]/30"
                                            />
                                        </div>
                                    )}
                                    {workspaces.map(ws => (
                                        <div key={ws.id} className="group relative">
                                            {editingWorkspaceId === ws.id ? (
                                                <div className="p-3 bg-[#fdead3]/10 rounded-xl border border-white/10">
                                                    <input
                                                        autoFocus
                                                        defaultValue={ws.name}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') handleRenameWorkspace(ws.id, (e.target as HTMLInputElement).value);
                                                            if (e.key === 'Escape') setEditingWorkspaceId(null);
                                                        }}
                                                        onBlur={(e) => handleRenameWorkspace(ws.id, e.target.value)}
                                                        className="w-full bg-transparent border-none text-sm font-black text-[#4a463d] outline-none"
                                                    />
                                                </div>
                                            ) : (
                                                <div
                                                    onClick={() => { setActiveWorkspaceId(ws.id); setPreviewSlide(0); }}
                                                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left cursor-pointer group/item ${activeWorkspaceId === ws.id ? 'bg-[#546147]/10 text-[#4a463d] border border-[#546147]/20 shadow-lg shadow-[#546147]/5' : 'text-[#8c8270] hover:bg-[#fdead3]/10 border border-transparent'}`}
                                                >
                                                    <ImageIcon size={14} className={activeWorkspaceId === ws.id ? 'text-[#4a463d]' : 'text-[#4a463d]/60'} />
                                                    <span className="text-sm font-black tracking-tight truncate flex-1">{ws.name}</span>
                                                    <div className="flex items-center gap-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                                        <button onClick={(e) => { e.stopPropagation(); setEditingWorkspaceId(ws.id); }} className="p-1 hover:text-[#4a463d] transition-colors">
                                                            <Edit3 size={12} />
                                                        </button>
                                                        {ws.id !== 'default' && (
                                                            <button onClick={(e) => {
                                                                e.stopPropagation();
                                                                if (confirm('Delete this workspace?')) {
                                                                    setWorkspaces(workspaces.filter(w => w.id !== ws.id));
                                                                    if (activeWorkspaceId === ws.id) setActiveWorkspaceId('default');
                                                                }
                                                            }} className="p-1 hover:text-red-400 transition-colors">
                                                                <Trash2 size={12} />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {currentStep === 1 && (
                                <div className="mt-2 md:mt-4 p-4 md:p-5 bg-[#fdead3]/20 border border-[#d4cfc0]/30 backdrop-blur-md rounded-[2.5rem] space-y-4 md:space-y-6 relative z-10 transition-all duration-500 animate-in fade-in slide-in-from-left-4">
                                    <div className="flex items-center gap-3 mb-1 md:mb-2 px-1">
                                        <Sparkles size={16} className="text-[#546147]" />
                                        <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#4a463d]">AI UI Design Forge</h3>
                                    </div>

                                    <div className="space-y-3 md:space-y-4">
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between px-1">
                                                <label className="text-[9px] font-black uppercase tracking-widest text-[#8c8270]">Design Concept</label>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={handleUiMagicPrompt}
                                                        disabled={!uiPrompt || isMagicActive}
                                                        className={`p-1.5 rounded-lg transition-all ${isMagicActive ? 'bg-[#d4cfc0] animate-pulse' : 'bg-[#d4cfc0]/20 hover:bg-[#d4cfc0]/40 text-[#546147] border border-[#d4cfc0]/30'}`}
                                                        title="한국어 프롬프트 영문 번역 (LibreTranslate)"
                                                    >
                                                        {isMagicActive ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
                                                    </button>
                                                    <span className="text-[8px] text-[#546147] font-black uppercase tracking-widest">AI Ready</span>
                                                </div>
                                            </div>
                                            <textarea
                                                value={uiPrompt}
                                                onChange={(e) => setUiPrompt(e.target.value)}
                                                className="w-full bg-white/40 border border-[#d4cfc0]/30 rounded-2xl px-4 py-4 text-xs font-black text-[#4a463d]/80 focus:border-[#546147]/50 outline-none transition-all resize-none min-h-[100px]"
                                                placeholder="Describe your UI/UX layout..."
                                            />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-[#8c8270] px-1">Exclusions (Negative)</label>
                                            <input
                                                type="text"
                                                value={uiNegativePrompt}
                                                onChange={(e) => setUiNegativePrompt(e.target.value)}
                                                className="w-full bg-white/40 border border-[#d4cfc0]/30 rounded-xl px-4 py-3 text-[10px] font-black text-[#4a463d]/50 focus:border-[#546147]/50 outline-none transition-all"
                                                placeholder="Low quality, messy..."
                                            />
                                        </div>

                                        <div className="flex items-center justify-between px-1 pt-2">
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-black uppercase tracking-widest text-[#8c8270]">Select UI Model</span>
                                                <span className="text-[7px] text-[#8c8270] uppercase">Choose specialized design LoRA</span>
                                            </div>
                                            <div className="flex gap-1.5 p-1 bg-[#8c8270]/10 rounded-xl">
                                                <button
                                                    onClick={() => setSelectedUiModel('UiUX-SDXL.safetensors')}
                                                    className={`px-3 py-1 text-[8px] font-black uppercase rounded-lg transition-all ${selectedUiModel === 'UiUX-SDXL.safetensors' ? 'bg-[#546147] text-[#4a463d] shadow-sm' : 'text-[#4a463d]/40'}`}
                                                >
                                                    SDXL
                                                </button>
                                                <button
                                                    onClick={() => setSelectedUiModel('UI-UX-05.safetensors')}
                                                    className={`px-3 py-1 text-[8px] font-black uppercase rounded-lg transition-all ${selectedUiModel === 'UI-UX-05.safetensors' ? 'bg-[#546147] text-[#4a463d] shadow-sm' : 'text-[#4a463d]/40'}`}
                                                >
                                                    V05
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between px-1 pt-2">
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-black uppercase tracking-widest text-rose-400">HQ Ultrasharp Upscale</span>
                                                <span className="text-[7px] text-[#8c8270] uppercase">Boost definition & clarity</span>
                                            </div>
                                            <button
                                                onClick={() => setUiUpscale(!uiUpscale)}
                                                className={`w-10 h-5 rounded-full transition-all relative ${uiUpscale ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.3)]' : 'bg-[#8c8270]/30'}`}
                                            >
                                                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${uiUpscale ? 'left-5.5' : 'left-0.5'}`} />
                                            </button>
                                        </div>

                                        <button
                                            disabled={!comfyConnected || (uploadedFiles.length === 0 && !uiPrompt)}
                                            onClick={() => {
                                                setAiStatusMsg(`🎨 AI UI/UX 시안 생성 중...`);
                                                bridge?.executeTool('photoshop', 'ai_draw_once', {
                                                    target: 'ui_design',
                                                    mode: 't2i',
                                                    prompt: `UI design, app interface, ${uiPrompt}`,
                                                    negativePrompt: `${uiNegativePrompt}, low quality, messy`,
                                                    denoisingStrength: 1.0,
                                                    width: 1024,
                                                    height: 768,
                                                    upscale: uiUpscale,
                                                    model: selectedUiModel,
                                                    upscaleModel: '4x-UltraSharp.pth'
                                                });
                                            }}
                                            className={`w-full py-4 md:py-6 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all shadow-xl shadow-[#d4cfc0]/40 active:scale-95 ${(!comfyConnected || (uploadedFiles.length === 0 && !uiPrompt)) ? 'bg-[#fdead3]/10 text-[#4a463d]/20 cursor-not-allowed' : 'bg-gradient-to-r from-[#d4cfc0] to-[#546147] text-[#4a463d] hover:scale-[1.02]'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Zap size={16} className="fill-current" />
                                                <span className="text-[11px] font-black uppercase tracking-[0.2em] italic">Forge AI Design</span>
                                            </div>
                                            <p className="text-[7px] text-[#4a463d]/40 font-black uppercase tracking-[0.3em]">AI Conceptualization</p>
                                        </button>

                                        {/* Step 1 Local Progress */}
                                        {status?.status === 'RUNNING' && status?.target === 'ui_design' && (
                                            <div className="w-full p-4 bg-[#8c8270]/5 border border-[#8c8270]/20 rounded-2xl space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <Loader2 size={12} className="text-[#8c8270] animate-spin" />
                                                        <span className="text-[10px] font-black text-[#8c8270] uppercase tracking-widest">Designing...</span>
                                                    </div>
                                                    <button
                                                        onClick={() => bridge?.executeTool('photoshop', 'ai_cancel')}
                                                        className="px-2 py-1 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-rose-400 rounded-lg text-[8px] font-black uppercase tracking-widest transition-all"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                                <div className="w-full h-1 bg-[#fdead3]/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: status.progress !== undefined ? `${status.progress}%` : '100%' }}
                                                        className="h-full bg-[#8c8270] rounded-full"
                                                        style={{ transition: 'width 0.4s ease-out' }}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-4 p-5 bg-white/60 border border-[#d4cfc0]/30 backdrop-blur-md shadow-sm shadow-[#d4cfc0]/10/5 rounded-2xl border border-transparent relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-[#546147]/20 flex items-center justify-center border border-[#546147]/30">
                                        <User size={20} className="text-[#4a463d]" />
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#050505] rounded-full" />
                                </div>
                                <div>
                                    <p className="text-sm font-black tracking-tight text-[#4a463d]/90">ADMIN SESSION</p>
                                    <p className="text-xs font-bold uppercase tracking-widest">Connected</p>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            <section className={`flex-1 flex flex-col min-w-0 transition-all duration-700 ease-in-out relative ${isFocusMode ? 'p-0 bg-black' : 'p-2 md:p-4 gap-2 md:gap-4'}`}>
                <button
                    onClick={() => setIsFocusMode(!isFocusMode)}
                    className={`absolute bottom-10 right-10 z-[100] w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-slate-200/50 active:scale-90 border group ${isFocusMode ? 'bg-white/10 text-[#4a463d]/50 border-white/10 hover:bg-white/20 hover:text-[#4a463d]' : 'bg-[#546147] text-[#4a463d] border-indigo-400/50 hover:bg-[#546147] hover:shadow-[#546147]/30'}`}
                >
                    {isFocusMode ? <X size={24} /> : <Maximize2 size={24} />}
                </button>

                <div className="flex-1 flex gap-4 overflow-hidden relative">
                    <div className={`flex-1 bg-white/80 border border-[#d4cfc0]/50 backdrop-blur-xl shadow-xl shadow-[#d4cfc0]/10/10 rounded-[3rem] border border-transparent flex flex-col overflow-hidden relative shadow-xl shadow-slate-200/50 transition-all duration-700 ease-in-out ${isFocusMode ? 'm-0 rounded-none border-none scale-100 bg-white' : 'scale-100'}`}>
                        {!isFocusMode && (
                            <div className="px-6 py-4 md:px-10 md:py-8 border-b border-white/5 flex items-center justify-between bg-gradient-to-b from-white/5 to-transparent relative z-20">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-[#546147] animate-pulse" />
                                        <h2 className="text-xs font-black text-[#4a463d] tracking-[0.3em] uppercase">Processing Step {currentStep}</h2>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter uppercase italic text-[#4a463d] flex items-center gap-4">
                                        {STEPS.find(s => s.id === currentStep)?.title || 'PROCEEDING...'}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => {
                                            setIsInspectorMode(!isInspectorMode);
                                            setSelectedAsset(null);
                                            setHoveredAsset(null);
                                        }}
                                        className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-3 border transition-all ${isInspectorMode ? 'bg-[#546147] border-[#546147] text-[#4a463d] shadow-[0_0_20px_rgba(236,72,153,0.3)]' : 'bg-[#fdead3]/10 border-white/10 text-[#4a463d]/30 hover:text-[#4a463d]'}`}
                                    >
                                        <Target size={14} />
                                        {isInspectorMode ? 'Inspector ON' : 'Inspector Mode'}
                                    </button>
                                    {status && (
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => bridge?.executeTool('photoshop', 'open_assets_folder')}
                                                className="px-4 py-2.5 bg-[#546147]/10 hover:bg-[#546147]/20 border border-[#546147]/30 text-[#4a463d] rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2"
                                                title="생성물 저장 폴더 열기 (Open Assets Folder)"
                                            >
                                                <Folder size={12} /> Assets
                                            </button>
                                            <div className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-3 border transition-all ${status.status === 'RUNNING' ? 'bg-[#546147]/10 border-[#546147]/30 text-[#4a463d]' : 'bg-[#546147]/10 border-[#546147]/30 text-[#546147]'}`}>
                                                {status.status === 'RUNNING' ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
                                                {status.status}
                                                {status.status === 'RUNNING' && status.progress !== undefined && (
                                                    <span className="ml-2 text-[10px] bg-[#546147] text-white px-1.5 py-0.5 rounded-md font-bold">{status.progress}%</span>
                                                )}
                                            </div>
                                            {status.status === 'RUNNING' && (
                                                <button
                                                    onClick={() => bridge?.executeTool('photoshop', 'ai_cancel')}
                                                    className="px-4 py-2.5 bg-red-500/20 hover:bg-red-500/40 border border-red-500/30 text-rose-400 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2"
                                                    title="작업 취소 (Cancel Execution)"
                                                >
                                                    <X size={12} /> Cancel
                                                </button>
                                            )}
                                        </div>
                                    )}
                                    <button
                                        onClick={() => setShowSettings(true)}
                                        className="w-12 h-12 rounded-2xl bg-[#fdead3]/10 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all group"
                                    >
                                        <Settings size={20} className="text-[#4a463d]/40 group-hover:text-[#4a463d] transition-colors" />
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="flex-1 relative overflow-hidden flex items-center justify-center">
                            {!isFocusMode && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#546147]/10 blur-[150px] rounded-full opacity-20 pointer-events-none" />}

                            <div
                                id="inspector-canvas"
                                onMouseMove={handleCanvasMouseMove}
                                onClick={handleCanvasClick}
                                className={`w-full max-w-7xl transition-all duration-700 h-full flex items-center justify-center p-12 relative z-10 ${isInspectorMode ? 'cursor-crosshair' : ''}`}
                            >
                                {/* Visual Feedback Styles */}
                                <style jsx global>{`
                                        ${isInspectorMode ? `
                                            [data-asset-id] {
                                                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                                                position: relative;
                                            }
                                            [data-asset-id]:hover {
                                                outline: 2px solid #ec4899 !important;
                                                outline-offset: 4px;
                                                background-color: rgba(236,72,153,0.05) !important;
                                                filter: brightness(1.2);
                                                z-index: 50;
                                            }
                                            [data-asset-id]:active {
                                                transform: scale(0.98);
                                            }
                                        ` : ''}
                                    `}</style>

                                {isInspectorMode && hoveredAsset && (
                                    <div
                                        className="absolute border-2 border-[#d4cfc0] pointer-events-none z-[60] transition-all duration-75 shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                                        style={{
                                            left: (hoveredAsset.rect as any).left,
                                            top: (hoveredAsset.rect as any).top,
                                            width: (hoveredAsset.rect as any).width,
                                            height: (hoveredAsset.rect as any).height
                                        }}
                                    >
                                        <div className="absolute -top-7 left-0 bg-[#d4cfc0] text-[#4a463d] text-xs font-black px-2 py-1 rounded-md shadow-lg uppercase whitespace-nowrap flex items-center gap-2">
                                            <Target size={10} />
                                            {hoveredAsset.name}
                                            <span className="text-xs opacity-60">{(hoveredAsset.rect as any).width}x{(hoveredAsset.rect as any).height}</span>
                                        </div>
                                    </div>
                                )}

                                {isInspectorMode && selectedAsset && (
                                    <div
                                        className="absolute border-2 border-[#546147] pointer-events-none z-[70] shadow-[0_0_30px_rgba(99,102,241,0.6)]"
                                        style={{
                                            left: selectedAsset.element.getBoundingClientRect().left - (document.getElementById('inspector-canvas')?.getBoundingClientRect().left || 0),
                                            top: selectedAsset.element.getBoundingClientRect().top - (document.getElementById('inspector-canvas')?.getBoundingClientRect().top || 0),
                                            width: selectedAsset.element.getBoundingClientRect().width,
                                            height: selectedAsset.element.getBoundingClientRect().height
                                        }}
                                    >
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-auto bg-[#546147] rounded-xl p-1.5 shadow-xl shadow-slate-200/50 border border-indigo-400/30">
                                            <div className="flex flex-col px-2">
                                                <span className="text-xs font-black text-[#4a463d] leading-none mb-0.5">{selectedAsset.name}</span>
                                                <span className="text-xs text-[#4a463d]/50 font-bold uppercase tracking-widest">Selected Asset</span>
                                            </div>
                                            <div className="h-6 w-px bg-white/10 mx-1" />
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleDownloadSingleAsset(selectedAsset.element, selectedAsset.name); }}
                                                className="p-2 px-4 bg-white text-[#546147] rounded-lg text-xs font-black hover:bg-[#fdead3]/20 transition-all flex items-center gap-2 shadow-inner active:scale-95"
                                            >
                                                <Download size={12} /> Extract
                                            </button>
                                            <button onClick={(e) => { e.stopPropagation(); setSelectedAsset(null); }} className="p-2 text-[#4a463d]/50 hover:text-[#4a463d] transition-colors bg-[#fdead3]/10 rounded-lg">
                                                <X size={14} />
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {previewUrl ? (
                                    <div className="w-full h-full relative group">
                                        <img src={previewUrl} className="w-full h-full object-contain" alt="Preview" />
                                    </div>
                                ) : currentStep === 1 ? (
                                    <div className="w-full h-full flex flex-col gap-4 md:gap-8 lg:gap-12">
                                        <div className="flex items-center justify-between gap-4 overflow-x-auto pt-4 pb-2 md:pt-8 md:pb-4 scrollbar-hide px-4">
                                            {currentSlideIds.map((id, i) => (
                                                <div key={id} className="relative group/card shrink-0">
                                                    <button onClick={() => setPreviewSlide(i)} className={`w-64 p-6 rounded-[2.5rem] border transition-all duration-500 group/nav ${previewSlide === i ? 'bg-white/10 border-white/20 shadow-xl' : 'bg-transparent border-transparent opacity-40 hover:opacity-100 hover:bg-[#d5ccb6]'}`}>
                                                        <div className="h-36 rounded-3xl bg-slate-900 mb-4 overflow-hidden border border-transparent group-hover/nav:border-white/20 transition-all flex items-center justify-center">
                                                            {id.startsWith('data:image') ? (
                                                                <img src={id} className="w-full h-full object-cover" alt="AI Design" />
                                                            ) : (
                                                                <Grid size={32} className="text-[#4a463d]/10 group-hover/nav:scale-110 transition-transform" />
                                                            )}
                                                        </div>
                                                        <p className={`text-sm font-black uppercase tracking-[0.2em] ${previewSlide === i ? 'text-[#4a463d]' : 'text-[#8c8270]'}`}>
                                                            {id.startsWith('data:image') ? `AI Design ${i}` : id.replace('_', ' ')}
                                                        </p>
                                                    </button>

                                                    <button
                                                        onClick={(e) => handleDeleteDesign(e, id)}
                                                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500/80 hover:bg-red-500 text-[#4a463d] flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all shadow-lg backdrop-blur-md z-30 active:scale-90"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </div>
                                            ))}
                                            {currentSlideIds.length === 0 && (
                                                <div className="w-full h-40 flex items-center justify-center border-2 border-dashed border-transparent rounded-[3rem]">
                                                    <p className="text-[#8c8270] text-xs font-black uppercase tracking-widest">No designs in this workspace</p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1 relative bg-transparent rounded-[4rem] border border-transparent p-6 md:p-12 flex flex-col items-center justify-center overflow-hidden shadow-inner min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
                                            <AnimatePresence mode="wait">
                                                {currentSlideIds.length > 0 ? (
                                                    <motion.div key={currentSlideIds[previewSlide]} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="w-full h-full flex flex-col items-center justify-center gap-12">
                                                        <div id="preview-container" data-asset-id={currentSlideIds[previewSlide]} className="w-full flex items-center justify-center p-8 aspect-video rounded-[3rem] overflow-hidden flex items-center justify-center bg-[#fdead3]/10">
                                                            {renderPreview()}
                                                        </div>
                                                        <div className="flex gap-4">
                                                            <button
                                                                onClick={() => {
                                                                    setAiStatusMsg("📫 포토샵으로 시안 동기화 중...");
                                                                    bridge?.executeTool('photoshop', 'sync_image', {
                                                                        image: currentSlideIds[previewSlide],
                                                                        name: `AI_Design_${previewSlide}`
                                                                    });
                                                                }}
                                                                className="px-10 py-6 bg-gradient-to-br from-[#d4cfc0] to-[#546147] hover:scale-105 text-[#4a463d] rounded-3xl text-sm tracking-[0.2em] font-black uppercase flex items-center gap-4 shadow-2xl shadow-[#546147]/40 transition-all active:scale-95"
                                                            >
                                                                <Zap size={20} className="fill-current" /> Sync to Photoshop
                                                            </button>
                                                            <button onClick={() => handleDownloadAssets(currentSlideIds[previewSlide])} className="px-10 py-6 bg-[#fdead3]/10 hover:bg-[#d4cfc0]/20 border border-[#d4cfc0]/30 text-[#4a463d]/60 hover:text-[#4a463d] rounded-3xl text-sm tracking-[0.2em] font-black uppercase flex items-center gap-4 transition-all active:scale-95">
                                                                <Download size={20} /> Bulk PNG
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                ) : (
                                                    <div className="text-center">
                                                        <Sparkles size={48} className="mx-auto text-[#546147]/20 mb-6" />
                                                        <h3 className="text-xl font-black uppercase italic mb-2 tracking-tighter text-[#4a463d]/50">Workspace Empty</h3>
                                                        <p className="text-[#4a463d]/60 text-xs uppercase tracking-widest mb-8">Select another workspace or load design templates</p>
                                                        <button
                                                            onClick={handleLoadTemplates}
                                                            className="px-8 py-3 bg-[#fdead3]/10 hover:bg-white/10 border border-white/10 text-[#4a463d] rounded-2xl text-xs font-black uppercase tracking-widest transition-all active:scale-95"
                                                        >
                                                            Load Default Templates
                                                        </button>
                                                    </div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                ) : currentStep === 2 ? (
                                    <div className="w-full h-full p-4 md:p-6 lg:p-8 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 relative z-10 text-[#4a463d]">
                                        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#546147]/10 blur-[100px] rounded-full pointer-events-none" />

                                        {/* Left: Video Player / Upload Zone */}
                                        <div className="flex-[2] bg-white/[0.03] border border-transparent rounded-[3rem] p-4 md:p-6 lg:p-8 flex flex-col relative overflow-hidden backdrop-blur-3xl shadow-3xl">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-12 h-12 bg-gradient-to-br from-[#546147] to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-[#546147]/20">
                                                    <Video size={24} className="text-[#4a463d]" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-black uppercase italic tracking-tighter text-[#4a463d]">AI Video Editor</h3>
                                                    <p className="text-[#8c8270] text-xs uppercase tracking-widest font-black">Source Media Analysis</p>
                                                </div>
                                            </div>

                                            <div className="flex-1 relative aspect-video bg-[#fdead3]/40 rounded-[2rem] border border-[#d4cfc0] overflow-hidden flex flex-col items-center justify-center group shadow-inner">
                                                {uploadedFiles.length > 0 && (uploadedFiles[0].type.startsWith('video/') || uploadedFiles[0].type.startsWith('audio/')) ? (
                                                    uploadedFiles[0].type.startsWith('video/') ? (
                                                        <video
                                                            src={uploadedFiles[0].previewUrl}
                                                            className="w-full h-full object-cover"
                                                            controls
                                                            autoPlay
                                                            loop
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#fdead3]/40">
                                                            <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-tr from-[#d4cfc0] to-[#546147] flex items-center justify-center shadow-xl shadow-slate-200/50 animate-[spin_4s_linear_infinite]">
                                                                <Activity size={40} className="text-[#4a463d]" />
                                                            </div>
                                                            <audio
                                                                src={uploadedFiles[0].previewUrl}
                                                                className="w-full max-w-sm"
                                                                controls
                                                                autoPlay
                                                                loop
                                                            />
                                                            <p className="mt-4 text-[12px] font-black uppercase tracking-widest text-[#4a463d]/70 truncate max-w-xs">{uploadedFiles[0].name}</p>
                                                        </div>
                                                    )
                                                ) : null}

                                                {/* Upload Overlays & Close Button */}
                                                <div
                                                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                                    onDragLeave={() => setIsDragging(false)}
                                                    onDrop={handleFileDrop}
                                                    className={`absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all z-20 ${isDragging ? 'bg-[#546147]/20 border-2 border-dashed border-[#546147] m-4 rounded-3xl backdrop-blur-sm' : (uploadedFiles.length > 0 ? 'pointer-events-none' : 'hover:bg-transparent')}`}
                                                >
                                                    {(!uploadedFiles.length || isDragging) && (
                                                        <>
                                                            <Upload size={isDragging ? 48 : 32} className={isDragging ? "text-[#546147]" : "text-[#546147]/50"} />
                                                            <p className={`font-black uppercase tracking-widest text-center ${isDragging ? 'text-[#4a463d] text-sm drop-shadow-md' : 'text-[#4a463d]/30 text-[11px]'}`}>
                                                                {isDragging ? 'Drop to Add Clip' : 'Drag & Drop Media File'}
                                                                {!isDragging && <><br /><span className="text-[9px] opacity-70">MP4, MOV, MP3 Supported</span></>}
                                                            </p>
                                                        </>
                                                    )}
                                                </div>

                                                {uploadedFiles.length > 0 && (
                                                    <button
                                                        onClick={() => {
                                                            const newFiles = [...uploadedFiles];
                                                            newFiles.splice(activeVideoIndex, 1);
                                                            setUploadedFiles(newFiles);
                                                            setActiveVideoIndex(Math.max(0, activeVideoIndex - 1));
                                                        }}
                                                        className="absolute top-4 right-4 w-10 h-10 bg-red-500/80 rounded-xl text-[#4a463d] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 backdrop-blur-md border border-white/20 z-30"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                )}
                                            </div>

                                            {/* Multi-Clip Timeline Navigation */}
                                            {uploadedFiles.length > 0 && (
                                                <div className="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide shrink-0">
                                                    {uploadedFiles.map((file, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setActiveVideoIndex(idx)}
                                                            className={`h-24 min-w-[120px] rounded-2xl border-2 relative overflow-hidden transition-all group shrink-0 ${activeVideoIndex === idx ? 'border-[#546147] shadow-[0_0_15px_rgba(59,130,246,0.3)] ring-2 ring-[#546147]/20' : 'border-white/10 opacity-60 hover:opacity-100'}`}
                                                        >
                                                            {file.type.startsWith('video/') ? (
                                                                <video src={file.previewUrl} className="w-full h-full object-cover" muted />
                                                            ) : (
                                                                <div className="w-full h-full bg-black/60 flex items-center justify-center">
                                                                    <Activity size={24} className="text-[#56604e]" />
                                                                </div>
                                                            )}
                                                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-left">
                                                                <span className="text-xs font-black text-[#4a463d]/90 truncate block">{file.name}</span>
                                                            </div>
                                                            {activeVideoIndex === idx && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#546147] animate-pulse" />}
                                                        </button>
                                                    ))}
                                                    <button
                                                        className="h-24 min-w-[80px] rounded-2xl border-2 border-dashed border-white/10 bg-[#fdead3]/10 hover:bg-white/10 flex flex-col items-center justify-center gap-2 transition-all opacity-60 hover:opacity-100 shrink-0"
                                                        onClick={() => {
                                                            // Trigger file input dialog ideally
                                                            alert("드래그 앤 드롭으로 추가 클립을 업로드할 수 있습니다.");
                                                        }}
                                                    >
                                                        <Upload size={16} className="text-[#4a463d]/50" />
                                                        <span className="text-[8px] font-black uppercase text-[#4a463d]/50">Add Clip</span>
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right: AI Editing Controls & Subtitles */}
                                        <div className="flex-[1.5] flex flex-col gap-4 md:gap-6">
                                            <div className="bg-white/[0.03] border border-transparent rounded-[3rem] p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-6 lg:gap-8 backdrop-blur-3xl shadow-3xl h-full overflow-y-auto">
                                                <div>
                                                    <h4 className="text-xs font-black text-[#4a463d]/40 uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><Settings size={12} /> Editing Blueprint</h4>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        {[
                                                            { id: 'smart_cut', label: 'Smart Cut', icon: Film, color: 'text-[#4a463d]', bg: 'bg-[#546147]/10 border-[#546147]/20' },
                                                            { id: 'color_grade', label: 'Color Grade', icon: Sparkles, color: 'text-[#546147]', bg: 'bg-[#d4cfc0]/10 border-[#8e9887]' },
                                                            { id: 'motion_track', label: 'Motion Track', icon: Activity, color: 'text-[#546147]', bg: 'bg-[#546147]/10 border-emerald-500/20' },
                                                            { id: 'auto_caption', label: 'Captions', icon: MessageSquare, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' }
                                                        ].map((preset) => (
                                                            <div
                                                                key={preset.id}
                                                                onClick={() => setAnimationStyle(preset.id)}
                                                                className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col items-center gap-4 ${animationStyle === preset.id ? preset.bg : 'bg-[#fdead3]/20 border-transparent opacity-60 hover:opacity-100'}`}
                                                            >
                                                                <preset.icon size={24} className={animationStyle === preset.id ? preset.color : 'text-[#4a463d]/40'} />
                                                                <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${animationStyle === preset.id ? 'text-[#4a463d]' : 'text-[#4a463d]/30'}`}>{preset.label}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Subtitle & Sync Panel */}
                                                <div className="flex-1 min-h-[200px] border-t border-transparent pt-6 flex flex-col gap-4">
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="text-xs font-black text-[#4a463d]/40 uppercase tracking-[0.2em] flex items-center gap-2"><MessageSquare size={12} /> Subtitles & Sync</h4>
                                                        <div className="flex gap-2">
                                                            <button
                                                                disabled={uploadedFiles.filter(f => f.type.startsWith('audio/')).length === 0}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    console.log("Triggering Magic Auto-Fill...");
                                                                    bridge?.executeTool('premiere', 'magic_auto_edit', {
                                                                        audioFiles: uploadedFiles.filter(f => f.type.startsWith('audio/')),
                                                                        prompt: uploadedFiles[0]?.name || "Music Video"
                                                                    });
                                                                }}
                                                                className={`px-3 py-1 border rounded-full text-[9px] font-black uppercase transition-all flex items-center gap-2 ${uploadedFiles.filter(f => f.type.startsWith('audio/')).length > 0 ? 'bg-[#546147]/20 hover:bg-[#546147]/40 border-indigo-400/30 text-indigo-300' : 'bg-[#fdead3]/10 border-transparent text-[#4a463d]/20 cursor-not-allowed'}`}
                                                            >
                                                                <Sparkles size={10} /> Magic Auto-Fill
                                                            </button>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSubtitles([...subtitles, { time: '00:00', text: '' }]);
                                                                }}
                                                                className="px-3 py-1 bg-[#fdead3]/10 hover:bg-white/10 border border-transparent rounded-full text-[9px] font-black uppercase transition-colors"
                                                            >
                                                                Add Line
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2 flex-1 overflow-y-auto pr-2">
                                                        {subtitles.map((sub, idx) => (
                                                            <div key={idx} className="flex gap-2">
                                                                <input
                                                                    type="text"
                                                                    value={sub.time}
                                                                    onChange={(e) => {
                                                                        const newSubs = [...subtitles];
                                                                        newSubs[idx].time = e.target.value;
                                                                        setSubtitles(newSubs);
                                                                    }}
                                                                    placeholder="MM:SS"
                                                                    className="w-20 bg-[#fdead3]/40 border border-white/10 rounded-xl px-3 py-2 text-center text-xs font-black font-mono text-[#546147] focus:outline-none focus:border-[#546147]/50"
                                                                />
                                                                <input
                                                                    type="text"
                                                                    value={sub.text}
                                                                    onChange={(e) => {
                                                                        const newSubs = [...subtitles];
                                                                        newSubs[idx].text = e.target.value;
                                                                        setSubtitles(newSubs);
                                                                    }}
                                                                    placeholder="자막 내용을 입력하세요..."
                                                                    className="flex-1 bg-[#fdead3]/10 border border-white/10 hover:border-white/20 rounded-xl px-5 py-2 text-sm font-black text-[#4a463d] focus:outline-none focus:bg-white/10 transition-colors"
                                                                />
                                                                {subtitles.length > 1 && (
                                                                    <button
                                                                        onClick={() => {
                                                                            const newSubs = subtitles.filter((_, i) => i !== idx);
                                                                            setSubtitles(newSubs);
                                                                        }}
                                                                        className="p-2 text-[#4a463d]/20 hover:text-red-400"
                                                                    >
                                                                        <X size={12} />
                                                                    </button>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <button
                                                    disabled={uploadedFiles.length === 0}
                                                    onClick={() => {
                                                        bridge?.executeTool('premiere', 'real_video_edit', {
                                                            files: uploadedFiles,
                                                            preset: animationStyle || 'smart_cut',
                                                            subtitles: subtitles.filter(s => s.text.trim() !== '')
                                                        });
                                                    }}
                                                    className={`w-full py-7 rounded-3xl flex flex-col items-center justify-center gap-2 transition-all shadow-2xl border ${uploadedFiles.length > 0 ? 'bg-gradient-to-r from-[#546147] to-[#546147] border-blue-400/30 text-[#4a463d] hover:scale-[1.02] active:scale-95 shadow-[#546147]/40' : 'bg-[#fdead3]/10 border-transparent text-[#4a463d]/20 cursor-not-allowed'}`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <Zap size={20} className="fill-current" />
                                                        <span className="text-base font-black uppercase tracking-[0.3em]">Generate Final Asset</span>
                                                    </div>
                                                    <span className="text-[10px] text-[#4a463d]/50 font-bold uppercase tracking-[0.1em]">{uploadedFiles.length} clip(s) selected</span>
                                                </button>

                                                {/* Editing Progress Bar */}
                                                {status?.status === 'RUNNING' && status?.tool === 'premiere' && status?.progress !== undefined && (
                                                    <div className="space-y-3 pt-4 border-t border-transparent">
                                                        <div className="flex justify-between items-end px-1">
                                                            <p className="text-[8px] font-black text-[#546147] uppercase tracking-widest animate-pulse max-w-[200px] truncate">{status.message}</p>
                                                            <p className="text-sm font-black text-[#4a463d] italic">{status.progress}<span className="text-[8px] ml-0.5 opacity-30">%</span></p>
                                                        </div>
                                                        <div className="w-full h-1.5 bg-[#fdead3]/40 rounded-full overflow-hidden border border-transparent">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${status.progress}%` }}
                                                                className="h-full bg-gradient-to-r from-[#546147] to-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ) : currentStep === 5 ? (
                                    <div className="w-full max-w-2xl max-h-[92vh] overflow-y-auto pr-2 custom-scrollbar bg-white/[0.03] border border-transparent rounded-[3rem] p-4 md:p-8 flex flex-col items-center gap-4 md:gap-6 text-center relative backdrop-blur-3xl shadow-3xl">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#8c8270]/10 blur-[80px] rounded-full -translate-y-1/2" />

                                        <div className="space-y-4 relative z-10">
                                            <div className="w-20 h-20 bg-gradient-to-br from-[#8c8270] to-[#546147] rounded-[2.5rem] flex items-center justify-center mx-auto shadow-xl shadow-slate-200/50 shadow-[#8c8270]/20 mb-6 transform group-hover:scale-110 transition-transform">
                                                <Film size={32} className="text-[#4a463d]" />
                                            </div>
                                            <h3 className="text-2xl font-black uppercase italic tracking-tighter text-[#4a463d]">AI Animation Forge</h3>
                                            <p className="text-[#8c8270] text-xs max-w-md mx-auto leading-relaxed">
                                                이미지를 분석하여 영화 같은 1분 이상의 영상을 생성합니다.<br />정교한 흐름과 공간감을 더해 생동감 있는 에셋을 제작하세요.
                                            </p>
                                        </div>

                                        <div className="w-full space-y-8 relative z-10">
                                            {/* Style Preset Selector */}
                                            <div className="w-full text-left space-y-2">
                                                <label className="text-xs font-black text-[#8c8270]/60 uppercase tracking-widest px-2 flex items-center gap-2"><Settings size={12} /> Style Preset</label>
                                                <select
                                                    value={aniStylePreset}
                                                    onChange={handleStylePresetChange}
                                                    className="w-full bg-[#fdead3]/40 border border-[#8c8270]/20 rounded-2xl px-6 py-4 text-xs font-black text-[#546147] outline-none focus:border-[#546147]/50 transition-colors shadow-inner"
                                                >
                                                    <option value="Custom">- Custom Manual Prompting -</option>
                                                    <option value="Laftel Anime">Laftel Anime (Professional Cell-Shaded)</option>
                                                    <option value="Premium Cinematic">Premium Cinematic (High Detail, Realistic Lighting)</option>
                                                    <option value="Webtoon Flat">Webtoon Flat (Clean Lines, Minimal Shading)</option>
                                                </select>
                                                <p className="text-[9px] text-[#4a463d]/40 px-2 uppercase tracking-widest italic font-bold">Select a preset to auto-configure prompts for professional output</p>
                                            </div>

                                            {/* Prompt Input Section */}
                                            <div className="w-full space-y-4 text-left">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-[#8c8270]/60 uppercase tracking-widest px-2">Cinematic Prompt</label>
                                                    <div className="relative group">
                                                        <textarea
                                                            placeholder="그록 AI처럼 자연스럽게 상황을 설명해보세요 (예: 벚꽃이 흩날리고 그녀가 웃으며 돌아본다)"
                                                            value={aniPrompt}
                                                            onChange={(e) => setAniPrompt(e.target.value)}
                                                            className="w-full bg-[#fdead3]/40 border border-white/10 rounded-3xl px-6 py-4 md:py-5 text-sm font-black text-[#4a463d] placeholder:text-[#4a463d]/20 focus:border-[#8c8270]/50 min-h-[80px] md:min-h-[120px] transition-all outline-none resize-none"
                                                        />
                                                        <div className="absolute bottom-3 right-3 flex gap-2">
                                                            <button
                                                                onClick={handleMagicAnalysis}
                                                                disabled={uploadedFiles.length === 0}
                                                                className="p-2 bg-[#fdead3]/10 hover:bg-white/10 border border-white/10 rounded-xl text-[#4a463d]/40 hover:text-[#4a463d] transition-all disabled:opacity-30"
                                                                title="Magic Analyze Image"
                                                            >
                                                                <Grid size={14} />
                                                            </button>
                                                            <button
                                                                onClick={handleMagicPrompt}
                                                                disabled={!aniPrompt || isMagicActive}
                                                                className={`p-2 rounded-xl transition-all ${isMagicActive ? 'bg-[#8c8270] animate-pulse' : 'bg-[#8c8270]/20 hover:bg-[#8c8270]/40 text-[#8c8270] border border-[#8c8270]/30'}`}
                                                                title="AI 마법 프롬프트 자동 완성 (Korean Natural Language to AI Prompt)"
                                                            >
                                                                {isMagicActive ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-[#4a463d]/20 uppercase tracking-widest px-2">Negative Elements</label>
                                                    <input
                                                        type="text"
                                                        value={aniNegativePrompt}
                                                        onChange={(e) => setAniNegativePrompt(e.target.value)}
                                                        className="w-full bg-[#fdead3]/20 border border-transparent rounded-xl px-4 py-2 text-[10px] text-[#4a463d]/40 focus:outline-none focus:border-white/20 transition-all"
                                                        placeholder="Avoid these styles..."
                                                    />
                                                </div>
                                            </div>

                                            <div className="w-full space-y-6 text-left p-6 bg-transparent border border-transparent rounded-3xl">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <Settings size={14} className="text-[#8c8270]" />
                                                        <span className="text-xs font-black uppercase tracking-widest text-[#4a463d]/30 italic">Advanced Model Settings</span>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    {/* Base Checkpoint */}
                                                    <div className="space-y-1.5">
                                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270] ml-1">Base Model (SD/Pony)</label>
                                                        <select
                                                            value={selectedModel}
                                                            onChange={(e) => setSelectedModel(e.target.value)}
                                                            className="w-full bg-[#fdead3]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-[#4a463d] outline-none focus:border-[#8c8270]/50 transition-colors"
                                                        >
                                                            {comfyModels.length > 0 ? comfyModels.map(m => <option key={m} value={m}>{m}</option>) : <option>No models found</option>}
                                                        </select>
                                                    </div>
                                                    {/* Motion Module */}
                                                    <div className="space-y-1.5">
                                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270] ml-1">Motion Module</label>
                                                        <select
                                                            value={selectedMotionModule}
                                                            onChange={(e) => setSelectedMotionModule(e.target.value)}
                                                            className="w-full bg-[#fdead3]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-[#4a463d] outline-none focus:border-[#8c8270]/50 transition-colors"
                                                        >
                                                            {aniMotionModules.length > 0 ? aniMotionModules.map(m => <option key={m} value={m}>{m}</option>) : <option>No motion modules found</option>}
                                                        </select>
                                                    </div>
                                                    {/* Animation LLM (V4.7) */}
                                                    <div className="space-y-1.5 col-span-2">
                                                        <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270] ml-1 flex items-center gap-2">
                                                            <Sparkles size={10} className="text-indigo-400" /> Animation LLM (Prompt Refiner)
                                                        </label>
                                                        <select
                                                            value={selectedAniLlm}
                                                            onChange={(e) => setSelectedAniLlm(e.target.value)}
                                                            className="w-full bg-[#fdead3]/40 border border-[#8c8270]/20 rounded-2xl px-6 py-4 text-xs font-black text-indigo-700 outline-none focus:border-indigo-500 transition-colors shadow-inner"
                                                        >
                                                            {aniLlmModels.length > 0 ?
                                                                aniLlmModels.map(m => <option key={m} value={m}>{m}</option>) :
                                                                <option disabled value="">{isMagicActive ? "Loading models..." : "No LLMs found (Mistral NeMo downloading...)"}</option>
                                                            }
                                                        </select>
                                                        <p className="text-[7px] text-indigo-400/50 px-2 italic uppercase font-black">Local LLM based prompt engineering & translation</p>
                                                    </div>
                                                </div>

                                                {/* Quality & Motion Control */}
                                                <div className="pt-4 border-t border-transparent space-y-4">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex items-center gap-2">
                                                            <Zap size={14} className="text-yellow-400" />
                                                            <span className="text-xs font-black uppercase tracking-widest text-[#4a463d]/30 italic">Quality & Motion</span>
                                                        </div>
                                                        <button
                                                            onClick={handleSafeMode}
                                                            className="px-3 py-1 bg-[#fdead3]/10 hover:bg-emerald-500/20 border border-white/10 rounded-lg text-[8px] font-black text-[#546147] hover:text-emerald-300 transition-all uppercase tracking-widest"
                                                        >
                                                            VRAM Safe Mode
                                                        </button>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        {/* Motion Guide Toggle */}
                                                        <div className="space-y-1.5 bg-[#8c8270]/5 p-3 rounded-xl border border-[#8c8270]/10">
                                                            <div className="flex items-center justify-between px-1">
                                                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270]">AI Motion Logic</label>
                                                                <div
                                                                    onClick={() => setUseMotionGuide(!useMotionGuide)}
                                                                    className={`w-6 h-3 rounded-full relative cursor-pointer transition-colors ${useMotionGuide ? 'bg-[#8c8270]' : 'bg-white/10'}`}
                                                                >
                                                                    <div className={`absolute top-0.5 w-2 h-2 bg-white rounded-full transition-transform ${useMotionGuide ? 'left-3.5' : 'left-0.5'}`} />
                                                                </div>
                                                            </div>
                                                            <p className="text-[7px] text-[#4a463d]/30 px-1">프레임 순간이동/노이즈 방지</p>
                                                        </div>
                                                        {/* Upscale Mode */}
                                                        <div className="space-y-1.5">
                                                            <div className="flex items-center justify-between px-1">
                                                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270]">HI-RES Upscale</label>
                                                                <div
                                                                    onClick={() => setAniUpscale(!aniUpscale)}
                                                                    className={`w-6 h-3 rounded-full relative cursor-pointer transition-colors ${aniUpscale ? 'bg-[#546147]' : 'bg-[#8c8270]/20'}`}
                                                                >
                                                                    <div className={`absolute top-0.5 w-2 h-2 bg-white rounded-full transition-transform ${aniUpscale ? 'left-3.5' : 'left-0.5'}`} />
                                                                </div>
                                                            </div>
                                                            <select
                                                                disabled={!aniUpscale}
                                                                value={selectedUpscaleModel}
                                                                onChange={(e) => setSelectedUpscaleModel(e.target.value)}
                                                                className={`w-full bg-[#fdead3]/40 border border-white/10 rounded-xl px-4 py-2.5 text-[10px] font-bold text-[#4a463d] outline-none focus:border-[#546147]/50 transition-colors ${!aniUpscale ? 'opacity-30' : ''}`}
                                                            >
                                                                {aniUpscaleModels.length > 0 ? aniUpscaleModels.map(m => <option key={m} value={m}>{m}</option>) : <option>No upscalers found</option>}
                                                            </select>
                                                        </div>

                                                        {/* Smoothing Mode */}
                                                        <div className="space-y-1.5">
                                                            <div className="flex items-center justify-between px-1">
                                                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270]">Motion Smooth (RIFE)</label>
                                                                <div
                                                                    onClick={() => setAniSmooth(!aniSmooth)}
                                                                    className={`w-6 h-3 rounded-full relative cursor-pointer transition-colors ${aniSmooth ? 'bg-[#546147]' : 'bg-[#8c8270]/20'}`}
                                                                >
                                                                    <div className={`absolute top-0.5 w-2 h-2 bg-white rounded-full transition-transform ${aniSmooth ? 'left-3.5' : 'left-0.5'}`} />
                                                                </div>
                                                            </div>
                                                            <div className={`w-full bg-[#fdead3]/40 border border-white/10 rounded-xl px-4 py-2.5 text-[10px] font-bold ${aniSmooth ? 'text-[#546147]' : 'text-[#4a463d]/20 italic'}`}>
                                                                {aniSmooth ? '2x Smooth Interpolation' : 'Standard Playback'}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Duration, FPS & Denoising */}
                                                    <div className="space-y-4 pt-2">
                                                        <div className="space-y-2">
                                                            <div className="flex items-center justify-between px-1">
                                                                <div className="flex items-center gap-2">
                                                                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270]">Video Duration (Seconds)</label>
                                                                    <div
                                                                        onClick={() => setIsLongAni(!isLongAni)}
                                                                        className={`px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase cursor-pointer transition-all ${isLongAni ? 'bg-[#546147] text-white' : 'bg-[#8c8270]/20 text-[#8c8270]/40'}`}
                                                                        title="Iterative Synthesis for 8GB VRAM"
                                                                    >
                                                                        {isLongAni ? 'Long Loop ON' : 'Long Loop OFF'}
                                                                    </div>
                                                                </div>
                                                                <span className="text-[10px] font-bold text-[#8c8270]">{isLongAni ? aniDuration : 3}s <span className="text-[#4a463d]/20 ml-1">({Math.floor((isLongAni ? aniDuration : 3) * aniFps)} frames)</span></span>
                                                            </div>
                                                            {isLongAni && (
                                                                <input
                                                                    type="range" min="6" max="60" step="3"
                                                                    value={aniDuration}
                                                                    onChange={(e) => setAniDuration(Number(e.target.value))}
                                                                    className="w-full accent-[#546147] h-4 bg-[#4a463d]/20 rounded-full cursor-pointer transition-all"
                                                                />
                                                            )}
                                                            {!isLongAni && (
                                                                <div className="text-[8px] text-[#4a463d]/30 italic px-1 uppercase tracking-widest">
                                                                    Standard 3s Segment (Maximum VRAM Stability)
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Denoising Slider */}
                                                        <div className="space-y-2 pt-2">
                                                            <div className="flex items-center justify-between px-1">
                                                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#8c8270]">Image Compliance (Denoise)</label>
                                                                <span className="text-xs font-black text-[#546147] italic">{aniDenoising.toFixed(2)}</span>
                                                            </div>
                                                            <input
                                                                type="range" min="0.1" max="1.0" step="0.05"
                                                                value={aniDenoising}
                                                                onChange={(e) => setAniDenoising(Number(e.target.value))}
                                                                className="w-full accent-[#546147] h-4 bg-[#4a463d]/20 rounded-full cursor-pointer transition-all"
                                                            />
                                                            <p className="text-[7px] text-[#4a463d]/20 uppercase text-right tracking-widest italic">
                                                                {aniDenoising < 0.5 ? 'Strong Source Integrity' : aniDenoising > 0.8 ? 'Max AI Creativity' : 'Balanced Style'}
                                                            </p>
                                                        </div>

                                                        {aniDuration > 3 && (
                                                            <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center gap-3">
                                                                <AlertCircle size={14} className="text-rose-400 flex-shrink-0" />
                                                                <p className="text-[8px] text-rose-300 font-bold leading-tight flex-1">
                                                                    WARNING: 4초 이상의 긴 영상은 고사양 그래픽카드(12GB+)가 필요합니다. 8GB 환경에서는 생성 시간이 매우 길어지거나 오류가 날 수 있습니다.
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Source Image Zone (Grid for Multi-Image) */}
                                            <div
                                                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                                onDragLeave={() => setIsDragging(false)}
                                                onDrop={handleFileDrop}
                                                className={`w-full min-h-[120px] p-4 border-2 border-dashed rounded-[2.5rem] overflow-hidden flex items-center justify-center transition-all ${isDragging ? 'bg-[#8c8270]/10 border-[#8c8270]/40' : 'bg-[#fdead3]/20 border-transparent'}`}
                                            >
                                                {uploadedFiles.length > 0 ? (
                                                    <div className="grid grid-cols-3 gap-3 w-full h-full">
                                                        {uploadedFiles.map((file, idx) => (
                                                            <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group">
                                                                <img src={file.previewUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                                                <div className="absolute inset-0 bg-[#fdead3]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                                    <button onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== idx))}>
                                                                        <X size={12} className="text-[#4a463d] bg-red-500 rounded-full p-0.5" />
                                                                    </button>
                                                                </div>
                                                                <div className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-black/60 rounded text-[6px] font-black text-[#4a463d] uppercase italic">
                                                                    Frame {idx + 1}
                                                                </div>
                                                            </div>
                                                        ))}
                                                        {uploadedFiles.length < 6 && (
                                                            <div className="aspect-video rounded-xl border border-transparent bg-[#fdead3]/10 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors" onClick={() => (document.getElementById('fileInput') as any)?.click()}>
                                                                <Upload size={14} className="text-[#4a463d]/20" />
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="text-center space-y-2 pointer-events-none">
                                                        <Upload size={20} className="mx-auto text-[#8c8270]/50" />
                                                        <p className="text-xs font-black uppercase tracking-widest text-[#4a463d]/30 italic">Drop 1 Image (Imagination) or up to 6 (Interpolation)</p>
                                                        <p className="text-[7px] text-[#4a463d]/20 uppercase tracking-tighter">AI Motion Synthesis & Style Preservation Pipeline</p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Style Presets */}
                                            <div className="grid grid-cols-3 gap-3">
                                                {[
                                                    { id: 'cinematic', label: 'Dynamic', icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
                                                    { id: 'slowmo', label: 'Slow-Mo', icon: Clock, color: 'text-[#4a463d]', bg: 'bg-[#546147]/10 border-[#546147]/20' },
                                                    { id: 'handdrawn', label: 'Handy', icon: Edit3, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' }
                                                ].map((style) => (
                                                    <div
                                                        key={style.id}
                                                        onClick={() => setAnimationStyle(style.id)}
                                                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col items-center gap-2 ${animationStyle === style.id ? style.bg : 'bg-[#fdead3]/10 border-transparent opacity-40 hover:opacity-100'}`}
                                                    >
                                                        <style.icon size={14} className={animationStyle === style.id ? style.color : 'text-[#4a463d]/40'} />
                                                        <span className={`text-[8px] font-black uppercase tracking-widest ${animationStyle === style.id ? 'text-[#4a463d]' : 'text-[#4a463d]/20'}`}>{style.label}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                disabled={uploadedFiles.length === 0 && !aniPrompt}
                                                onClick={handleAiAnimate}
                                                className={`w-full py-4 md:py-6 lg:py-8 rounded-[3rem] flex flex-col items-center justify-center gap-2 transition-all shadow-2xl ${(uploadedFiles.length > 0 || aniPrompt) ? 'bg-gradient-to-r from-[#8c8270] to-[#546147] shadow-[#8c8270]/40 hover:scale-[1.02] active:scale-95' : 'bg-[#fdead3]/10 text-[#4a463d]/20 cursor-not-allowed'}`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <Play size={24} className="fill-current text-[#4a463d]" />
                                                    <span className="text-[#4a463d] text-xl font-black uppercase tracking-[0.2em] italic">Create Cinematic Animation</span>
                                                </div>
                                                <p className="text-[10px] text-[#4a463d]/50 font-black uppercase tracking-[0.3em]">AI Motion Synthesis Process</p>
                                            </button>

                                            {/* Animation Status & Video Preview */}
                                            {aniGenerating && (
                                                <div className="w-full p-6 bg-[#8c8270]/5 border border-[#8c8270]/20 rounded-3xl space-y-4">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative">
                                                                <div className="w-8 h-8 rounded-xl bg-[#8c8270]/20 flex items-center justify-center">
                                                                    <Loader2 size={16} className="text-[#8c8270] animate-spin" />
                                                                </div>
                                                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#8c8270] rounded-full animate-pulse" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-black text-[#8c8270] uppercase tracking-widest">{aniStatusMsg}</p>
                                                                <p className="text-[8px] text-[#4a463d]/20 font-bold uppercase tracking-widest mt-0.5">ComfyUI AnimateDiff Pipeline Active</p>
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => bridge?.executeTool('photoshop', 'ai_cancel')}
                                                            className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-rose-400 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all active:scale-95"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                    <div className="w-full h-1.5 bg-[#fdead3]/10 rounded-full overflow-hidden relative">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: status?.progress !== undefined ? `${status.progress}%` : '100%' }}
                                                            className={`h-full bg-gradient-to-r from-[#8c8270] to-[#d4cfc0] rounded-full ${status?.progress === undefined ? 'animate-pulse' : ''}`}
                                                            style={{ transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                                                        />
                                                    </div>
                                                    {status?.progress !== undefined && (
                                                        <p className="text-right text-[10px] font-black text-[#8c8270]">{status.progress}%</p>
                                                    )}
                                                </div>
                                            )}

                                            {!aniGenerating && aniStatusMsg && (
                                                <div className={`w-full px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-widest text-center ${aniStatusMsg.includes('❌') ? 'bg-red-500/10 border border-red-500/20 text-red-400' : 'bg-[#546147]/10 border border-emerald-500/20 text-[#546147]'}`}>
                                                    {aniStatusMsg}
                                                </div>
                                            )}

                                            {aniVideoUrl && (
                                                <div className="w-full space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-[9px] font-black text-[#8c8270]/60 uppercase tracking-widest">Generated Animation</span>
                                                            {aniVideoUrl && (
                                                                <div className="flex items-center gap-2">
                                                                    <a
                                                                        href={aniVideoUrl}
                                                                        download="animation_result.webp"
                                                                        className="px-3 py-1.5 bg-[#fdead3]/10 hover:bg-[#8c8270]/20 border border-white/10 hover:border-[#8c8270]/30 rounded-xl transition-all flex items-center gap-2"
                                                                        title="애니메이션 다운로드"
                                                                    >
                                                                        <Download size={10} className="text-[#8c8270]" />
                                                                        <span className="text-[8px] font-black uppercase tracking-widest text-[#8c8270]">Download</span>
                                                                    </a>
                                                                    <button
                                                                        onClick={() => bridge?.executeTool('photoshop', 'open_assets_folder')}
                                                                        className="px-3 py-1.5 bg-[#fdead3]/10 hover:bg-[#8c8270]/20 border border-white/10 hover:border-[#8c8270]/30 rounded-xl transition-all flex items-center gap-2"
                                                                        title="에셋 폴더 열기"
                                                                    >
                                                                        <Folder size={10} className="text-[#8c8270]" />
                                                                        <span className="text-[8px] font-black uppercase tracking-widest text-[#8c8270]">Folder</span>
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <button
                                                            onClick={() => setAniVideoFullscreen(true)}
                                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#fdead3]/10 hover:bg-[#8c8270]/20 border border-white/10 hover:border-[#8c8270]/30 rounded-xl transition-all group"
                                                        >
                                                            <Maximize2 size={10} className="text-[#4a463d]/40 group-hover:text-[#8c8270]" />
                                                            <span className="text-[8px] font-black uppercase tracking-widest text-[#4a463d]/40 group-hover:text-[#8c8270]">Fullscreen</span>
                                                        </button>
                                                    </div>
                                                    <div className={`relative rounded-2xl overflow-hidden border border-[#d4cfc0] bg-[#fdead3]/40 group cursor-pointer aspect-[${aiAspectRatio.replace(':', '/')}] shadow-lg`} onClick={() => setAniVideoFullscreen(true)}>
                                                        <img
                                                            src={aniVideoUrl}
                                                            alt="Generated Animation"
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-[#fdead3]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center">
                                                                <Maximize2 size={20} className="text-[#4a463d]" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ) : currentStep === 6 ? (
                                    <div className="w-full h-full p-2 md:p-4 lg:p-6 flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 relative z-10 text-[#4a463d]">
                                        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d4cfc0]/10 blur-[100px] rounded-full pointer-events-none" />

                                        {/* Left: AI Drawing Controls */}
                                        <div className="flex-[1.2] bg-white/[0.03] border border-transparent rounded-[2.5rem] p-3 md:p-5 lg:p-6 flex flex-col gap-3 md:gap-4 backdrop-blur-3xl shadow-3xl overflow-y-auto">

                                            {/* Mode Selector */}
                                            <div className="flex bg-[#fdead3]/40 p-1 rounded-3xl border border-white/10 mb-2 shadow-inner">
                                                {[
                                                    { id: 't2i', name: '텍스트 명령', desc: '자체 상상' },
                                                    { id: 'i2i', name: '이미지 기반', desc: '뼈대 활용' },
                                                    { id: 'ps_sync', name: '포토샵 연동', desc: '그림 실시간 반영' }
                                                ].map(m => (
                                                    <button
                                                        key={m.id}
                                                        onClick={() => setAiDrawMode(m.id as any)}
                                                        className={`flex-1 py-3 px-2 rounded-2xl flex flex-col items-center justify-center transition-all ${aiDrawMode === m.id ? 'bg-gradient-to-br from-[#d4cfc0] to-[#546147] shadow-[0_0_20px_rgba(244,63,94,0.3)] text-[#4a463d]' : 'text-[#4a463d]/40 hover:bg-[#fdead3]/10 hover:text-[#4a463d]/80'
                                                            }`}
                                                    >
                                                        <span className="text-sm font-black uppercase tracking-[0.2em]">{m.name}</span>
                                                        {aiDrawMode === m.id && <span className="text-[9px] opacity-80 mt-1 uppercase tracking-widest hidden xl:block">{m.desc}</span>}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="w-12 h-12 bg-[#fdead3]/10 rounded-2xl flex items-center justify-center shadow-lg shadow-black/20 border border-white/10">
                                                    <Sparkles size={24} className={aiDrawMode === 't2i' ? "text-[#546147]" : aiDrawMode === 'i2i' ? "text-[#4a463d]" : "text-rose-400"} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-black uppercase italic tracking-tighter text-[#4a463d]">
                                                        {aiDrawMode === 'ps_sync' ? '포토샵 실시간 동기화' : aiDrawMode === 'i2i' ? '커스텀 이미지 기반 생성' : '텍스트 자율 상상 생성'}
                                                    </h3>
                                                    <p className="text-[#8c8270] text-xs uppercase tracking-widest font-black">
                                                        {aiDrawMode === 'ps_sync' ? 'Photoshop Realtime Sync' : aiDrawMode === 'i2i' ? 'Image-to-Image Generation' : 'Text-to-Image Generation'}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="space-y-4">

                                                {aiDrawMode === 'i2i' && (
                                                    <div
                                                        className={`w-full p-6 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center cursor-pointer transition-all ${isDragging ? 'border-[#d4cfc0] bg-[#d4cfc0]/10' : 'border-white/10 hover:border-[#d4cfc0]/30 hover:bg-[#fdead3]/10 bg-[#fdead3]/20'}`}
                                                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                                                        onDragLeave={() => setIsDragging(false)}
                                                        onDrop={handleFileDrop}
                                                        onClick={() => { document.getElementById('aiDrawUploadField')?.click(); }}
                                                    >
                                                        <input
                                                            id="aiDrawUploadField" type="file" accept="image/*" className="hidden"
                                                            onChange={(e) => {
                                                                if (e.target.files && e.target.files.length > 0) {
                                                                    handleFileDrop({ preventDefault: () => { }, dataTransfer: { files: e.target.files } } as any);
                                                                }
                                                            }}
                                                        />
                                                        {uploadedFiles.length > 0 && currentStep === 6 ? (
                                                            <div className="flex items-center gap-4 w-full">
                                                                <img src={uploadedFiles[0].previewUrl} alt="preview" className="h-16 w-16 object-cover rounded-xl border border-white/20 shadow-md" />
                                                                <div className="text-left flex-1">
                                                                    <p className="text-[11px] font-bold text-[#546147] mb-1">✓ 이미지 로드 완료</p>
                                                                    <p className="text-[10px] text-[#4a463d]/50">{uploadedFiles[0].name}</p>
                                                                </div>
                                                                <button onClick={(e) => { e.stopPropagation(); setUploadedFiles([]); }} className="px-3 py-1.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-lg text-[10px] font-bold uppercase transition-colors">초기화</button>
                                                            </div>
                                                        ) : (
                                                            <div className="text-center py-2 relative pointer-events-none">
                                                                <Sparkles className="w-8 h-8 text-[#4a463d]/20 mx-auto mb-3" />
                                                                <p className="text-[12px] font-bold text-[#4a463d]/80">클릭하거나 이미지를 끌어다 놓으세요</p>
                                                                <p className="text-[10px] text-[#4a463d]/40 mt-1 uppercase tracking-widest">Image Upload (JPG, PNG)</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}

                                                <div className="flex gap-2 pb-2 overflow-x-auto no-scrollbar">
                                                    {[
                                                        { id: 'anime', name: '일본 애니메이션', icon: '🎨', prompt: 'anime style, masterpiece, best quality, cel shaded, vibrant colors, 2D' },
                                                        { id: 'cinematic', name: '시네마틱 실사', icon: '🎬', prompt: 'photorealistic, cinematic lighting, hyper-detailed, 8k' },
                                                        { id: 'vector', name: '벡터 일러스트', icon: '📐', prompt: 'vector art, clean lines, flat colors, minimalist illustration, high contrast, svg style, no gradients, sharp edges' },
                                                        { id: 'art', name: '디지털 아트', icon: '✨', prompt: 'digital painting, concept art, artistic, trending on artstation' },
                                                        { id: 'sketch', name: '라인 아트', icon: '✏️', prompt: 'clean lineart, sketch style, monochrome, traditional media' }
                                                    ].map(style => (
                                                        <button
                                                            key={style.id}
                                                            onClick={() => setAiPrompt(prev => {
                                                                const cleaned = prev.replace(/anime style|masterpiece|photorealistic|vector art|digital painting|clean lineart/g, '').trim();
                                                                return `${style.prompt}, ${cleaned}`.replace(/, ,/g, ',').replace(/^, /, '');
                                                            })}
                                                            className="flex-shrink-0 px-3 py-1.5 bg-[#fdead3]/10 border border-white/10 rounded-full flex items-center gap-2 hover:bg-[#d4cfc0]/20 hover:border-[#d4cfc0]/30 transition-all group"
                                                        >
                                                            <span className="text-xs">{style.icon}</span>
                                                            <span className="text-[10px] font-bold text-[#4a463d]/60 group-hover:text-[#4a463d] transition-colors whitespace-nowrap">{style.name}</span>
                                                        </button>
                                                    ))}
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="flex justify-between px-1">
                                                        <label className="text-xs font-black text-[#4a463d]/40 uppercase tracking-widest">긍정 프롬프트</label>
                                                        <div className="flex gap-2">
                                                            <button
                                                                onClick={handleAiDrawMagicPrompt}
                                                                disabled={!aiPrompt || isMagicActive}
                                                                className={`p-1.5 rounded-lg transition-all ${isMagicActive ? 'bg-[#d4cfc0] animate-pulse' : 'bg-[#d4cfc0]/20 hover:bg-[#d4cfc0]/40 text-[#546147] border border-[#d4cfc0]/30'}`}
                                                                title="한국어 프롬프트 영문 번역 (LibreTranslate)"
                                                            >
                                                                {isMagicActive ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
                                                            </button>
                                                            <span className="text-[9px] text-[#56604e] font-bold uppercase transition-all mt-1">
                                                                {aiPrompt.includes('anime') ? '✨ 애니메이션 최적화됨' : 'AI 가이드'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <textarea
                                                        value={aiPrompt}
                                                        onChange={(e) => setAiPrompt(e.target.value)}
                                                        className="w-full h-24 bg-[#fdead3]/40 border border-white/10 rounded-[1.5rem] p-4 text-xs font-black text-[#4a463d]/90 placeholder:text-[#4a463d]/10 focus:outline-none focus:border-[#d4cfc0]/50 transition-all resize-none"
                                                        placeholder="그림에 포함하고 싶은 내용을 영어로 적어주세요..."
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-[#4a463d]/40 uppercase tracking-widest px-1">부정 프롬프트</label>
                                                    <input
                                                        type="text"
                                                        value={aiNegativePrompt}
                                                        onChange={(e) => setAiNegativePrompt(e.target.value)}
                                                        className="w-full bg-[#fdead3]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-[#4a463d]/50 focus:outline-none focus:border-white/20 transition-all"
                                                        placeholder="제외하고 싶은 요소..."
                                                    />
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    {aiDrawMode !== 't2i' && (
                                                        <div className="space-y-3">
                                                            <div className="flex justify-between px-1">
                                                                <label className="text-xs font-black text-[#4a463d]/40 uppercase tracking-widest">스케치 일치율 (Denoise)</label>
                                                                <div className="flex flex-col items-end">
                                                                    <span className="text-xs font-black text-[#56604e] italic">{aiDenoising.toFixed(2)}</span>
                                                                    <span className="text-[10px] font-black text-[#4a463d]/30 uppercase tracking-tighter">
                                                                        {aiDenoising < 0.35 ? '원본 보존' : aiDenoising < 0.65 ? '밸런스 형' : 'AI 창의형'}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <input
                                                                type="range" min="0.1" max="0.9" step="0.05"
                                                                value={aiDenoising}
                                                                onChange={(e) => {
                                                                    const val = parseFloat(e.target.value);
                                                                    setAiDenoising(val);
                                                                    if (aiActive) updateAiSettings({ denoisingStrength: val });
                                                                }}
                                                                className="w-full accent-[#546147] h-4 bg-[#4a463d]/20 rounded-full cursor-pointer transition-all appearance-none"
                                                            />
                                                        </div>
                                                    )}
                                                    <div className={`space-y-3 ${aiDrawMode === 't2i' ? 'col-span-2' : ''}`}>
                                                        <div className="flex justify-between px-1">
                                                            <label className="text-[9px] font-black text-[#4a463d]/40 uppercase tracking-widest">해상도 / 비율</label>
                                                            <span className="text-[9px] font-black text-[#4a463d] italic">{aiAspectRatio}</span>
                                                        </div>
                                                        <select
                                                            value={aiResolution}
                                                            onChange={(e) => {
                                                                const val = e.target.value;
                                                                const ratioMap: any = { '512x512': '1:1', '640x480': '4:3', '896x504': '16:9', '832x1216': '9:16' };
                                                                handleAiResolutionChange(val, ratioMap[val] || 'Custom');
                                                            }}
                                                            className="w-full bg-[#fdead3]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-[#4a463d]/80 focus:outline-none appearance-none cursor-pointer hover:bg-[#d4cfc0]/20 transition-colors"
                                                        >
                                                            <option value="512x512">1:1 (Square - 512x512)</option>
                                                            <option value="640x480">4:3 (Standard - 640x480)</option>
                                                            <option value="896x504">16:9 (Widescreen - 896x504)</option>
                                                            <option value="832x1216">9:16 (Vertical Portrait - 832x1216)</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-[#4a463d]/40 uppercase tracking-widest px-1">ComfyUI 모델 선택</label>
                                                    <select
                                                        value={selectedModel}
                                                        onChange={(e) => {
                                                            setSelectedModel(e.target.value);
                                                            if (aiActive) updateAiSettings({ modelName: e.target.value });
                                                        }}
                                                        className="w-full bg-[#fdead3]/40 border border-white/10 rounded-2xl px-6 py-4 text-xs font-black text-[#4a463d]/80 focus:outline-none appearance-none cursor-pointer hover:bg-[#d4cfc0]/20 transition-colors"
                                                    >
                                                        {comfyModels.length > 0 ? (
                                                            comfyModels.map(m => {
                                                                // Custom alias for Specific Models
                                                                let displayName = m;
                                                                if (m === 'Custom Anime v4 sharp.safetensors') displayName = 'Custom Anime v4 sharp';
                                                                else if (m === 'ponyDiffusionV6XL_v6StartWithThisOne.safetensors') displayName = '포니 디퓨전 (Pony V6)';
                                                                // Fallback cleanup
                                                                else displayName = m.replace('.safetensors', '').replace('.ckpt', '');

                                                                return <option key={m} value={m} className="bg-slate-900">{displayName}</option>
                                                            })
                                                        ) : (
                                                            <option>모델을 찾을 수 없습니다</option>
                                                        )}
                                                    </select>
                                                </div>

                                                {aiUpscale && (
                                                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                                        <label className="text-xs font-black text-[#4a463d]/40 uppercase tracking-widest px-1">업스케일 모델 선택</label>
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {[
                                                                { id: '4x-UltraSharp.pth', name: 'UltraSharp' },
                                                                { id: 'RealESRGAN_x4plus_anime_6B.pth', name: 'ANIME' },
                                                                { id: 'ESRGAN_4x.pth', name: 'ESRGAN' },
                                                                { id: 'SwinIR_4x.pth', name: 'SwinIR' }
                                                            ].map(m => (
                                                                <button
                                                                    key={m.id}
                                                                    onClick={() => setSelectedUpscaleModel(m.id)}
                                                                    className={`py-2 rounded-xl border text-[9px] font-black uppercase transition-all ${selectedUpscaleModel === m.id ? 'bg-rose-500/20 border-rose-500/40 text-rose-400' : 'bg-[#fdead3]/20 border-transparent text-[#4a463d]/30 hover:border-white/20'}`}
                                                                >
                                                                    {m.name}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex items-center justify-between p-4 bg-[#fdead3]/10 rounded-2xl border border-transparent">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-[9px] font-black text-rose-400 uppercase tracking-widest">HQ 업스케일 모드</span>
                                                        <span className="text-[8px] text-[#4a463d]/30 uppercase">화질 깨짐 방지 및 디테일 강화</span>
                                                    </div>
                                                    <button
                                                        onClick={() => setAiUpscale(!aiUpscale)}
                                                        className={`w-12 h-6 rounded-full transition-all relative ${aiUpscale ? 'bg-[#546147] shadow-[0_0_10px_rgba(84,97,71,0.4)]' : 'bg-[#8c8270]/20'}`}
                                                    >
                                                        <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${aiUpscale ? 'left-7' : 'left-1'}`} />
                                                    </button>
                                                </div>

                                                {aiDrawMode === 'ps_sync' && (
                                                    <div className="flex items-center justify-between p-4 bg-[#fdead3]/10 rounded-2xl border border-transparent">
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-[9px] font-black text-[#4a463d]/80 uppercase tracking-widest">실시간 자동 모드</span>
                                                            <span className="text-[8px] text-[#4a463d]/30 uppercase">그릴 때마다 자동 생성</span>
                                                        </div>
                                                        <button
                                                            onClick={() => setAiAutoMode(!aiAutoMode)}
                                                            className={`w-12 h-6 rounded-full transition-all relative ${aiAutoMode ? 'bg-[#546147]' : 'bg-[#8c8270]/20'}`}
                                                        >
                                                            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${aiAutoMode ? 'left-7' : 'left-1'}`} />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="mt-auto space-y-3">
                                                {/* Step 6 Local Progress */}
                                                {(aiActive || status?.status === 'RUNNING') && status?.target === 'ai_drawing' && (
                                                    <div className="w-full p-4 bg-[#8c8270]/5 border border-[#8c8270]/20 rounded-2xl space-y-3 mb-2 animate-in fade-in slide-in-from-bottom-2">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <Loader2 size={12} className="text-[#8c8270] animate-spin" />
                                                                <span className="text-[10px] font-black text-[#8c8270] uppercase tracking-widest">
                                                                    {aiActive ? 'Canvas Monitoring...' : 'Generating Drawing...'}
                                                                </span>
                                                            </div>
                                                            <button
                                                                onClick={() => { handleAiDrawStop(); bridge?.executeTool('photoshop', 'ai_cancel'); }}
                                                                className="px-2 py-1 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-rose-400 rounded-lg text-[8px] font-black uppercase tracking-widest transition-all"
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                        <div className="w-full h-1 bg-[#fdead3]/10 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: status?.progress !== undefined ? `${status.progress}%` : (aiActive ? '0%' : '100%') }}
                                                                className="h-full bg-[#8c8270] rounded-full"
                                                                style={{ transition: 'width 0.4s ease-out' }}
                                                            />
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="flex gap-3">
                                                    <button
                                                        onClick={aiActive ? handleAiDrawStop : handleAiDrawStart}
                                                        disabled={!comfyConnected || (aiDrawMode === 'i2i' && uploadedFiles.length === 0)}
                                                        className={`flex-1 py-6 rounded-3xl flex items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95 ${aiActive ? 'bg-red-500 hover:bg-red-600 text-[#4a463d] shadow-red-500/20' : 'bg-gradient-to-r from-[#d4cfc0] to-[#546147] hover:scale-[1.02] text-[#4a463d] shadow-[#d4cfc0]/40'} ${(!comfyConnected || (aiDrawMode === 'i2i' && uploadedFiles.length === 0)) ? 'opacity-50 grayscale cursor-not-allowed' : ''}`}
                                                    >
                                                        {aiActive ? <Pause size={18} className="fill-current" /> : (aiAutoMode && aiDrawMode === 'ps_sync' ? <Play size={18} className="fill-current" /> : <Sparkles size={18} />)}
                                                        {aiActive ? '동작 중지' : (aiDrawMode === 'ps_sync' ? (aiAutoMode ? '실시간 시작' : (aiUpscale ? 'HQ 연동 생성' : '포토샵 단일 1장 생성')) : (aiDrawMode === 'i2i' ? '참조 이미지 기반 생성' : '텍스트 프롬프트 기반 생성'))}
                                                    </button>
                                                </div>

                                                {!comfyConnected && (
                                                    <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center gap-3">
                                                        <Info size={14} className="text-orange-400 shrink-0" />
                                                        <p className="text-[9px] text-orange-200 leading-tight">ComfyUI 연결 필요 (run_nvidia_gpu.bat 실행 확인)</p>
                                                    </div>
                                                )}

                                                <div className="flex items-center gap-2 px-1">
                                                    <div className={`w-1.5 h-1.5 rounded-full ${comfyConnected ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-red-500'}`} />
                                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#4a463d]/20">시스템 상태: {comfyConnected ? 'ONLINE' : 'OFFLINE'}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right: AI Drawing Preview & Workspace */}
                                        <div className="flex-[2] flex flex-col gap-6">
                                            <div className="flex-1 bg-[#8c8270]/10 border border-[#4a463d]/10 rounded-[3.5rem] relative overflow-hidden group shadow-xl shadow-[#4a463d]/5 flex items-center justify-center backdrop-blur-md">
                                                <div className="w-full h-full flex items-center justify-center p-8">
                                                    <div className={`relative bg-[#d4cfc0]/20 shadow-2xl overflow-hidden transition-all duration-500 ${aiAspectRatio === '16:9' ? 'aspect-video w-full' : aiAspectRatio === '4:3' ? 'aspect-[4/3] h-full' : 'aspect-square h-full'}`}>
                                                        {aiResultImage ? (
                                                            <img
                                                                src={aiResultImage}
                                                                className="w-full h-full object-cover"
                                                                alt="AI 결과"
                                                                onError={(e) => {
                                                                    console.error('Image Load Error', aiResultImage.substring(0, 50));
                                                                    setAiStatusMsg("❌ 이미지 로드 실패 (데이터 누락)");
                                                                    setAiResultImage(null);
                                                                }}
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                                                                <div className="w-24 h-24 bg-[#fdead3]/20 rounded-[2rem] border border-[#4a463d]/5 flex items-center justify-center text-[#4a463d]/10">
                                                                    <ImageIcon size={40} />
                                                                </div>
                                                                <div className="text-center space-y-1">
                                                                    <h4 className="text-lg font-black uppercase italic tracking-tighter text-[#4a463d]/40">AI 결과 대기 중</h4>
                                                                    <p className="text-[10px] text-[#4a463d]/30 font-black uppercase tracking-[0.3em]">포토샵 캔버스를 확인해주세요</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Float status HUD */}
                                                <div className="absolute top-8 left-8 flex items-center gap-3 bg-[#fdead3]/80 backdrop-blur-xl border border-[#4a463d]/10 rounded-full px-5 py-2.5 z-20 shadow-lg shadow-[#4a463d]/5">
                                                    <div className={`w-2 h-2 rounded-full ${aiActive || aiGenerating ? 'bg-[#546147] animate-pulse' : 'bg-[#4a463d]/20'}`} />
                                                    <span className="text-xs font-black uppercase tracking-widest text-[#4a463d]">{aiStatusMsg || (aiActive ? "현황: 캔버스 실시간 감시 중" : "현황: 시스템 대기 중")}</span>
                                                    {aiGenerating && <Loader2 size={12} className="text-[#546147] animate-spin ml-1" />}
                                                </div>

                                                {/* Action Floating Buttons */}
                                                {aiResultImage && !aiGenerating && (
                                                    <div className="absolute bottom-10 right-10 flex gap-4 opacity-100 transition-all duration-300 transform translate-y-0 group-hover:scale-105">
                                                        <button
                                                            onClick={handleAiDrawApply}
                                                            className="px-8 py-4 bg-white text-[#546147] rounded-2xl text-sm font-black uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-slate-400/50 hover:bg-rose-50 transition-all active:scale-95 border-2 border-[#546147]/10"
                                                        >
                                                            <Sparkles size={16} /> 포토샵으로 가져오기
                                                        </button>
                                                        <a
                                                            href={aiResultImage}
                                                            download="ai_result.png"
                                                            className="w-14 h-14 bg-white text-[#546147] border-2 border-[#546147]/10 rounded-2xl flex items-center justify-center hover:bg-rose-50 transition-all shadow-2xl shadow-slate-400/50"
                                                            title="이미지 다운로드"
                                                        >
                                                            <Download size={20} />
                                                        </a>
                                                        <button
                                                            onClick={() => bridge?.executeTool('photoshop', 'open_assets_folder')}
                                                            className="w-14 h-14 bg-white text-[#546147] border-2 border-[#546147]/10 rounded-2xl flex items-center justify-center hover:bg-rose-50 transition-all shadow-2xl shadow-slate-400/50"
                                                            title="폴더 열기"
                                                        >
                                                            <Folder size={20} />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Tutorial Tip */}
                                            <div className="bg-transparent border border-transparent rounded-[2.5rem] p-8 flex items-center gap-6">
                                                <div className="w-12 h-12 rounded-2xl bg-[#546147]/10 flex items-center justify-center text-[#4a463d] shrink-0">
                                                    <Info size={24} />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-black text-[#4a463d]/80 uppercase tracking-widest mb-1">사용 가이드</h5>
                                                    <p className="text-[10px] text-[#4a463d]/40 leading-relaxed">
                                                        포토샵에서 그림을 그리면 설정한 간격에 맞춰 실시간으로 AI가 보정해줍니다. <b>Denoising</b> 수치가 낮을수록 내 스케치를 더 많이 유지하고, 높을수록 AI가 더 창의적으로 그립니다. 마음에 드는 결과가 나오면 <b>'Import to Photoshop'</b> 버튼을 눌러 레이어로 즉시 추가하세요.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <Sparkles size={48} className="mx-auto text-[#546147]/20 mb-6" />
                                        <h3 className="text-xl font-black uppercase italic mb-2 tracking-tighter text-[#4a463d]/50">Asset Generator Ready</h3>
                                        <p className="text-[#8c8270] text-sm uppercase tracking-widest">Select workspace or launch generator</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {!isFocusMode && (
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 text-[10px] text-[#4a463d]/60 font-black tracking-widest uppercase py-4">
                        <Zap size={10} className="text-[#546147] text-shadow-sm" />
                        Real-time Sync Active
                    </div>
                )}
            </AnimatePresence>

            {/* Fullscreen Video Modal */}
            <AnimatePresence>
                {aniVideoFullscreen && aniVideoUrl && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl flex items-center justify-center"
                        onClick={() => setAniVideoFullscreen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 20 }}
                            className="relative max-w-[90vw] max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={aniVideoUrl}
                                alt="Generated Animation Fullscreen"
                                className="max-w-full max-h-[85vh] rounded-3xl shadow-xl shadow-slate-200/50 shadow-[#8c8270]/20 border border-white/10"
                            />
                            <button
                                onClick={() => setAniVideoFullscreen(false)}
                                className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center hover:bg-red-500/50 transition-all"
                            >
                                <X size={18} className="text-[#4a463d]" />
                            </button>
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[9px] font-black text-[#4a463d]/30 uppercase tracking-widest">
                                Click outside or press X to close
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Settings Modal (V4.5 - Cloud Sync & SMS Gateway) */}
            <AnimatePresence>
                {showSettings && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-3xl"
                        onClick={() => setShowSettings(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="w-full max-w-lg bg-white/90 border border-[#d4cfc0]/50 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-3xl relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#546147] via-[#8c8270] to-[#d4cfc0]" />

                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#546147]/20 rounded-2xl flex items-center justify-center border border-[#546147]/30">
                                        <Settings size={24} className="text-[#4a463d]" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-[#4a463d] italic uppercase tracking-tighter">Configuration</h2>
                                        <p className="text-[10px] text-[#8c8270] font-bold uppercase tracking-widest leading-none mt-1">Global System Settings</p>
                                    </div>
                                </div>
                                <button onClick={() => setShowSettings(false)} className="p-3 hover:bg-[#fdead3]/10 rounded-2xl transition-colors">
                                    <X size={20} className="text-[#8c8270]" />
                                </button>
                            </div>

                            <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-2 scrollbar-hide">
                                {/* Adobe Paths */}
                                <div className="space-y-4">
                                    <h3 className="text-xs font-black text-[#4a463d] uppercase tracking-[0.2em] px-1">Adobe Creative Cloud</h3>
                                    <div className="space-y-3">
                                        <div className="space-y-1.5">
                                            <div className="flex justify-between px-1">
                                                <label className="text-[9px] font-bold text-[#4a463d]/30 uppercase">Photoshop .exe Path</label>
                                                <span className="text-[8px] text-emerald-500 font-black tracking-widest uppercase italic">Connected</span>
                                            </div>
                                            <input
                                                type="text"
                                                value={psPath}
                                                onChange={(e) => setPsPath(e.target.value)}
                                                placeholder="C:\Program Files\Adobe\Adobe Photoshop 2024\Photoshop.exe"
                                                className="w-full bg-[#fdead3]/40 border border-white/10 rounded-xl px-4 py-3 text-[10px] font-mono text-[#4a463d]/70 focus:border-[#546147]/50 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[9px] font-bold text-[#4a463d]/30 uppercase px-1">Illustrator .exe Path</label>
                                            <input
                                                type="text"
                                                value={aiPath}
                                                onChange={(e) => setAiPath(e.target.value)}
                                                placeholder="C:\Program Files\Adobe\Adobe Illustrator 2024\Support Files\Contents\Windows\Illustrator.exe"
                                                className="w-full bg-[#fdead3]/40 border border-white/10 rounded-xl px-4 py-3 text-[10px] font-mono text-[#4a463d]/70 focus:border-[#546147]/50 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>


                                {/* Actions */}
                                <div className="pt-4">
                                    <button
                                        onClick={handleSavePaths}
                                        className="w-full py-4 bg-[#546147]/10 hover:bg-[#546147]/20 border border-[#546147]/30 rounded-2xl text-xs font-black uppercase tracking-widest text-[#4a463d] transition-all flex items-center justify-center gap-2"
                                    >
                                        <Save size={14} /> Save Configuration
                                    </button>
                                </div>

                                {/* Security & Reset */}
                                <div className="pt-8 border-t border-transparent space-y-4">
                                    <h3 className="text-xs font-black text-rose-400 uppercase tracking-[0.2em] px-1">Security & Privacy</h3>
                                    <div className="p-5 bg-rose-500/5 border border-rose-500/10 rounded-[2rem] flex items-center justify-between group hover:border-rose-500/30 transition-all">
                                        <div className="space-y-1">
                                            <p className="text-sm font-black text-[#4a463d] italic">Adult Verification</p>
                                            <p className="text-xs text-[#8c8270] font-bold leading-tight">Reset NSFW verification status for testing.</p>
                                        </div>
                                        <button
                                            onClick={handleResetVerification}
                                            className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-[#4a463d] rounded-xl text-xs font-black uppercase tracking-widest border border-rose-500/20 transition-all active:scale-95"
                                        >
                                            Reset Status
                                        </button>
                                    </div>
                                </div>

                                {/* Updates */}
                                <div className="pt-8 border-t border-transparent space-y-5 pb-4">
                                    <div className="flex items-center justify-between px-1">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-[#546147]/10 rounded-xl flex items-center justify-center">
                                                <Zap size={14} className="text-[#546147]" />
                                            </div>
                                            <p className="text-base font-black text-[#4a463d] italic uppercase">Version 4.6.6 <span className="ml-2 text-[8px] bg-emerald-500/20 text-[#546147] px-2 py-0.5 rounded-full not-italic tracking-widest">Stable</span></p>
                                        </div>
                                        <button
                                            onClick={handleCheckUpdate}
                                            className="flex items-center gap-2 text-[#4a463d] hover:text-indigo-300 transition-colors"
                                        >
                                            <RefreshCw size={12} className={status?.status === 'RUNNING' ? 'animate-spin' : ''} />
                                            <span className="text-[9px] font-black uppercase tracking-widest">Check Update</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Adult Verification Modal (V4.6 - Google Social Login) */}
            <AnimatePresence>
                {showVerificationModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="w-full max-w-md bg-gradient-to-br from-slate-900 via-black to-slate-900 p-8 rounded-[3.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-600 via-white to-[#546147]" />
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#546147]/10 blur-[80px] rounded-full" />

                            <div className="text-center space-y-8 relative z-10">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-20 h-20 bg-[#fdead3]/10 rounded-[2rem] flex items-center justify-center border border-white/10 shadow-xl shadow-slate-200/50">
                                        <LockIcon size={32} className="text-[#4a463d]" />
                                    </div>
                                    <div className="space-y-1">
                                        <h2 className="text-2xl font-black text-[#4a463d] tracking-tight italic uppercase">
                                            연령 확인 (19+)
                                        </h2>
                                        <p className="text-[10px] text-[#8c8270] font-bold uppercase tracking-widest">Adult Verification Required</p>
                                    </div>
                                </div>

                                <div className="min-h-[140px] flex flex-col justify-center gap-5">
                                    <div className="p-6 bg-[#fdead3]/10 rounded-3xl border border-transparent text-left">
                                        <p className="text-xs text-[#4a463d]/70 leading-relaxed font-semibold">
                                            입력하신 프롬프트에 <span className="text-red-400 font-black underline decoration-red-500/50">NSFW 키워드</span>가 포함되어 있습니다.
                                            본 서비스는 만 19세 미만의 이용을 엄격히 금지합니다.<br /><br />
                                            구글 로그인을 통해 연령을 확인해 주세요.
                                        </p>
                                    </div>
                                    {isSending && (
                                        <div className="p-3 bg-[#546147]/10 border border-[#546147]/20 rounded-2xl flex items-center justify-center gap-3">
                                            <Loader2 size={14} className="text-[#4a463d] animate-spin" />
                                            <p className="text-[10px] text-[#4a463d] font-bold animate-pulse">
                                                브라우저에서 로그인을 진행하고 있습니다...
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={() => {
                                            setIsSending(true);
                                            bridge?.executeTool('auth', 'google_login');
                                            // Safety timeout
                                            setTimeout(() => setIsSending(false), 30000);
                                        }}
                                        disabled={isSending}
                                        className="w-full py-5 bg-white text-slate-900 rounded-[2rem] text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-slate-200/50 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" className="w-5 h-5" alt="Google" />
                                        Login with Google
                                    </button>
                                    <button
                                        onClick={() => {
                                            setShowVerificationModal(false);
                                            setPendingAction(null);
                                            setIsSending(false);
                                        }}
                                        className="w-full py-4 text-[#4a463d]/30 hover:text-[#4a463d] rounded-2xl text-xs font-black uppercase tracking-widest transition-all"
                                    >
                                        취소
                                    </button>
                                </div>

                                <p className="text-[8px] text-[#4a463d]/[0.05] uppercase tracking-[0.3em] font-black pointer-events-none">
                                    Google People API Secure Age Verification
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main >
    );
}