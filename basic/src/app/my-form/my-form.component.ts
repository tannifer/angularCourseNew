import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

//Class properties

fbname = 'mickeymouse';
age =42;
fbURL;


  constructor() { }

  ngOnInit(): void {
  }

getImage() {
  this.fbURL = `https://graph.facebook.com/${this.fbname}/picture?type=normal`;
}

}
