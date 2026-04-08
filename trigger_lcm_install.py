import requests
import json
import time

def trigger_install(data):
    url = "http://127.0.0.1:8188/manager/queue/install_model"
    print(f"Queuing installation for {data['name']}...")
    try:
        response = requests.post(url, json=data, timeout=10)
        if response.status_code == 200:
            print("Successfully queued.")
            return True
        else:
            print(f"Failed to queue: {response.status_code} - {response.text}")
            return False
    except Exception as e:
        print(f"Error: {e}")
        return False

# Model Data from model-list.json
model_data = {
    "name": "AnimateLCM_sd15_t2v",
    "type": "checkpoint",
    "base": "SD1.5",
    "save_path": "custom_nodes/ComfyUI-AnimateDiff-Evolved/models",
    "description": "AnimeLCM Motion Module for fast anime animation",
    "reference": "https://huggingface.co/Guoyao/AnimateLCM",
    "filename": "AnimateLCM_sd15_t2v.ckpt",
    "url": "https://huggingface.co/Guoyao/AnimateLCM/resolve/main/AnimateLCM_sd15_t2v.ckpt",
    "size": "1.69GB"
}

lora_data = {
    "name": "AnimateLCM_sd15_t2v_lora",
    "type": "lora",
    "base": "SD1.5",
    "save_path": "loras",
    "description": "AnimeLCM LoRA for fast anime animation",
    "reference": "https://huggingface.co/Guoyao/AnimateLCM",
    "filename": "AnimateLCM_sd15_t2v_lora.safetensors",
    "url": "https://huggingface.co/Guoyao/AnimateLCM/resolve/main/AnimateLCM_sd15_t2v_lora.safetensors",
    "size": "165MB"
}

if trigger_install(model_data) and trigger_install(lora_data):
    print("Starting queue worker...")
    try:
        requests.get("http://127.0.0.1:8188/manager/queue/start", timeout=10)
        print("Worker started successfully.")
    except Exception as e:
        print(f"Failed to start worker: {e}")
