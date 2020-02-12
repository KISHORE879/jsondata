import { Component } from "@angular/core";

@Component({
    selector:"parent",
    template:`<h1>parent component</h1>
    <child [uname]="username"></child>`
})
export class ParentComponent{
    username:string="welcome google"
}