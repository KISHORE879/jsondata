import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

getEmployees(){
  return[
    {"empid":1,"empname":"kishore","salary":50000},
    {"empid":2,"empname":"kumar","salary":60000},
    {"empid":3,"empname":"sagar","salary":70000}

  ]
}
}
