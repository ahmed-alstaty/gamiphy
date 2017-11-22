import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksItemComponent } from './how-it-works-item.component';

describe('HowItWorksItemComponent', () => {
  let component: HowItWorksItemComponent;
  let fixture: ComponentFixture<HowItWorksItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowItWorksItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItWorksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
