import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AssetsComponent } from './assets/assets.component';
import { UsersComponent } from './users/users.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './shared/auth.service';
import { UserService } from './shared/user.service';
import { AssetService} from './shared/asset.service';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AssetsComponent,
    UsersComponent,
    AddAssetComponent,
    EditAssetComponent,
    EditUserComponent,
    HomeComponent,
    AdminComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AuthService, UserService, AssetService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
