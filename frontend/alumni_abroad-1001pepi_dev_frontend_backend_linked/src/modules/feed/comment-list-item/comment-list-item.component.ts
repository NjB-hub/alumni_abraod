import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {

  @Input() hasReply:boolean = false

  @Input() senderName:string = 'John Doe'
  @Input() position:string = 'student'
  @Input() postedSince:string = '1 d'
  @Input() isAuthor:boolean = true
  onReply:boolean = true
  content:string='lorem ipsum doto amet dsjd hsdjk ah dksh kda is mine rhejr dsj  khkshakdhskhd kahskdhakhs dkhaskdhaskhda kshkdahskhs'
  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
  }

  onReplyComment():void{
    this.commentService.onReply('johndoe')
  }

  onModifyComment():void{

  }

  onDeleteComment():void{

  }

  onReportComment():void{

  }

}
