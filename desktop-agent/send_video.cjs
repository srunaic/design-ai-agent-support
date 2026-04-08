const WebSocket = require('ws');

const socket = new WebSocket('ws://127.0.0.1:8080');

socket.on('open', () => {
    console.log('Connected to Bridge');

    // 시뮬레이션: AI 에이전트가 애니메이션 생성을 완료하고 비디오 정보를 전송함
    const videoPayload = {
        type: 'VIDEO_UPDATE',
        payload: {
            url: 'https://content.vidyard.com/videos/FmqC4rN9B8_rP9Z9K0z9w/mp4_720p.mp4',
            name: 'antigravity_sample_animation.mp4'
        }
    };

    socket.send(JSON.stringify(videoPayload));
    console.log('Simulated VIDEO_UPDATE sent');

    // 상태 업데이트 전송
    const statusPayload = {
        type: 'TOOL_STATUS',
        payload: {
            tool: 'animation_gen',
            status: 'COMPLETED',
            message: '애니메이션 생성이 완료되었습니다! 프리뷰를 확인하고 MP4를 다운로드하세요.'
        }
    };
    socket.send(JSON.stringify(statusPayload));

    setTimeout(() => {
        socket.close();
        process.exit(0);
    }, 1000);
});

socket.on('error', (err) => {
    console.error('Connection error:', err);
});
