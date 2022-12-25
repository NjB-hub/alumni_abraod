import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id:string = '' //this id variable is an unique key which is used to navigate to a particular profile
  username:string='johnDoe'
  isSameUser:boolean = true
  user:any;
  userProfile:any;
  expertises:string[] = ['leadership', 'communication', 'management']
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const tmpUser:any = localStorage.getItem('user');
    const user = JSON.parse(tmpUser);
    this.user = user;
    this.userProfile = user.userProfile[0];
    this.id = this.route.snapshot.params['id']; // we get the id for doing requests
  }
}
