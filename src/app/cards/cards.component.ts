import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Icard} from "../../models";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent {

  @Input() item: Icard;

  @Output() myClick:EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }

 public onLIke(){
   this.myClick.emit(10)
 }

}
