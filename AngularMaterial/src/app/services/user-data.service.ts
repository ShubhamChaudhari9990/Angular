import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const url ='https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpclient : HttpClient) { }

  users(){
    return this.httpclient.get(url);
  }
}
