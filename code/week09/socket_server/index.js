import { WebSocketServer } from "ws";

let port = 3000;
const wss = new WebSocketServer({port: port});

wss.on('connection', ws => {
  ws.on('message', data => {
    let jsonData = JSON.parse(data);
    let jsonStr = JSON.stringify(jsonData);
    wss.clients.forEach(client => client.send(jsonStr));
  });
});

console.log('web socket server runnon on ' + port);