import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
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

  falseVar:boolean = false;
  commentSubscription: Subscription;
  constructor(private commentService: CommentService) { }

  comments:any[] = [
    {name:'John Doe', position:'student', isAuthor:true, since:'1d', children:[]},
    {name: 'Charlie', position:'engineer at Microsoft', isAuthor:false, since:'1h', children:[
      {name:'Michael Doe', position:'student', isAuthor:false, since:'Just now', children:[]},
      {name:'RM', position:'Chairman and CEO', isAuthor:false, since:'3h',children:[]}
    ]}
  ]


  ngOnInit(): void {
    //this.replyInfo = this.commentService.replyInfo
    this.commentSubscription = this.commentService.commentSubject.subscribe(
      (replyInfo:string) => {
        this.replyInfo = replyInfo
      }
    )
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
    this.commentService.emitCommentSubject()
    
  }

  ngOnDestroy():void{
    this.commentSubscription.unsubscribe()
  }

}
