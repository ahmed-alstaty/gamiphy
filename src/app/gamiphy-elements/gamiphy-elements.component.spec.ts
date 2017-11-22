import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamiphyElementsComponent } from './gamiphy-elements.component';

describe('GamiphyElementsComponent', () => {
  let component: GamiphyElementsComponent;
  let fixture: ComponentFixture<GamiphyElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamiphyElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamiphyElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
