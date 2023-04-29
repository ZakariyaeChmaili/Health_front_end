import { Component } from '@angular/core';
import { GeneratedCodeService } from 'src/app/components/home/services/generatedCode/generated-code.service';
import {v4} from 'uuid';

@Component({
  selector: 'app-code-generator',
  templateUrl: './code-generator.component.html',
  styleUrls: ['./code-generator.component.scss']
})
export class CodeGeneratorComponent {
  generatedCode : string = '';
  GeneratedFlag : boolean = true;
  DeleteFlag : boolean = true;
  patient :any;
  constructor(private generatedCodeService : GeneratedCodeService) {
    this.patient = JSON.parse(localStorage.getItem('user')!);
    this.generatedCodeService.getGeneratedCodeByPatientId(this.patient.id).subscribe({
      next: (res:any)=>{
        console.log(res);
        if(res){
          console.log("in if")
          this.patient.generatedCodeId = res.id;
          this.patient.generatedCode = res.code;
          localStorage.setItem('user',JSON.stringify(this.patient));
          this.generatedCode = res.code;
          this.DeleteFlag = !this.DeleteFlag;
        }else{
          console.log("in else")
          this.generatedCode = '*****-*****-*****-*****-*****';
          this.GeneratedFlag = !this.GeneratedFlag;
        }
      },
      error: (err:any)=>{
        console.log(err);
      }
    })
  }



  generateCode(){
    this.GeneratedFlag = !this.GeneratedFlag;
    const code = v4();
    // const patient :any = JSON.parse(localStorage.getItem('user')!);
    this.patient.generatedCode = code;
    console.log(code)
    console.log(this.patient);
    this.generatedCodeService.generateCode(code,this.patient).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.patient.generatedCodeId = res.id;
        localStorage.setItem('user',JSON.stringify(this.patient));
        this.generatedCode = code;
        this.DeleteFlag = !this.DeleteFlag;

      },
      error: (err:any)=>{
        console.log(err);
        this.GeneratedFlag = !this.GeneratedFlag;

      }
    })

  }


  deleteCode(){
    // const patient :any = JSON.parse(localStorage.getItem('user')!);
    this.DeleteFlag = !this.DeleteFlag;

    this.generatedCodeService.deleteCode(this.patient).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.generatedCode = '*****-*****-*****-*****-*****';
        // const patient :any = JSON.parse(localStorage.getItem('user')!);
        this.patient.generatedCodeId = null;
        this.patient.generatedCode = null;
        localStorage.setItem('user',JSON.stringify(this.patient));
        this.GeneratedFlag = !this.GeneratedFlag;
      },
      error: (err:any)=>{
        console.log(err);
      }
    })
  }

}
