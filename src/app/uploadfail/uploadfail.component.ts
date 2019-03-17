import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadfail',
  templateUrl: './uploadfail.component.html',
  styleUrls: ['./uploadfail.component.css']
})
export class UploadfailComponent implements OnInit {

  constructor() { }
  userRole:''
  ngOnInit() {
    var user = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userRole = user.role;
  }

}
