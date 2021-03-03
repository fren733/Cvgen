import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-history-item',
  templateUrl: './work-history-item.component.html',
  styleUrls: ['./work-history-item.component.css']
})
export class WorkHistoryItemComponent implements OnInit {
  @Input() title: String = 'Firma ';

  constructor() { }

  ngOnInit(): void {
  }


}
