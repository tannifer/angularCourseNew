import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Router , ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Data to pass around.
  user: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.paramMap.get('user');
  }

}
