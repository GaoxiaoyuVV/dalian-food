import { Component, OnInit } from '@angular/core';
import { NavderComponent } from 'src/app/navder/navder.component';
import { A } from '../a';
import { UserService } from '../user.service';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';

let model1=[];

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent implements OnInit {
  public arr1:any=[]
  a=new A();
  
  constructor(
    private userService:UserService,
    public element:ElementRef,
    private router:Router
    ) { }

  ngOnInit() {
    this.handleData();
  }
  public geta(i:number){
    // const info = document.getElementsByClassName('box');
/*     for(let i=0;i<info.length;i++){
      console.log(info[i].textContent);
    } */
    console.log(document.getElementsByClassName('box')[i].textContent);
    //js中获取html标签里面的数据的方法 通过dom获取！！
    model1.push(document.getElementsByClassName('box')[i].textContent);
    console.log(model1)
    this.router.navigate(['/searchresult'])
  }
  
  public handleData(){
    console.log(NavderComponent.getData())
     for(let i=1;i<=NavderComponent.getData().length;i++){
      this.arr1.push(NavderComponent.getData())
     }
    console.log(this.arr1)
    //console.log('arr1'+this.arr1)
  }
/*   public geta(){
    this.userService.geta(this.a.name).subscribe(data=>{
console.log(data)
    })
  } */
  public static getinfo() {
    return model1
  }
}
