import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartService } from '../service/Chart-service/chart.service';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent {
  @ViewChild('pieCanvas') pieCanvas: ElementRef<HTMLCanvasElement> | undefined;
  chart: Chart<"pie", number[], string> | undefined;
  showPieChart: boolean = false;
  labels: string[] = [];
  data: number[] = []; 

  constructor(private chartService: ChartService) { 
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
  }

  loadChartData() {
    this.chartService.getAgeData().subscribe(data => {
      this.labels = data.map(item => item.age_group);
      this.data = data.map(item => item.count);
      this.initChart(this.labels, this.data);
    });
  }

  initChart(labels: string[], data: number[]) {
    if (this.pieCanvas && this.pieCanvas.nativeElement) {
      if (this.chart) {
        this.chart.destroy();
      }

      this.chart = new Chart(this.pieCanvas.nativeElement, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true
            }
          }
        }
      });
    }
  }

  loadPieChart() {
    this.showPieChart = true;
    this.loadChartData();
    setTimeout(() => {
      this.initChart(this.labels, this.data);
    }, 0);
  }
}