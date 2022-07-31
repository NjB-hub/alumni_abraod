import { Component, Input, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() owner:any;
  @Input() ownerProfile:any;
  @Input() post:any;
  @Input() numberComments:number = 3;
  @Input() fakeIndex:number;

  today: number = Date.now();
  postedSince:string='';
  tmpUser:any = localStorage.getItem('user');
  currentUser = JSON.parse(this.tmpUser);
  currentUserProfile = this.currentUser.userProfile[0];
  isSameUser:boolean ;
  senderName:string = "";
  descriptionStart:string = "";
  descriptionEnd:string = ""; 

  fakeId:string='';


  
  constructor() { }

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

  onSavePost():void{

  }
  onModifyPost():void{

  }
  onDeletePost():void{

  }
  onReportPost():void{
    
  }

  
  ngOnInit(): void {

    this.fakeId = "commentList".concat("_").concat(this.fakeIndex.toString())

    //Format the date
    this.postedSince = this.differenceDates(this.today,this.post.createdAt) 
    

    //Format the owner profile name
    this.isSameUser = this.ownerProfile.name === this.currentUserProfile.name && this.ownerProfile.surname === this.currentUserProfile.surname && this.owner.username === this.currentUser.username;
    // if(/* this.ownerProfile.name === this.currentUserProfile.name && this.ownerProfile.surname === this.currentUserProfile.surname && */ this.owner.username === this.currentUser.username){
    this.senderName = this.ownerProfile.surname + " " + this.ownerProfile.name;
    if(this.senderName === " "){
      this.senderName = "@" + this.owner.username;
    }
    if(this.isSameUser){
      this.senderName = this.senderName.concat(" - you");
    }

    //Other
    this.descriptionStart = this.post.description.substring(0, 100);
    this.descriptionEnd = this.post.description.substring(101, this.post.description.length - 1);
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
}


