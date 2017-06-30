import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Fleur } from '../fleur';

@Component({
  selector: 'app-fleur-list',
  templateUrl: './fleur-list.component.html',
  styleUrls: ['./fleur-list.component.css']
})
export class FleurListComponent implements OnInit {

  @Input() fleurs;
  @Output() destroyFleurEvent = new EventEmitter();
  @Output() updateFleurEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteFleur(fleur: Fleur){
    this.destroyFleurEvent.emit(fleur);
  }

  updateFleur(fleurs: any){
    this.updateFleurEvent.emit(fleurs);
  }

}
