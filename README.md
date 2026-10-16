주의 사항

<h1>
design supporter ai 사용시
compy ui 기반이기 때문에 compyui portable 설치 후 
run_nvidia_gpu 를 실행 해줘야지만 compy ui의 여러 모델 llm을 이용 하실 수 있습니다.

compy ui portable (은)는 용량이 상당히 크기 때문에 제가 설치 가이드를 올려 드렸습니다. 아래의 model_guide를 참고하시고 링크 따라 다운로드 해주시면 됩니다.
</h1>


# 🎨 Design Supporter AI (V4.6.2)

> **"Designed to fully support your raw creativity. You focus on the ideas, our AI handles the rendering."**

[English](#english) | [한국어](#한국어)

---
<img width="1487" height="866" alt="image" src="https://github.com/user-attachments/assets/746ef7d8-58dd-41cf-b7d2-ed373b86f44f" />

<img width="1904" height="1039" alt="image" src="https://github.com/user-attachments/assets/ae153122-8337-4e6a-b2ad-2d9097cade8a" />

<img width="881" height="496" alt="image" src="https://github.com/user-attachments/assets/997154bb-abf2-4d04-93b7-aa6a6247ae71" />

<img width="1892" height="1033" alt="image" src="https://github.com/user-attachments/assets/2854b02f-95b0-4de6-90fb-dd9495d5e67e" />

AI 드로잉 이미지 생성 시 




<img width="1610" height="971" alt="image" src="https://github.com/user-attachments/assets/fd3e3ae6-c2de-4df1-a28d-3f8aeed674c2" />

AI 애니메이션 생성 시 ram 메모리 영향을 많이 받습니다 높은 칩일수록 성능이 올라갑니다.


<img width="662" height="214" alt="image" src="https://github.com/user-attachments/assets/69fc1d8a-f776-45ae-90df-813d31beb2f3" />
실시간 자동 번역 시스템 프롬프트 입력시 영어를 몰라도 전혀 문제가 없습니다 한국어 입력 후 gemini 버튼만 누르면 바로 영어로 변환이 됩니다.


포토샵 실시간 연동과 가져오기 가능

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

1. **다운로드**: [GitHub Releases 탭](https://github.com/srunaic/design-ai-agent-support/releases)에서 최신 배포 패키지(`v4.7.0`)를 다운로드합니다.
2. **모델 설치**: [MODEL_GUIDE.md](./MODEL_GUIDE.md) 안내에 따라 필요한 AI 모델 파일을 다운로드하여 배치합니다.
3. **ComfyUI 설정**: 가이드에 따라 `ComfyUI_windows_portable` 압축을 해제합니다.
4. **실행**: 패키지에 포함된 실행 스크립트를 통해 앱을 구동합니다.

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

1. **Download**: Download the latest release from the [GitHub Releases](https://github.com/srunaic/design-ai-agent-support/releases) tab.
2. **AI Models**: Follow the **[Model Installation Guide (MODEL_GUIDE.md)](./MODEL_GUIDE.md)** for links and placement instructions.
3. **ComfyUI Engine**: Extract the preconfigured ComfyUI Portable Pack as instructed.
4. **Execution**: Run the startup script included in the release package.

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
