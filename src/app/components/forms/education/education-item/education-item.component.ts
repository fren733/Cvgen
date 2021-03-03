import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input() title: String = 'Uczelnia ';
  isCollapsed: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
