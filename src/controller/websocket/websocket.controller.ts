import { websocketService } from '@/service/websocket/websocket.service.ts';
import type { WebsocketManager, SubClassConfig } from '@/types.ts';

function websocketManager(config: SubClassConfig): WebsocketManager {
  async function websocket(message: string) {
    const data = await websocketService(config, message);

    return data;
  }

  return {
    websocket,
  };
}

export default websocketManager;
