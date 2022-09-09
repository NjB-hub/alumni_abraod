import { Component, HostListener, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { APIResponse } from 'src/models/Interfaces';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})



export class ForgotPasswordComponent implements OnInit {
  onMobile:boolean = false;


  @HostListener('window:resize')
  onResize(){
    if(window.innerWidth < 992){
      this.onMobile = true;
    } else{
      this.onMobile = false;
    }
  }
  forgotPasswordForm : FormGroup = this.fb.group({ });
  
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router:Router
  ){ }

  get f(): {[key: string]: AbstractControl}{
    return this.forgotPasswordForm.controls;
  }
    
  initForm(){
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]]
    });
  }

  onSubmit(): void {
    var email:string = this.forgotPasswordForm.get('email')!.value;

    this.authService.forgotPassword(email)
    .subscribe(
      (res:APIResponse) => {
        this.router.navigate(['/auth/backuppassword']);
      },
      (err:Error) => {
        this.router.navigate(['/auth/backuppassword']);
      }
    );
  }

    ngOnInit(): void {
      this.onResize()
      this.initForm();
    }

}
