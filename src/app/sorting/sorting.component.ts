import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {
  
  arr:number[] = [];
  arrSize:number = 0;  
  constructor() {
     this.arrSize = 100; 
      this.resetArray();
   }

  ngOnInit(): void {
  }
  resetArray() {
    for(let i=0;i<this.arrSize;i++)
    {
       this.arr.push(this.randomIntFromInterval(50,400))
    }
  }
  
   randomIntFromInterval(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
 

}
