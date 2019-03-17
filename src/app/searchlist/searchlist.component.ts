import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavderComponent } from 'src/app/navder/navder.component';
import { A } from '../a';
import { UserService } from '../user.service';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';

let model1 = [];

@Component({
  selector: 'app-searchlist',
  templateUrl: './searchlist.component.html',
  styleUrls: ['./searchlist.component.css']
})
export class SearchlistComponent implements OnInit , AfterViewInit{
  public arr1: any = []
  public arr2: any = []
  public arr3: any = []
  public arr4: any = []
  public aa:number;
  a = new A();
  userRole:''
  constructor(
    private userService: UserService,
    public element: ElementRef,
    private router: Router,
    
  ) {this.aa=1 }

 
  public geta(i: number) {
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
 public ngAfterViewInit() {
  //  this.arr3 = [[]];
  //  this.getpage(0);
 }

  public handleData(aaa:number) {
    console.log(NavderComponent.getData())
    const total = NavderComponent.getData()[0].length
    console.log(total)
    const page = Math.ceil(total / 5)//获取分的页数，Math.ceil作用是向上取整如果有小数，整数就加一！
/*  ###################################################################### */
 
/*  ###################################################################### */
    console.log(this.arr4)
    console.log(page)
    let j = 0
    let k = 0
    for (let i = 1; i <= page; i++) {
      j = j + 5
      console.log('no.', i, ' :', k, j);
      const tmp = [];
      for (k; k < total; k++) {
        const x = (j < total ? j : total-1);
        if (k < x) {
          tmp.push(NavderComponent.getData()[0][k]);
          // this.arr2.push(NavderComponent.getData()[0][k])
        } else {
          this.arr2.push(tmp);
          // k = k + 5;
          break;
        }
      }
      // k = k + 5
    }
   console.log('heiheihei'+this.aa)
    /* this.arr3.push(this.arr2[aaa-1]) */
    //console.log(this.arr2);
    /* ################################## */
  /*   setTimeout(() => {
    this.arr3.push(this.arr2[this.aa-1]);
    console.log(this.arr3)
    }, 300); */
       /* ################################## */
       this.arr3 = this.arr2[0];
  }
  public getpage(h:number){
  /* this.handleData(document.getElementsByClassName('box1')[h].textContent) */
  // this.aa=parseInt(document.getElementsByClassName('box1')[h].textContent); 
  this.aa = h+1;
  console.log('haha'+this.aa)
  // this.arr3 = [];
  // this.arr3.push(this.arr2[this.aa-1]);
  this.arr3 = this.arr2[h];
    console.log(this.arr3)
  //this.handleData(this.aa)
  //this.handleData(aa);
}
 ngOnInit() {
    this.arr3.length=0;
    //this.getpage(1);
    this.handleData(this.aa);
    this.chajian();
    var user = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userRole = user.role;
    //this.getpage(1);
  }
  /* this.arr1.push(this.arr2)
  console.log(this.arr1) */
public chajian(){
  console.log(NavderComponent.getData())
  for(let i=1;i<=NavderComponent.getData().length;i++){
   this.arr1.push(NavderComponent.getData())
  }
 console.log(this.arr1)
}
  //console.log(this.arr1)
  /*  for(let i=1;i<=NavderComponent.getData().length;i++){
    this.arr1.push(NavderComponent.getData())
    //console.log(this.arr1[0][0].length)
   } */
  //console.log(this.arr1)
  //console.log('arr1'+this.arr1)

  /*   public geta(){
      this.userService.geta(this.a.name).subscribe(data=>{
  console.log(data)
      })
    } */
  public static getinfo() {
    return model1
  }
}
