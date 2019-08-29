import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
/* import { ToastsManager } from 'ng2-toastr/ng2-toastr'; */
import * as $ from 'jquery';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private userService: UserService) { }
  userRole: ''
  userlist: ''
  userCheckedList: string
  showModal: string
  ifSuccess: string
  ifFail: string
  ngOnInit() {
    var user = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userRole = user.role;
    this.getUserInfo();
  }
  public canel(): void {
    console.log("click canel")
  }
  public openModal(v: any) {
    var temp = ''
    this.showModal = 'show';
    temp = JSON.parse(JSON.stringify(v))
    this.userCheckedList = temp;
  }
  public save(): void {
    console.log(this.userCheckedList);
    this.userService.changeUserInfo(this.userCheckedList).subscribe(data => {
      if (data['message'] === 'success') {
        this.ifSuccess = 'success';
        this.getUserInfo();
        setTimeout(function () {
          $('.alertOutside').css('display', 'none');
        }, 2000);
      } else {
        this.ifFail = 'fail'
      }
      console.log(data)
    }, (error) => {
      console.log(' update: error ');
      this.ifFail = 'fail'
      setTimeout(function () {
        $('.alertOutside').css('display', 'none');
      }, 2000);
    })
  }
  public getUserInfo() {
    this.userService.getUserInfo().subscribe(data => {
      console.log(data)
      this.userlist = data;
    })
  }
  public delUser(v: any) {
    this.userService.delUserInfo(v).subscribe(data => {
      console.log(data)
      if (data['message'] === 'success') {
        /* this.userService.getUserInfo().subscribe(data => {
          console.log(data)
          this.userlist = data;
        }) */
        this.getUserInfo();
      }
    })
  }
}
