import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public commentReceiver:string = ''
  public commentContent:string=''
  public replyInfo:string=''

  commentSubject = new Subject<string>();

  emitCommentSubject() {
    this.commentSubject.next(this.replyInfo);
  }

  
  constructor() { }

  onReply(receiver:string) : void{
    this.commentReceiver = receiver;
    this.replyInfo = 'Replying to @'.concat(receiver)
    this.commentContent = '@'.concat(receiver);
    this.emitCommentSubject()
  }
  onClear(): void{
    this.commentSubject.next('')
  }
}
