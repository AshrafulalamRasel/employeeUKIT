import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class EmployeeSignupHttp {

  constructor(private http: HttpClient) {
  }

  getDoctorChamberList(): Observable<any> {
    const getDoctorChamberListEndpoint: string = 'http://localhost:33022/employee/employeeList';
    return this.http.get(getDoctorChamberListEndpoint,httpOptions)
      .pipe(map(res => res));
  }

}
