import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import * as Highcharts from 'highcharts';
import * as _ from 'lodash';
import * as $ from 'jquery';
@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent implements OnInit {
  userRole = ''
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.HotHighchart();
    this.setpage_height();
    var user = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userRole = user.role;
    console.log(this.userRole)
  }
  public HotHighchart() {
    this.userService.HotHighchart().subscribe(data => {
      console.log(data)
      let arr1: any = [];
      let arr2: any = [];
      //用lodash去遍历json 然后将里面的值取出来做成一个data需要的元组
      _.forEach(data, function (key, value) {
        arr1.push([value, key]);
        console.log(arr1)
      });
      /*   for(let i=0;i<;i++){
        let hdata1={
          'y':data['hit_list']
        }
        arr1.push(hdata1)
        } */
      console.log(arr1)
      for (var i in arr1) {
        arr2.push(arr1[i][1]);
      }
      Highcharts.chart('container1', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: '美食热度分析图'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true,
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            },
            events: {
              click: function (e) {
                for (var i = 0; i < arr2.length - 1; i++) {
                  for (var j = 0; j < arr2.length - i - 1; j++) {
                    if (arr2[j] < arr2[j + 1]) {
                      var temp = arr2[j];
                      arr2[j] = arr2[j + 1];
                      arr2[j + 1] = temp;
                    }
                  }
                }
                console.log(arr2)
                var temp_point = e.point
                console.log(temp_point['options']['y']);
                for(var i = 0;i <= arr2.length - 1;i++){
                  if(arr2[i] === temp_point['options']['y']){
                    var rank = i+1;
                    console.log("您选择的美食在该网站中排名为：   "+rank);
                  }
                }
              }
            }
          }
        },
        series: [{
          //data:arr1
          data: arr1
        }],
        credits: {
          enabled: false     //不显示LOGO 右下角有highcharts官网的超级链接
        }
      });
    }

    )
  }
  public setpage_height() {
    //nothing to do except test the jquery if it will be useful
    /* setTimeout(() => {
      $('.pie').css('display','none');
    }, 1000); */
    console.log(window.innerHeight)
    var height = window.innerHeight;
    $('.main').css('height', height);
  }
}
