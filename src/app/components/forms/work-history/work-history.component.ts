import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { WorkHistoryItemComponent } from './work-history-item/work-history-item.component';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  @ViewChild('worklist', { read: ViewContainerRef}) container: ViewContainerRef = this.viewContainerRef;
  private counter: number = 1;

  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  addWorkItem(): void {
    var factory = this.resolver.resolveComponentFactory(WorkHistoryItemComponent);
    var ref = this.container.createComponent(factory);
    ref.instance.title = 'Firma ' + this.counter.toString();
    this.counter += 1;
  }

}
