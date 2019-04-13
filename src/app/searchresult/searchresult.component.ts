import { Component, OnInit } from '@angular/core';
import { NavderComponent } from 'src/app/navder/navder.component';
import { SearchlistComponent } from '../searchlist/searchlist.component';
import { UserService } from '../user.service';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
public arr1:any=[]
public arr2:any=[]
userRole:''
  constructor(
    private userService:UserService
  ) { }

  ngOnInit() {
    console.log(SearchlistComponent.getinfo())
    this.getallinfo();
    var user = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userRole = user.role;
  }
  public getallinfo() {
    this.arr1 = SearchlistComponent.getinfo();
    console.log(this.arr1)
    this.userService.getallinfo(this.arr1).subscribe(data => {
      console.log(data['name'])
      this.arr2.push(data)
      console.log(this.arr2)
    })

  }

  //public handleData1(){
    //this.arr1=SearchlistComponent.getinfo()
    //console.log(SearchlistComponent.getinfo())
   /*  for(let i=1;i<=this.arr1.length;i++){
      console.log('arr[i]'+this.arr1[i])
      return this.arr1[i]
    } */
    
  
}
