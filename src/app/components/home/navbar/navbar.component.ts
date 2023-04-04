import { CodeGeneratorComponent } from './code-generator/code-generator.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() drawer: any = new EventEmitter();
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CodeGeneratorComponent);
  }
  sidebarToggle(){
    this.drawer.emit();
  }

}
