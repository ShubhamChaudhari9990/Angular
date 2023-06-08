import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';

// @Injectable()
// export class MyCustomPaginatorIntl implements MatPaginatorIntl {
//   changes = new Subject<void>();

//   // For internationalization, the `$localize` function from
//   // the `@angular/localize` package can be used.
//   firstPageLabel = $localize`First page`;
//   itemsPerPageLabel = $localize`Items per page:`;
//   lastPageLabel = $localize`Last page`;

//   // You can set labels to an arbitrary string too, or dynamically compute
//   // it through other third-party internationalization libraries.
//   nextPageLabel = 'Next page';
//   previousPageLabel = 'Previous page';

//   getRangeLabel(page: number, pageSize: number, length: number): string {
//     if (length === 0) {
//       return $localize`Page 1 of 1`;
//     }
//     const amountPages = Math.ceil(length / pageSize);
//     return $localize`Page ${page + 1} of ${amountPages}`;
//   }
// }

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

}


