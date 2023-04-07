import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneratedCodeService } from 'src/app/components/home/services/generatedCode/generated-code.service';
import { ReloadService } from 'src/app/components/home/services/reload/reload.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent {
  isopen = true;
  constructor(

  ) {


  }

  toggle() {
    this.isopen = !this.isopen;
  }
}
