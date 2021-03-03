import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { EducationItemComponent } from './education-item/education-item.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @ViewChild('edulist', { read: ViewContainerRef }) container: ViewContainerRef = this.viewContainerRef;
  private counter: number = 1;

  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
  }


  addEducationItem(): void {
    var factory = this.resolver.resolveComponentFactory(EducationItemComponent);
    var ref = this.container.createComponent(factory);
    ref.instance.title = 'Uczelnia ' + this.counter.toString();
    this.counter += 1;
  }


  ngOnInit(): void {
  }

}
