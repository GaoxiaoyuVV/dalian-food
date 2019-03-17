import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavderComponent } from './navder/navder.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { FileUploadModule } from 'ng2-file-upload';
import { UploadsuccessComponent } from './uploadsuccess/uploadsuccess.component';
import { UploadfailComponent } from './uploadfail/uploadfail.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { HotComponent } from './hot/hot.component';
import { PriceComponent } from './price/price.component';
import { CommentComponent } from './comment/comment.component';
import { SearchlistComponent } from './searchlist/searchlist.component'
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { Ng2PaginationModule } from 'ng2-pagination';
import { UserManagementComponent } from './user-management/user-management.component';
@NgModule({
  declarations: [
    AppComponent,
    NavderComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent,
    UploadsuccessComponent,
    UploadfailComponent,
    SearchresultComponent,
    HotComponent,
    PriceComponent,
    CommentComponent,
    SearchlistComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFileUploaderModule,
    FileUploadModule,
    Ng2PaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
