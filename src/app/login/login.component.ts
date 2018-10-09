import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User=new User();
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.login()
  }
public login():void{
  console.log(this.user.username)
this.userService.login(this.user.username,this.user.password).subscribe(data=>{
  if(data['code']==1000){
    console.log('login: success ' + data);
    this.router.navigate(['/navder'])
  }else{
    this.router.navigate(['/login'])
     console.log(this.user.username + '的密码不正确，请确认后再登录');
  }
},(error)=>{
  console.log('login: error ');
 
}

)
}
}
