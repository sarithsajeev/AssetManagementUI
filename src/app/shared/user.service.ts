import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData: Users = new Users();
  users: Users[];

  constructor(private http: HttpClient) { }

  //get aa users
  getUsers(){
    this.http.get(environment.apiUrl+ "/api/user")
    .toPromise().then(res=>
      this.users = res as Users[]);
  }

  //delete user
  deleteUser(id: number){
    return this.http.delete(environment.apiUrl + "/api/user/" + id);
  }

}
