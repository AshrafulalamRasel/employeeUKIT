import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export abstract class EmployeeService {
  abstract getEmployeeList(): Observable<any>;
}
