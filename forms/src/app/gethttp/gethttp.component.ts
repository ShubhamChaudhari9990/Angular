import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormService } from '../services/form.service';
@Component({
  selector: 'app-gethttp',
  templateUrl: './gethttp.component.html',
  styleUrls: ['./gethttp.component.css']
})
export class GethttpComponent {

  data :any;
  id = null;
  name = '';
  address = '';

  constructor(private service : FormService){
    
  }
  ngOnInit(){
    this.service.getData().subscribe((res) => {
      this.data = res;
    })
  }

  updateData(id : any,name :any,address : any){
    console.log(name," ",address);
    
    const formData = {
      name : name,
      address : address
    }
    this.service.updateData(id,formData).subscribe((res) => {
      console.log("Update Successfully of record ",id);
      window.location.reload();
    },
    error => {
      console.log(error);
    })
  }

  deleteData(id : any) {
    this.service.deleteData(id).subscribe((res) => {
      console.log("Delete successfully of record ",id);
      window.location.reload();

    },
    error => {
      console.log("error",error); 
    })
  }

  submit(){

    const formData = {
      id : this.id,
      name : this.name,
      address : this.address
    };

    this.service.postData(formData).subscribe((res) => {
      console.log("Post sucessfully",res);
    },
    error => {
      console.log("Error",error);
    })
  }
}
