import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import { User } from 'src/models/Interfaces';
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { APIResponse } from 'src/models/Interfaces';

@Injectable()
export class AuthService {
    isAdmin:boolean = false;
    isAuth:boolean = false; //boolean for authentication state
    
    user:User | null = null;

    constructor(private router: Router, private http: HttpClient){
        if(localStorage.getItem("token")){
            this.user = JSON.parse(localStorage.getItem("user") || '');
        }
    }

    private handleError(error: HttpErrorResponse){
        if(error.status === 0){
            //A client-side or network error occurred. Handle it accordingly.
            return throwError(new Error(environment.OFFLINE_MESSAGE_ERROR))
        }
        return throwError(new Error(error.error.error))
    }

    signUpUser(
        params:{
            email: string, 
            username:string, 
            password: string
        }
    ){
        return this.http.post<APIResponse>( environment.backend_API_URL + 'user/register', params)
        .pipe(catchError(this.handleError));
    }

    confirmEmail(token:string){
        return this.http.get<APIResponse>(environment.backend_API_URL + 'user/confirm?token='+token)
        .pipe(catchError(this.handleError));
    }

    signInUser(email:string, password:string){
        return this.http.post<APIResponse>(environment.backend_API_URL + 'user/login', {email: email, password: password})
        .pipe(catchError(this.handleError))
    }

    forgotPassword(email:string){
        return this.http.post<APIResponse>(environment.backend_API_URL + 'user/forgot-password', {email: email})
        .pipe(catchError(this.handleError))
    }

    resetPassword(password:string, token: string){
        return this.http.post<APIResponse>(environment.backend_API_URL + 'user/reset-password', {password: password, token:token})
        .pipe(catchError(this.handleError))
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