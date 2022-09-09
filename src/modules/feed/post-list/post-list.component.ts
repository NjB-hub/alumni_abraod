import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/models/Interfaces';

import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
}) 
export class PostListComponent implements OnInit { 

  postsList:Post[] = [];
  
  constructor(private feedService:FeedService) { }

  ngOnInit(): void {
    this.feedService.postsListSubject.subscribe({
      next:(postList) => this.postsList = postList
    })

    this.feedService.getPosts();
  }
}
