# Design Supporter v4.0 Model Guide

본 가이드는 `Design Supporter v4.0`의 핵심 기능을 100% 활용하기 위해 필요한 AI 모델($LLM$)들의 다운로드 링크와 설치 방법을 안내합니다. 저장소 용량 최적화를 위해 모델 파일은 별도로 관리됩니다.

## 1. 체크포인트 (기본 모델)
가장 중요한 기본 그림체 모델입니다. 본 저장소의 `models/` 폴더에 이미 포함되어 있으며, 아래 링크를 통해 직접 다운로드할 수 있습니다.

| 모델명 | 다운로드 링크 | 파일 이름 | 설치 경로 |
| :--- | :--- | :--- | :--- |
| **Custom Anime v4 sharp** | [**직접 다운로드**](https://github.com/srunaic/design-ai-agent-support/raw/main/models/Custom%20Anime%20v4%20sharp.safetensors) | `Custom Anime v4 sharp.safetensors` | `models/checkpoints/` |

---

## 2. LoRA (스타일 및 디테일 보정)
손가락과 발 모양을 더 정교하게 만들어주는 보조 모델입니다.

| 모델명 | 다운로드 링크 | 파일 이름 | 설치 경로 |
| :--- | :--- | :--- | :--- |
| **Good Hands** | [Civitai 링크](https://civitai.com/models/47028/good-hands-beta) | `goodhands_Beta_Gtonero.safetensors` | `models/loras/` |
| **Perfect Feet** | [Civitai 링크](https://civitai.com/models/17740/perfect-feet) | `PerfectFeet.safetensors` | `models/loras/` |

---

## 3. 임베딩 (부정 프롬프트 최적화)
인체 비례 오류를 획기적으로 줄여주는 "치트키" 파일입니다.

| 모델명 | 다운로드 링크 | 파일 이름 | 설치 경로 |
| :--- | :--- | :--- | :--- |
| **EasyNegative** | [Civitai 링크](https://civitai.com/models/7808/easynegative) | `easynegative.safetensors` | `models/embeddings/` |
| **bad-hands-5** | [Civitai 링크](https://civitai.com/models/116230/bad-hands-5) | `bad-hands-5.pt` | `models/embeddings/` |

---

## 4. 설치 방법 요약
1. 위의 링크에서 각 파일을 다운로드합니다.
2. `Design_Supporter\ComfyUI_windows_portable\ComfyUI\` 경로 내부의 해당 폴더(`checkpoints`, `loras`, `embeddings`)에 파일을 넣습니다.
3. 메인 모델은 반드시 **`Custom Anime v4 sharp.safetensors`**로 이름을 변경해 주세요.
4. 앱을 재실행하면 시스템이 자동으로 모델을 인지하여 최적화된 결과물을 만들어냅니다.
