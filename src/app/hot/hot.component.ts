import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import * as Highcharts from 'highcharts';
import * as _ from 'lodash';
@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.HotHighchart();
  }
  public HotHighchart(){
    this.userService.HotHighchart().subscribe( data=>{
      console.log(data)
      let arr1:any=[];
      let arr2:any=[];    
      //用lodash去遍历json 然后将里面的值取出来做成一个data需要的元组
      _.forEach(data, function(key, value){
        arr1.push([value,key]);
        console.log(arr1)
      });
    /*   for(let i=0;i<;i++){
      let hdata1={
        'y':data['hit_list']
      }
      arr1.push(hdata1)
      } */
      console.log(arr1)
      
      Highcharts.chart('container1', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: '淘宝美食热度分析图'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend:true,
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            }
          }
        },
        series: [{
          //data:arr1
          data:arr1
        }],
        credits: {  
          enabled: false     //不显示LOGO 右下角有highcharts官网的超级链接
      } 
      });
    }

    )
  }
}
