import { Component } from '@angular/core';
import { AiService } from 'src/app/components/home/services/ai/ai.service';

@Component({
  selector: 'app-ai-predictor',
  templateUrl: './ai-predictor.component.html',
  styleUrls: ['./ai-predictor.component.scss']
})
export class AiPredictorComponent {
  flag:boolean= false;
  heartBeat:number=0;
  temperature:number=0;
  bloodSugar:number=0;
  predictedValue:any;

constructor(private aiService : AiService){}



predict(){
  this.flag = !this.flag;
  let data = {
    HeartBeat:this.heartBeat,
    Temperature:this.temperature,
    BloodSugar:this.bloodSugar,
  }
  this.aiService.predict(data).subscribe({
    next:(res:any)=>{
      setTimeout(()=>{
        console.log(res);
        this.predictedValue = res;
        this.flag = !this.flag;
      },1500)
    }
  })
}

}
