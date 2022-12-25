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
      location: [this.userProfile.location],
      phone: [this.userProfile.phone],
      position: [this.userProfile.position],
      dept: [this.userProfile.dept],
      year:[this.userProfile.year],
      bio:[this.userProfile.bio],
      expertises: this.formBuilder.array([]),
      educations: this.formBuilder.array([]),
      experiences: this.formBuilder.array([]),
      certifications: this.formBuilder.array([])
    });
  }
 
  //Getters

  get email(){
    return this.profileForm.get('email');
  }

  getExpertises(): FormArray {
    return this.profileForm.get('expertises') as FormArray;
  }
  getEducations(): FormArray{
    return this.profileForm.get('educations') as FormArray;
  }
  getExperiences(): FormArray{
    return this.profileForm.get('experiences') as FormArray;
  }

  getCertifications():FormArray{
    return this.profileForm.get('certifications') as FormArray
  }

  onAddExpertise() {
    const newExpertiseControl = this.formBuilder.control('expertise', Validators.required);
    this.getExpertises().push(newExpertiseControl);
  }
  onAddEducation(){
    const diploma = this.formBuilder.control('diploma',Validators.required)
    const from = this.formBuilder.control('from',Validators.required)
    const to = this.formBuilder.control('to',Validators.required)
    const etablishment = this.formBuilder.control('etablishment',Validators.required)
    const location = this.formBuilder.control('location',Validators.required)
    this.getEducations().push(etablishment)
    this.getEducations().push(diploma)
    this.getEducations().push(location)
    this.getEducations().push(from)
    this.getEducations().push(to)
  }

  onAddExperience(){
    const position = this.formBuilder.control('position',Validators.required)
    const from = this.formBuilder.control('from',Validators.required)
    const to = this.formBuilder.control('to',Validators.required)
    const location = this.formBuilder.control('location',Validators.required)
    const company = this.formBuilder.control('company',Validators.required)
    const description = this.formBuilder.control('description(optional)')
    this.getExperiences().push(position)
    this.getExperiences().push(company)
    this.getExperiences().push(location)
    this.getExperiences().push(from)
    this.getExperiences().push(to)
    this.getExperiences().push(description)
  }

  onAddCertification(){
    const certificationName = this.formBuilder.control("certification's name",Validators.required)
    const deliveryDate = this.formBuilder.control('delivery date',Validators.required)
    const etablishment = this.formBuilder.control('Organization',Validators.required)
    this.getCertifications().push(certificationName)
    this.getCertifications().push(deliveryDate)
    this.getCertifications().push(etablishment)
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
    data["expertises"] = formValue.expertise ? formValue['expertises'] : []
    data["experiences"] = formValue.experience ? formValue['experiences'] : []
    data["educations"] = formValue.education ? formValue['educations'] : []
    data["certifications"] = formValue.certification ? formValue['certifications'] : []

    console.log(formValue['expertises'])//to see if formarray works

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
