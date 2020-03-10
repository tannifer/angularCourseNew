import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-val',
  templateUrl: './val.component.html',
  styleUrls: ['./val.component.css']
})
export class ValComponent implements OnInit {

  user

  constructor() {
    this.user = {name:''}
   }

  ngOnInit(): void {
  }

}
