import { Component, OnInit } from '@angular/core';
import { SignUpModel } from './sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpModel: SignUpModel = new SignUpModel("", "", "", "");
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    // form submitted
    console.log(this.signUpModel);
  }

}
