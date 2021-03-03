import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  isCollapsedWrite : boolean = false;
  isCollapsedFormat : boolean = true;  
  isCollapsedLook : boolean = true; 

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse(): void {
    this.isCollapsedWrite = !this.isCollapsedWrite;
  }

  toggleCollapseFormat(): void {
    this.isCollapsedFormat = !this.isCollapsedFormat;
  }

  toggleCollapseLook(): void {
    this.isCollapsedLook = !this.isCollapsedLook;
  }
}
