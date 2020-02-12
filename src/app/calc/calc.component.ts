import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent{
sum:any;
  constructor(public x:CalculatorService) { }
myadd(a: any,b: any){
this.sum=this.x.add(a,b);

}
mysub(a: any,b: any){
  this.sum=this.x.sub(a,b);
}  
  mymul(a: any,b: any){
    this.sum=this.x.mul(a,b);
  }
mydiv(a: any,b: any){
  this.sum=this.x.div(a,b);
}
}
