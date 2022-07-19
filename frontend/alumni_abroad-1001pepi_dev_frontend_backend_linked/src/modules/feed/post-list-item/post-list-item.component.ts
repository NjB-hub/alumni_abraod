import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() owner:any;
  @Input() ownerProfile:any;
  @Input() post:any;

  tmpUser:any = localStorage.getItem('user');
  currentUser = JSON.parse(this.tmpUser);
  currentUserProfile = this.currentUser.userProfile[0];
  senderName:string = "";
  descriptionStart:string = "";
  descriptionEnd:string = ""; 
  
  constructor() { }

  ngOnInit(): void {
    if(this.ownerProfile.name === this.currentUserProfile.name && this.ownerProfile.surname === this.currentUserProfile.surname && this.owner.username === this.currentUser.username){
      this.senderName = "Me";
    }else{
      this.senderName = this.ownerProfile.surname + " " + this.ownerProfile.name;

      if(this.senderName === " "){
        this.senderName = this.owner.username;
      }
    }

    this.descriptionStart = this.post.description.substring(0, 100);
    this.descriptionEnd = this.post.description.substring(101, this.post.description.length - 1);
  }

  showMore(){
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


