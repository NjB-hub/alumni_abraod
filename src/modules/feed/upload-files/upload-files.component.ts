import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements OnInit, OnDestroy {
  images:File[] = [];
  imgLinks:string[] = [];
  videos:File[] = [];
  videoLinks:string[] = [];
  documents:File[] = [];

  constructor(private feedService:FeedService) { }

  ngOnInit(): void {
    this.feedService.imagesSubject.subscribe({next: (images:File[]) => {this.images = images;}})
    this.feedService.imgLinksSubject.subscribe({next: (imgLinks:string[]) => {this.imgLinks = imgLinks}})

    this.feedService.videosSubject.subscribe({next: (videos:File[]) => {this.videos = videos}});
    this.feedService.videoLinksSubject.subscribe({next: (videoLinks:string[]) => {this.videoLinks = videoLinks}});
    
    this.feedService.documentsSubject.subscribe({next: (documents:File[]) => {this.documents = documents}});
  }

  loadFiles(filesArr:FileList | null, targetFilesArr:File[], targetFilesLinksArr:string[]):void{
    //function to load files
    for(var i = 0; i < filesArr!.length; i++){
      let selectedFile = filesArr?filesArr[i]:null;
      if(selectedFile){
        targetFilesArr.push(selectedFile);

        let reader = new FileReader();    
        reader.onload = () => {
          targetFilesLinksArr.push(reader.result as string);
          this.feedService.emitFiles();
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  }

  uploadImage(): void{
    const inputImage = (<HTMLInputElement>document.getElementById('image_file'));
    inputImage!.click();

    inputImage!.oninput = () => {
      var selectedFiles = inputImage.files?inputImage.files:null;
      this.loadFiles(selectedFiles, this.feedService.images, this.feedService.imgLinks);
    }
  }

  uploadVideo(): void{
    const inputVideo = (<HTMLInputElement>document.getElementById('video_file'));
    inputVideo?.click();

    inputVideo!.oninput = () => {
      var selectedFiles = inputVideo.files;
      this.loadFiles(selectedFiles, this.feedService.videos, this.feedService.videoLinks);
    }
  }
  
  uploadDocument(): void{
    const inputDocument = (<HTMLInputElement>document.getElementById('document_file'));
    inputDocument?.click();

    inputDocument!.oninput = () => {
      var selectedFiles = inputDocument.files?inputDocument.files:null;
      for(var i=0; i < selectedFiles!.length; i++){
        let selectedFile = selectedFiles?selectedFiles[i]:null;
        if(selectedFile){
          this.feedService.documents.push(selectedFile);
          this.feedService.emitFiles();
        }
      }  
    }
  }

  ngOnDestroy(): void {
    this.feedService.images = [];
    this.feedService.imgLinks = [];
    this.feedService.videos = [];
    this.feedService.videoLinks = [];
    this.feedService.documents = [];

    this.feedService.emitFiles();
  }
}