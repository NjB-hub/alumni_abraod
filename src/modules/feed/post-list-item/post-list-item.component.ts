import { Component, Input, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

import * as $ from "jquery";
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { APIResponse, Post } from 'src/models/Interfaces';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {
  @Input() post:Post;
  @Input() numberComments:number = 3;
  @Input() fakeIndex:number;

  today: number = Date.now();
  postedSince:string='';
  isSameUser:boolean;//to know if the owner of the post is the current user
  senderName:string = "";
  descriptionStart:string = "";
  descriptionEnd:string = ""; 
  fileURL:SafeUrl = "";
  fileType:string="";
  id:string = "";

  constructor(
    private authService: AuthService, 
    private feedService: FeedService, 
    private toastrService: ToastrService,
    private sanitizer:DomSanitizer
  ){}

  ngOnInit(): void {
    this.id = this.post.id;

    //Format the date
    this.postedSince = this.differenceDates(this.today, parseInt(this.post.createdAt)) 

    //set the post owner username
    this.isSameUser = this.authService.user?.id === this.post.owner.id;
  
    this.senderName = this.post.ownerProfile.surname + " " + this.post.ownerProfile.name;
    if(this.senderName === " "){
      this.senderName = "@" + this.post.owner.username ;
    }
    if(this.isSameUser){
      this.senderName = this.senderName.concat(" - you");
    }

    //Set showmore default text
    this.descriptionStart = this.post.description.substring(0, 100);
    this.descriptionEnd = this.post.description.substring(101, this.post.description.length);

    //handle post's files
    if(this.post.files.length > 0){
      let file:string = this.post.files.split(" ")[0];
      let fileName = file.split("/")[0];
      this.fileType = file.split("/")[1];
      this.fileURL = this.sanitizer.bypassSecurityTrustUrl('/api/file/?filename=' + fileName);
    }
  }

  public differenceDates(today:number, otherDate:number): string{ 
    //A function to calculate differences between dates and format the result as in LinkedIn
    
    var difference = (today - otherDate)/ (1000 * 3600 * 24);
    var duration = Math.floor(difference)
    var result = '';

    if(duration >=365){
      duration = Math.floor(difference/365)  //We express the date in years
      result = duration.toString().concat(' y')

    } else if (duration >= 30 && duration <= 364) {
      duration = Math.floor(difference/30) //We express the date in months
      result = duration.toString().concat(' m')

    } else if (duration >=7 && duration <= 29 ){
      duration = Math.floor(difference/7) //we express the date in weeks
      result = duration.toString().concat(' w')

    } else if (duration >=1 && duration <= 6){
      result = duration.toString().concat(' d')
    } else {
      if(Math.floor(difference*24) >=1 ){
        duration = Math.floor(difference*24) //we express the date in hours
        result = duration.toString().concat(' h')
      } else{
        if(Math.floor(difference*24*60 )>= 1){
          duration = Math.floor(difference*24*60) //we express the date in minutes
          result = duration.toString().concat(' m')
        } else {
          result= "Just now"
        }
      }
    }
    return result;
  }

  showMore():void{
    var dots:any = document.getElementById("dots_" + this.post.id);
    var moreText:any = document.getElementById("more_" + this.post.id);
    var btnText:any = document.getElementById("myBtn_" + this.post.id);

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  onSavePost():void{

  }
  onModifyPost():void{

  }

  onDeletePost():void{
    //call the function to delete a post
    this.feedService.deletePost(this.post.id).subscribe(
      (res:APIResponse) => {
        //show the success message alert
        this.toastrService.success("Post deleted!");
        this.feedService.getPosts();
      },
      err => {
    
      }
  );
  }
  onReportPost():void{
    
  }

  
  

  

  
}


