import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-car',
  styleUrl: './car.css',
  templateUrl: './car.html',
})
export class Car {


  @Input() carOpen = false;
  @Output() closeCar = new EventEmitter<void>();




}
