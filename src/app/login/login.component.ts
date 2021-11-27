import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Login } from '../shared/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //variables
  loginForm!: FormGroup;
  isSubmitted = false;
  loginUser: Login = new Login();
  error = '';

  constructor(private formBuilder: FormBuilder, private router: Router,
    private service: AuthService) { }

  ngOnInit(): void {
    //form group
    this.loginForm = this.formBuilder.group(
      {
        UserName: ['',[Validators.required, Validators.minLength(2)]],
        Password: ['',[Validators.required]]
      }
    );
  }

  //get controls
  get controls(){
    return this.loginForm.controls;
  }

  loginCred(){
    //validity
    this.isSubmitted = true;
    console.log(this.loginForm.value);

    //invalid
    if(this.loginForm.invalid){
      return;
    }    
    //valid
    if(this.loginForm.valid){
      //method from service
      this.service.loginUser(this.loginForm.value).subscribe(
        data => {
          console.log(data);
          if(data.UserType==='Admin'){
            localStorage.setItem('token',data.token);
            localStorage.setItem('userName',data.UserName);
            localStorage.setItem('userType',data.UserType);
            this.router.navigateByUrl('/admin');
          }
          else if(data.UserType==='Manager'){
            localStorage.setItem('token',data.token);
            localStorage.setItem('userName',data.UserName);
            localStorage.setItem('userType',data.UserType);
            this.router.navigateByUrl('/manager');
          }
          else{
            console.log('Not allowed');
          }
          
        },
        error=>{
          this.error = "Invalid username or password"
        }
      );
    }

  }

}
