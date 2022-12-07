import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public commentReceiver:string = ''
  public commentContent:string=''
  public replyInfo:string=''
  
  constructor() { }

  onReply(receiver:string) : void{
    this.commentReceiver = receiver;
    this.replyInfo = 'Replying to @'.concat(receiver)
    this.commentContent = '@'.concat(receiver);
  }

}
