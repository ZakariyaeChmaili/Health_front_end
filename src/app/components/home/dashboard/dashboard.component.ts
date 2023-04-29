import { Component } from '@angular/core';
import { ReportService } from 'src/app/components/home/services/report/report.service';
import { ChartDataset, ChartOptions } from 'chart.js';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  filterYear: any = 'all';
  yearList!: any[];
  //heartBeat
  HeartBeatlineChartData!: ChartDataset[];
  HeartBeatlineChartLabels!: any[];
  HeartBeatlineChartOptions = {
    responsive: true,
  };
  HeartBeatlineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  HeartBeatlineChartLegend = true;
  HeartBeatlineChartPlugins = [];
  HeartBeatlineChartType = 'line';

  //bloodSugar
  BloodSugarlineChartData!: ChartDataset[];
  BloodSugarlineChartLabels!: any[];
  BloodSugarlineChartOptions = {
    responsive: true,
  };
  BloodSugarlineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  BloodSugarlineChartLegend = true;
  BloodSugarlineChartPlugins = [];
  BloodSugarlineChartType = 'line';
  //Temperature
  TemperaturelineChartData!: ChartDataset[];
  TemperaturelineChartLabels!: any[];
  TemperaturelineChartOptions = {
    responsive: true,
  };
  TemperaturelineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  TemperaturelineChartLegend = true;
  TemperaturelineChartPlugins = [];
  TemperaturelineChartType = 'line';
  //bloodPressure
  BloodPressurelineChartData!: ChartDataset[];
  BloodPressurelineChartLabels!: any[];
  BloodPressurelineChartOptions = {
    responsive: true,
  };
  BloodPressurelineChartColors: any[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  BloodPressurelineChartLegend = true;
  BloodPressurelineChartPlugins = [];
  BloodPressurelineChartType = 'line';

  constructor(
    private reportService: ReportService,
    private datePipe: DatePipe
  ) {
    //call getCharts() whenver the yearFilter changes
    this.getcharts();
  }

  getcharts() {
    // console.log("sdf")

    let patient = JSON.parse(localStorage.getItem('patient') || '{}');
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    let id = user.id;
    if (user.role == 'doctor') id = patient.id;
    this.reportService.getReports(id).subscribe({
      next: (res: any[]) => {
        console.log(res);
        console.log(res.map((diagnostic) => diagnostic.bloodSugar));
        this.yearList = [
          ...new Set(
            res.map((diagnostic: any) =>
              this.datePipe.transform(diagnostic.datecrea, 'yyyy')
            )
          ),
        ];
        this.yearList = Array.from(
          new Set(
            res.map((diagnostic: any) =>
              this.datePipe.transform(diagnostic.datecrea, 'yyyy')
            )
          )
        ).sort((a: any, b: any) => b - a);
        let result;
        if (this.filterYear == 'all') {
          result = res;
        } else {
          result = res.filter(
            (diagnostic: any) =>
              this.datePipe.transform(diagnostic.datecrea, 'yyyy') ==
              this.filterYear
          );
        }
        //heatBeat
        this.HeartBeatlineChartLabels = result.map((diagnostic: any) =>
          this.datePipe.transform(diagnostic.datecrea, 'dd/MM/YYYY')
        );
        this.HeartBeatlineChartData = [
          {
            data: result.map((diagnostic) => diagnostic.heartBeat),
            label: 'Heart Beat / min',
            backgroundColor: 'green',
          },
        ];
        //bloodSugar
        this.BloodSugarlineChartLabels = result.map((diagnostic: any) =>
          this.datePipe.transform(diagnostic.datecrea, 'dd/MM/YYYY')
        );
        this.BloodSugarlineChartData = [
          {
            data: result.map((diagnostic) => diagnostic.bloodSugar),
            label: 'Blood Sugar / mg/dl',
            backgroundColor: 'red',
          },
        ];
        //temperature
        this.TemperaturelineChartLabels = result.map((diagnostic: any) =>
          this.datePipe.transform(diagnostic.datecrea, 'dd/MM/YYYY')
        );
        this.TemperaturelineChartData = [
          {
            data: result.map((diagnostic) => diagnostic.temperature),
            label: 'Temperature / °C',
            backgroundColor: 'blue',
          },
        ];
        //bloodPressure
        this.BloodPressurelineChartLabels = result.map((diagnostic: any) =>
          this.datePipe.transform(diagnostic.datecrea, 'dd/MM/YYYY')
        );
        this.BloodPressurelineChartData = [
          {
            data: result.map((diagnostic) => diagnostic.bloodPressure),
            label: 'Blood Pressure / mmHg',
            backgroundColor: 'pink',
          },
        ];
      },
    });
  }
}
