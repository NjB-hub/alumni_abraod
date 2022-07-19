import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  //list of files to upload for a given post
  imagesSubject = new Subject<any[]>();
  images:any[] = [];

  videosSubject = new Subject<any[]>();
  videos:any[] = [];

  documentsSubject = new Subject<any[]>();
  documents:any[] = [];

  //liste des posts
  postsListSubject = new Subject<any[]>();
  postsList:any[] = [];

  newPostListener:any;

  newPostSubject = new Subject<Boolean>();
  newPost:Boolean = false;

  constructor(private http:HttpClient, private authService: AuthService) { }

  emitFiles(){
    this.imagesSubject.next(this.images.slice());
    this.videosSubject.next(this.videos.slice());
    this.documentsSubject.next(this.documents.slice());
  }

  emitPosts(){
    this.postsListSubject.next(this.postsList.slice());
  }

  emitNewPost(){
      this.newPostSubject.next(this.newPost);
  }

  createPost(title: string, description:string, category:string, ownerP: string, ownerProfile: string){
    return new Promise( //asynchronous function
        (resolve, reject) => {
            //Place backend function here
            this.http.post( environment.backend_API_URL + 'post/create', {title: title, description: description, category:category, ownerP: ownerP, ownerProfile: ownerProfile}).subscribe(
                (response) =>{
                    resolve(response);
                },
                (error) => { 
                    reject(error);
                }
            );
        }
    );
  }

  createEvent(dateEvent: string, start: string, end: string, place:string, post_id:string){
    return new Promise( //asynchronous function
        (resolve, reject) => {
            //Place backend function here
            this.http.post( environment.backend_API_URL + 'event/create', {dateEvent: dateEvent, start: start, end: end, place: place, post_id: post_id}).subscribe(
                (response) =>{
                    resolve(response);
                },
                (error) => { 
                    reject(error);
                }
            );
        }
    );
  }

  createOffer(company: string, post_id:string){
    return new Promise( //asynchronous function
        (resolve, reject) => {
            //Place backend function here
            this.http.post( environment.backend_API_URL + 'offer/create', {company: company, post_id: post_id}).subscribe(
                (response) =>{
                    resolve(response);
                },
                (error) => { 
                    reject(error);
                }
            );
        }
    );
  }

  //get the post List
  getPosts(){
    return new Promise( //asynchronous function
        (resolve, reject) => {
            //get the current user's id
            var tmpUser:any = localStorage.getItem('user');
            var currentUserId:any = JSON.parse(tmpUser).id;
           
            //Place backend function here
            let params = new HttpParams().set('requestorId', currentUserId);

            this.http.get( environment.backend_API_URL + 'post/index',  {params: params}).subscribe(
                (response:any) =>{

                    this.postsList = response;
                    this.emitPosts();

                    resolve(response);
                },
                (error) => { 
                    reject(error);
                }
            );
        }
    );
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
