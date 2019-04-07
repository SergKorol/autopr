import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsStartComponent } from './options-start.component';

describe('OptionsStartComponent', () => {
  let component: OptionsStartComponent;
  let fixture: ComponentFixture<OptionsStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
