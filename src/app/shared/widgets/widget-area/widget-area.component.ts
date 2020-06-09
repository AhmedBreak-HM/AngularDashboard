import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';



@Component({
  selector: 'app-widget-area',
  templateUrl: './widget-area.component.html',
  styleUrls: ['./widget-area.component.scss']
})
export class WidgetAreaComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: {};
  @Input() data: any = [];



  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: { type: 'area' },
      title: { text: 'Random DATA' },
      subtitle: { text: 'Demo' },
      tooltip: { split: true, valueSuffix: ' millions' },
      credits: { enabled: false },
      exporting: { enabled: true },
      series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
