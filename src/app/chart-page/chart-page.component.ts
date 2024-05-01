import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart-page',
  templateUrl: './chart-page.component.html',
  styleUrls: ['./chart-page.component.scss']
})
export class ChartPageComponent {
  @ViewChild('pieCanvas') pieCanvas: ElementRef<HTMLCanvasElement> | undefined;
  chart: Chart<"pie", number[], string> | undefined;
  showPieChart: boolean = false;

  constructor() { 
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
  }

  initChart() {
    if (this.pieCanvas && this.pieCanvas.nativeElement) {
      this.chart = new Chart(this.pieCanvas.nativeElement, {
        type: 'pie',
        data: {
          labels: ['18-23', '24-28', '29-38', '39-47', '48-60'],
          datasets: [{
            data: [10, 20, 30, 20, 15],
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
    setTimeout(() => {
      this.initChart();
    }, 0);
  }
}
