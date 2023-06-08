import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CardComponent } from 'src/app/card/card.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() ELEMENT_DATA: [] = [];
  number:number=0;
  name:string='';
  weight:number=0;
  symbol:string='';
  
  constructor(private dialogref: MatDialogRef<EditComponent>){
  }

  updateItem() {
    console.log(this.ELEMENT_DATA);
    
  }

}
