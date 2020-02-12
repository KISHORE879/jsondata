import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
add(a: any,b: any){
  var c:number=Number(a)+Number(b)
  return c;
}
sub(a: any,b: any){
  var c:number=Number(a)-Number(b)
  return c;
}
mul(a: any,b: any){
  var c:number=Number(a)*Number(b)
  return c;
}
div(a: any,b: any){
  var c:number=Number(a)/Number(b)
  return c;
}
}
