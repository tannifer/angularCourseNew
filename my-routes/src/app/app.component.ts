import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-routes';

  constructor(private router: Router) {}

  gotoPage(url,user) {
    this.router.navigate([url,user]).then((e) => {
      if (e) {
        console.log("Navigation is sucessful");
      }
      else {
        console.log("Navigation Failed!!!");
      }

    });
  }

}
