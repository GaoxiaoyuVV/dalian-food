import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
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
  ngOnInit() {
    var user = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userRole = user.role;
    this.userlist = user.userdata;
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
      if(data['message'] === 'success'){
        console.log('aaaaaa')
        $('#exampleModal').modal('hide')
      }
      console.log(data)
    }, (error) => {
      console.log(' update: error ');
    })
  }
}
