import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor() { }

  onEnrollClick(title:string){
    alert('enroll successfully '+title+' ...!');
  }
}
