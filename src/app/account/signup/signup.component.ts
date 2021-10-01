import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});
  
  constructor() { }

  ngOnInit(): void {
    this.createSignUpForm();
  }
createSignUpForm() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', [Validators.required, this.matchValues('password', 'confirmPassword')])
    })
}
  matchValues(key1: string, key2: string): (AbstractControl : AbstractControl) => ValidationErrors | null {  
    return (control: AbstractControl): ValidationErrors | null => {
      var controls = control?.parent?.controls as AbstractControl[];
      if(control?.parent?.value 
          && controls 
          && controls[key1 as keyof AbstractControl[]]
          && controls[key2 as keyof AbstractControl[]]
        )        
        {
          let control1 = controls[key1 as keyof AbstractControl[]] as FormControl;
          let control2 = controls[key2 as keyof AbstractControl[]] as FormControl;
          if(control1.value !== control2.value)
            return { isMatching: false };   
      } 
      return null;
    };
  }

  onSubmit() {
    console.log("submitted");
  }


}
