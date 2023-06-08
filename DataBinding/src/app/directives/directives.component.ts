import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  isLogin:boolean=true;
  isLogout:boolean=false;

  port='something';

  logInName='admin';

  fruits=['Apple','Mango','Banana','Kiwi','Graps','Watermelon'];

  studentArr: any[] = [ { 
    "id": 1, 
    "name": "aman" 
 }, 
 { 
    "id": 2,
    "name": "sumit" 
 }, 
 { 
    "id": 3, 
    "name": "yash"
 },
 { 
    "id": 4, 
    "name": "rutik" 
 } 
 ]; 
 onAdd(){
  this.studentArr.push({id:5,name:'om'});
 }
 onRemove(){
  let index = this.studentArr.indexOf(this.studentArr);
  this.studentArr.splice(index,1);
 }
}

