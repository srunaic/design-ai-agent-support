# 🎨 Design Supporter AI 엔진 및 모델 설치 가이드 (Setup Guide)

본 가이드는 `Design Supporter`의 실시간 드로잉, 고해상도 업스케일, 애니메이션 생성 기능을 100% 활용하기 위한 **ComfyUI 포터블 패키지 설정 및 AI 모델 다운로드 방법**을 초보자도 쉽게 따라 할 수 있도록 안내합니다.

---

## 1. ComfyUI 포터블 엔진 설치 (필수)

Design Supporter는 사용자의 로컬 GPU 성능을 활용하기 위해 **ComfyUI Portable** 엔진을 백그라운드에서 자동으로 구동합니다.

### 📥 1-1. 다운로드
* [ComfyUI 공식 포터블 버전 다운로드 (Direct 7z)](https://github.com/comfyanonymous/ComfyUI/releases/latest/download/ComfyUI_windows_portable_nvidia_cu121_or_cpu.7z)

### 📂 1-2. 설치 권장 경로
다운로드받은 `ComfyUI_windows_portable_...7z` 압축을 풀고, 폴더명을 **`ComfyUI_windows_portable`**로 지정한 후 아래 권장 경로 중 편한 곳에 배치하세요:

1. **앱 설치 폴더와 같은 위치 (가장 추천)**:
   - `Design Supporter`가 설치된 폴더 바로 옆 또는 하위
2. **드라이브 루트 경로 (가장 깔끔)**:
   - `C:\ComfyUI_windows_portable` 또는 `D:\ComfyUI_windows_portable`
3. **프로젝트 개발 경로**:
   - `D:\Github\Design_Supporter\ComfyUI_windows_portable`

> 💡 **자동 감지 지원**: 위 경로 중 한 곳에만 두시면 `Design Supporter` 실행 시 콘솔 창 없이 백그라운드에서 자동으로 ComfyUI 엔진을 켜고 끌 수 있습니다.

---

## 2. 필수 AI 모델 가이드

ComfyUI 폴더 내부(`ComfyUI_windows_portable\ComfyUI\models\`)의 각 하위 폴더에 모델을 다운로드하여 배치합니다.

### 🎯 2-1. 체크포인트 모델 (`models/checkpoints/`)
이미지 및 애니메이션 생성의 뼈대가 되는 베이스 모델입니다.

| 모델 구분 | 모델 파일명 | 다운로드 링크 | 권장 용도 |
| :--- | :--- | :--- | :--- |
| **기본 애니체 (SD 1.5)** | `Custom Anime v4 sharp.safetensors` | [HuggingFace / Civitai](https://civitai.com) | 빠른 실시간 드로잉 (512x512) |
| **고화질 애니 (SDXL)** | `animagine-xl-3.1.safetensors` | [HuggingFace Animagine XL 3.1](https://huggingface.co/cagliostrolab/animagine-xl-3.1/resolve/main/animagine-xl-3.1.safetensors) | 4K 디테일 및 애니메이션 |

---

### 🔍 2-2. 고화질 업스케일 모델 (`models/upscale_models/`)
화질 깨짐 방지 및 초고해상도 디테일 복원(HQ Upscale)에 사용됩니다.

| 업스케일러 이름 | 파일명 | 다운로드 링크 |
| :--- | :--- | :--- |
| **UltraSharp (추천)** | `4x-UltraSharp.pth` | [OpenModelDB 4x-UltraSharp](https://openmodeldb.info/models/4x-UltraSharp) |
| **Anime ESRGAN** | `RealESRGAN_x4plus_anime_6B.pth` | [GitHub Real-ESRGAN Releases](https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth) |

---

### 🎬 2-3. 애니메이션 모션 모듈 (`custom_nodes/ComfyUI-AnimateDiff-Evolved/models/`)
키프레임 기반 애니메이션(Animation Forge)을 생성하기 위한 핵심 모션 모델입니다.

| 모듈 이름 | 파일명 | 다운로드 링크 |
| :--- | :--- | :--- |
| **Hotshot-XL Temporal** | `hsxl_temporal_layers.safetensors` | [HuggingFace Hotshot-XL](https://huggingface.co/hotshotco/Hotshot-XL/resolve/main/hsxl_temporal_layers.safetensors) |

---

### 🖐 2-4. 디테일 보정 LoRA 및 임베딩 (선택 권장)
* **손가락 보정 LoRA** (`models/loras/`):
  - `goodhands_Beta_Gtonero.safetensors` ([Civitai](https://civitai.com/models/47028/good-hands-beta))
* **부정 임베딩** (`models/embeddings/`):
  - `easynegative.safetensors` ([HuggingFace](https://huggingface.co/datasets/gsdf/easynegative))
  - `bad-hands-5.pt` ([HuggingFace](https://huggingface.co/yesyeahvh/bad-hands-5))

---

## 3. 전체 폴더 구조 요약

최종적으로 폴더가 아래와 같은 형태로 구성되면 모든 기능이 원클릭으로 완벽하게 동작합니다:

```text
ComfyUI_windows_portable/
├── python_embeded/
│   └── python.exe
├── ComfyUI/
│   ├── main.py
│   ├── models/
│   │   ├── checkpoints/
│   │   │   ├── Custom Anime v4 sharp.safetensors
│   │   │   └── animagine-xl-3.1.safetensors
│   │   ├── upscale_models/
│   │   │   ├── 4x-UltraSharp.pth
│   │   │   └── RealESRGAN_x4plus_anime_6B.pth
│   │   ├── loras/
│   │   └── embeddings/
│   └── custom_nodes/
│       └── ComfyUI-AnimateDiff-Evolved/
│           └── models/
│               └── hsxl_temporal_layers.safetensors
```

배치가 완료된 후 **`Design Supporter`**를 실행하면 복잡한 설정 없이 모든 AI 도구가 자동으로 연동됩니다!
