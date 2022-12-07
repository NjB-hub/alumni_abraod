import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit,OnDestroy {

  @Input() authorName:string='John Doe';
  @ViewChild('commentInput') commentInputElement!: ElementRef<HTMLInputElement>
  isCommentsVisible:boolean = false;
  isCommentHasReplies:boolean = true;
  replyInfo:string = '';
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    //this.replyInfo = this.commentService.replyInfo
  }

  focusComment():void{
    this.commentInputElement.nativeElement.focus()
  }

  toggleIsVisible():void{
    this.isCommentsVisible = !this.isCommentsVisible
  }

  onSubmitForm(form:NgForm):void{
    //to do something
    var comment = form.value.content;
    console.log(comment)
    
  }

  ngOnDestroy():void{
    
  }

}
