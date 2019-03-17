import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadsuccess',
  templateUrl: './uploadsuccess.component.html',
  styleUrls: ['./uploadsuccess.component.css']
})
export class UploadsuccessComponent implements OnInit {

  constructor() { }
  userRole:''
  ngOnInit() {
    var user = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userRole = user.role;
  }

}
