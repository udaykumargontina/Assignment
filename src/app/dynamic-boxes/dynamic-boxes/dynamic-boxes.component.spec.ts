import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBoxesComponent } from './dynamic-boxes.component';

describe('DynamicBoxesComponent', () => {
  let component: DynamicBoxesComponent;
  let fixture: ComponentFixture<DynamicBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
