import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService,LoggerService]
})
export class UserComponent implements OnInit{

  constructor(private userService:UserService,private loggerService: LoggerService){}

  users : {name:string,status:string}[] = [];

  ngOnInit() {
    this.users = this.userService.users;
  }

}
