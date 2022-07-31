import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  @Input() authorName:string='John Doe';
  content:string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(form:NgForm):void{
    //to do something
    var comment = form.value.content;
    console.log(comment)
    
  }

}
