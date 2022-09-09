import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import  checkPassword  from '../../validators/checkPassword';
import { Router } from '@angular/router';
import { APIResponse } from 'src/models/Interfaces';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup = this.fb.group({ });
  signupMessage: string = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router:Router,
    private toastrService:ToastrService,
  ) {}

  get email(){
    return this.signupForm.get('email');
  }
  get username(){
    return this.signupForm.get('username');
  }
  get password(){
    return this.signupForm.get('password');
  }

  onSubmit(): void {
    var email:string = this.signupForm.get('email')!.value;
    var password:string = this.signupForm.get('password')!.value;
    var username:string = this.signupForm.get('username')!.value;
    
    this.authService.signUpUser({email,username,password})
    .subscribe(
      (res:APIResponse) => {
        this.router.navigate(
          ['/auth/signin'], 
          {
            queryParams: {
              successMessage: 'Your account was created. Check your mails to confirm your email before logging in.'
            }
          }
        );
      },
      (err:Error) => {
        if(err.message == environment.OFFLINE_MESSAGE_ERROR){
          this.toastrService.error(environment.OFFLINE_MESSAGE_ERROR);
        }else{
          this.signupMessage = err.message;
        }
        
        this.router.navigate(['/auth/signup']);
      }
    );
  }

  initForm(){
    this.signupForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^.*[~!@#$%^&*|]+.*$")]],
      passwordConfirmation: ['', [Validators.required]]
    },
    {
      validators: [checkPassword]
    });
  }

  ngOnInit(): void {
    this.initForm();
  }
}
