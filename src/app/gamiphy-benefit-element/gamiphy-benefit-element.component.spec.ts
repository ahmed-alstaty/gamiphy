import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamiphyBenefitElementComponent } from './gamiphy-benefit-element.component';

describe('GamiphyBenefitElementComponent', () => {
  let component: GamiphyBenefitElementComponent;
  let fixture: ComponentFixture<GamiphyBenefitElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamiphyBenefitElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamiphyBenefitElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
