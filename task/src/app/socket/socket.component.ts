import { Component } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent {

  messages: any[] = [];
  newMessage: string = '';

  constructor(private socketService: WebSocketService) {}

  ngOnInit() {
    this.socketService.getMessage().subscribe(messages => {
      this.messages = messages;
      console.log(this.messages);
      
    });

    this.socketService.receiveMessage().subscribe(message => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.newMessage) {
      this.socketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
