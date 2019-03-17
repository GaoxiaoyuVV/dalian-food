import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor() { }
  userRole:''
  userlist:''
  ngOnInit() {
    var user = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userRole = user.role;
    console.log(this.userRole)
    this.userlist = user.userdata;
    console.log(this.userlist)
  }
  public canel():void{
    console.log("click canel")
  }

}
