import { Component, OnInit } from '@angular/core';
import { SwapiService } from './../swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wars-info',
  templateUrl: './wars-info.component.html',
  styleUrls: ['./wars-info.component.css']
})
export class WarsInfoComponent implements OnInit {

  stype: string = 'people';
  id: string ='0';
  recievedData = null;

  constructor(private swapiService: SwapiService,private root: ActivatedRoute) { }




  ngOnInit(): void {
    this.id = this.root.snapshot.paramMap.get('id');
    this.swapiService.getData(this.stype,this.id).subscribe((data)=>{this.recievedData =data});
  }

  ngOnChange(): void {
    this.id = this.root.snapshot.paramMap.get('id');
    this.swapiService.getData(this.stype,this.id).subscribe((data)=>{this.recievedData =data});
  }

}
