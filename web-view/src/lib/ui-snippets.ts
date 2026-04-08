export const UI_SNIPPETS = {
    toggle_menu: `
import { User, MoreHorizontal, Settings, Save } from 'lucide-react';

const ToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div data-asset-id="toggle_menu" data-asset-name="toggle_menu_full" className="bg-white/95 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(255,105,180,0.2)] border border-pink-100 flex flex-col items-center gap-6 relative">
            <div data-asset-id="toggle_menu" data-asset-name="user_profile_icon" className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/30">
                <User size={40} className="text-white" />
            </div>
            <div className="text-center">
                <h3 className="text-xl font-black text-slate-800 tracking-tight">Game Session</h3>
                <p className="text-pink-500 text-xs font-bold uppercase tracking-widest mt-1">Experimental UI</p>
            </div>
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={\`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 \${isOpen ? 'bg-pink-500 text-white rotate-90' : 'bg-slate-100 text-slate-400 hover:bg-pink-50 hover:text-pink-500'}\`}
            >
                <MoreHorizontal size={24} />
            </button>
            {isOpen && (
                <div className="flex flex-col gap-2 w-48 p-2 bg-white rounded-3xl shadow-2xl border border-pink-50 absolute top-full mt-4 z-50">
                    <button className="flex items-center gap-3 w-full p-4 hover:bg-pink-50 rounded-2xl transition-colors text-slate-600 hover:text-pink-600 group">
                        <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-sm"><Settings size={16} /></div>
                        <span className="text-xs font-black uppercase tracking-wider">Option</span>
                    </button>
                    <button className="flex items-center gap-3 w-full p-4 hover:bg-pink-50 rounded-2xl transition-colors text-slate-600 hover:text-pink-600 group">
                        <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-sm"><Save size={16} /></div>
                        <span className="text-xs font-black uppercase tracking-wider">Save</span>
                    </button>
                </div>
            )}
        </div>
    );
};`,
    vn_controls: `
import { Play, Rewind, FastForward, SkipForward } from 'lucide-react';

const VNControls = () => {
    return (
        <div className="bg-white/80 backdrop-blur-2xl p-10 rounded-[4rem] shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-white flex flex-col items-center gap-10 w-full max-w-lg">
            <div data-asset-id="vn_controls" data-asset-name="dialog_box" className="w-full bg-slate-50/50 rounded-[2.5rem] p-8 border border-slate-100/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-pink-500" />
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                    <span className="text-[10px] font-black text-pink-500 uppercase tracking-[0.2em]">Character Name</span>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed italic text-lg">
                    "이 아름다운 세상에서, 우리의 이야기가 시작됩니다..."
                </p>
            </div>
            
            <div className="flex items-center gap-6">
                <button className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 hover:text-pink-500 hover:bg-pink-50 transition-all flex items-center justify-center">
                    <Rewind size={24} />
                </button>
                <button className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-pink-400 to-pink-600 text-white shadow-xl shadow-pink-500/40 hover:scale-110 transition-all flex items-center justify-center">
                    <Play size={32} className="ml-1" />
                </button>
                <button className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 hover:text-pink-500 hover:bg-pink-50 transition-all flex items-center justify-center">
                    <FastForward size={24} />
                </button>
            </div>
            
            <div className="flex gap-3 w-full">
                <button className="flex-1 py-4 bg-slate-900 rounded-2xl text-[10px] font-black text-white uppercase tracking-widest hover:bg-slate-800 transition-all">Skip</button>
                <button className="flex-1 py-4 bg-slate-100 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-200 transition-all">Auto</button>
            </div>
        </div>
    );
};`,
    save_slots: `
import { History, User, Clock } from 'lucide-react';

const SaveMenu = () => {
    return (
        <div className="w-full bg-white/90 backdrop-blur-xl p-10 rounded-[3.5rem] shadow-2xl border border-pink-100/50">
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-pink-500 rounded-2xl text-white shadow-lg shadow-pink-500/20">
                        <History size={24} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight uppercase italic">Data Records</h3>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={\`p-6 rounded-[2.5rem] border transition-all cursor-pointer \${i === 1 ? 'bg-pink-50/50 border-pink-200 shadow-lg shadow-pink-500/5' : 'bg-slate-50 border-slate-100 hover:border-pink-200 hover:bg-pink-50/30'}\`}>
                        <div className="flex gap-6">
                            <div className="w-28 h-28 rounded-3xl bg-slate-200 flex-shrink-0 relative overflow-hidden ring-1 ring-slate-200">
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-300/40 to-transparent" />
                                <User size={40} className="absolute inset-0 m-auto text-slate-400" />
                            </div>
                            <div className="flex flex-col justify-between py-2">
                                <div>
                                    <span className="px-3 py-1 bg-white border border-pink-100 rounded-xl text-[10px] font-black text-pink-500 uppercase mb-2 inline-block">Slot {i}</span>
                                    <h4 className="text-lg font-black text-slate-700">School Hallway</h4>
                                    <p className="text-xs text-slate-400 font-medium">Dialogue content preview...</p>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400">
                                    <Clock size={12} />
                                    <span className="text-[10px] font-bold">2026.02.24 12:20</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};`,
    char_selection: `
import { User, Sparkles, Shield, Heart, Zap, Lock, Info } from 'lucide-react';

const CharacterSelection = () => {
    return (
        <div className="w-full h-[700px] flex gap-8 p-12 bg-[#050507] rounded-[4rem] border border-white/5 shadow-3xl overflow-hidden relative">
            {/* Background Aura */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 blur-[150px] rounded-full animate-pulse" />
            
            {/* 1. Left Sidebar: Stats HUD */}
            <div className="w-80 flex flex-col gap-6 z-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-pink-500 rounded-2xl text-white shadow-lg shadow-pink-500/30">
                        <User size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-none">Profile</h3>
                        <p className="text-[10px] text-pink-500 font-black tracking-[.3em] uppercase mt-1">Status: Active</p>
                    </div>
                </div>

                <div className="flex-1 glass-card bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-8 backdrop-blur-3xl">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center px-1">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Affinity</span>
                            <span className="text-[10px] font-black text-pink-400 uppercase">Rank S</span>
                        </div>
                        <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                            <div className="w-[85%] h-full bg-gradient-to-r from-pink-500 to-indigo-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5">
                            <Shield size={16} className="text-indigo-400 mb-2" />
                            <p className="text-[9px] text-white/30 font-black uppercase tracking-tighter">Defense</p>
                            <p className="text-lg font-black text-white tracking-tighter">89<span className="text-[10px] text-indigo-400/50">%</span></p>
                        </div>
                        <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5">
                            <Zap size={16} className="text-pink-400 mb-2" />
                            <p className="text-[9px] text-white/30 font-black uppercase tracking-tighter">Power</p>
                            <p className="text-lg font-black text-white tracking-tighter">MAX</p>
                        </div>
                    </div>

                    <div className="flex-1 p-5 rounded-3xl bg-pink-500/5 border border-pink-500/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-3 opacity-20"><Info size={20} /></div>
                        <p className="text-[9px] font-black text-pink-500 uppercase tracking-widest mb-3">Lore preview</p>
                        <p className="text-xs text-white/60 leading-relaxed font-medium italic">
                            "하늘의 파편에서 태어난 고귀한 영혼. 그녀의 날개짓 한 번에 세상의 모든 슬픔이 씻겨 내려갑니다."
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. Center Stage: Large Character Preview */}
            <div className="flex-1 relative z-10 flex flex-col items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center group/stage">
                    {/* Ring Decoration */}
                    <div className="absolute w-[450px] h-[450px] border-2 border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-[500px] h-[500px] border border-dashed border-pink-500/20 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                    
                    {/* Character Large Image */}
                    <div className="relative z-20 h-full flex items-center justify-center drop-shadow-[0_0_50px_rgba(236,72,153,0.3)]">
                        <img 
                            src="/characters/char1.jpg" 
                            className="h-[90%] object-contain mask-gradient-b transition-all duration-700 group-hover/stage:scale-105" 
                            alt="Hero" 
                        />
                        
                        {/* Interactive UI Overlays */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[300px] p-6 glass-card bg-black/60 border border-white/10 rounded-[2rem] backdrop-blur-3xl text-center shadow-2xl">
                            <h4 className="text-5xl font-black text-white italic tracking-tighter mb-1 select-none">MIYU</h4>
                            <p className="text-pink-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Celestial Guardian</p>
                            <button className="w-full py-5 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-pink-500/30 active:scale-95 transition-all">
                                Initialize Selection
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Right Sidebar: Mini Selectors / Lock States */}
            <div className="w-48 flex flex-col gap-4 z-10">
                <div className="text-right mb-4">
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.3em]">Next phase</p>
                    <p className="text-xl font-black text-white tracking-widest leading-none">01<span className="text-white/10">.</span>03</p>
                </div>

                {/* Thumb 1 - Active */}
                <div className="h-32 rounded-[2rem] border-2 border-pink-500 bg-white/5 overflow-hidden relative cursor-pointer group shadow-2xl shadow-pink-500/10">
                    <img src="/characters/char1.jpg" className="w-full h-full object-cover opacity-60" alt="Thumb" />
                    <div className="absolute inset-0 bg-pink-500/20" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-pink-500 shadow-lg shadow-pink-500/50" />
                </div>

                {/* Thumb 2 - Locked */}
                <div className="h-32 rounded-[2rem] border border-white/5 bg-slate-900 overflow-hidden relative opacity-40 group grayscale">
                    <img src="/characters/char2.jpg" className="w-full h-full object-cover" alt="Thumb" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <Lock size={20} className="text-white/20" />
                    </div>
                </div>

                {/* Thumb 3 - Locked */}
                <div className="h-32 rounded-[2rem] border border-white/5 bg-slate-900 overflow-hidden relative opacity-40 group grayscale">
                    <img src="/characters/char3.jpg" className="w-full h-full object-cover" alt="Thumb" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <Lock size={20} className="text-white/20" />
                    </div>
                </div>

                <div className="flex-1 mt-4 flex flex-col items-center justify-center bg-white/[0.02] border border-dashed border-white/10 rounded-[2rem]">
                    <Sparkles size={24} className="text-white/10 mb-2" />
                    <p className="text-[9px] text-white/10 font-black uppercase tracking-widest text-center px-4 leading-tight">New characters unlocking soon</p>
                </div>
            </div>
        </div>
    );
};`,
    affinity_system: `
import { Heart, Activity, Target, MessageSquare, History, Star, ArrowUpRight } from 'lucide-react';

const AffinitySystem = () => {
    return (
        <div className="w-full h-full flex gap-10 p-12 bg-[#050507] rounded-[4rem] border border-white/5 shadow-3xl overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/10 blur-[180px] rounded-full" />
            
            {/* 1. Left: Main Resonance Panel */}
            <div className="flex-1 flex flex-col gap-8 z-10">
                <div data-asset-id="affinity_system" data-asset-name="affinity_header" data-asset-padding="10" className="flex items-center gap-6">
                    <div data-asset-id="affinity_system" data-asset-name="heart_icon_active" data-asset-padding="8" className="p-5 bg-gradient-to-br from-pink-500 to-rose-600 rounded-[2rem] text-white shadow-2xl shadow-pink-500/40">
                        <Heart size={36} className="animate-[heartbeat_1.5s_infinite]" />
                    </div>
                    <div>
                        <h3 data-asset-id="affinity_system" data-asset-name="affinity_title" data-asset-padding="10" className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">Affinity Resonance</h3>
                        <p className="text-[11px] text-pink-500 font-black tracking-[0.4em] uppercase mt-2">Core Connection: 88.4%</p>
                    </div>
                </div>

                <div className="flex-1 glass-card bg-white/[0.03] border border-white/10 rounded-[3.5rem] p-12 flex flex-col items-center justify-center gap-12 relative overflow-hidden backdrop-blur-3xl">
                    {/* Visualizer Circle */}
                    <div className="relative w-80 h-80 flex items-center justify-center">
                        <div className="absolute inset-0 border-[6px] border-white/5 rounded-full" />
                        <div className="absolute inset-0 border-[6px] border-pink-500 rounded-full border-t-transparent border-l-transparent rotate-[45deg] shadow-[0_0_30px_rgba(236,72,153,0.3)]" />
                        
                        <div className="flex flex-col items-center transition-transform duration-500 hover:scale-110">
                            <h4 className="text-8xl font-black text-white italic tracking-tighter leading-none mb-2">Deep</h4>
                            <div className="px-6 py-2 bg-pink-500 text-white rounded-full text-[11px] font-black uppercase tracking-[0.5em] shadow-xl shadow-pink-500/40">Bonded</div>
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-3 gap-6">
                        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-2">
                            <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Trust</span>
                            <span className="text-2xl font-black text-white italic text-shadow-lg">LV. 4</span>
                        </div>
                        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-2">
                            <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Intimacy</span>
                            <span className="text-2xl font-black text-rose-400 italic text-shadow-lg leading-none">Max</span>
                        </div>
                        <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-2">
                            <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Event</span>
                            <span className="text-2xl font-black text-white italic text-shadow-lg">12+</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Right: Interactions & History */}
            <div className="w-[450px] flex flex-col gap-6 z-10">
                <div className="h-1/2 p-8 glass-card bg-white/[0.02] border border-white/10 rounded-[3rem] flex flex-col gap-6 backdrop-blur-3xl">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center"><Star size={16} className="text-indigo-400" /></div>
                            <h4 className="text-lg font-black text-white italic uppercase tracking-tight">Milestones</h4>
                        </div>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest italic">3 / 5 Unlocked</span>
                    </div>

                    <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                        <div className="flex items-center gap-5 p-5 bg-white/[0.02] border border-white/5 rounded-[2rem] opacity-60">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 flex items-center justify-center text-indigo-300"><MessageSquare size={20} /></div>
                            <div className="flex-1">
                                <p className="text-[11px] font-black text-white/40 uppercase tracking-wider">Early Steps</p>
                                <p className="text-[13px] font-bold text-white/80">첫 번째 데이트 완료</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 p-5 bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 rounded-[2rem]">
                            <div className="w-12 h-12 rounded-2xl bg-pink-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30"><Target size={20} /></div>
                            <div className="flex-1">
                                <p className="text-[11px] font-black text-pink-500 uppercase tracking-wider">Current Target</p>
                                <p className="text-[13px] font-bold text-white">동아리 축제 이벤트 준비</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 p-5 bg-white/[0.01] border border-dashed border-white/10 rounded-[2rem]">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/10"><Activity size={20} /></div>
                            <div className="flex-1">
                                <p className="text-[11px] font-black text-white/10 uppercase tracking-wider">Locked</p>
                                <p className="text-[13px] font-bold text-white/10">비밀스러운 고백</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-8 glass-card bg-black/40 border border-white/10 rounded-[3rem] flex flex-col gap-6 backdrop-blur-3xl relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 p-8 opacity-5"><History size={80} /></div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-pink-500/20 flex items-center justify-center"><History size={16} className="text-pink-400" /></div>
                        <h4 className="text-lg font-black text-white italic uppercase tracking-tight">Recent Logic</h4>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-white/[0.02] rounded-2xl border-l-4 border-pink-500 transition-all hover:bg-white/[0.04]">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[10px] font-black text-pink-500 uppercase">Dialogue Link</span>
                                <span className="text-xs font-bold text-white/80">"하늘이 정말 예쁘네요" 대화</span>
                            </div>
                            <div className="flex items-center gap-1 text-pink-400">
                                <ArrowUpRight size={14} />
                                <span className="text-sm font-black">+12</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white/[0.02] rounded-2xl border-l-4 border-indigo-500 transition-all hover:bg-white/[0.04]">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[10px] font-black text-indigo-500 uppercase">Item Gift</span>
                                <span className="text-xs font-bold text-white/80">화이트 모카 증정</span>
                            </div>
                            <div className="flex items-center gap-1 text-indigo-400">
                                <ArrowUpRight size={14} />
                                <span className="text-sm font-black">+45</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};`
};
