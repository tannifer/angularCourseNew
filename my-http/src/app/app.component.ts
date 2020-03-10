import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties of this component
  title = 'my-http';
  recievedData = null;
  whichUser =1;
  retrievedUser;

constructor (private dataService: DataService) {}

ngOnInit() {
  this.getUsers();
}

// event Listener call-back handler functions


getOneUser() {
  // make a parameterised call to the service.
  this.dataService.retrieveSingleUser(this.whichUser).subscribe((data)=>{this.retrievedUser = data});

}

getUsers() {
  this.dataService.getData().subscribe((data)=>{
    this.recievedData =data;
  });
  
}

}