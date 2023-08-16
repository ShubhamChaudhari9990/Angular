import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  toggleChild = false
  toggleParent = false

  name = "Shubham";

  nameList = ['amol','shubham'];
  addItem(name: string){
    this.nameList.push(name);
  }

  showChild(){
    this.toggleChild = !this.toggleChild
  }

  showParent(){
    this.toggleParent = !this.toggleParent
  }

}
