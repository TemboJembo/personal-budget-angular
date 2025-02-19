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
      this.get('http://localhost:3000/budget')
      .then(function (res) {
          var budgetData = res.data.myBudget;

          this.dataSource.datasets[0].data = budgetData.map(item => item.budget);
          this.dataSource.labels = budgetData.map(item => item.title);

          var d3Data = budgetData.map(item => ({ label: item.title, value: item.budget }));

          createChart();
          createD3Chart(d3Data);
      })
      .catch(function (error) {
          console.error("Error fetching budget data:", error);
      });
  }
  }

  createChart() {
    var ctx = document.getElementById('myChart');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: dataSource
   });
}
