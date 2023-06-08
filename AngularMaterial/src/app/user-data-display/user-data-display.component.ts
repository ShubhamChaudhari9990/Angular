import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PeriodicElement } from '../table/table.component';
import { HttpErrorResponse } from '@angular/common/http';


export interface DataU {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-user-data-display',
  templateUrl: './user-data-display.component.html',
  styleUrls: ['./user-data-display.component.css']
})
export class UserDataDisplayComponent{

  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  user: any =[];
  len: any;
  // dataSource : MatTableDataSource<any> = new MatTableDataSource<any>();
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator : any;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private userData: UserDataService) {
    this.userData.users().subscribe((data1) => {
      this.user = data1;
      this.len = this.user.length;
      console.log(this.user);
      // console.log(this.len);
      this.dataSource = new MatTableDataSource(this.user); 
      this.call();
      // this.dataSource.paginator = this.paginator;    
      // this.dataSource.sort = this.sort;

      console.log(this.dataSource);
     
    },
      (err: HttpErrorResponse) => {
        console.log(err);
      });
  }

  call() {
    this.dataSource.paginator = this.paginator;    
    this.dataSource.sort = this.sort;
  }
}