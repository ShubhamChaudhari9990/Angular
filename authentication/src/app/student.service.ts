import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
// import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private af: AngularFirestore) { }

  getStudList(){
    return this.af.collection('student').snapshotChanges();
  }

  // createStudent(student:Student){
  //   return new Promise<any>((resolve,reject) => {
  //     this.af.collection('student').add(student).then(res => { console.log(res)},error => reject(error))
  //   });
  // }

}
