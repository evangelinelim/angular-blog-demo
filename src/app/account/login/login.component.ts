import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.createLoginForm();
  }

createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required
        , Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
      ]),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log("submitted");
  }
}
