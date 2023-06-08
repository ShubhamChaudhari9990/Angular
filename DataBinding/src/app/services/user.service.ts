import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private logger:LoggerService) { }

  users = [
    {name:'john',status:'active'},
    {name:'wan',status:'inactive'},
    {name:'roman',status:'active'}
  ];

  getUsers(name:string,status:string){
    this.users.push({name: name,status: status});
    this.logger.logMessage(name,status);
  }

  
}
