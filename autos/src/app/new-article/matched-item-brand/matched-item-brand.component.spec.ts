import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedItemBrandComponent } from './matched-item-brand.component';

describe('MatchedItemBrandComponent', () => {
  let component: MatchedItemBrandComponent;
  let fixture: ComponentFixture<MatchedItemBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchedItemBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedItemBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
