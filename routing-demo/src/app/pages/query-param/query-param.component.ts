import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param',
  templateUrl: './query-param.component.html',
  styleUrls: ['./query-param.component.css']
})
export class QueryParamComponent {

  id : any;
  // name :any;

  constructor(private route:ActivatedRoute){
    this.route.queryParams.subscribe((res : any) => {
      this.id = res.id;
      // this.name = res.name;
    })
  }
}
