import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-publish-other',
  templateUrl: './publish-other.component.html',
  styleUrls: ['./publish-other.component.scss']
})
export class PublishOtherComponent implements OnInit {

  publishOtherForm : FormGroup = this.fb.group({ });

  @Output() postSent = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private feedService: FeedService, private router:Router){}

  ngOnInit(): void {
    this.initForm();
  }

  get title(){
    return this.publishOtherForm.get('title');
  }

  get description(){
    return this.publishOtherForm.get('description');
  }

  onSubmit(): void {
    var title = this.publishOtherForm.get('title')?.value;
    var description = this.publishOtherForm.get('description')?.value;
    var category:string = "other";

    const tmpUser:any = localStorage.getItem('user');
    const user = JSON.parse(tmpUser);
    var ownerP = user.id;
    var ownerProfile = user.userProfile[0].id;
    
    //requête pour la création du post
    this.feedService.createPost(title, description, category, ownerP, ownerProfile).then(
      (response:any) => {
        
        this.cancel();
        document.getElementById('postOtherButton')?.click();

        this.router.navigate(['/core/feed']);

        var alertToggleButton = document.getElementById("toggleAlertButton");
        alertToggleButton?.click();

        var content:any = document.getElementById('content');
        content.scrollTop = 0;

      },
      (error:any) => {

      }
    );
    
  }

  initForm(){
    this.publishOtherForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  cancel(){
    this.initForm();

    this.feedService.images = [];
    this.feedService.videos = [];
    this.feedService.documents = [];

    this.feedService.emitFiles();
  }

}
