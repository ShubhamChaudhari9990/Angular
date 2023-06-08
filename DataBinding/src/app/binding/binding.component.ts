import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  d:any;

  ngOnInit() {
    this.d = setInterval(() => {
      this.d = new Date();
    }, 1000);
  }

  name = 'Interpolation shubham';
  property = 'Property Binding Works!...'
  uname: any='shubham';
  showData(){
    alert("Button clicked \"Event Binding\" Works!..");
  }
}
