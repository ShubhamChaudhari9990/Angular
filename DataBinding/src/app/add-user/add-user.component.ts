import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  // providers: [UserService] comment this because it's a child component of user 
})
export class AddUserComponent implements OnInit {

  username:string = '';
  status:string = 'active';

  constructor(private user: UserService){  }
 
  ngOnInit(): void {

  }

  addUser(){
    this.user.getUsers(this.username,this.status);
    console.log(this.user.users);
    
  }

}
