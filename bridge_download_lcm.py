import os
import sys
import asyncio

# Setup paths to import ComfyUI-Manager's core
manager_path = r"d:\Github\Design_Supporter\ComfyUI_windows_portable\ComfyUI\custom_nodes\ComfyUI-Manager"
sys.path.append(manager_path)
sys.path.append(os.path.join(manager_path, "glob"))

# We need to trick the imports because manager_downloader might import from manager_core or others
os.environ['COMFYUI_PATH'] = r"d:\Github\Design_Supporter\ComfyUI_windows_portable\ComfyUI"

import manager_downloader

def download_model():
    # Motion Module
    url_model = "https://huggingface.co/Guoyao/AnimateLCM/resolve/main/AnimateLCM_sd15_t2v.ckpt"
    dest_model = r"d:\Github\Design_Supporter\ComfyUI_windows_portable\ComfyUI\custom_nodes\ComfyUI-AnimateDiff-Evolved\models"
    file_model = "AnimateLCM_sd15_t2v.ckpt"
    
    # LoRA
    url_lora = "https://huggingface.co/Guoyao/AnimateLCM/resolve/main/AnimateLCM_sd15_t2v_lora.safetensors"
    dest_lora = r"d:\Github\Design_Supporter\ComfyUI_windows_portable\ComfyUI\models\loras"
    file_lora = "AnimateLCM_sd15_t2v_lora.safetensors"

    print(f"Starting download of {file_model} using ComfyUI-Manager's downloader...")
    try:
        # manager_downloader.download_url(url, dir, filename)
        manager_downloader.download_url(url_model, dest_model, file_model)
        print(f"Successfully downloaded {file_model}")
        
        print(f"Starting download of {file_lora}...")
        manager_downloader.download_url(url_lora, dest_lora, file_lora)
        print(f"Successfully downloaded {file_lora}")
    except Exception as e:
        print(f"FAILED: {e}")

if __name__ == "__main__":
    download_model()
