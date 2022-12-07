import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userName:string='johnDoe'
  isSameUser:boolean = true
  user:any;
  userProfile:any;

  constructor() { }

  ngOnInit(): void {
    const tmpUser:any = localStorage.getItem('user');
    const user = JSON.parse(tmpUser);
    this.user = user;
    this.userProfile = user.userProfile[0];
  }
}
