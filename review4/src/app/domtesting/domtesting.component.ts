import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domtesting',
  templateUrl: './domtesting.component.html',
  styleUrls: ['./domtesting.component.css']
})
export class DomTestingComponent implements OnInit {

  isVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
