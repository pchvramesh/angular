import {
  AfterViewInit,
  Compiler,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnChanges,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-fieldadaptor',
  templateUrl: './fieldadaptor.component.html',
  styleUrls: ['./fieldadaptor.component.scss']
})
export class FieldadaptorComponent implements OnDestroy, OnChanges, AfterViewInit {
  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
  @Input() type: Type<Component>;
  @Input() object: any;

  cmpRef: ComponentRef<Component>;

  private isViewInitialized: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler) {

  }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
    this.cmpRef = this.target.createComponent(factory);
    let instance: any = this.cmpRef.instance;
    instance.object = this.object;
  }

  ngOnChanges() {
    console.log(this.object);
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
