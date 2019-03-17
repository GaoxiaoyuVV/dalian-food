import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavderComponent } from './navder/navder.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from 'src/app/upload/upload.component';
import { UploadsuccessComponent } from './uploadsuccess/uploadsuccess.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { UploadfailComponent } from './uploadfail/uploadfail.component';
import { HotComponent } from './hot/hot.component';
import { PriceComponent } from './price/price.component';
import { CommentComponent } from './comment/comment.component';
import { SearchlistComponent } from './searchlist/searchlist.component';
import { UserManagementComponent } from './user-management/user-management.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'navder',component:NavderComponent },
  { path:'register',component:RegisterComponent },
  { path:'upload',component:UploadComponent },
  { path:'success',component:UploadsuccessComponent},
  { path:'searchresult',component:SearchresultComponent},
  { path:'failure' ,component:UploadfailComponent},
  { path:'hot' ,component:HotComponent },
  { path:'price', component:PriceComponent },
  { path:'comment', component:CommentComponent},
  { path:'searchlist', component:SearchlistComponent },
  { path:'usermanagement', component:UserManagementComponent }
]

@NgModule({
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

