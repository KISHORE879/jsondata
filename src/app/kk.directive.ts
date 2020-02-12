import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appKk]'
})
export class KkDirective {

  constructor(private e1:ElementRef,private renderer:Renderer) 
  {
    renderer.setElementStyle(e1.nativeElement,'color','red');
   }

}
