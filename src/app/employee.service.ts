import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {id: 1, name: "abc", age: 20},
      {id: 2, name: "def", age: 24}
    ];
  }
}
