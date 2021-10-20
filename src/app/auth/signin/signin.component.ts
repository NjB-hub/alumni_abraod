import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm : FormGroup = this.fb.group({ });
  submitted = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router:Router) { 

  }
  get f(): {[key: string]: AbstractControl}{
    return this.signinForm.controls;
  }
  onSubmit(): void {
    var username = this.signinForm.get('username')!.value;
    var password = this.signinForm.get('password')!.value;
    this.authService.signInUser(username,password).then(
      () => {},
      (error) => {}
    );
    
  }
  initForm(){
    this.signinForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    this.initForm();
  }

}
