import { Component, OnInit } from '@angular/core';
import { selectionSort } from 'app/Algorithms/Selection';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css'],
})
export class SortingComponent implements OnInit {
  arr: number[] = [];
  arrSize: number = 0;
  PRIMARY_COLOR = '#33DDFF';
  SECONDRY_COLOR = '#CA33FF';
  ANIMATION_SPEED_MS = 20;

  constructor() {}

  ngOnInit(): void {
    this.arrSize = 20;
    this.resetArray();
  }
  resetArray() {
      for (let i = 0; i < this.arrSize; i++) {
      this.arr.push(this.randomIntFromInterval(50, 400));
    }
  }
  OnSelectionSortClick() {
    this.selection();
  }
  randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  selection() {
    let visuals = [];
    let tempArr = this.arr.slice(); 
    let arrayBars = document.getElementsByClassName('bar');

    visuals = selectionSort(tempArr, this.arrSize);
    for(let i = 0; i < visuals.length; i++) {
      const [act, first, second, firstHeight, secondHeight] = visuals[i].slice();
      let firstBar = <HTMLElement>arrayBars[Number(first)];
      let secondBar = <HTMLElement>arrayBars[Number(second)];

      if(act=="comparing")
      { 
        setTimeout(() => {
          firstBar.style.backgroundColor = this.SECONDRY_COLOR;
          secondBar.style.backgroundColor = this.SECONDRY_COLOR;
        }, i * this.ANIMATION_SPEED_MS);   
      }
      else if(act=="compared")
      { 
        setTimeout(() => {
          firstBar.style.backgroundColor = this.PRIMARY_COLOR;
          secondBar.style.backgroundColor = this.PRIMARY_COLOR;
        }, i * this.ANIMATION_SPEED_MS);  
      }
      else if(act=="swap")
      {
        setTimeout(() => {

        firstBar.style.backgroundColor = this.PRIMARY_COLOR;
        secondBar.style.backgroundColor = this.PRIMARY_COLOR;

        firstBar.style.height = `${secondHeight}px`; 
        secondBar.style.height = `${firstHeight}px`;
      }, i * this.ANIMATION_SPEED_MS);  
        //firstBar.style.height = `${}px`
      }
    }
  }
}
