import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {


  blue_list=[
    'Հեռուստացույցներ, աուդիո և վիդեոտեխնիկա',
    'Հեռուստացույցներ, աուդիո և վիդեոտեխնիկա',
    'Հեռուստացույցներ, աուդիո և վիդեոտեխնիկա',
    'Կենցաղային տեխնիկա',
    'Խոհանոցային տեխնիկա',
    'Կլիմատիկ տեխնիկա',
    ]
  list = [
    'Մեր մասին',
    'Վաճառասրահներ',
    'Ծառայություններ',
    'Ակցիաներ',
    'Նվեր-քարտ',
    'Ապառիկ',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
