import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  num = [1,2,3,4,56,];
  amt: number=2;
  total:any;
  convert(){
    this.total = this.amt*82.86
    console.log(this.total);
    
  }
}
