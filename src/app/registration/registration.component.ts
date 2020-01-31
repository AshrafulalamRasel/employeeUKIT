import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmployeeSignupHttp} from "../service/employee-signup-http.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private employeeSignupHttp: EmployeeSignupHttp) {
  }


  get f() {
    return this.signUpForm.controls;
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group(
      {

        email: [''],
        name: [''],
        position: [''],
        gender: [''],


      }
    );
  }

  fetchFreeTimeSlots() {

    this.employeeSignupHttp.getDoctorChamberList().subscribe(res => {
      /*   this.timeSlotArray = [];
         res.forEach(freeSlot => {
           this.timeSlotArray.push(freeSlot.startDateTime);
         });*/
      console.log(res);
    });
  }


  onSubmit() {
    console.log("hi succes!")
    this.fetchFreeTimeSlots();
  }
}
