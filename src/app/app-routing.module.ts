import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AdminComponent } from './admin/admin.component';
import { AssetsComponent } from './assets/assets.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'signup', component:SignupComponent },
  { path:'users', component:UsersComponent},
  { path:'assets', component:AssetsComponent },
  { path:'addasset', component:AddAssetComponent },
  { path:'editasset', component:EditAssetComponent },
  { path:'edituser', component:EditUserComponent },
  { path:'admin', component:AdminComponent },
  { path:'manager', component:ManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
