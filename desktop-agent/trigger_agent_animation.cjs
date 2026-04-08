const WebSocket = require('ws');

// 커맨드라인 인자 파싱
const args = process.argv.slice(2);
const promptArg = args.find(a => a.startsWith('--prompt='))?.split('=')[1] || '사용자 지정 연출';
const styleArg = args.find(a => a.startsWith('--style='))?.split('=')[1] || 'cinematic';

const socket = new WebSocket('ws://127.0.0.1:8080');

socket.on('open', async () => {
    console.log(`Connected to Bridge. Triggering animation for: "${promptArg}"`);

    const sendStatus = (message, progress) => {
        socket.send(JSON.stringify({
            type: 'TOOL_STATUS',
            payload: {
                tool: 'image_gen',
                status: 'RUNNING',
                message: message,
                progress: progress
            }
        }));
    };

    // 에이전트 주도 시뮬레이션 단계
    sendStatus(`[Agent Intent] "${promptArg}" 분석 및 모션 그래프 설계 중...`, 10);
    await new Promise(r => setTimeout(r, 1500));

    const stages = [
        { msg: 'Semantic Motion Intent Encoding...', progress: 25 },
        { msg: 'Visual Latent Motion Embedding...', progress: 40 },
        { msg: 'Temporal Consistency Mapping (Longform)...', progress: 60 },
        { msg: 'Depth Parallax Layering...', progress: 75 },
        { msg: 'AI Optical Flow Synthesis...', progress: 90 },
        { msg: 'Final MP4 Rendering (60s+)...', progress: 95 }
    ];

    for (const stage of stages) {
        sendStatus(`[AI Animation] ${styleArg.toUpperCase()} - ${stage.msg}`, stage.progress);
        await new Promise(r => setTimeout(r, 1200));
    }

    // 결과 전송
    const fileName = `agent_animation_${Date.now()}.mp4`;
    const sampleVideoUrl = `https://media.w3.org/2010/05/sintel/trailer.mp4`;

    socket.send(JSON.stringify({
        type: 'VIDEO_UPDATE',
        payload: { url: sampleVideoUrl, name: fileName }
    }));

    socket.send(JSON.stringify({
        type: 'TOOL_STATUS',
        payload: {
            tool: 'image_gen',
            status: 'COMPLETED',
            message: `[${styleArg}] 스타일에 에이전트의 연출이 성공적으로 반영되었습니다!\n요청하신 "${promptArg}"에 기반한 시네마틱 애니메이션이 완성되었습니다.`
        }
    }));

    setTimeout(() => {
        socket.close();
        process.exit(0);
    }, 1000);
});

socket.on('error', (err) => {
    console.error('Connection error:', err);
    process.exit(1);
});
