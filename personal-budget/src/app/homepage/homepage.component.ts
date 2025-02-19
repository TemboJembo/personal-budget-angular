import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#aaaa00',
                '#00aaaa',
                '#000000',
                '#aa0000',
                '#00aa00',
                '#0000aa',
                '#aa00aa',
            ]
        }
    ],
    labels: []
};

  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for(var i = 0; i < res.data.myBudget.length; i++){
//        this.dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
//        this.dataSource.labels[i] = res.data.myBudget[i].title;
//        this.createChart();
      }
    });
  }

//  createChart() {
//    var ctx = document.getElementById('myChart');
//    var myPieChart = new Chart(ctx, {
//        type: 'pie',
//        data: dataSource
//    });
//}
}
