import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-uploaded-file-item',
  templateUrl: './uploaded-file-item.component.html',
  styleUrls: ['./uploaded-file-item.component.scss']
})
export class UploadedFileItemComponent implements OnInit, AfterViewInit {

  @Input() fileType:string = '';
  @Input() file:any;
  @Input() id:number = -1;

  constructor(private feedService:FeedService){ }
  

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    if(this.fileType==='image'){

      var reader = new FileReader();

      var imgtag:any = document.getElementById("myimage_"+this.id);  
      
      imgtag.title = this.file.name;
  
      reader.onload = function() {
        imgtag.src = reader.result;  
      };
  
      reader.readAsDataURL(this.file);

    }else if(this.fileType==="video"){
      var reader = new FileReader();

      var videotag:any = document.getElementById("myvideo_"+this.id);  
      
      videotag.title = this.file.name;
  
      reader.onload = function() {
        videotag.src = reader.result;  
      };
  
      reader.readAsDataURL(this.file);
    }
  }

  delete(){
    
    if(this.fileType==='image'){

      this.feedService.images.splice(this.id, 1);
      this.feedService.emitFiles();

    }else if(this.fileType==='video'){

      this.feedService.videos.splice(this.id, 1);
      this.feedService.emitFiles();

    }else if(this.fileType==='document'){

      this.feedService.documents.splice(this.id, 1);
      this.feedService.emitFiles();
    }
  }

}
