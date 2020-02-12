import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KisoreComponent } from './kisore/kisore.component';
import { TestComponent } from 'src/Test.component';
import { ImgComponent } from 'src/Img.component';
import { GetsureComponentComponent } from './getsure-component/getsure-component.component';
import { KkDirective } from './kk.directive';
import { CalcComponent } from './calc/calc.component';
import { EmployeeComponent } from './employee/employee.component';
import { ParentComponent } from './employee/parent.component';
import { ChildComponent } from 'child.component';






@NgModule({
  declarations: [
    AppComponent,
    KisoreComponent,
    TestComponent,
    ImgComponent,
    GetsureComponentComponent,
    KkDirective,
    CalcComponent,
    EmployeeComponent,
    ParentComponent,
    ChildComponent,
   
      
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
