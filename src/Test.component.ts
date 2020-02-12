import { Component } from "@angular/core";

@Component({
    selector:"testing",
    template:`<h1>my name is:{{name}} <br>  age is:{{age}}</h1>`,
    styles:[`h1{color:blue }`]
})
export class TestComponent{
    name:string="kishore"
    age:number=25;
}