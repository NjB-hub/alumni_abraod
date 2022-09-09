import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APIResponse } from 'src/models/Interfaces';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-publish-offer',
  templateUrl: './publish-offer.component.html',
  styleUrls: ['./publish-offer.component.scss']
})
export class PublishOfferComponent implements OnInit {
  
  publishOfferForm : FormGroup = this.fb.group({ });

  @Output() postSent = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder, 
    private feedService: FeedService, 
    private router:Router,
    private authService: AuthService,
    private toastrService:ToastrService,
  ){}

  ngOnInit(): void {
    this.initForm();
  }

  get title(){
    return this.publishOfferForm.get('title');
  }
  get company(){
    return this.publishOfferForm.get('company');
  }
  get description(){
    return this.publishOfferForm.get('description');
  }

  onSubmit(): void {
    var title:string = this.publishOfferForm.get('title')?.value;
    var description:string = this.publishOfferForm.get('description')?.value;
    var category:string = "offer";
    var owner:string = this.authService.user?.id || "";
    var ownerProfile = this.authService.user?.userProfile[0].id || "";

    var company:string = this.publishOfferForm.get('company')?.value;
    
    //requête pour la création du post
    this.feedService.createPost({title, description, category, owner, ownerProfile})
    .subscribe(
      (res:APIResponse) => {
        //requête pour la création de l'évènement
        var postId:string = res.data.id;

        this.feedService.createOffer({company, postId})
        .subscribe(
          (res:APIResponse) => {
            //collapse the post form
            this.cancel();
            document.getElementById('postOfferButton')?.click();
            
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
      (err:Error) => {

      }
    );
  }

  initForm(){
    this.publishOfferForm = this.fb.group({
      title: ['', Validators.required],
      company: ['', Validators.required],
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
