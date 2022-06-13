import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  count: number = 0

  decrementCounter(){
    this.count--;
  }

  incrementCounter(){
    this.count++;
  }

  ngOnInit(): void {
  }

}
