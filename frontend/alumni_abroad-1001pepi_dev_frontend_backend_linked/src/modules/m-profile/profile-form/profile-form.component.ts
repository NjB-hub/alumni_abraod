import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProfileService } from '../services/profile-service.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  profileForm: FormGroup = this.formBuilder.group({}) ;
  tmpUser:any = localStorage.getItem('user');
  user:any = JSON.parse(this.tmpUser);
  userProfile:any = this.user.userProfile[0];

  constructor(private formBuilder: FormBuilder, private profileService:ProfileService, private router:Router) {}

  initForm() {
    this.profileForm = this.formBuilder.group({
      firstName: [this.userProfile.surname],
      lastName: [this.userProfile.name],
      email: [this.user.email, [Validators.email]],
      username: [this.user.username],
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
    const formValue = this.profileForm.value;
    const data:any = {};
    
    data["name"] = formValue.lastName;
    data["surname"] = formValue.firstName;
    data["gender"] = formValue.gender;
    data["dateOfBirth"] = formValue.birth;
    data["phone"] = formValue.phone;
    data["address"] = formValue.address;
    data["position"] = formValue.position;

    this.profileService.updateProfile(data, this.profileService.currentUserProfile.id).then(
      (response:any) => {
  
        const userPatchData:any = {};
        
        if(formValue.email !== this.user.email) userPatchData["email"] = formValue.email;
        if(formValue.username !== this.user.username) userPatchData["username"] = formValue.username;
        
        if(Object.keys(userPatchData).length === 0){
          //if the user's information have not been changed

          this.profileService.getUser(this.profileService.currentUser.id).then(
            (response:any) => {
              localStorage.setItem('user', JSON.stringify(response.data));
              this.profileService.getCurrentProfileFromLocalStorage();
              this.router.navigate(['/core/profile/viewprofile'])
            },
            (error:any) => {

            }
          )
        }else{
          this.profileService.updateUser(userPatchData, this.profileService.currentUser.id).then(
            (response:any) => {
              this.profileService.getUser(this.profileService.currentUser.id).then(
                (response:any) => {
                  localStorage.setItem('user', JSON.stringify(response.data));
                  this.profileService.getCurrentProfileFromLocalStorage();
                  this.router.navigate(['/core/profile/viewprofile'])
                },
                (error:any) => {

                }
              )
            },
            (error:any) => {

            }
          )
        }
      },
      (error:any) => {

      }
    )
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
