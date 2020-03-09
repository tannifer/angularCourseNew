import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-item-renderer',
  templateUrl: './item-renderer.component.html',
  styleUrls: ['./item-renderer.component.css']
})
export class ItemRendererComponent implements OnInit {

@Input() whichItem;
@Output() purchaseEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  makePurchase(){
    // emit an event
    this.purchaseEvent.emit(this.whichItem);
  }

}
