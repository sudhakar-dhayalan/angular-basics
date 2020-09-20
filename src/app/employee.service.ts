import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEmployee} from "./employee";
import 'rxjs';
import {retry} from "rxjs/internal/operators/retry";
import {catchError} from "rxjs/internal/operators/catchError";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  /*getEmployees(): Observable<IEmployee[]> {      //angular 5, but this project is angular 10 - With these Observable it's showing error
    return this.http.get<IEmployee[]>(this._url);
  }*/
  getEmployees() {
    return this.http.get<IEmployee[]>(this._url);
  }

  handleError(error) {
    console.log(error.error.message);
  }
}
