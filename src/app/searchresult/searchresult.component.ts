import { Component, OnInit } from '@angular/core';
import { NavderComponent } from 'src/app/navder/navder.component';
@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
public arr1:any=[]

  constructor() { }

  ngOnInit() {
    this.handleData()
  }

  public handleData(){
    this.arr1=NavderComponent.getData()
   /*  for(let i=1;i<=this.arr1.length;i++){
      console.log('arr[i]'+this.arr1[i])
      return this.arr1[i]
    } */
    console.log('arr1'+this.arr1)
  }
}
