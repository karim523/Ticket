import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import * as echarts from 'echarts';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  private platformId: Object;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initChart();
    }
  }

  private initChart(): void {
    const chartDom = document.getElementById('main');
    if (chartDom) {
      const myChart = echarts.init(chartDom, null, {
        renderer: 'svg',
      });

      const option: echarts.EChartsOption = {
        title: {
          text: 'إحصائيات إستخدام القسيمة',
          right: '10%',
          top: '10%',
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: '#1e1b39',
          borderColor: '#ffffff',
          borderWidth: 1,
          textStyle: {
            color: '#ffffff',
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [
            'يناير',
            'فبراير',
            'مارس',
            'ابريل',
            'مايو',
            'يونيو',
            'يوليو',
            'أغسطس',
            'سبتمبر',
            'اكتوبر',
            'نوفمبر',
            'ديسمبر',
          ],
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            data: [100, 150, 200, 180, 250, 200, 180, 200, 240, 220, 160, 200],
            type: 'line',
            smooth: true,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                global: false,
                colorStops: [
                  { offset: 0, color: '#8A74F9' },
                  { offset: 0.8, color: '#8A74F943' },
                  { offset: 1, color: '#8A74F900' },
                ],
              },
            },
          },
        ],
      };

      myChart.setOption(option);
    }
  }
}
