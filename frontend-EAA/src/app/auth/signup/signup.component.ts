import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import  checkPassword  from '../../validators/checkPassword';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup = this.fb.group({ });
  signupMessage: string = 'gfhghfsghdg';
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router:Router) { 
    
  }
  get username(){
    return this.signupForm.get('username');
  }
  get password(){
    return this.signupForm.get('password');
  }
  onSubmit(): void {
    var email = this.signupForm.get('email')!.value;
    var password = this.signupForm.get('password')!.value;
    var username = this.signupForm.get('username')!.value;
    this.authService.signUpUser(email,username,password).then(
      () => {this.router.navigate(['/home']);},
      (error) => {
        this.signupMessage = "message d'erreur venant du backend ";
        this.router.navigate(['/signup']);
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
