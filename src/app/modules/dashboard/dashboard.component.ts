import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private readonly dashboardService: DashboardService;

  bigChart = [];
  cards = [];
  pieChart = [];
  tableChart = [];
  constructor(private _dashboardService: DashboardService) {
    this.dashboardService = _dashboardService;
   }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.tableChart = this.dashboardService.dataTable();
  }

}
