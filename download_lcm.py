import requests
import os
import sys

def download(url, save_path):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
    
    print(f"Downloading {url} to {save_path}...")
    try:
        response = requests.get(url, headers=headers, stream=True, timeout=60)
        if response.status_code == 200:
            os.makedirs(os.path.dirname(save_path), exist_ok=True)
            with open(save_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=1024*1024): # 1MB chunks
                    if chunk:
                        f.write(chunk)
            print(f"Successfully downloaded to {save_path}")
            return True
        else:
            print(f"Failed with status code {response.status_code}: {response.text[:100]}")
            return False
    except Exception as e:
        print(f"Error: {e}")
        return False

# Motion Module
url_model = "https://huggingface.co/Guoyao/AnimateLCM/resolve/main/AnimateLCM_sd15_t2v.ckpt?download=true"
path_model = r"d:\Github\Design_Supporter\ComfyUI_windows_portable\ComfyUI\custom_nodes\ComfyUI-AnimateDiff-Evolved\models\AnimateLCM_sd15_t2v.ckpt"

# LoRA
url_lora = "https://huggingface.co/Guoyao/AnimateLCM/resolve/main/AnimateLCM_sd15_t2v_lora.safetensors?download=true"
path_lora = r"d:\Github\Design_Supporter\ComfyUI_windows_portable\ComfyUI\models\loras\AnimateLCM_sd15_t2v_lora.safetensors"

if download(url_model, path_model):
    download(url_lora, path_lora)
else:
    print("Aborting LoRA download due to model download failure.")
