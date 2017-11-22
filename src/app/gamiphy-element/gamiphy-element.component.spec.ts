import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamiphyElementComponent } from './gamiphy-element.component';

describe('GamiphyElementComponent', () => {
  let component: GamiphyElementComponent;
  let fixture: ComponentFixture<GamiphyElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamiphyElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamiphyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
