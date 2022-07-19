import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit, OnDestroy {

  images:any[] = [];
  videos:any[] = [];
  documents:any[] = [];

  feedSubscription:Subscription = new Subscription();

  constructor(private feedService:FeedService) { }
  

  ngOnInit(): void {
    this.feedSubscription = this.feedService.imagesSubject.subscribe(
      (images:any[]) => {this.images = images;}
    )

    this.feedSubscription = this.feedService.videosSubject.subscribe(
      (videos:any[]) => {this.videos = videos;}
    )

    this.feedSubscription = this.feedService.documentsSubject.subscribe(
      (documents:any[]) => {this.documents = documents;}
    )

    this.feedService.emitFiles();
  }

  uploadImage(): void{

    const inputImage:any = document.getElementById('image_file');
    inputImage?.click();

    inputImage.onchange = () => {
      var selectedFile = inputImage.files[0];
        
      this.feedService.images.push(selectedFile);
      this.feedService.emitFiles();
    }
  }

  uploadVideo(): void{
    const inputVideo:any = document.getElementById('video_file');
    inputVideo?.click();

    inputVideo.onchange = () => {
  
      var selectedFile = inputVideo.files[0];
        
      this.feedService.videos.push(selectedFile);
      this.feedService.emitFiles();
      
      console.log(this.feedService.videos);
    }
  }
  
  uploadDocument(): void{
    const inputDocument:any =  document.getElementById('document_file')
    inputDocument?.click();

    inputDocument.onchange = () => {
      var selectedFile = inputDocument.files[0];
        
      this.feedService.documents.push(selectedFile);
      this.feedService.emitFiles();
    }
  }

  ngOnDestroy(): void {
    this.feedService.images = [];
    this.feedService.videos = [];
    this.feedService.documents = [];

    this.feedService.emitFiles();
  }

}
