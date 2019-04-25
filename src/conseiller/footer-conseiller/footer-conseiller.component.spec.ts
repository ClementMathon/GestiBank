import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterConseillerComponent } from './footer-conseiller.component';

describe('FooterConseillerComponent', () => {
  let component: FooterConseillerComponent;
  let fixture: ComponentFixture<FooterConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
