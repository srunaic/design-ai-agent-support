const WebSocket = require('ws');
const path = require('path');
const fs = require('fs');

/**
 * broadcast_asset.cjs
 * 에이전트가 생성한 파일을 앱의 프리뷰 창에 즉시 알리는 유틸리티
 * 사용법: node broadcast_asset.cjs <relative_or_absolute_file_path>
 */

const filePath = process.argv[2];
if (!filePath) {
    console.error('Error: No file path provided.');
    process.exit(1);
}

// 절대 경로로 변환
const fullPath = path.resolve(filePath);

// 파일 존재 여부 확인
if (!fs.existsSync(fullPath)) {
    console.error(`Error: File not found at ${fullPath}`);
    process.exit(1);
}

// 파일 확장자에 따라 타입 결정
const ext = path.extname(fullPath).toLowerCase();
const isVideo = ext === '.mp4';
const messageType = isVideo ? 'VIDEO_UPDATE' : 'PREVIEW_UPDATE';

const socket = new WebSocket('ws://127.0.0.1:8080');

socket.on('open', () => {
    console.log(`Connected to Bridge. Sending ${messageType}...`);

    // 웹뷰에서는 로컬 파일을 직접 접근하지 못할 수 있으므로 
    // 실제 운영 환경에서는 Base64로 인코딩하거나 
    // 로컬 서버에서 호스팅되는 URL로 변환하여 보냅니다.
    // 여기서는 로컬 개발 환경용 placeholder URL 또는 
    // 이미 에셋 폴더에 있는 파일을 대상으로 하므로 이름을 보냅니다.

    // 시뮬레이션용 샘플 (실제는 에셋 폴더의 파일명)
    const fileName = path.basename(fullPath);

    // 로컬 에셋 서버(8081)를 통해 파일 서빙
    const payload = {
        url: `http://localhost:8081/assets/${fileName}`,
        name: fileName
    };

    socket.send(JSON.stringify({
        type: messageType,
        payload: payload
    }));

    // 상태 업데이트도 함께 전송
    socket.send(JSON.stringify({
        type: 'TOOL_STATUS',
        payload: {
            tool: isVideo ? 'animation_gen' : 'image_gen',
            status: 'COMPLETED',
            message: `Antigravity가 ${isVideo ? '애니메이션' : '이미지'} 생성을 완료했습니다: ${fileName}`
        }
    }));

    console.log(`Broadcasted ${fileName} as ${messageType}`);

    setTimeout(() => {
        socket.close();
        process.exit(0);
    }, 500);
});

socket.on('error', (err) => {
    console.error('Bridge Connection Error:', err.message);
    process.exit(1);
});
