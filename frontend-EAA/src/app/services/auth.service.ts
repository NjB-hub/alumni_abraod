import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    isAdmin:boolean = false;
    isAuth:boolean = false; //boolean for authentication state
    /*This is the service where authentication functons are defined */
    signUpUser(email: string, username:string, password: string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
            }
        );
        
    }
    signInUser(username:string, password:string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
            }
        );
    }
    backupPassword(email:string){
        return new Promise( //asynchronous function
            (resolve, reject) => {
                //Place backend function here
            }
        );
    }
}