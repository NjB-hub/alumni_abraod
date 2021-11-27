import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-publish-offer',
  templateUrl: './publish-offer.component.html',
  styleUrls: ['./publish-offer.component.scss']
})
export class PublishOfferComponent implements OnInit {
  pubOfferForm : FormGroup = this.fb.group({ });
  constructor(private fb: FormBuilder) { 

}

  ngOnInit(): void {
  }
  get title(){
    return this.pubOfferForm.get('title');
  }
  get password(){
    return this.pubOfferForm.get('description');
  }
  onSubmit(): void {
    var title = this.pubOfferForm.get('title')!.value;
    var description = this.pubOfferForm.get('description')!.value;
    
  }
}
