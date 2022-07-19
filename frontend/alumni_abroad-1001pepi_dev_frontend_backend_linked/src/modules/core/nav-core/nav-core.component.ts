import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FeedService } from 'src/modules/feed/services/feed.service';
import { Subscription } from 'rxjs';
import {LogOutDialogComponent } from '../log-out-dialog/log-out-dialog.component';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-core',
  templateUrl: './nav-core.component.html',
  styleUrls: ['./nav-core.component.scss']
})
export class NavCoreComponent implements OnInit, OnDestroy {
  
  @Input() isVisible:boolean=true;

  newPost:Boolean = false;
  newPostChecker:any;

  feedSubscription:Subscription = new Subscription();

  constructor(private router:Router, private feedService:FeedService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.launchNewPostChecker();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogOutDialogComponent,{width: '500px'});
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        console.log('log out')
        this.router.navigate(['']);
      }
    })

  }


  emitPosts(){
    this.feedService.getPosts();
    this.feedService.emitPosts();

    var content:any = document.getElementById('content');
    content.scrollTop = 0;
  }

  fetchNewPost = () => {
    this.feedService.fetchUnreadPosts();
    
    this.feedSubscription = this.feedService.newPostSubject.subscribe(
      (newPost:Boolean) => {this.newPost = newPost;}
    )
  }

  launchNewPostChecker = () => {
    this.newPostChecker = setInterval(this.fetchNewPost, environment.periodCheckNewPost);
  }

  stopNewPostChecker(){
    clearInterval(this.newPostChecker);
  }

  ngOnDestroy(): void {
    this.stopNewPostChecker();
  }
}
