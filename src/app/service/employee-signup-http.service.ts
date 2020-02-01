import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";
import {EmployeeService} from "./employee.service";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class EmployeeSignupHttp{
  private loginEndPointLocalServer: string =
    'http://localhost:33022/employee/employeeList';

  constructor(private http: HttpClient) {
  }

 public getEmployeeList(): Observable<any> {
    const getDoctorChamberListEndpoint: string =this.loginEndPointLocalServer;
    return this.http.get(this.loginEndPointLocalServer,httpOptions)
      .pipe(map(res => res));
  }


  createEmployee(name: string, email: string, position: string, gender: string): Observable<any> {

 /*   let httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.doctorAuthService.getAuthToken(),
    });*/
    const createAppointmentByPatientEndpoint: string =
      'http://localhost:33022/employee';

    return this.http.post(createAppointmentByPatientEndpoint, {

        'name': name,
        'email': email,
        'position': position,
        'gender': gender
      },
     /* {
        headers: httpHeaders,
        observe: 'response'
      }*/
    );
  }

}
