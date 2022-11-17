import{Component,Input} from "@angular/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.coomponent.html',
  styleUrls: ['./about.component.css']
})

export class About {
  title : string = 'dsds'
  @Input() name: string | undefined;
  flag:boolean = true
  cvet:string = 'white'
  close(){
this.flag = false
  }
  colors:object = {"background-color": [this.cvet]}
  color(){

  this.colors = {"background-color": [ '#' + Math.floor(Math.random()*16777215).toString(16)]}
    console.log(this.cvet)
  }
  constructor() {

  }
}

