import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APIResponse, Profile, User } from 'src/models/Interfaces';
import { AuthService } from 'src/modules/auth/services/auth.service';

import { ProfileService } from '../services/profile-service.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  profileForm: FormGroup = this.formBuilder.group({}) ;
  user:User | null = this.authService.user;
  userProfile:Profile = this.user!.userProfile[0];

  constructor(
    private formBuilder: FormBuilder, 
    private profileService:ProfileService, 
    private router:Router,
    private authService: AuthService,
    private toastr: ToastrService,
  ) {}

  initForm() {
    this.profileForm = this.formBuilder.group({
      firstName: [this.userProfile.surname],
      lastName: [this.userProfile.name],
      email: [this.user!.email, [Validators.email]],
      username: [this.user!.username],
      birth: [this.userProfile.dateOfBirth],
      gender: [this.userProfile.gender],
      phone: [this.userProfile.phone],
      position: [this.userProfile.position],
      address: [this.userProfile.address]
    });
  }

  get email(){
    return this.profileForm.get('email');
  }

  onSubmitForm() {
    const formValue:any = this.profileForm.value;

    var email:string = formValue.email as string;
    var username:string = formValue.username as string;

    var name:string = formValue.lastName as string;
    var surname:string = formValue.firstName as string;
    var gender:string = formValue.gender as string;
    var dateOfBirth:string = formValue.birth as string;
    var phone:string = formValue.phone as string;
    var address:string = formValue.address as string;
    var position:string = formValue.position as string;

    this.profileService.updateProfile({name, surname, gender, dateOfBirth, phone, address, position})
    .subscribe(
      (res:Profile) => {
        var nbUserPatchData:number = 0;
        
        if(email !== this.user!.email) nbUserPatchData++;
        if(username !== this.user!.username) nbUserPatchData++;
        
        if(nbUserPatchData === 0){
          //if the user's information have not been changed
          this.profileService.getUser(this.user!.id)
          .subscribe(
            (res:APIResponse) => {
              this.updateDone(res.data);
            },
            (err:Error) => {

            }
          )
        }else{
          //some data of the user have been changed
          this.profileService.updateUser({email, username})
          .subscribe(
            (res:User) => {
              this.updateDone(res);
            },
            (err:Error) => {

            }
          )
        }
      },
      (err:Error) => {

      }
    )
  }

  updateDone(user:User){
    localStorage.setItem("user", JSON.stringify(user));
    this.authService.user = user;
    this.router.navigate(['/core/profile/viewprofile']);
    this.toastr.success("Profile upadated!");
  }

  ngOnInit(): void {

    this.initForm();
  }

  getHobbies(): FormArray {
    return this.profileForm.get('hobbies') as FormArray;
  }
  onAddHobby() {
    const newHobbyControl = this.formBuilder.control(null, Validators.required);
    this.getHobbies().push(newHobbyControl);
  }
}
