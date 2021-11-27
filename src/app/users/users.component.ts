import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public service: UserService, private router: Router,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.service.getUsers();
  }

   //delete employee
   deleteUser(id: number){
    if(confirm('Are you sure you want to delete')){
     this.service.deleteUser(id).subscribe(
       (res) => {
         console.log(res);
       }
     );
    }
    else{
     window.location.reload();
    }   
 }
}
