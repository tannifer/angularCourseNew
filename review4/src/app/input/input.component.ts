import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  //declare an input

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
