import { map } from 'rxjs';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/components/home/services/report/report.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent {
  report: any={};
  reportId: number;
  traitmentList :any[]=[];
  constructor(
    private reportService: ReportService,
    private routeParam: ActivatedRoute
  ) {
    this.reportId = this.routeParam.snapshot.params['id'];
    console.log(this.reportId);
    this.reportService.getReport(this.reportId).subscribe({
      next: (res: any) => {
        console.log(res)
        this.report = res;
        this.traitmentList = res.listeTraitement;
      }
    });


    // console.log(this.report);
    // let traitment:any[] =this.report.listeTraitement;
    // // console.log(rapport)
    // if(traitment.length>0){
    //   // this.traitmentList = rapport.listeTraitment;
    // }else{
    //   this.traitmentList=[];
    // }
  }
}
