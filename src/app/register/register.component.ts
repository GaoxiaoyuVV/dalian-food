import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reg = new Register();
  constructor(private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }
  public register(username: string, password: string, tel: number): void {
    console.log(this.reg.username)
    this.reg.role = 'user';
    console.log(this.reg.role)
    this.userService.register(this.reg.username, this.reg.password, this.reg.tel).subscribe((data) => {
      console.log(data);
      if (data['message'] === '注册完毕') {
        this.router.navigate(['/login'])
      }
    })
  }
}

