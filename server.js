import path from 'path';
import { fileURLToPath } from 'url';

import { createServer } from 'http';

import express from 'express'
import session from 'express-session';

import { Server } from 'socket.io';
import eventHandlers from './controller/eventHandlers.js';


const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer);

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory



app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
  let absolutePath = __dirname + 'index.html'
  console.log('dirname: ',__dirname)	
  res.sendFile(absolutePath)
});	

io.on('connection', (socket) => {
  console.log('connected to socket.io');

  eventHandlers.gameRoom(socket);
})




httpServer.listen(5000, () => {
    console.log(`Server Running on ${5000} port.`);
    
})