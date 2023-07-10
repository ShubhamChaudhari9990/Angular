import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() parentName = '';

  @Output() name = new EventEmitter<string>();

  addNewName(value: string){
    this.name.emit(value);
  }

}
