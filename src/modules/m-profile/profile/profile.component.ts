import { Component, OnInit } from '@angular/core';
import { Profile, User } from 'src/models/Interfaces';
import { AuthService } from 'src/modules/auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:User | null;
  userProfile:Profile;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.userProfile = this.user!.userProfile[0];
  }
}
