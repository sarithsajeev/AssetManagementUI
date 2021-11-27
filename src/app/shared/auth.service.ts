import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //login token
  loginUser(user: Login){
    return this.http.post<any>(environment.apiUrl + '/api/login', user);
  }

  loggedIn(){
    !!localStorage.getItem('token');
  }

  manager(){
    if(localStorage.getItem('userType')==='manager'){
      return true;
    }
  }

  admin(){
    if(localStorage.getItem('userType')==='admin'){
      return true
    }
  }
}
