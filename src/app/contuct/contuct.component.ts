import { Component} from '@angular/core';

@Component({
  selector: 'app-contuct',
  templateUrl: './contuct.component.html',
  styleUrls: ['./contuct.component.css']
})
export class ContuctComponent {
title:string = 'contact'
name:string = 'homaren'
list:string = 'heisminkjn'

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
  constructor() {
  }
}


