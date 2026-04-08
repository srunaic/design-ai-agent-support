const fs = require('fs');

try {
    let content = fs.readFileSync('web-view/src/app/page.tsx', 'utf8');

    // Remove deprecated steps and rebuild STEPS to match photo
    content = content.replace(/const STEPS = \[([\s\S]*?)\];/, `const STEPS = [
    { id: 1, title: 'UI/UX 디자인', icon: Layout, desc: 'Figma로 화면 구조를 만듭니다.', tool: 'figma' },
    { id: 2, title: '영상 편집', icon: Video, desc: '홍보 영상 구성 및 설계를 진행합니다.', tool: 'premiere' },
    { id: 6, title: 'AI 드로잉 이미지 생성', icon: Sparkles, desc: '실시간 AI 드로잉 및 포토샵과 연동합니다.', tool: 'adobe_connect' },
    { id: 8, title: 'AI 결과 대기 중', icon: Clock, desc: 'AI 렌더링을 기다립니다.', tool: 'waiting' },
];`);

    // --- High Level Shell Overhaul ---
    // Outer main layout
    content = content.replace(/bg-\[\#020202\]/g, 'bg-[#f4f1eb]');
    content = content.replace(/text-slate-200/g, 'text-[#4a463d]');
    content = content.replace(/selection:bg-pink-500\/30/g, 'selection:bg-[#9ca897]/50');

    // Sidebar specifically
    // Old sidebar was bg-white/[0.02] or similar, let's search for the sidebar container div.
    // The sidebar usually has `w-72` or `w-80`. Let's target the sidebar div.
    content = content.replace(/className="w-80 h-full flex flex-col p-6 relative z-10"/, 'className="w-80 h-full flex flex-col p-8 bg-[#e3dbc7]"');

    // --- Targeted Components ---
    // Menu item default: group/step w-full flex items-start gap-4 p-4 rounded-2xl transition-all cursor-pointer bg-white/[0.02] hover:bg-white/[0.05] border border-white/5
    // Menu item active: bg-gradient-to-r from-pink-500/20 to-indigo-500/20 shadow-[inset_0_0_20px_rgba(236,72,153,0.1)] border-pink-500/20
    content = content.replace(/bg-white\/\[0\.02\]/g, 'bg-transparent');
    content = content.replace(/hover:bg-white\/\[0\.05\]/g, 'hover:bg-[#d5ccb6]');
    content = content.replace(/border-white\/5/g, 'border-transparent');

    // Active step styles:
    content = content.replace(/bg-gradient-to-r from-pink-500\/20 to-indigo-500\/20/g, 'bg-[#9ea897] shadow-md');
    content = content.replace(/border-pink-500\/20/g, 'border-[#8e9887]');
    content = content.replace(/shadow-\[inset_0_0_20px_rgba\(236,72,153,0\.1\)\]/g, '');

    // Step Title colors (Active vs Inactive)
    content = content.replace(/text-indigo-400/g, 'text-white'); // Active step subtitle
    content = content.replace(/text-white/g, 'text-[#4a463d]'); // Default text
    content = content.replace(/text-slate-500/g, 'text-[#8c8270]'); // Subtext

    // Icons in active state (usually text-pink-500)
    content = content.replace(/text-pink-500/g, 'text-[#56604e]');

    fs.writeFileSync('web-view/src/app/page.tsx', content, 'utf8');
    console.log('SUCCESS: UI colors updated.');
} catch (e) {
    console.error('ERROR:', e.message);
}
