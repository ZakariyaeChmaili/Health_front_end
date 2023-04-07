import { HostListener, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GeneratedCodeService } from 'src/app/components/home/services/generatedCode/generated-code.service';
@Injectable({
  providedIn: 'root',
})
export class ReloadService {
  constructor(private generatedCodeService: GeneratedCodeService,
    private route : Router) {}
  private reloaded: boolean = false;

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event:any) {
    console.log("isReloaded: " + this.reloaded)
    // localStorage.removeItem('patient');

    this.reloaded = true;

  }

  isReloaded(): boolean {
  
    // localStorage.removeItem('patient');

    return this.reloaded;
  }
}
