import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  status: boolean = false;

  numbers = [
    { number: 0, active: false},
    { number: '1/2', active: false},
    { number: 1, active: false},
    { number: 2, active: false},
    { number: 3, active: true},
    { number: 4, active: false},
    { number: 5, active: false},
    { number: 13, active: false},
    { number: 20, active: false},
    { number: 40, active: false},
    { number: 100, active: false}

  ];

  ngOnInit() {
  }

  clickEvent(){
      this.status = !this.status;
  }
}

