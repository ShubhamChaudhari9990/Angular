import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:3000/posts';

  getData(){
    return this.http.get(this.url);
  }

  postData(data : any){
    return this.http.post(this.url,data);
  }

  updateData(id : any,data : any){
    return this.http.put(this.url+"/"+id,data)
  }

  deleteData(id : any){
    return this.http.delete(this.url+"/"+id);
  }

}
