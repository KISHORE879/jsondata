import { Component } from '@angular/core';

@Component({
  selector: 'app-getsure-component',
  template: `<h2>user name:<input type="text"#uname><br/><br/><button (click)="myFunc(uname.value)">click here</button></h2>`,
  styleUrls: ['./getsure-component.component.css']
})
export class GetsureComponentComponent  {
  myFunc(x:any){
    alert(x)
  }
  

  

}
