import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamiphySubSectionComponent } from './gamiphy-sub-section.component';

describe('GamiphySubSectionComponent', () => {
  let component: GamiphySubSectionComponent;
  let fixture: ComponentFixture<GamiphySubSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamiphySubSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamiphySubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
