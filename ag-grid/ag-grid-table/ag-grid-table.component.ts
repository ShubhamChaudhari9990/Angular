import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrls: ['./ag-grid-table.component.css']
})
export class AgGridTableComponent {

  constructor(private http : HttpClient){
    this.rowData$ = http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  // public rowData : any[] = [
  //   { name : 'aman', address : 'mp', phoneNumber : 1234567890 },
  //   { name : 'veer', address : 'ts', phoneNumber : 4567890923 },
  //   { name : 'team', address : 'kl', phoneNumber : 9876543213 },
  //   { name : 'abhi', address : 'up', phoneNumber : 9987654321 }   
  // ];
  public rowData$ : Observable<any[]>;

  columnDef : any[] = [
    { field : 'make', cellRenderer : MycomponentComponent },
    { field : 'model' },
    { field : 'price' }
  ];

  defaultColDef: ColDef ={
    sortable : true, filter : true
  }

  @ViewChild(AgGridAngular) agGrid !: AgGridAngular;

  clear(){
    this.agGrid.api.deselectAll();
  }
  
}
