import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(private router: Router,
                private http: HttpClient) {}

    /*This is the service where authentication funcitons are defined */
    signUpUser(email: string, password: string){

        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
                this.http.post('http://localhost:1337/user/register', {email: email, password: password}).subscribe(
                    (response) =>{
                        resolve(response);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            });
    }

    signInUser(username:string, password:string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
                this.http.post('http://localhost:1337/user/login', {email: username, password: password}).subscribe(
                    (response) =>{
                        console.log(response);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            });
    }
}