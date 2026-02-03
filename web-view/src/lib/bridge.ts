export type ToolStatus = {
    tool: string;
    status: 'IDLE' | 'RUNNING' | 'SAVING' | 'COMPLETED' | 'ERROR';
    message: string;
};

class DesignBridge {
    private ws: WebSocket | null = null;
    private listeners: ((data: any) => void)[] = [];

    constructor() {
        if (typeof window !== 'undefined') {
            this.connect();
        }
    }

    private connect() {
        console.log('Attempting to connect to Bridge...');
        this.ws = new WebSocket('ws://localhost:8080');

        this.ws.onopen = () => {
            console.log('Connected to Desktop Agent');
            (window as any).__bridgeStatus = 'CONNECTED';
        };

        this.ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                this.listeners.forEach(l => l(data));
            } catch (e) {
                console.error('Failed to parse bridge message', e);
            }
        };

        this.ws.onclose = () => {
            console.log('Disconnected from Desktop Agent, retrying in 2s...');
            (window as any).__bridgeStatus = 'DISCONNECTED';
            setTimeout(() => this.connect(), 2000);
        };

        this.ws.onerror = (err) => {
            console.error('Bridge Connection Error', err);
            (window as any).__bridgeStatus = 'ERROR';
        };
    }

    public send(type: string, payload: any) {
        if (this.ws?.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({ type, payload }));
        } else {
            const status = this.ws ? this.ws.readyState : 'CLOSED';
            console.error(`Bridge not connected. Status: ${status}`);
            alert('에이전트와 연결이 끊겨 있습니다. 잠시 후 다시 시도하거나 프로그램을 재시작해 주세요.');
        }
    }

    public onMessage(callback: (data: any) => void) {
        this.listeners.push(callback);
    }

    public executeTool(tool: string, action: string) {
        this.send('EXECUTE_TOOL', { tool, action });
    }
}

export const bridge = typeof window !== 'undefined' ? new DesignBridge() : null;
