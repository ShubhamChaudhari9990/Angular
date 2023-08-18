import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket: Socket;
  constructor() {
    // Connect to the socket.io server
    this.socket = io('http://localhost:3012'); // Replace with your server address
  }

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  receiveMessage(): Observable<string> {
    return new Observable(observer => {
      this.socket.on('message', (data: any) => {
        observer.next(data);
      });
    });
  }

  getMessage(): Observable<any[]> {
    return new Observable(observer => {
      this.socket.on('messages', (data: any[]) => {
        observer.next(data);
      });
    });
  }
}
