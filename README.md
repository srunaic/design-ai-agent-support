# 🎨 Design Supporter AI (V4.6.2)

> **"Designed to fully support your raw creativity. You focus on the ideas, our AI handles the rendering."**

[English](#english) | [한국어](#한국어)

---

<a name="한국어"></a>
## 🇰🇷 한국어 (Korean)

Design Supporter는 **Photoshop**과 로컬 **ComfyUI**를 직접 통합한 차세대 AI 디자인 어시스턴트입니다. 실시간 캔버스 동기화부터 커스텀 스타일 학습, 키프레임 애니메이션까지 클라우드 비용 없이 로컬에서 모든 작업을 수행합니다.

### ✨ 주요 기능 (V4.6 업데이트)

1. **실시간 AI 드로잉 (Photoshop Sync / T2I / I2I)**
   - Photoshop 캔버스와 직접 동기화되어 스케치를 실시간으로 고퀄리티 작품으로 변환합니다.
   - **Magic Prompt**: 한국어/영어 구상을 Stable Diffusion을 위한 상세 프롬프트로 자동 번역 및 생성합니다.

2. **Google 소셜 로그인 성인 인증 (V4.6) [NEW]**
   - NSFW 콘텐츠 생성 시 필요한 성인 인증을 구글 계정 하나로 간편하게 처리합니다 (19+ 확인).
   - 더 이상 번거로운 전화번호 인증이 필요 없으며, 한 번의 클릭으로 로컬 인증 상태가 유지됩니다.

3. **고성능 애니메이션 엔진 (Animation Forge)**
   - 정지된 키프레임을 유연한 애니메이션으로 변환합니다 (최대 6개 키프레임 지원).
   - AnimateDiff 모션 모듈을 적용하여 고품질 `.webp` 또는 `.mp4` 영상을 내보낼 수 있습니다.

4. **지능형 업스케일링**
   - `4x-UltraSharp` 및 `RealESRGAN_x4plus_anime_6B`를 사용하여 디테일을 손실 없이 향상시킵니다.

### 🚀 시작하기

1. **다운로드**: 최신 릴리즈(`v4.6.2`)를 다운로드합니다.
2. **모델 설치**: `models/` 폴더에 `Custom Anime v4 sharp.safetensors` 등 필요한 모델을 배치합니다. ([MODEL_GUIDE.md](./MODEL_GUIDE.md) 참고)
3. **ComfyUI 설정**: 이 저장소 루트에 `ComfyUI_windows_portable` 폴더가 위치하도록 압축을 해제합니다.
4. **실행**: `design_support.bat` 파일을 실행하여 백엔드 서버와 UI를 동시에 켭니다.

---

<a name="english"></a>
## 🇺🇸 English (English)

Design Supporter is a next-generation AI design assistant that integrates directly with **Photoshop** and **ComfyUI** locally. From real-time canvas synchronization to custom style training and keyframe animation, it empowers your workflow without hidden cloud fees.

### ✨ Key Features (V4.6 Updates)

1. **Real-time AI Drawing (Photoshop Sync / T2I / I2I)**
   - Syncs directly with your active Photoshop canvas. Sketch and watch it turn into a high-quality masterpiece in real-time.
   - **Magic Prompt**: Automatically translates simple Korean/English thoughts into detailed Stable Diffusion prompts.

2. **Google Social Login Adult Verification (V4.6) [NEW]**
   - Integrated Google OAuth2 for seamless 19+ age verification when generating NSFW content.
   - Replaced complex phone verification with a single-click "Login with Google" flow.

3. **Animation Forge**
   - Turn your static keyframes into fluid animations. Supports up to 6 keyframes with AnimateDiff motion modules.
   - Export high-quality video in `.webp` or `.mp4` formats.

4. **Auto High-Fidelity Upscaling**
   - Enhance details seamlessly using `4x-UltraSharp` or `RealESRGAN_x4plus_anime_6B` as a second-pass refiner.

### 🚀 Installation & Setup

1. **Download**: Get the latest version (`v4.6.2`) from the [Releases](https://github.com/srunaic/design-ai-agent-support/releases) tab.
2. **AI Models**: Follow the **[Model Installation Guide (MODEL_GUIDE.md)](./MODEL_GUIDE.md)** for links and placement instructions.
3. **ComfyUI Engine**: Extract the preconfigured ComfyUI Portable Pack so that the `ComfyUI_windows_portable` folder sits inside this repository's root.
4. **Execution**: Double-click `design_support.bat` to boot up the Backend Node Server and the UI.

---

## 📋 System Requirements

### Minimum Specs
- **OS:** Windows 10/11
- **GPU:** NVIDIA GPU with at least **6GB VRAM** (GTX 1060 6GB or higher)
- **RAM:** 16GB Minimum

### Recommended Specs
- **GPU:** NVIDIA RTX 4060 (8GB VRAM) or higher
- **RAM:** 32GB or more

## ⚠️ Disclaimers
* Keep Photoshop open while using "Canvas Sync" features.
* The system is NSFW capable. Please use responsibly and adhere to the licenses of the base AI models.

## 💖 Support the Project
If you find Design Supporter helpful, please consider supporting its development via [GitHub Sponsors](https://github.com/sponsors/srunaic).

---
© 2026 Design Supporter NanoDorothy. All rights reserved.
