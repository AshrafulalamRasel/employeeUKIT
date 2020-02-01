import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmployeeSignupHttp} from "../service/employee-signup-http.service";
import {EmployeeSignups} from "../modal/employee-signups";



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private employeeSignupHttp:EmployeeSignupHttp) {
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

    this.employeeSignupHttp.getEmployeeList().subscribe(res => {
      /*   this.timeSlotArray = [];
         res.forEach(freeSlot => {
           this.timeSlotArray.push(freeSlot.startDateTime);
         });*/
      console.log(res);
    },
      error => {
        if (error.status === 500) {

        }
      });
  }

  createem(){

    const  employeeSignups:EmployeeSignups = new EmployeeSignups();
    employeeSignups.name=this.signUpForm.controls['name'].value;
    employeeSignups.email=this.signUpForm.controls['email'].value;
    employeeSignups.position=this.signUpForm.controls['position'].value;
    employeeSignups.gender=this.signUpForm.controls['gender'].value;

    this.employeeSignupHttp.createEmployee(
      employeeSignups.name,
      employeeSignups.email,
      employeeSignups.position,
      employeeSignups.gender).subscribe(res => {

    }, error => {
      if (error.status === 400) {

      }
    });
  }


  onSubmit() {
    console.log("hi succes!")
    this.createem();
  }
}
