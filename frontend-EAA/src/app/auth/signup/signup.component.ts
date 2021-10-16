import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import  Validation  from '../../shared/validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup = this.fb.group({ });
  submitted = false;
  
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router:Router) { 
    
  }
  get f(): {[key: string]: AbstractControl}{
    return this.signupForm.controls;
  }
  onSubmit(): void {
    var email = this.signupForm.get('email')!.value;
    var password = this.signupForm.get('password')!.value;
    var username = this.signupForm.get('username')!.value;
    this.authService.signUpUser(email,username,password).then(
      () => {this.router.navigate(['/home']);},
      (error) => {}
    );
    
  }
  initForm(){
    this.signupForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [Validators.required]]
    },
    {
      validators: [Validation.match('password', 'passwordConfirmation')]
    });
  }
  ngOnInit(): void {
    this.initForm();
  }
  

  
}
