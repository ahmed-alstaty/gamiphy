import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamiphySectionComponent } from './gamiphy-section.component';

describe('GamiphySectionComponent', () => {
  let component: GamiphySectionComponent;
  let fixture: ComponentFixture<GamiphySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamiphySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamiphySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
