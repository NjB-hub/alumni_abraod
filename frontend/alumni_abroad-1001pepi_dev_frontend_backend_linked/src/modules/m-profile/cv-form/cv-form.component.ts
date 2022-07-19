import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      educations: this.formBuilder.group([])
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
  getEducations(): FormGroup{
    return this.userForm.get('educations') as FormGroup;
  }
  onAddExpertise() {
    const newExpertiseControl = this.formBuilder.control(null, Validators.required);
    this.getExpertises().push(newExpertiseControl);
  }
  onAddEducation(){
    const newEducationGroup = this.formBuilder.group({
      diploma: this.formBuilder.control(null, Validators.required ),
      year: this.formBuilder.control(null, Validators.required),
      etablishment: this.formBuilder.control(null, Validators.required)
    })
  }

  

}
