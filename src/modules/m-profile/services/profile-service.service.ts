import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { APIResponse, Profile, User } from 'src/models/Interfaces';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  currentUser:User | null = this.authService.user;
  currentUserProfile = this.currentUser!.userProfile[0];

  constructor(private http:HttpClient, private authService:AuthService) { }

  private handleError(error: HttpErrorResponse){
    if(error.status === 0){
        //A client-side or network error occurred. Handle it accordingly.
        return throwError(new Error("You are currently off-line."));
    }
    return throwError(new Error(error.error.error));
  }

  //mise à jour d'un profile
  updateProfile(
    params:{
      name:string,
      surname:string,
      gender:string,
      dateOfBirth:string,
      phone:string,
      address:string,
      position:string
    }
  ){
    return this.http.patch<Profile>(environment.backend_API_URL + 'profile/' + this.currentUserProfile.id, params)
    .pipe(catchError(this.handleError))
  }

  //mise à jour d'un utilisateur
  updateUser(
    params:{
      email:string,
      username:string,
    }
  ){
    return this.http.patch<User>(environment.backend_API_URL + 'user/' + this.currentUser!.id, params)
    .pipe(catchError(this.handleError))
  }

  //requête get pour récupérer les informations d'un utilisateur
  getUser(userId:string){
    return this.http.get<APIResponse>(environment.backend_API_URL + 'user/' + userId)
    .pipe(catchError(this.handleError))
  }
}
