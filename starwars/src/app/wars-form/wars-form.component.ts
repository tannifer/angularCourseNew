import { Component, OnInit } from '@angular/core';
import { SwapiService } from './../swapi.service';

@Component({
  selector: 'app-wars-form',
  templateUrl: './wars-form.component.html',
  styleUrls: ['./wars-form.component.css']
})
export class WarsFormComponent implements OnInit {


  stype: string;
  id: string;
  recievedData = null;
  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
  }


  getWar() {
    this.swapiService.getData(this.stype,this.id).subscribe((data)=>{
      this.recievedData =data;
    });
  }

}
