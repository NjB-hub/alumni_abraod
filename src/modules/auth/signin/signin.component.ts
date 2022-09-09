import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

import { User, APIResponse } from 'src/models/Interfaces';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm : FormGroup = this.fb.group({ });
  submitted = false;
  signinMessage: string = '';
  authMessage: string = '';
  signinSuccessMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private authGuardService : AuthGuardService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ){}

  get email(){
    return this.signinForm.get('email');
  }
 
  get password(){
    return this.signinForm.get('password');
  }

  onSubmit(): void {
    var email = this.signinForm.get('email')!.value;
    var password = this.signinForm.get('password')!.value;
    
    this.authService.signInUser(email,password).subscribe(
      (res:APIResponse) => {
        var user:User = res.data;

        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("token", res.token);

        this.authService.user = user;
        this.router.navigate(['/core']);
      },
      (err:Error) => {
        this.authMessage = err.message;
        this.router.navigate(['/auth/signin']);
      }
    );
  }

  initForm(){
    this.signinForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['successMessage']){
        this.signinSuccessMessage = params['successMessage'];
      }
    })
    
    this.authMessage = this.authGuardService.authMessage;
    this.initForm();
  }

}
