import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarConseillerComponent } from './sidebar-conseiller.component';

describe('SidebarConseillerComponent', () => {
  let component: SidebarConseillerComponent;
  let fixture: ComponentFixture<SidebarConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
