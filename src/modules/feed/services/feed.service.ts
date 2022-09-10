import { Injectable } from '@angular/core';
import { iif, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { APIResponse, Post } from 'src/models/Interfaces';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FeedService {
  //list of files to upload for a given post
  imagesSubject = new Subject<File[]>();
  images:File[] = [];
  imgLinksSubject = new Subject<string[]>();
  imgLinks:string[] = [];

  videosSubject = new Subject<File[]>();
  videos:File[] = [];
  videoLinksSubject = new Subject<string[]>();
  videoLinks:string[] = [];

  documentsSubject = new Subject<File[]>();
  documents:File[] = [];

  emitFiles(){
    this.imagesSubject.next(this.images.slice());
    this.imgLinksSubject.next(this.imgLinks.slice());
    this.videosSubject.next(this.videos.slice());
    this.videoLinksSubject.next(this.videoLinks.slice());
    this.documentsSubject.next(this.documents.slice());
  }

  //posts list
  postsListSubject = new Subject<Post[]>();
  emitPosts(postsList:Post[]){
    this.postsListSubject.next(postsList.slice());
  }
  emitGetPostsError(error:Error){
    this.postsListSubject.error(error);
  }

  newPostListener:any;

  newPostSubject = new Subject<Boolean>();
  newPost:Boolean = false;

  constructor(private http:HttpClient, private authService: AuthService){}

  

  

  emitNewPost(){
      this.newPostSubject.next(this.newPost);
  }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
        //A client-side or network error occurred. Handle it accordingly.
        return throwError(new Error("You are currently off-line."));
    }
    return throwError(new Error(error.error.error));
  }

  addFilesToFormData(filesArr:File[], formData:FormData, prefix:string){
    let filesNames:string = formData.get("filesNames") as string;
    let nbFiles:number = parseInt(formData.get("nbFiles") as string || "0");

    for(var i=0; i < filesArr.length; i++){
      formData.append(prefix+i, filesArr[i], filesArr[i].name);
      filesNames += " " + prefix + i;
      nbFiles++;
      formData.set("filesNames", filesNames);
      formData.set("nbFiles", nbFiles.toString());
    }
  }

  //function to make the request to create a post
  createPost(params:{[key:string]:string}){
    let formData:FormData = new FormData();
    for(var key in params){
      formData.append(key, params[key]);
    }
    
    //add files to the request
    var filesNames:string = "";
    var nbFiles:number = 0;
    formData.append("filesNames", filesNames);
    formData.append("nbFiles", nbFiles.toString());
    this.addFilesToFormData(this.images, formData, "image");
    this.addFilesToFormData(this.videos, formData, "video");
    this.addFilesToFormData(this.documents, formData, "document");
   
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = { headers: headers };

    return this.http.post<APIResponse>('/api/post/create', formData, options)
    .pipe(catchError(this.handleError))
  }

  //get list of posts
  getPosts(){
    let params = new HttpParams().set('requestorId', this.authService.user?.id || "");

    return this.http.get<Post[]>('/api/post/index',  {params: params})
    .pipe(
        catchError(this.handleError) 
    )
    .subscribe(
        (res:Post[]) => {
          this.emitPosts(res);
        },
        err => {
          this.emitGetPostsError(err);
        }
    );
  }

  //delete a post
  deletePost(id:string){
    return this.http.delete<APIResponse>('/api/post/delete/' + id)
    .pipe(
        catchError(this.handleError) 
    )
  }

  createEvent(
    params:{
      dateEvent: string, 
      start: string, 
      end: string, 
      place:string, 
      postId:string
    }
  ){
    return this.http.post<APIResponse>('/api/event/create', params)
    .pipe(catchError(this.handleError))
  }

  createOffer(
    params:{
      company: string, 
      postId:string
    }
  ){
    return this.http.post<APIResponse>('/api/offer/create', params)
    .pipe(catchError(this.handleError))
  }

  
  //new post listener
  fetchUnreadPosts = () => {
    //get the current user's id
    var tmpUser:any = localStorage.getItem('user');
    var currentUserId:any = JSON.parse(tmpUser).id;

    this.authService.getUser(currentUserId, "true").then(
        (response:any) => {
            this.newPost = response.unreadPosts;
            this.emitNewPost();
        },
        (error:any) => {
            console.log(error);
        }
    )
  }
}
