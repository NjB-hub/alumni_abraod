import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { APIResponse } from 'src/models/Interfaces';
import { AuthService } from 'src/modules/auth/services/auth.service';
import checkPassword from 'src/modules/validators/checkPassword';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPasswordForm : FormGroup = this.fb.group({ });
  resetPasswordMessage: string = '';
  token: string = '';

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ){ }

  get email(){
    return this.resetPasswordForm.get('email');
  }
  get password(){
    return this.resetPasswordForm.get('password');
  }

  onSubmit(): void {
    var password = this.resetPasswordForm.get('password')!.value;
    
    this.authService.resetPassword(password, this.token)
    .subscribe(
      (res:APIResponse) => {
        this.router.navigate(
          ['/auth/signin'], 
          {
            queryParams: {
              successMessage: 'Your password has been successfully reset.'
            }
          }
        );
      },
      (err:Error) => {
        this.resetPasswordMessage = err.message;
        this.router.navigate(['/auth/resetpassword?token='+this.token]);
       }
    );
  }

  initForm(){
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^.*[~!@#$%^&*|]+.*$")]],
      passwordConfirmation: ['', [Validators.required]]
    },
    {
      validators: [checkPassword]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
     this.token = params['token'];
    })

    this.initForm();
  }

}
