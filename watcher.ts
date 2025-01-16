import fs from "fs";
import { WebSocket, WebSocketServer } from "ws";

const CONTENT_FOLDER = "src/components/shaders";

fs.watch(
  CONTENT_FOLDER,
  { persistent: true, recursive: true },
  async (eventType, fileName) => {
    const fileExtension = fileName?.split(".")[1];
    const isShader = fileExtension === "frag" || fileExtension === "vert";

    if (eventType === "change" && isShader) {
      clients.forEach((ws) => {
        ws.send("refresh");
      });
    }
  }
);

const wss = new WebSocketServer({ port: 3201 });

const clients = new Set<WebSocket>();

wss.on("connection", function connection(ws) {
  clients.add(ws);
  ws.on("error", console.error);
  ws.on("close", () => clients.delete(ws));
});
