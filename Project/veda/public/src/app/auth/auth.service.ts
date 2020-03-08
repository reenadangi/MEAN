import { AuthData } from './auth-data.model'
import {Router} from '@angular/router'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';


@Injectable({providedIn:'root'})
export class AuthService{
  private token: string;
 private isAutheticated=false; 
private authStatusListener=new Subject<boolean>();
private userId:string;
private sucessMsg:string;
private userName:string;
private userEmail:string;

getAuthStatusListener(){
return this.authStatusListener.asObservable();
}
constructor(private httpClient:HttpClient,private router:Router){}

CreateUser(fname:string,lname:string,email:string,password:string){
  const authData: AuthData= {
      fname:fname,
      lname:lname,
      email:email,
      password:password

    }
  this.httpClient.post<{message: string,_id:string}>('http://localhost:3000/api/user/signup',authData).subscribe(responseData=>{
         console.log(`user created ${responseData._id}`);
         const _id= responseData._id;
         this.sucessMsg="Congratulations! Account created.Login to explore."
         this.authStatusListener.next(true);
      },error=>{
        this.sucessMsg="This email is already taken!"
        this.authStatusListener.next(true);
      //   console.log(`error ${error}`);
    });
}
 login(email:string,password:string){
  const authData: AuthData= {
    fname:"bla",
    lname:"bla",
    email:email,
    password:password
  }
  console.log(authData)
  console.log("&&&&&&&&&&&&&&")
  this.httpClient.post<{token: string,userId:string,user:AuthData}>('http://localhost:3000/api/user/login', authData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if(token){
          
          this.userId=response.userId;
          this.userEmail=response.user.email.toString();
          // to do - get whole object from user
          console.log(response.user);
          this.userName=response.user.fname.toString();
          this.isAutheticated=true;
          this.authStatusListener.next(true);
          this.router.navigate(['/']);
          
        }
        
      },error=>{
          this.sucessMsg="Invalid User/Pass, try again!"
          this.authStatusListener.next(true);
        //   console.log(`error ${error}`);
      })
 
  }
  getSucessMsg(){
      return this.sucessMsg;
  }
  getIsAuth(){
    return this.isAutheticated;
  }
  getToken() {
      return this.token;
    }
    getUserId(){
      return this.userId;
    }
 logOut(){
   this.token=null;
   this.isAutheticated=false;
   this.userId=null;
   this.authStatusListener.next(false);
   this.router.navigate(['/login']);
 }
 getUserName(){
  return this.userName;
}
getUserEmail(){
  return this.userEmail;
}
}
