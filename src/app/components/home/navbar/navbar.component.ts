import { CodeGeneratorComponent } from './code-generator/code-generator.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  role : boolean = JSON.parse(localStorage.getItem('user')!).role=='doctor' ? true : false;
  @Output() drawer: any = new EventEmitter();
  constructor(public dialog: MatDialog,private route: Router) {
    console.log();
  }

  openDialog() {
    this.dialog.open(CodeGeneratorComponent);
  }
  sidebarToggle(){
    this.drawer.emit();
  }


  logout(){
    localStorage.removeItem('user');
    localStorage.clear();
    // window.location.reload();
    this.route.navigate(['/landing-page'])
  }
}
