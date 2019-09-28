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
    { number: 1, active: false},
    { number: 4, active: false},
    { number: 7, active: true},
    { number: 20, active: false},
    { number: 80, active: false},
    { number: 90, active: false},
    { number: 70, active: false}

  ];

  ngOnInit() {
  }

  clickEvent(){
      this.status = !this.status;
  }
}

