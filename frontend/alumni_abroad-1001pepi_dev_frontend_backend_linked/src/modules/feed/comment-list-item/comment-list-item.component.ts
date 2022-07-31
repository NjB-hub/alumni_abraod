import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {

  @Input() hasReply:boolean = false

  senderName:string = 'John Doe'
  position:string = 'student'
  postedSince:string = '1 d'
  isSameUser:boolean = true
  onReply:boolean = true
  content:string='lorem ipsum doto amet dsjd hsdjk ah dksh kda is mine rhejr dsj  khkshakdhskhd kahskdhakhs dkhaskdhaskhda kshkdahskhs'
  constructor() { }

  ngOnInit(): void {
  }

  onReplyComment():void{

  }

  onModifyComment():void{

  }

  onDeleteComment():void{

  }

  onReportComment():void{

  }

}
