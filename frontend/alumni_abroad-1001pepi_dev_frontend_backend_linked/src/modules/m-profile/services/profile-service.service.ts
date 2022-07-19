import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  tmpUser:any = localStorage.getItem('user');
  currentUser = JSON.parse(this.tmpUser);
  currentUserProfile = this.currentUser.userProfile[0];

  constructor(private http:HttpClient) { }

  //get current profile from local storage
  getCurrentProfileFromLocalStorage(){
    const tmpUser:any = localStorage.getItem('user');
    this.currentUser = JSON.parse(this.tmpUser);
    this.currentUserProfile = this.currentUser.userProfile[0];
  }

  //mise à jour d'un profile
  updateProfile(data:any, profileId:string){
    return new Promise(
      (resolve, reject) =>{

        this.http.patch(environment.backend_API_URL + 'profile/' + profileId, data).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }

  //mise à jour d'un utilisateur
  updateUser(data:any, userId:string){
    return new Promise(
      (resolve, reject) =>{

        this.http.patch(environment.backend_API_URL + 'user/' + userId, data).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }

  //requête get pour récupérer les informations d'un utilisateur
  getUser(userId:string){
    return new Promise(
      (resolve, reject) =>{

        this.http.get(environment.backend_API_URL + 'user/' + userId).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }
}
