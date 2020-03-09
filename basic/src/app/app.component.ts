import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Decalre data models
  title = 'is it coffee yet?';
  flavour = 'LATTIE';
  cookieFlag = false;
  products = [{name:'Pots',price:3.99},
              {name:'Pans',price:2.99},
              {name:'Cups',price:1.99}
            ];
  imageSource='https://via.placeholder.com/150';
// decalre methods (functions)

handleCookies() {
  console.log('button clicked');
  this.cookieFlag = true;
}

}

