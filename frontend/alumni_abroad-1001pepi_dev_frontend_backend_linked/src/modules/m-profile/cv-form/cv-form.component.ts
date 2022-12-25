import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {
  userForm: FormGroup = this.formBuilder.group({}) ;
  constructor(private formBuilder: FormBuilder) {

   }

   initForm() {
    this.userForm = this.formBuilder.group({
      expertises: this.formBuilder.array([]),
      educations: this.formBuilder.array([]),
      experiences: this.formBuilder.array([])
    });
  }
  onSubmitForm() {
    const formValue = this.userForm.value;
  }
  ngOnInit(): void {
    this.initForm();
  }
  getExpertises(): FormArray {
    return this.userForm.get('expertises') as FormArray;
  }
  getEducations(): FormArray{
    return this.userForm.get('educations') as FormArray;
  }
  getExperiences(): FormArray{
    return this.userForm.get('experiences') as FormArray;
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
  

}
