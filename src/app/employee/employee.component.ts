import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  template:`<h2 align="center">Employee Details</h2>
  
  <table align="center" border=1px solid red>
 <!--{{employees |json}}-->
  <tr>
  <td>Id</td>
  <td>NAME</td>
  <td>SALARY</td>
  </tr>
  <tr *ngFor="let employe of employees">
  <td>{{employe.empid}}</td>
  <td>{{employe.empname}}</td>
  <td>{{employe.salary}}</td>
  </tr>
  </table>`
})
export class EmployeeComponent implements OnInit {
 employees=[];
  constructor(private emp:EmployeeService) { }

  ngOnInit() {
    
  this.employees=this.emp.getEmployees();
  
}


}
