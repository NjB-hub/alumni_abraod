import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APIResponse } from 'src/models/Interfaces';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  token:string;

  constructor(private activatedRoute:ActivatedRoute, private authService:AuthService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
      this.token = params.token;
      if(this.token){
        //send a request to the api to confirm the email
        this.authService.confirmEmail(this.token)
        .subscribe(
          (res:APIResponse) => {
            this.toastrService.success("Email verified!")
          },
          (err:Error) => {
            this.toastrService.error(err.message,'', {timeOut: 3000});
          }
        )
      }
    })
  }
}