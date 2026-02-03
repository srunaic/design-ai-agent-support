# 🎨 Design Supporter

> **AI 기반 디자인 자동화 시스템** - Figma, Premiere Pro, After Effects와 연동하여 디자인 작업을 자동화합니다.

[![GitHub Pages](https://img.shields.io/badge/Web%20View-Live-brightgreen)](https://srunaic.github.io/design-ai-agent-support)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 🚀 빠른 시작

### 1단계: 데스크탑 에이전트 실행
```batch
Design_Supporter_Start.bat
```
더블클릭하면 데스크탑 에이전트가 자동으로 시작됩니다.

### 2단계: Figma 플러그인 연결
1. Figma에서 `Plugins > Development > Import plugin from manifest...` 선택
2. `figma-plugin/manifest.json` 파일 선택
3. 플러그인 실행 후 **"● Connected to Manager"** 확인

### 3단계: 디자인 명령 전송
```bash
node desktop-agent/send_design.cjs desktop-agent/design_command.json
```

---

## 📁 프로젝트 구조

```
Design_Supporter/
├── 📂 desktop-agent/          # 데스크탑 에이전트 (Electron)
│   ├── main.cjs               # 메인 프로세스
│   ├── send_design.cjs        # 디자인 명령 전송 스크립트
│   └── design_command.json    # 예제 디자인 명령
├── 📂 figma-plugin/           # Figma 플러그인
│   ├── manifest.json          # 플러그인 설정
│   ├── code.js                # 플러그인 코어 로직
│   └── ui.html                # 플러그인 UI
├── 📂 web-view/               # 웹 대시보드 (Next.js)
│   └── src/                   # 소스 코드
└── Design_Supporter_Start.bat # 원클릭 실행 스크립트
```

---

## 🔧 주요 기능

### 1️⃣ Figma 와이어프레임 자동 생성
JSON 명령을 통해 Figma에서 자동으로 UI 요소를 생성합니다.

**예시 명령 (design_command.json):**
```json
{
  "command": "create_wireframe",
  "description": "로그인 페이지 와이어프레임",
  "elements": [
    {"type": "frame", "name": "LoginPage", "width": 375, "height": 667},
    {"type": "rectangle", "name": "EmailInput", "width": 300, "height": 48, "x": 37, "y": 200, "fill": "#F5F5F5"},
    {"type": "text", "name": "LoginButton", "content": "로그인", "x": 160, "y": 375, "fontSize": 16}
  ]
}
```

### 2️⃣ Adobe 소프트웨어 연동
- **Premiere Pro**: 영상 편집 자동화
- **After Effects**: 모션 그래픽 제작

### 3️⃣ AI 이미지 생성
DALL-E/Stable Diffusion 연동으로 디자인 에셋 자동 생성

### 4️⃣ 실시간 프리뷰
웹 대시보드에서 작업 결과물을 실시간으로 확인

---

## ⚙️ 설정

### Figma API 토큰 설정
토큰은 로컬 설정 파일에 안전하게 저장됩니다:
```
%APPDATA%\desktop-agent\supporter_config.json
```

**설정 파일 예시:**
```json
{
  "adminId": "admin",
  "adminPw": "admin1234",
  "figmaPat": "YOUR_FIGMA_PERSONAL_ACCESS_TOKEN",
  "figmaFileKey": "YOUR_FIGMA_FILE_KEY",
  "rememberMe": true
}
```

### Figma Personal Access Token 발급
1. [Figma Settings](https://www.figma.com/settings) 접속
2. **Personal access tokens** 섹션에서 새 토큰 생성
3. 설정 파일의 `figmaPat`에 입력

---

## 🌐 GitHub Pages 배포

웹 대시보드는 GitHub Pages에서 자동 배포됩니다:
- **URL**: https://srunaic.github.io/design-ai-agent-support
- **자동 배포**: `main` 브랜치에 푸시하면 자동으로 빌드 및 배포

---

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js 20+
- npm 또는 yarn

### 로컬 개발
```bash
# 웹뷰 개발 서버 실행
cd web-view
npm install
npm run dev

# 데스크탑 에이전트 실행
cd desktop-agent
npm install
npm start
```

---

## 📋 지원 요소 타입

| 타입 | 설명 | 속성 |
|------|------|------|
| `frame` | 프레임(컨테이너) | name, width, height, x, y |
| `rectangle` | 사각형 | name, width, height, x, y, fill |
| `text` | 텍스트 | name, content, x, y, fontSize, fill |

---

## 🐛 문제 해결

### "Manifest error" 발생 시
플러그인을 Reload 해주세요: `Plugins > Development > Reload`

### 연결이 안 될 때
1. 데스크탑 에이전트가 실행 중인지 확인
2. 포트 8080이 사용 중인지 확인
3. 방화벽 설정 확인

### 404 에러 (GitHub Pages)
배포 완료까지 1~2분 소요됩니다. 잠시 후 새로고침 해주세요.

---

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포할 수 있습니다.

---

## 🤝 기여하기

1. Fork 하기
2. Feature 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시 (`git push origin feature/amazing-feature`)
5. Pull Request 생성

---

**Made with ❤️ by Design Supporter Team**
