import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldadaptorComponent } from './fieldadaptor.component';

describe('FieldadaptorComponent', () => {
  let component: FieldadaptorComponent;
  let fixture: ComponentFixture<FieldadaptorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldadaptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldadaptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
