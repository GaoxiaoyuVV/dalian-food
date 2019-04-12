import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Input } from 'src/app/input';
import { Route, Router } from '@angular/router';

let model = [];

@Component({
  selector: 'app-navder',
  templateUrl: './navder.component.html',
  styleUrls: ['./navder.component.css']
})
export class NavderComponent implements OnInit {

  arr = []
  noSearchInfo: string
  userRole = ''
  inputdata: Input = new Input();
  constructor(private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    model.length = 0;//将数组长度变为0，从而达到清空model的目的
    var user = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userRole = user.role;
    this.noSearchInfo = 'default';
    console.log(this.userRole)
  }
  public search(input: string): void {
    this.userService.search(this.inputdata.input).subscribe((data) => {
      console.log(data);
      if (data[0]['status'] !== 'fail') {
        console.log(this.inputdata.input)
        console.log(data['shopname'])
        /*       for(let i=1;i<data.length;i++){
        this.arr.push(data[i])
        console.log('arr'+this.arr)
        model=this.arr 
        console.log('model'+model);
              } */
        console.log(data)
        /* for(let i=0;i<data.length;i++){
          model.push(data(i).['shopname'])
        } */
        model.push(/* "shopname":data['shopname'],"price":data['price'] */data);
        this.router.navigate(['/searchlist'])
        /* 直接发json过去 怪不得都用json！！ */
      } else {
        this.noSearchInfo = 'nothing';
      }
    }

    )
  }

  public static getData() {
    return model
  }
}
