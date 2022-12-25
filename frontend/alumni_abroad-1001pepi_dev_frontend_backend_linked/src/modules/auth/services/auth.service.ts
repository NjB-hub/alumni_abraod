import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
    isAdmin:boolean = true;
    isAuth:boolean = false; //boolean for authentication state
    /*This is the service where authentication functons are defined */

    constructor(private router: Router, private http: HttpClient) {}

    signUpUser(email: string, username:string, password: string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
                this.http.post( environment.backend_API_URL + 'user/register', {username: username, email: email, password: password}).subscribe(
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

    signInUser(email:string, password:string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
                this.http.post(environment.backend_API_URL + 'user/login', {email: email, password: password}).subscribe(
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

    forgotPassword(email:string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
                this.http.post(environment.backend_API_URL + 'user/forgot-password', {email: email}).subscribe(
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

    resetPassword(password:string, token: string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
                this.http.post(environment.backend_API_URL + 'user/reset-password', {password: password, token:token}).subscribe(
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

    getUser(userId:string, onlyUnreadPosts:string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
                var params = new HttpParams().set('onlyUnreadPosts', onlyUnreadPosts);

                this.http.get(environment.backend_API_URL + 'user/' + userId, {params: params}).subscribe(
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
}