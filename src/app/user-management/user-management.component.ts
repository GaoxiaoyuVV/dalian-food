import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor() { }
  userRole: ''
  userlist: ''
  userCheckedList: ''
  showModal: string
  ngOnInit() {
    var user = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userRole = user.role;
    this.userlist = user.userdata;
  }
  public canel(): void {
    console.log("click canel")
  }
  public openModal(v: any) {
    this.showModal = 'show';
    this.userCheckedList = v;
  }

}
