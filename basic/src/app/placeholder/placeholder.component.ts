import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  width=0;
  height=0;
  imageURL;
  urlTypes =  [{name:'Kitten',dest:'https://placekitten.com/'},
              {name:'Beard',dest:'https://placebeard.it/'},
              {name:'cage',dest:'https://www.placecage.com/'}
];
  imgSrc;

  constructor() { }

  ngOnInit(): void {
  }

  getKitten() {
    this.imageURL = `${this.imgSrc}/${this.width}/${this.height}`;
  }

}
