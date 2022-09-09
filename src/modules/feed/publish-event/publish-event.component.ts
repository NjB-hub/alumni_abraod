import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APIResponse } from 'src/models/Interfaces';
import { AuthService } from 'src/modules/auth/services/auth.service';

import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-publish-event',
  templateUrl: './publish-event.component.html',
  styleUrls: ['./publish-event.component.scss']
})
export class PublishEventComponent implements OnInit {

  publishEventForm : FormGroup = this.fb.group({ });

  @Output() postSent = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder, 
    private feedService: FeedService, 
    private router:Router,
    private authService:AuthService,
    private toastrService:ToastrService,
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  get title(){
    return this.publishEventForm.get('title');
  }
  get place(){
    return this.publishEventForm.get('place');
  }
  get date(){
    return this.publishEventForm.get('date');
  }
  get start(){
    return this.publishEventForm.get('start');
  }
  get end(){
    return this.publishEventForm.get('end');
  }
  get description(){
    return this.publishEventForm.get('description');
  }

  onSubmit(): void {
    var title:string = this.publishEventForm.get('title')?.value;
    var description:string = this.publishEventForm.get('description')?.value;
    var category:string = "event";
    var owner:string = this.authService.user?.id || "";
    var ownerProfile = this.authService.user?.userProfile[0].id || "";

    var place:string = this.publishEventForm.get('place')?.value;
    var dateEvent:string = this.publishEventForm.get('date')?.value;
    var start:string = this.publishEventForm.get('start')?.value;
    var end:string = this.publishEventForm.get('end')?.value;
    
    //requête pour la création du post
    this.feedService.createPost({title, description, category, owner, ownerProfile})
    .subscribe(
      (res:APIResponse) => {
        //requête pour la création de l'évènement
        var postId:string = res.data.id;

        this.feedService.createEvent({dateEvent, start, end, place, postId})
        .subscribe(
          (res:APIResponse) => {
            //collapse the post form
            this.cancel();
            document.getElementById('postEventButton')?.click();
            
            //reload the posts list
            this.feedService.getPosts();
            this.router.navigate(['/core/feed']);

            //show the success message alert
            this.toastrService.success("Post sent!");

            //scroll to the top of the feed list
            var content:Element | null = document.getElementById('content');
            content!.scrollTop = 0;

            this.cancel();
          },
          (err:Error) => {

          }
        )
      },
      (error:any) => {

      }
    ); 
  }

  initForm(){
    this.publishEventForm = this.fb.group({
      title: ['', Validators.required],
      place: ['', Validators.required],
      date: ['', Validators.required],
      start: [''],
      end: [''],
      description: ['', Validators.required],
    })
  }

  cancel(){
    this.initForm();

    this.feedService.images = [];
    this.feedService.imgLinks = [];
    this.feedService.videos = [];
    this.feedService.videoLinks = [];
    this.feedService.documents = [];

    this.feedService.emitFiles();
  }
}
