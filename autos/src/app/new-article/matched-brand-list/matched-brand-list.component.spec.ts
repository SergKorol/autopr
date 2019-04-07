import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedBrandListComponent } from './matched-brand-list.component';

describe('MatchedBrandListComponent', () => {
  let component: MatchedBrandListComponent;
  let fixture: ComponentFixture<MatchedBrandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchedBrandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedBrandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
