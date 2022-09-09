import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-uploaded-file-item',
  templateUrl: './uploaded-file-item.component.html',
  styleUrls: ['./uploaded-file-item.component.scss']
})
export class UploadedFileItemComponent implements OnInit{
  @Input() fileType:string = '';
  @Input() fileLink:string;
  @Input() file:File;
  @Input() id:number = -1;

  constructor(private feedService:FeedService){ }
  
  ngOnInit(): void {}

  deleteHelper(targetFilesArr:File[], targetFilesLinksArr:string[], id:number){
    targetFilesArr.splice(id, 1);
    targetFilesLinksArr.splice(id, 1);
    this.feedService.emitFiles();
  }

  delete(){
    if(this.fileType==='image'){
      this.deleteHelper(this.feedService.images, this.feedService.imgLinks, this.id);

    }else if(this.fileType==='video'){
      this.deleteHelper(this.feedService.videos, this.feedService.videoLinks, this.id);

    }else if(this.fileType==='document'){
      this.feedService.documents.splice(this.id, 1);
      this.feedService.emitFiles();
    }
  }
}
