import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
}) 
export class PostListComponent implements OnInit { 

  postsList:any[] = [];

  feedSubscription:Subscription = new Subscription();

  constructor(private feedService:FeedService) { }

  ngOnInit(): void {

    this.feedSubscription = this.feedService.postsListSubject.subscribe(
      (postsList:any[]) => { this.postsList = postsList;}
    )

    this.feedService.getPosts().then(
      (response:any) => {
        this.feedService.postsList = response;
        this.feedService.emitPosts();
      },
      (error:any) =>{
        console.log(error);
      }
    )
  }
}
