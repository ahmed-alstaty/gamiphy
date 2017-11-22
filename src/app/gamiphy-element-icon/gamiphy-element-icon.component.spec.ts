import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamiphyElementIconComponent } from './gamiphy-element-icon.component';

describe('GamiphyElementIconComponent', () => {
  let component: GamiphyElementIconComponent;
  let fixture: ComponentFixture<GamiphyElementIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamiphyElementIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamiphyElementIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
