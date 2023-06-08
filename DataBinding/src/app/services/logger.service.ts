import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logMessage(name:string,status:string){
    console.log('a new user '+name+' and his status '+status+' added..!');
    
  }

}
