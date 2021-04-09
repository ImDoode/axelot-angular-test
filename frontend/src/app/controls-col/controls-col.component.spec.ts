import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsColComponent } from './controls-col.component';

describe('ControlsColComponent', () => {
  let component: ControlsColComponent;
  let fixture: ComponentFixture<ControlsColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlsColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
