import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() greet: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  doGreet(){
    this.greet.emit('Hello');
  }

  ngOnInit(): void {
  }

}
