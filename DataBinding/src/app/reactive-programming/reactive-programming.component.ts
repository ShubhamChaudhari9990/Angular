import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax'; 
import { from, filter, map, fromEvent } from 'rxjs';

@Component({
  selector: 'app-reactive-programming',
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.css']
})
export class ReactiveProgrammingComponent implements OnInit {

  title = 'Reactive programming concept'; 
   numbers : number[] = []; 
   val1 : number = 0; 
   filteredNumbers : number[] = []; 
   val2 : number = 0; 
   processedNumbers : number[] = []; 
   val3 : number = 0; 
   apiMessage : string | undefined; 
   counter : number = 0; 
   ngOnInit() { 
      // Observable stream of data Observable<number>
      // const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 
      // const numbers$ = range(1,10); 
      const numbers$ = from([1,2,3,4,5,6,7,8,9,10]); 
      // observer 
      const observer = { 
         next: (num: number) => {this.numbers.push(num); this.val1 += num }, 
         error: (err: any) => console.log(err), 
         complete: () => console.log("Observation completed") 
      }; 
      numbers$.subscribe(observer); 
      const filterFn = filter( (num : number) => num > 5 ); 
      const filteredNumbers = filterFn(numbers$); 
      filteredNumbers.subscribe( (num : number) => {this.filteredNumbers.push(num); this.val2 += num } ); 
      const mapFn = map( (num : number) => num + num ); 
      const processedNumbers$ = numbers$.pipe(filterFn, mapFn); 
      processedNumbers$.subscribe( (num : number) => {this.processedNumbers.push(num); this.val3 += num } ); 
      const api$ = ajax({ 
         url: 'https://httpbin.org/delay/1', 
         method: 'POST', 
         headers: {'Content-Type': 'application/text' }, 
         body: "Hello" 
      }); 
   }

}
