import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedService } from '../services/feed.service';
import { APIResponse, Post } from 'src/models/Interfaces';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-publish-other',
  templateUrl: './publish-other.component.html',
  styleUrls: ['./publish-other.component.scss']
})
export class PublishOtherComponent implements OnInit {

  publishOtherForm : FormGroup = this.fb.group({ });

  @Output() postSent = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    private feedService: FeedService,
    private router:Router,
    private authService: AuthService,
    private toastrService: ToastrService
  ){}

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
    var title:string = this.publishOtherForm.get('title')?.value;
    var description:string = this.publishOtherForm.get('description')?.value;
    var category:string = "other";
    var owner:string = this.authService.user?.id || "";
    var ownerProfile = this.authService.user?.userProfile[0].id || "";
  
    //requête pour la création du post
    this.feedService.createPost({title, description, category, owner, ownerProfile}).subscribe(
      (res:APIResponse) => {
        //collapse the post form
        this.cancel();
        document.getElementById('postOtherButton')?.click();
        
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
      err => {
        console.log(err);

        this.cancel();
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
    this.feedService.imgLinks = [];
    this.feedService.videos = [];
    this.feedService.videoLinks = [];
    this.feedService.documents = [];

    this.feedService.emitFiles();
  }

}
