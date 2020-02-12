import { Input, Component } from "@angular/core";
@Component({
    selector:'child',
    template:`<h2>child component-{{uname}}</h2>
    `

})
export class ChildComponent{
    @Input()
    uname:string;
}